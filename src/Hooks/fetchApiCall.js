import api from "../Utils/api";
import useSWR from "swr";

const useFetchApiCall = ({ url }) => {
  const { data, error, isLoading, mutate } = useSWR(url, api);

  return {
    isLoading,
    item: data?.data || null,
    error,
    mutate,
  };
};

export default useFetchApiCall;
