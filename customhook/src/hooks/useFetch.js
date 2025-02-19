import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchInfo() {
    setLoading(true);
    const response = await fetch(url);
    const info = await response.json();
    setData(info);
    setLoading(false);
  }

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo, url]);

  //   do polling
  useEffect(() => {
    const id = setInterval(fetchInfo, 10000);
    return () => clearInterval(id);
  }, [fetchInfo]);

  return {
    data,
    loading,
  };
};
