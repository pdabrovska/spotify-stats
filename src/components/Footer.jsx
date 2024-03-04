import React from 'react'
import { Link } from 'react-router-dom';
import Bubbles from '../utils/Bubbles';

export const Footer = () => {
  return (
    <div
      className='absolute rigth-0 left-0 right-0 bottom-0 min-h-[6vh] bg-spotify-basic-green z-10'
    >
      <div
        className='absolute bottom-[8px] right-[0px] bg-transparent flex z-10'
      >
        <Link 
          to={'https://github.com/pdabrovska'}
          target="_blank"
          className='flex items-center bg-transparent'
        >
          <img className='w-[32px] h-[32px] bg-transparent z-[10]' src={require('../images/github-icon.png')} alt='github-icon'/>
          <p className='bg-transparent w-[220px]'>&#169;Paulina Dąbrowska 2024</p>
        </Link>
      </div>

      <Bubbles />
    </div>
  )
}

export default Footer