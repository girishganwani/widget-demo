import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './App.css'
import FormFieldsConfig from './configs/amplify.form.config.json'

import FullWidget from "./components/FullWidget"
import Context from "./context";
import useArticles from './hooks/useArticles';

const App = () => {
  const { currentArticle, saveUrlLoading, handleDelete, isArticleDeleted, updateArticle, setCurrentArticle, authToken } = useArticles();

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
        }}>
          <div className="font-Raleway">
            <FullWidget />
          </div>
        </Context.Provider>
      )}
    </Authenticator>
  )
}

export default App;
