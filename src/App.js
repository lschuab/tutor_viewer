import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import Dash from './components/Dash'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/dash' component={Dash}/>
    </Switch>
  </div>
)

export default App;