import { useEffect } from "react";
import { checkUrlExists, getCurrentTabUrl, updateIcon } from "../utils";

const useIcon = () => {
  useEffect(() => {
    const updateExtensionIcon = () => {
      getCurrentTabUrl((url: string) => {
        checkUrlExists(url, (exists: boolean) => {
          updateIcon(exists);
        });
      });
    };

    chrome.tabs?.onUpdated?.addListener((_, changeInfo) => {
      if (changeInfo.url) {
        updateExtensionIcon();
      }
    });
  }, []);
}

export default useIcon;