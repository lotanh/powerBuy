import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Login from './components/LogIn/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <div className='content'>
          <Switch>
            <Route path='/Login'>
                <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
