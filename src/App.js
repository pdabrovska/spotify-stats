import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//pages
import {Login} from './pages/Login';
import {Main} from './pages/Main';

function App() {
  const [token, setToken] = useState('');
  console.log(token)

  //saving token to local storage
  useEffect(() => {
      setToken(window.localStorage.getItem('token'));
  }, []);

  const logout = () => {
    window.localStorage.removeItem('token');
    setToken('');
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {!token ?
            <Route path='/' element={<Login/>}/>
            :
            <Route path='/' element={<Main logout={logout} token={token} />}/>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
