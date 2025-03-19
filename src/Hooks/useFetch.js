import { useState, useCallback } from "react";

const useFetch = (url, method = "GET", body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (customBody = null) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };

      if (method !== "GET" && (body || customBody)) {
        options.body = JSON.stringify(customBody || body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers]);

  return { data, loading, error, fetchData };
};

export default useFetch;
