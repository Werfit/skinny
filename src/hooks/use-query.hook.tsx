import { useEffect, useState } from "react";
import axios from "axios";

export const useQuery = <T,>(url: string, mockedResponse?: T) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setIsLoading(true);

    if (mockedResponse) {
      setIsLoading(false);
      setData(mockedResponse);
      return;
    }

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.response.data?.message ?? "Unknown error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, mockedResponse]);

  return { data, isLoading, error };
};
