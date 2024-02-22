import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div
      className='absolute right-[15px] bottom-[12px]'
    >
      <Link 
        to={'https://github.com/pdabrovska'}
        target="_blank"
        className='flex items-center'
      >
        <img className='w-[32px] h-[32px]' src={require('../images/github-icon.png')} alt='github-icon'/>
        <p>&#169;Paulina Dąbrowska 2024</p>
      </Link>
    </div>
  )
}

export default Footer