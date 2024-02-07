import { useEffect } from "react"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import FormFieldsConfig from './configs/amplify.form.config.json'

import FullWidget from "./components/FullWidget"
import useCacheQuery from "./hooks/useCacheQuery";
import { IURLResponse } from "./types/interfaces";
import { getCurrentTabInfo } from "./utils";

const App = () => {
  const { data: allSavedUrls, axiosRequest: fetchUrlsAxiosRequest } = useCacheQuery<IURLResponse[]>({ 
    requestConfig: {
      method: 'GET',
      url: '/articles',
      cacheKey: 'articles',
    }
  });

  const { axiosRequest: saveUrlAxiosRequest, loading: saveUrlLoading } = useCacheQuery<IURLResponse>({ 
    requestConfig: {
      method: 'POST',
      url: '/articles',
      cacheKey: 'articles',
    }
  });

  useEffect(() => {
    fetchUrlsAxiosRequest();
  }, []);

  useEffect(() => {
    if (allSavedUrls) {
      const saveCurrentUrlAsArticle = async () => {
        try {
          let currentTab;
          if (typeof chrome !== "undefined" && chrome.tabs) {
            const tabInfo = await getCurrentTabInfo();
            currentTab = { url: tabInfo.url, title: tabInfo.title };
          } else {
            currentTab = { url: window.location.href, title: document.title };
          }

          const urlAlreadySaved = allSavedUrls?.find(url => url.website === currentTab.url);
          if (!urlAlreadySaved?.website) {
            const newArticle = {
              title: currentTab.title,
              website: currentTab.url,
              curatorNote: '',
              bookshelfName: ''
            };
            saveUrlAxiosRequest({ body: newArticle });
          }
        }
        catch (error) {
          console.error('Error saving the current URL as an article:', error);
        }
      };
      saveCurrentUrlAsArticle();
    }
  }, [allSavedUrls]);
  

  return (
    <Authenticator formFields={FormFieldsConfig} >
      {({ signOut, user }) => (
        <>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
          <div className="font-Raleway">
            <FullWidget isLoading={saveUrlLoading} />
          </div>
        </>
      )}
    </Authenticator>
  )
}

export default App;
