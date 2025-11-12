import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import Select from "react-select";
import UsersRow from "./UsersRow";

const roleOptions = [
  { value: "", label: "All Roles" },
  { value: "tourist", label: "Tourist" },
  { value: "tour-guide", label: "Tour Guide" },
  { value: "admin", label: "Admin" },
];

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", search, role],
    queryFn: async () => {
      const params = {};
      if (search) params.search = search;
      if (role) params.role = role;
      const res = await axiosSecure.get("/users", { params });
      return res.data?.data || [];
    },
  });

  return (
    <div className="p-6 md:p-10 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-white">Manage Users</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
        <input
          type="text"
          placeholder="Search by name or email"
          className="bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="w-full md:w-1/3">
          <Select
            options={roleOptions}
            defaultValue={roleOptions[0]}
            onChange={(selected) => setRole(selected.value)}
            className="text-black"
            classNames={{
              control: () =>
                "bg-slate-800 border border-slate-600 text-white rounded-md",
              menu: () => "bg-slate-800",
              singleValue: () => "text-white",
              option: ({ isFocused }) =>
                isFocused ? "bg-indigo-600 text-white" : "text-white",
            }}
          />
        </div>
      </div>

      {isLoading ? (
        <p className="text-white animate-pulse">Loading users...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load users.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-700">
          <table className="table-auto w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-slate-800 to-slate-700 text-indigo-300">
                <th className="p-3 border border-slate-600">#</th>
                <th className="p-3 border border-slate-600">Name</th>
                <th className="p-3 border border-slate-600">Email</th>
                <th className="p-3 border border-slate-600">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UsersRow key={user._id} user={user} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
