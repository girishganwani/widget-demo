import { AxiosRequestConfig } from 'axios';

export type useCacheQueryProps<T> = {
  requestConfig: AxiosRequestConfig & { cacheKey?: string, expiryTime?: number };
  body?: Partial<T>;
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

export interface IArticle {
  id?: string,
  title?: string,
  website?: string,
  curatorNote?: string,
  bookshelfName?: string
}

export interface IRecommendedArticle {
  id?: string,
  title?: string,
  articleURL?: string,
  websiteURL?: string
}

export interface IBookShelves {
  id?: string,
  name?: string,
  articleNo?: number
}

export interface TabInfo {
  url: string;
  title: string;
}

export interface IContext {
  currentArticle: IArticle | null;
  saveUrlLoading: boolean;
  handleDelete: (articleId: string) => void;
  signOut: ((data?: undefined) => void) | undefined;
}