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

  //logging out
  const logout = () => {
    setToken('');
    window.localStorage.setItem('token', '');
  }

  return (
    <div className="App relative py-10 px-5 text-[#E8E8E8] min-h-screen">
      <Router>
        <Navbar />
          <Routes>
            {token ==='' ?
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
