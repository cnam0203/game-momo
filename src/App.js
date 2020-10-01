import React, { Component } from 'react';
import HomePage from './src/Homepage/Homepage'
import History from './src/History/History'
import RankPage from './src/RankPage/RankPage'
import WaitingRoomPage from './src/WaitingRoomPage/WaitingRoomPage'
import RoomPage from './src/RoomPage/RoomPage'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


export default class App extends Component { 
  render() {
    return (
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route> 
            <Route exact path='/rankPage'>
              <RankPage></RankPage>
            </Route> 
            <Route exact path='/history'>
              <History></History>
            </Route> 
            <Route exact path='/waitingRoomPage'>
              <WaitingRoomPage></WaitingRoomPage>
            </Route> 
            <Route exact path='/roomPage/:id'>
              <RoomPage></RoomPage>
            </Route> 
          </Switch>
    );
  }
}

