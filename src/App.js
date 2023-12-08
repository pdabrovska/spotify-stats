import './App.css';
import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//pages
import {Login} from './pages/Login';
import {Main} from './pages/Main';
import {Info} from './pages/Info';
//components
import { Navbar } from './components/Navbar';

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
    <div className="App grid grid-cols-[120px_1fr] p-5">
      <Router>
        <Navbar />
          <Routes>
            {!token ?
              <Route path='/' element={<Login/>}/>
              :
              <Route path='/' element={<Main logout={logout} token={token} />}/>
            }
            <Route path='/info' element={<Info />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
