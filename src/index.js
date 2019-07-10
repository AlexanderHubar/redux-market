import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import store from './store'
import * as serviceWorker from './serviceWorker'

import './index.css'

const AppContainer = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'))

serviceWorker.unregister();
