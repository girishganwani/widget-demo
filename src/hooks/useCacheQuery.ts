import { useCallback, useState } from 'react';
import axiosInstance from '../axios';
import { AxiosResponse, LocalStorageData, useCacheQueryProps } from "../types/interfaces";

const useCacheQuery = <T>({ requestConfig }: useCacheQueryProps): AxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const axiosRequest = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const { cacheKey, expiryTime } = requestConfig;
      console.log("FirstConsole...")
      const cachedData: LocalStorageData<T> = JSON.parse(localStorage.getItem(cacheKey) || '');
      console.log ("Second Console...")
      if (cachedData) {
        const { data, expiredTime } = cachedData;
        if (data) {
          setData(data);
          setLoading(false);
          if (!expiredTime || expiredTime > Date.now()) {
            return;
          }
        }
      }

      const { data } = await axiosInstance(requestConfig);
      console.log("here")
      let storageData: LocalStorageData<T> = { data };
      if (expiryTime) {
        storageData = {
          data,
          expiredTime: Date.now() + expiryTime * 1000
        }
      }
      localStorage.setItem(cacheKey, JSON.stringify(storageData));

      setData(data);
      setLoading(false);
    }
    catch (e) {
      setError(e as Error);
      setLoading(false);
      console.log("Inside catch error", e)
    }
  }, []);

  return {
    axiosRequest,
    data,
    loading,
    error,
  }
}

export default useCacheQuery;