import { IArticle, TabInfo } from "../types/interfaces";

export const getBaseURL = (fullUrl: string) => {
  if (!fullUrl) return;
  const url = new URL(fullUrl);
  let baseURL = url.origin;
  if (baseURL.endsWith('/')) {
    baseURL = baseURL.slice(0, -1);
  }
  return baseURL;
}

export const getCurrentTabInfo = async (): Promise<TabInfo> => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
        return;
      }
      if (tabs.length === 0) {
        reject(new Error('No active tab found'));
        return;
      }
      const { url, title } = tabs[0] as { url: string; title: string };
      resolve({ websiteBaseURL: getBaseURL(url) as string, articleURL: url, title });
    });
  });
};

export const hasIdProperty = (item: any): item is { id: any } => {
  return typeof item === 'object' && item !== null && 'id' in item;
};

export const getCurrentTabUrl = (callback: (url: string) => void): void => {
  chrome.tabs?.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (currentTab.url) {
      callback(currentTab.url);
    }
  });
}

export const checkUrlExists = (currentUrl: string, callback: (exists: boolean) => void): void => {
  const articlesJson = localStorage.getItem('articles');
  const articles = articlesJson ? JSON.parse(articlesJson) as IArticle[] : [];
  const exists = articles.some(article => article.articleURL === currentUrl);
  callback(exists);
}

export const updateIcon = (urlExists: boolean): void => {
  const path = urlExists ? '/colored.svg' : '/grey.svg';
  chrome.action.setIcon({ path });
}