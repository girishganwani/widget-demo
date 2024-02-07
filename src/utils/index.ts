import { TabInfo } from "../types/interfaces";

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
      resolve({ url, title });
    });
  });
};
