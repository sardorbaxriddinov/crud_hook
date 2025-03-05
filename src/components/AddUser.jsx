import React, { useState } from "react";
import usePostData from "../hooks/usePostData";

const AddUser = ({ onUserAdded }) => {
  const { postData, loading, error } = usePostData("/books");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [ball, setBall] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, age, ball }
    const savedUser = await postData(newUser)
    if (savedUser) onUserAdded(savedUser) 

    setName("")
    setEmail("")
    setAge("")
    setBall("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nomi" required />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Muallif" required />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Yosh" required />
      <input type="text" value={ball} onChange={(e) => setBall(e.target.value)} placeholder="Ball" required />
      <button type="submit" disabled={loading}>➕ Qo‘shish</button>
      {error && <p style={{ color: "red" }}>Xatolik: {error}</p>}
    </form>
  );
};

export default AddUser;
