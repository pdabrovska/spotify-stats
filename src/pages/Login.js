import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
//icons
import {ArrowTopRightOnSquareIcon as LinkIcon} from '@heroicons/react/24/solid'

export const Login = () => {
  const client_id = '132a9595d7f0453eab534d3118ac4c6d';
  const redirect_uri = 'http://localhost:3000';
  const auth_endpoint = 'https://accounts.spotify.com/authorize';
  const response_type ='token';
  const scope = 'user-top-read';
  const show_dialog = 'true';


  //saving token to local storage
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!token && hash){
      token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1];

      window.localStorage.setItem('token', token);
    }

  }, []);
  
  return (
    <div className='m-auto flex flex-col items-center justify-center gap-y-5 text-lg min-h-[80vh] px-10'>
      <h1 className='text-3xl font-bold'>SpotifyStats</h1>
      <p className='text-center max-w-[70vw]'>
        Welcome to SpotifyStats, your gateway to a personalized music journey through data insights. Explore your top songs and artists over 1 year, 6 months, and 4 weeks, tracing the evolution of your music taste from enduring favorites to recent discoveries. Beyond playlists, delve into detailed statistics and analyses of 2023 music stream worldwide through intuitive PowerBI tables.
      </p>
      <a href={`${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&show_dialog=${show_dialog}`}
      className='btn'
      >
        Login to Spotify
      </a>
      <Link className='flex text-sm gap-1 mt-[-13px] underline text-violet-400'>
        Check 2023 music statistics
        <LinkIcon className='h-5 w-5'/>
      </Link>
    </div>
  )
}
