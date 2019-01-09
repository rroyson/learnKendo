import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import './index.css'
// import 'scss/variables.scss'
import * as serviceWorker from './serviceWorker'
import ShowNotification from './views/ShowNotification'
import App from './views/App'
import '@progress/kendo-theme-material/dist/all.css'

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/new" component={ShowNotification} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
