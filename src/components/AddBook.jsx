import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const [firstname, setTitle] = useState("");
  const [surname, setAuthor] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/books", { firstname, surname, age }).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📖 Yangi Kitob Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Sarlavha" value={firstname} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Muallif" value={surname} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="text" placeholder="Yoshi" value={age} onChange={(e) => setAge(e.target.value)} required />
        <button type="submit">Qo‘shish</button>
      </form>
    </div>
  );
};

export default AddBook;