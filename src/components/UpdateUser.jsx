import React, { useState } from "react";
import useUpdateData from "../hooks/useUpdateData";

const UpdateUser = ({ user, onUserUpdated }) => {
  const { updateData, loading, error } = useUpdateData("/books");
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
    ball: user.ball,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    const updatedUser = await updateData(user.id, formData)
    if (updatedUser) onUserUpdated(updatedUser)
  }

  return (
    <div>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nomi" required />
      <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Muallif" required />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Yosh" required />
      <input type="text" name="ball" value={formData.ball} onChange={handleChange} placeholder="Ball" required />
      <button onClick={handleUpdate} disabled={loading}>Yangilash</button>
      {error && <p style={{ color: "red" }}>Xatolik: {error}</p>}
    </div>
  )
}

export default UpdateUser;
