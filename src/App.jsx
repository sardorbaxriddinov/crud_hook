import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookList from "./components/BookList";
// import AddBook from "./components/AddBook";
// import EditBook from "./components/EditBook";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

const App = () => {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/add" element={<AddUser/>} />
          <Route path="/edit/:id" element={<UpdateUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;