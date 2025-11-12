import { useForm } from "react-hook-form";
import { darkSwal } from "../../../../hooks/usePostData";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";

const EditStoryModal = ({ story, onClose, refetch }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: story?.title,
      description: story?.description,
    },
  });

  const { mutate: updateStory, isPending } = useSecureUpdate(
    `/stories/${story._id}`,
    // stories/687e509abf17c8a9265b66dd
  );

  const onSubmit = (data) => {
    updateStory(data, {
      onSuccess: (res) => {
        if (res?.success) {
          darkSwal.fire("Updated!", "Your story has been updated.", "success");
          refetch();
          onClose();
        }
      },
      onError: (err) => {
        darkSwal.fire("Error!", err.message || "Failed to update.", "error");
      },
    });
  };

  return (
    <dialog id="edit_modal" className="modal  modal-start" open>
      <div className="modal-box bg-base-200" data-aos="zoom-in-right">
        <h3 className="font-bold text-lg">Edit Story</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Title"
          />
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            rows={4}
          />
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditStoryModal;
