import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Submit from './components/Submit.js';
import Menu from './components/Menu.js';
function App() {
    return (
      <div className="App">
           <div>
              <Switch>
                  <Route exact path='/' component={Submit} />
                  <Menu />
              </Switch>
            </div>
      </div>
    )
}
export default App;
