import React from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
//pages
import {Login} from '../pages/Login';
import {Main} from '../pages/Main';
import {About} from '../pages/About';
//framer motion library
import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = ({token, logout}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {token ==='' ?
          <Route path='/' element={<Login/>}/>
          :
          <Route path='/' element={<Main logout={logout} token={token} />}/>
        }
        <Route path='/about' element={<About />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
