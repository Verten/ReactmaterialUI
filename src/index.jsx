import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from '../store/configureStore';

import './main.css'

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("root")
);
