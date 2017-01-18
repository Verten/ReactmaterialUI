/**
 * Created by ebinhon on 1/4/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import ToDoApp from '../containers/ToDoApp'
import Home from '../containers/Home'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="todo" component={ToDoApp}/>
      {/*<Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>*/}
    </Route>
  </Route>
);
