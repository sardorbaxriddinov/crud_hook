import React, { useState, useEffect } from "react";
import useGetData from "../hooks/useGetData";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import AddUser from "./AddUser";

const UserList = () => {
  const { data, loading, error } = useGetData("/books");
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    if (data) setUsers(data)
  }, [data])

  const handleUserAdded = (newUser) => {
    setUsers((prev) => [...prev, newUser])
  }

  const handleUserUpdated = (updatedUser) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    )
  }

  const handleUserDeleted = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId))
  }

  if (loading) return <p>Yuklanmoqda...</p>
  if (error) return <p>Xatolik: {error}</p>

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Kitoblar Ro‘yxati</h2>

      <AddUser onUserAdded={handleUserAdded} />

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nomi</th>
            <th>Muallif</th>
            <th>Yosh</th>
            <th>Ball</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.ball}</td>
              <td>
                <button onClick={() => setEditUser(user)} style={{ marginRight: "10px", backgroundColor: "yellow" }}>✏️ Tahrirlash</button>
                <DeleteUser userId={user.id} onUserDeleted={handleUserDeleted} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
          <h3>✏️ Foydalanuvchini Tahrirlash</h3>
          <UpdateUser user={editUser} onUserUpdated={handleUserUpdated} />
          <button onClick={() => setEditUser(null)} style={{ marginLeft: "10px" }}>❌ Bekor qilish</button>
        </div>
      )}
    </div>
  )
}

export default UserList;
