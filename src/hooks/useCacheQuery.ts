import { useCallback, useState } from "react";
import axiosInstance from '../axios';
import { LocalStorageData, useCacheQueryProps } from "../types/interfaces";
import { hasIdProperty } from "../utils";

type CachedItem<T>  = T & {
  articleURL: string;
}

const useCacheQuery = <T>(initialConfig: useCacheQueryProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isArticleDeleted, setIsArticleDeleted] = useState(false);

  const axiosRequest = useCallback(async (dynamicConfig: Partial<useCacheQueryProps<T>> = {}) => {
    const config = { ...initialConfig, ...dynamicConfig };
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const requestOptions = {
        ...config.requestConfig,
        headers: {
          Authorization: `Bearer ${config.authToken}`,
        },
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
        
        switch (config.requestConfig.method) {
          case 'POST':
            const newDataPost = cachedData && Array.isArray(cachedData.data) ? [...cachedData.data, config.articleData] : [config.articleData];
            console.log('newPost: ', newDataPost)
            localStorage.setItem(cacheKey, JSON.stringify({ data: newDataPost }));
            break;
          case 'GET':
            const data = response.data?.response || response.data?.articles;
            if (data?.length) {
              const storageData: LocalStorageData<T> = {
                data,
                ...(config.requestConfig.expiryTime && { expiredTime: Date.now() + config.requestConfig.expiryTime * 1000 }),
              };
              localStorage.setItem(cacheKey, JSON.stringify(storageData));
            }
            break;
          case 'PUT':
            if (cachedData && Array.isArray(cachedData.data)) {
              const updatedData = cachedData.data.map((item) => {
                const castItem = item as CachedItem<T>;
                const articleData = config.articleData as CachedItem<T>
                return castItem.articleURL === articleData!.articleURL ? config.articleData : item;
              });
              localStorage.setItem(cacheKey, JSON.stringify({ data: updatedData }));
            }
            break;
          case 'DELETE':
            if (cachedData && Array.isArray(cachedData.data)) {
              const remainingData = cachedData.data.filter(item => {
                const castItem = item as CachedItem<T>;
                const articleData = config.body as CachedItem<T>
                return hasIdProperty(item) && config.body && hasIdProperty(config.body) && castItem.articleURL !== articleData.articleURL
              });
              localStorage.setItem(cacheKey, JSON.stringify({ data: remainingData }));
              setIsArticleDeleted(true);
            }
            break;
        }
        const data = response.data?.articles || response.data?.response;
        if (data) {
          setData(data);
        }
      }
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [initialConfig]);

  return { data, loading, error, axiosRequest, isArticleDeleted };
};

export default useCacheQuery;
