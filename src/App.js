import { Route, Switch } from 'react-router-dom'
import Signup from "./components/Signup";
import Home from './components/Home';
import Profile from './components/Profile';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import VerifyEmail from './components/VerifyEmail';
import ForgotPassword from './components/ForgotPassword';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const [emailid, setEmailid] = useState('');
  const emailHandler = (data) => {
    setEmailid(data)
  }
  return (
    <Switch>
      <Route path="/" exact>
        <Signup email={emailHandler} />
      </Route>
      <Route path="/Verify">
        <VerifyEmail />
      </Route>
      {auth && (
        <Route path="/Home">
          <Home email={emailid} />
        </Route>
      )}
      <Route path="/Profile">
        {auth && <Profile />}
        {!auth && <Redirect to='/' />}
      </Route>
      <Route path="/ForgotPassword" >
        <ForgotPassword />
      </Route>
      <Route path='*' >
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
