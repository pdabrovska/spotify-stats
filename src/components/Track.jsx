import React, { useEffect, useState } from 'react';
import axios from 'axios';
//icons
import { InformationCircleIcon } from '@heroicons/react/24/solid';
//components and utils
import { PopularityRate } from '../utils/PopularityRate';

export const Track = ({track, number, token}) => {
  //adds number to a song
  const nr = parseInt(number, 10);
  const [trackPopularity, setTrackPopularity] = useState();

  //fetch track popularity
  const fetchTrackPopularity = async () => {
    try {
      const {data} = await axios.get(`https://api.spotify.com/v1/tracks/${track.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          id: track.id,
          market: 'US'
        }
    })
    setTrackPopularity(data.popularity);
  } catch(error) {
    console.error("Error fetching track popularity:", error);
  }
  };
  
  useEffect(() => {
    fetchTrackPopularity();
  });

  return (
    <div className='flex items-center min-h-[90px] border-solid border-[1px] border-gray-600 rounded-md my-4 p-[3px] shadow-[10px_10px_25px_-10px_rgba(110,110,110,0.2)] lg:max-w-full md:max-w-[380px] bg-inherit'>
      <p
        className='px-[8px] text-2xl font-semibold bg-inherit'
      >
        {nr + 1}
      </p>
      <img 
        src={window.innerWidth <= 650 ? track.album.images[2].url : track.album.images[1].url}
        className='max-w-[100px] my-[5px] mx-[10px]'
        alt='Song'
      />
      <div
        className='bg-inherit h-full flex flex-col justify-start'
      >
        <p className='bg-inherit font-semibold mb-[4px]'>{track.name}</p>
        <p className='bg-inherit text-sm'>{track.album.name}</p>
        <p className='bg-inherit text-sm'>{track.artists[0].name}</p>
      </div>
      <div className='popularity-rate bg-inherit'>
        <button className='bg-inherit'>
          <InformationCircleIcon 
            className='w-5 h-5 text-spotify-basic-green bg-inherit'
          />
        </button>
        {<PopularityRate rate={trackPopularity}/>}
      </div>
    </div>
  )
}
