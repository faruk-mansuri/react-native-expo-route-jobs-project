import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,

    headers: {
      'X-RapidAPI-Key': '62c7d2e4d4msh1442194109d5eb9p1d81d0jsn1d8c0067f3d0',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(options);
      setData(data.data);
    } catch (error) {
      setIsError('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, isError, refetch };
};
