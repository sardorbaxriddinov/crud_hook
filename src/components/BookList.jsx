import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => setBooks(res.data));
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/books/${id}`).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/add">
        <button style={{ marginBottom: "10px" }}>➕ Kitob qo‘shish</button>
      </Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.firstname} - {book.surname} - {book.age}
            <Link to={`/edit/${book.id}`}>
              <button>✏️ Tahrirlash</button>
            </Link>
            <button onClick={() => deleteBook(book.id)}>🗑 O‘chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;