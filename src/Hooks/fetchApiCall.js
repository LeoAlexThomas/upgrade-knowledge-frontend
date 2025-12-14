import { useEffect, useState } from "react";
import api from "../Utils/api";

const fetchApiCall = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(url);
      setIsLoading(false);
      setItem(response.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return {
    isLoading,
    item,
    error,
  };
};

export default fetchApiCall;
