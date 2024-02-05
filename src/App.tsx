import { useEffect, useState } from "react"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'
import FormFieldsConfig from './configs/amplify.form.config.json'

import LoadingScreen from "./components/LoadingScreen"
import FullWidget from "./components/FullWidget"
import { IURLResponse } from "./types/interfaces";
import useCacheQuery from "./hooks/useCacheQuery";

const requestConfig = {
  method: 'GET',
  url: '/users',
  cacheKey: 'userSavedUrls',
  expiryTime: 600,
}

function App() {
  const [isLoading] = useState(false)
   const { data, axiosRequest, error, loading } = useCacheQuery<IURLResponse[]>({ requestConfig });

  useEffect(() => {
    axiosRequest();
  }, []);


  return (
    <Authenticator formFields={FormFieldsConfig} >
      {({ signOut, user }) => (
        <>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
          <div className="font-Raleway">
            {isLoading ? 
            <LoadingScreen isLoading={isLoading}/> : 
            <FullWidget isLoading={isLoading}/>
            }
          </div>
        </>
      )}
    </Authenticator>
  )
}

export default App;