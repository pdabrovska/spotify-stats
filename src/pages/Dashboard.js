import React from 'react';
import { Link} from 'react-router-dom';
//icons
import {ArrowTopRightOnSquareIcon as LinkIcon} from '@heroicons/react/24/solid'

const Dashboard = () => {
  return (
    <div
      className='mt-10 mb-[100px]'
    >
      <div
        className='md:w-[90vw] lg:w-[70vw] mx-auto mb-[20px]'
      >
        <h1 className='text-2xl font-bold text-center mb-[15px]'>Spotify Data Anlysis Dashboards</h1>
        <p className='text-md'>
          Datasets used in this project:
          <ul
            className='ml-[15px]'
          >
            <li
              className='flex gap-[5px]'
            >
              •
              <Link 
                to={'https://www.kaggle.com/datasets/meeraajayakumar/spotify-user-behavior-dataset'} 
                target="_blank"
                className='flex gap-1 underline text-violet-400'
              >
                Spotify User Behavior Dataset
                <LinkIcon className='h-5 w-5'/>
              </Link>
            </li>
            <li
              className='flex gap-[5px]'
            >
              •
              <Link 
                to={'https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023?rvi=1'} 
                target="_blank"
                className='flex gap-1 underline text-violet-400'
              >
                Most Streamed Spotify Songs 2023
                <LinkIcon className='h-5 w-5'/>
              </Link>
            </li>
          </ul>
        </p>
      </div>
      <div
        className='md:w-[90vw] lg:w-[70vw] mx-auto flex flex-col gap-10'
      >
        <img 
          src={require('../images/dashboard/Spotify_Dashboard1.jpg')} alt='spotify-user-analysis'
          className=''
        />
        <img 
          src={require('../images/dashboard/Spotify_Dashboard2.jpg')} alt='spotify-user-analysis'
          className=''
        /><img 
        src={require('../images/dashboard/Spotify_Dashboard3.jpg')} alt='spotify-user-analysis'
        className=''
      />
      </div>
    </div>
  )
}

export default Dashboard