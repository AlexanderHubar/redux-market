import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import Cart from './components/Cart/cart'

import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
