import React, { useState, useEffect } from "react";
import apiBooks from "../api/apiBooks";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiBooks.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      } 
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetData;