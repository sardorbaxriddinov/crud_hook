import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setTitle] = useState("");
  const [surname, setAuthor] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`).then((res) => {
      setTitle(res.data.firstname);
      setAuthor(res.data.surname);
      setAge(res.data.age);
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/books/${id}`, { firstname, surname, age }).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>✏️ Kitobni Tahrirlash</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={firstname} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={surname} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <button type="submit">Yangilash</button>
      </form>
    </div>
  );
};

export default EditBook;