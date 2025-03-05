import React, { useState } from "react";
import apiBooks from "../api/apiBooks";

const usePostData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (newData) => {
    setLoading(true);
    try {
      const response = await apiBooks.post(url, newData);
      return response.data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default usePostData;