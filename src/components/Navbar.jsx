import {React, useState} from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {setIsOpen(!isOpen)}

  return (
    <div className={isOpen ? 'Navbar z-[10000] absolute top-0 left-0 w-full smX:w-[35vw] md:w-[22vw] min-h-screen text-lg bg-zinc-800/[.06] backdrop-blur-md' : 'absolute' }>
      <div onClick={closeMenu} className={isOpen? 'burger-menu close-menu mt-10 ml-9 mb-4 bg-zinc-800/[.0] ' : 'burger-menu ml-4 mb-4'}>
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>
      </div>
      <div className={isOpen ? 'flex flex-col items-center mt-5 bg-zinc-800/[.0]' : 'hidden'}>
        <Link
          className='bg-zinc-800/[.06]'
          to={'/'}
          onClick={closeMenu}
        >
          <div
            className='container p-6 bg-transparent relative w-[180px] text-center'
          >
            <p
              className='bg-transparent'
            >Main</p>
            <div className='horizontal-line absolute bottom-[17%] right-[90%] left-[10%] h-[2px] bg-zinc-300 transition-right duration-500 linear'></div>
          </div>
        </Link>
        <Link
          className='bg-zinc-800/[.06]'
          to={'/data'}
          onClick={closeMenu}
        >
          <div
            className='container p-6 bg-transparent relative w-min-[180px] text-center'
          >
            <p
              className='bg-transparent'
            >Spotify Data Analysis</p>
            <div className='horizontal-line absolute bottom-[17%] right-[90%] left-[10%] h-[2px] bg-zinc-300 transition-right duration-500 linear'></div>
          </div>
        </Link>
        <Link
          className='bg-transparent'
          to={'/about'}
          onClick={closeMenu}
        >
          <div
            className='container p-6 bg-transparent relative w-[180px] text-center'
          >
            <p
              className='bg-transparent'
            >About</p>
            <div className='horizontal-line absolute bottom-[17%] right-[90%] left-[10%] h-[2px] bg-zinc-300 transition-right duration-500 linear'></div>
          </div>
        </Link>
      </div>
    </div>
  )
}
