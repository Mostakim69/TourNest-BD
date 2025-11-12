import clsx from "clsx";

export const Input = ({
  type = "text",
  placeholder = "Type your Name",
  variant = "info",
  className = "",
  label,
  ...props
}) => {
  return (
    <>
      {label && <label className="label text-base">{label}</label>}
      <input
        type={type}
        className={clsx("input ", `input-${variant}`, className)}
        placeholder={placeholder}
        label={label}
        {...props}
      />
    </>
  );
};
