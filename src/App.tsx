import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './App.css'
import FormFieldsConfig from './configs/amplify.form.config.json'

import FullWidget from "./components/FullWidget"
import Context from "./context";
import useArticles from './hooks/useArticles';
import useIcon from './hooks/useIcon';

const App = () => {

  useIcon();

  const {
    currentArticle,
    saveUrlLoading,
    handleDelete,
    isArticleDeleted,
    updateArticle,
    setCurrentArticle,
    authToken,
    updateShelveArticle,
    fetchBookShelvesAxiosRequest,
    allBookShelves,
  } = useArticles();

  return (
    <Authenticator formFields={FormFieldsConfig} >
      {() => (
        <Context.Provider value={{
          currentArticle,
          saveUrlLoading,
          handleDelete,
          isArticleDeleted,
          updateArticle,
          setCurrentArticle,
          authToken,
          updateShelveArticle,
          fetchBookShelvesAxiosRequest,
          allBookShelves
        }}>
          <div className="font-Raleway backdrop-blur-0">
            <FullWidget />
          </div>
        </Context.Provider>
      )}
    </Authenticator>
  )
}

export default App;
