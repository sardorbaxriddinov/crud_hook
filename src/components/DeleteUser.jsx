import React from "react";
import useDeleteData from "../hooks/useDeleteData";

const DeleteUser = ({ userId }) => {
  const { deleteData, loading, error } = useDeleteData("/books");

  const handleDelete = async () => {
    await deleteData(userId);
  };

  return (
    <button onClick={handleDelete} disabled={loading}>
      O‘chirish
    </button>
  );
}

export default DeleteUser;