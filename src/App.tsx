import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Login, { userCredentials } from './pages/Login';

import './App.css';
import HomePage from './pages/Homepage';
import { postLoginUser } from './utils/apiClient';

export type User = {
  id: number;
  username: string;
  password: string;
  bio?: string;
};

function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const history = useHistory();

  const loginUser = (userCreds: userCredentials) => {
    postLoginUser(userCreds).then((user) => {
      setLoggedUser(user);
      history.push('/');
    });
  };
  const clearUserState = (data: null) => {
    setLoggedUser(null);
  };
  return (
    <div className='App'>
      <Header loggedUser={loggedUser} clearUserState={clearUserState} />
      <main>
        <Switch>
          <Route path='/login'>
            <Login handleSubmit={loginUser} />
          </Route>
          <Route path='/'>
            {loggedUser ? <HomePage /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
