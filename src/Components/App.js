import React from 'react'
import About from '../Components/About'
import NavBar from '../Components/NavBar'
import Login from '../Components/Login'
import Home from '../Components/Home'
import Messages from '../Components/Messages'
import SignUp from '../Components/Signup'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/messages'>
          <Messages />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
