import { Amplify } from 'aws-amplify';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_48QaadPpw',
      userPoolClientId: '2hm64gad4akjd2c93rgkuttfec',
      signUpVerificationMethod: 'code',
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />,
)
