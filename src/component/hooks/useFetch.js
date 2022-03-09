import { useState, useEffect } from 'react';

// * A custom hook for making https request

// PASSING TWO PARAMETERS= 1) URL AND 2) OPTIONS EX:MESSAGE OR HEADERS ETC
// OPTIONS IS A OBJECT
const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // MAKING THE CALL WITH FETCH API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the data
        const response = await fetch(url, options);
        const data = await response.json();

        // set the state
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useFetch;
