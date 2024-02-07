import { AxiosRequestConfig } from 'axios';

export type useCacheQueryProps<T> = {
  requestConfig: AxiosRequestConfig & { cacheKey?: string, expiryTime?: number };
  body?: T;
}

export interface AxiosResponse<T> {
  axiosRequest: () => Promise<void>;
  error: Error | null;
  data: T | null;
  loading: boolean;
}

export type LocalStorageData<T> = {
  data: T,
  expiredTime?: number,
}

export interface IURLResponse {
  title: string,
  website: string,
  curatorNote: string,
  bookshelfName: string
}
export interface TabInfo {
  url: string;
  title: string;
}
