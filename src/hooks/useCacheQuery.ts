import { useCallback, useState } from "react";
import axiosInstance from '../axios';
import { LocalStorageData, useCacheQueryProps } from "../types/interfaces";

const useCacheQuery = <T>(initialConfig: useCacheQueryProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const axiosRequest = useCallback(async (dynamicConfig: Partial<useCacheQueryProps<T>> = {}) => {
    const config = { ...initialConfig, ...dynamicConfig };
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const requestOptions = {
        ...config.requestConfig,
        data: config.body,
      };

      if (config.requestConfig.method === 'GET' && config.requestConfig.cacheKey) {
        const cacheKey = config.requestConfig.cacheKey;
        const cachedItem = localStorage.getItem(cacheKey);
        const cachedData: LocalStorageData<T> | null = cachedItem ? JSON.parse(cachedItem) : null;

        if (cachedData && cachedData.data && (!cachedData.expiredTime || cachedData.expiredTime > Date.now())) {
          setData(cachedData.data);
          setLoading(false);
          return;
        }
      }

      const response = await axiosInstance(requestOptions);

      if (config.requestConfig.cacheKey) {
        const cacheKey = config.requestConfig.cacheKey;
        const cachedItem = localStorage.getItem(cacheKey);
        const cachedData: LocalStorageData<T[] | T> | null = cachedItem ? JSON.parse(cachedItem) : null;

        if (config.requestConfig.method === 'POST') {
          let updatedData;
          if (cachedData && Array.isArray(cachedData.data)) {
            updatedData = [...cachedData.data, response.data];
          } else {
            updatedData = [response.data];
          }
          localStorage.setItem(cacheKey, JSON.stringify({ data: updatedData }));
        } else if (config.requestConfig.method === 'GET') {
          const storageData: LocalStorageData<T> = {
            data: response.data,
            ...(config.requestConfig.expiryTime && { expiredTime: Date.now() + config.requestConfig.expiryTime * 1000 }),
          };
          localStorage.setItem(cacheKey, JSON.stringify(storageData));
        }

        setData(response.data);
      }
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [initialConfig]);

  return { data, loading, error, axiosRequest };
};

export default useCacheQuery;
