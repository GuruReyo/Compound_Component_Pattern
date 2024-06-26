import React, { useState, useEffect, useRef } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cache = useRef({});

    useEffect(() => {
      const fetchData = async () => {
        if (cache.current[url]) {
          setData(cache.current[url]);
          setLoading(false);
          return;
        }

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          cache.current[url] = result;
          setData(result);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
};

export default withDataFetching