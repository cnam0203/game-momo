import React from 'react';
import HomePage from './src/Homepage/Homepage'
import Authen from './src/Authen/Authen'
import ListCompetitorsPage from './src/ListCompetitorsPage/ListCompetitorsPage'
import RankPage from './src/RankPage/RankPage'
import RoomPage from './src/RoomPage/RoomPage'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const isGettingMe = false;

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Authen></Authen>
          </Route> 
          <Route exact path='/homepage/:id'>
            <HomePage></HomePage>
          </Route> 
          <Route exact path='/listCompetitor/:id'>
            <ListCompetitorsPage></ListCompetitorsPage>
          </Route> 
          <Route exact path='/listCompetitor/:id'>
            <ListCompetitorsPage></ListCompetitorsPage>
          </Route> 
          <Route exact path='/rankPage/:id'>
            <RankPage></RankPage>
          </Route> 
          <Route exact path='/roomPage/:id'>
            <RoomPage></RoomPage>
          </Route> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
