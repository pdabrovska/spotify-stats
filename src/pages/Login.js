import {React, useEffect} from 'react';

export const Login = () => {
  const client_id = '132a9595d7f0453eab534d3118ac4c6d';
  const redirect_uri = 'http://localhost:3000';
  const auth_endpoint = 'https://accounts.spotify.com/authorize';
  const response_type ='token';
  const scope = 'user-top-read';


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
    <div className='m-auto flex flex-col items-center'>
      <h1>SpotifyStats</h1>
      <p className='text-center'>See your Spotify Wrapped whenever you want. See your favourite artists and songs at the moment right now! </p>
      <button className="bg-green-500 rounded-full py-3 px-5 text-white">
        <a href={`${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}>
          Login to Spotify
        </a>
      </button>
    </div>
  )
}
