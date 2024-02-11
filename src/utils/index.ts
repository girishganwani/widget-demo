import { TabInfo } from "../types/interfaces";

export const getBaseURL = (fullUrl: string) => {
  const url = new URL(fullUrl);
  let baseURL = url.origin + url.pathname;
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
      resolve({ websiteBaseURL: getBaseURL(url), articleURL: url, title });
    });
  });
};

export const hasIdProperty = (item: any): item is { id: any } => {
  return typeof item === 'object' && item !== null && 'id' in item;
};
