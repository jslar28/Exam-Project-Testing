import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import StartPage from './components/StartPage';

const Root = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/1" component={FirstPage}/>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/start" component={StartPage} />
        <Route exact path="/2" component={SecondPage} />
        <Route exact path="/3" component={ThirdPage} />
        <Route exact path="/4" component={FourthPage} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
