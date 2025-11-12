const UsersRow = ({ user, idx }) => {
  return (
    <tr
      key={user._id}
      className="text-center border-t border-gray-700 hover:bg-[#2a2a40] transition-all duration-200"
    >
      <td className="p-2 border">{idx + 1}</td>
      <td className="p-2 border">{user.name}</td>
      <td className="p-2 border">{user.email}</td>
      <td className="p-2 border capitalize">{user.role}</td>
    </tr>
  );
};

export default UsersRow;
