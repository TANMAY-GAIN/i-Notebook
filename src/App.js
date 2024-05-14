import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from './components/context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Singup from './components/Singup';
import { useState } from 'react';
import CreateNote from './components/CreateNote';
function App  ()  {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert (null);
    }, 1500);
  }

  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert Alert={alert}/>
      <div className="container">
      <Switch>
        <Route path="/home">
            <Home showAlert={showAlert}/>
          </Route>
          <Route  exact path="/about">
            <About/>
          </Route> 
          <Route  exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route  exact path="/singup">
            <Singup showAlert={showAlert} />  
          </Route>
          <Route  exact path="/CreateNote">
            <CreateNote showAlert={showAlert}/> 
          </Route>
          
        </Switch>
        </div>
      </Router>
      </NoteState>
    </>
  )
}

export default App
