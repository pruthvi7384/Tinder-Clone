import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './Header';
import Chats from './Chats';
import TinderCards from './TinderCards';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header/>
          <TinderCards/>
        </Route>
        <Route exact path="/chat">
          <Header backbutton="/" />
          <Chats/>
        </Route>
        <Route exact path="/chat/:person">
          <Header backbutton="/" />
          <ChatRoom/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
