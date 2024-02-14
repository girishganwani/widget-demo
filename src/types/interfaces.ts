import { AxiosRequestConfig } from 'axios';

export type useCacheQueryProps<T> = {
  requestConfig: AxiosRequestConfig & { cacheKey?: string, expiryTime?: number };
  body?: Partial<T>;
  authToken?: string;
  articleData?: Partial<T>,
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
  title?: string,
  websiteBaseURL?: string,
  articleURL?: string,
  curatorNote?: string,
  bookshelfName?: string,
  url?: string,
  note?: string,
}
export interface TabInfo {
  websiteBaseURL: string;
  articleURL: string;
  title: string;
}
export interface IContext {
  currentArticle: IArticle | null;
  saveUrlLoading: Boolean;
  handleDelete: (articleId: string) => void;
  isArticleDeleted: boolean;
  updateArticle: (articleId: string, body: Partial<IArticle>) => void;
  setCurrentArticle: React.Dispatch<React.SetStateAction<IArticle | null>>;
  authToken: string | undefined;
  updateShelveArticle: (articleURL: string | undefined, shelveName: string | undefined, noOfArticles: number | undefined) => void;
  fetchBookShelvesAxiosRequest: (dynamicConfig?: Partial<useCacheQueryProps<IBookShelves[]>>) => Promise<void>;
  allBookShelves: IBookShelves[] | null;
}
export interface IRecommendedArticle {
  id?: string,
  title?: string,
  articleURL?: string,
  websiteBaseURL?: string
}

export interface IBookShelves {
  name?: string,
  numberOfArticles?: number,
  newBookshelfName?: string;
}
