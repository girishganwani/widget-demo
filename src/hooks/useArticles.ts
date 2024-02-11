import { useEffect, useState } from "react";
import { IArticle, TabInfo } from "../types/interfaces";
import { getBaseURL, getCurrentTabInfo } from "../utils";
import useCacheQuery from "./useCacheQuery";
import { fetchAuthSession } from "aws-amplify/auth";

const useArticles = () => {

  const [authToken, setAuthToken] = useState<string | undefined>('');

  const { data: allSavedUrls, axiosRequest: fetchUrlsAxiosRequest } = useCacheQuery<IArticle[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/v1/articles',
      cacheKey: 'articles',
    },
  });

  const { axiosRequest: saveUrlAxiosRequest, loading: saveUrlLoading } = useCacheQuery<IArticle>({ 
    requestConfig: {
      method: 'POST',
      url: '/v1/articles',
      cacheKey: 'articles',
    },
  });

  const { axiosRequest: deleteArticleRequest, isArticleDeleted } = useCacheQuery<IArticle>({ 
    requestConfig: {
      method: 'DELETE',
      url: undefined,
      cacheKey: 'articles',
    },
  });

  const { axiosRequest: updateArticleRequest } = useCacheQuery<IArticle>({ 
    requestConfig: {
      method: 'PUT',
      url: undefined,
      cacheKey: 'articles',
    }
  });

  const [currentArticle, setCurrentArticle] = useState<IArticle | null>(null);

  const handleDelete = (articleURL: string) => {
    deleteArticleRequest({
      requestConfig: {
        method: 'DELETE',
        url: `/v1/articles?url=${encodeURI(articleURL)}`,
        cacheKey: 'articles',
      },
      authToken,
      body: {
        articleURL,
      }
    });
  }

  const updateArticle = (articleURL: string, body: Partial<IArticle>) => {
    updateArticleRequest({
      requestConfig: {
        method: 'PUT',
        url: `/v1/articles?url=${encodeURI(articleURL)}`,
        cacheKey: 'articles',
      },
      body: {
        note: body.curatorNote,
      },
      authToken,
      articleData: body,
    })
  }

  useEffect(() => {
    async function fetchToken() {
      try {
        const { accessToken } = (await fetchAuthSession()).tokens ?? {};
        setAuthToken(accessToken?.toString())
      } catch (err) {
        console.log(err);
      }
    }
    fetchToken();
  })

  useEffect(() => {
    if (authToken) {
      fetchUrlsAxiosRequest({
        authToken,
      });
    }
  }, [authToken]);
  
  useEffect(() => {
    if (allSavedUrls) {
      const saveCurrentUrlAsArticle = async () => {
        try {
          let currentTab: TabInfo;
          if (typeof chrome !== "undefined" && chrome.tabs) {
            currentTab = await getCurrentTabInfo();
          } else {
            currentTab = { websiteBaseURL: getBaseURL(window.location.href), articleURL: window.location.href, title: document.title };
            // currentTab = { websiteBaseURL: 'https://medium.com', articleURL: 'https://levelup.gitconnected.com/the-5-paid-subscriptions-i-actually-use-in-2024-as-a-software-engineer-edd9949df58b?gi=caf93cf69b67', title: '5 Things I Learned About Leadership from the Death &amp; Rebirth of Microsoft | by Dare Obasanjo | Feb, 2024 | Medium' };
          }
          const cachedData = allSavedUrls;
          const urlAlreadySaved = cachedData.find(url => url.articleURL === currentTab.articleURL);
          if (!urlAlreadySaved?.articleURL && currentTab.articleURL) {
            const newArticle = {
              url: currentTab.articleURL,
            };
            const articleData = {
              articleURL: currentTab.articleURL,
              title: currentTab.title,
              websiteBaseURL: currentTab.websiteBaseURL,
              curatorNote: '',
              bookshelfName: '',
            };
            setCurrentArticle(articleData);
            saveUrlAxiosRequest({ body: newArticle, authToken, articleData });
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
    setCurrentArticle,
    saveUrlLoading,
    handleDelete,
    isArticleDeleted,
    updateArticle,
    authToken,
  }
}

export default useArticles;