import { useEffect, useState } from "react";
import { IArticle, TabInfo } from "../types/interfaces";
import { getCurrentTabInfo } from "../utils";
import useCacheQuery from "./useCacheQuery";

const useArticles = () => {
  const { data: allSavedUrls, axiosRequest: fetchUrlsAxiosRequest } = useCacheQuery<IArticle[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/articles',
      cacheKey: 'articles',
    }
  });

  const { axiosRequest: saveUrlAxiosRequest, loading: saveUrlLoading } = useCacheQuery<IArticle>({ 
    requestConfig: {
      method: 'POST',
      url: '/articles',
      cacheKey: 'articles',
    }
  });

  const { axiosRequest: deleteArticleRequest } = useCacheQuery<IArticle>({ 
    requestConfig: {
      method: 'DELETE',
      url: undefined,
      cacheKey: 'articles',
    }
  });

  const [currentArticle, setCurrentArticle] = useState<IArticle | null>(null);

  const handleDelete = (articleId: string) => {
    deleteArticleRequest({
      requestConfig: {
        method: 'DELETE',
        url: `/articles/${articleId}`,
        cacheKey: 'articles',
      },
      body: { id: articleId },
    });
  }

  useEffect(() => {
    fetchUrlsAxiosRequest();
  }, []);
  
  useEffect(() => {
    if (allSavedUrls) {
      const saveCurrentUrlAsArticle = async () => {
        try {
          let currentTab: TabInfo;
          if (typeof chrome !== "undefined" && chrome.tabs) {
            const tabInfo = await getCurrentTabInfo();
            currentTab = { url: tabInfo.url, title: tabInfo.title };
          } else {
            currentTab = { url: window.location.href, title: document.title };
          }

          const urlAlreadySaved = allSavedUrls?.find(url => url.website === currentTab.url);
          console.log('urlAlreadySaved: ', urlAlreadySaved)
          if (!urlAlreadySaved?.website && currentTab.url) {
            const newArticle = {
              title: currentTab.title,
              website: currentTab.url,
              curatorNote: '',
              bookshelfName: ''
            };
            setCurrentArticle(newArticle);
            saveUrlAxiosRequest({ body: newArticle });
          }
          else {
            setCurrentArticle(urlAlreadySaved!);
          }
        }
        catch (error) {
          console.error('Error saving the current URL as an article:', error);
        }
      };
      saveCurrentUrlAsArticle();
    }
  }, [allSavedUrls]);

  return {
    currentArticle,
    saveUrlLoading,
    handleDelete,
  }
}

export default useArticles;