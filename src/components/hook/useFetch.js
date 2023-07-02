import React from 'react';
import instance from '../../service/axios';

const useFetch = url => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, SetIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    fetch();
  }, [url]);

  const fetch = async () => {
    try {
      const data = await instance.get(url);
      if(data.status === 200){
        setData(data.data.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      SetIsLoading(false);
      setRefreshing(false);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetch();
  }, []);
  return {data: data, error, isLoading: isLoading, refreshing, onRefresh};
};

export default useFetch;
