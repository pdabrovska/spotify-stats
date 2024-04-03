import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
//icons
import { InformationCircleIcon } from '@heroicons/react/24/solid';
//components and utils
import { PopularityRate } from '../utils/PopularityRate';

export const Artist = ({artist, number, token}) => {
  //adds number to an Artist
  const nr = parseInt(number, 10);
  const [artistPopularity, setArtistPopularity] = useState();
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  //fetch artist popularity
  const fetchArtistPopularity = async () => {
    try {
      const {data} = await axios.get(`https://api.spotify.com/v1/artists/${artist.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          id: artist.id,
          market: 'US'
        }
    })
    setArtistPopularity(data.popularity);
  } catch(error) {
    console.error("Error fetching track popularity:", error);
  }
  };
  
  useEffect(() => {
    fetchArtistPopularity();
  }, []);

  const toggle = () =>{setIsInfoVisible(!isInfoVisible)}

  return (
    <div className='min-h-[90px] border-solid border-[1px] border-gray-600 rounded-md my-4 p-[3px] shadow-[10px_10px_25px_-10px_rgba(110,110,110,0.2)] bg-inherit animate-fadeUp'>
      <div
        className='flex items-center justify-between mb-[10px]'
      >
        <div
          className='bg-inherit flex'
        >
          <p
          className='px-[8px] text-2xl font-semibold bg-inherit my-auto'
          >
            {nr + 1}
          </p>
          <div className='bg-inherit max-h-[120px] flex justify-items-center'>
            <img 
              src={window.innerWidth <= 650 ? artist.images[2].url : artist.images[1].url}
              className='max-h-[100px] my-[5px] mx-[10px] my-auto'
              alt='Artist'
            />
          </div>

          <div
            className='bg-inherit h-full flex flex-col justify-start'
          >
            <p className='bg-inherit font-semibold mt-[10px]'>{artist.name}</p>
          </div>
        </div>

        <div className='popularity-rate bg-inherit ml-[5px] mr-[10px] flex flex-col items-end relative'>
          <button 
            className='bg-inherit mb-2 mr-[-6px] p-0 opacity-60'
            onClick={toggle}
          >
            <InformationCircleIcon 
              className='w-5 h-5 text-spotify-basic-green bg-inherit m-0'
            />
          </button>
          <div className={isInfoVisible ? 'absolute text-xs left-[-600%] right-[15px] top-[-10%] p-1 bg-gray-300 text-gray-950' : 'hidden absolute text-xs left-[-600%] right-[15px] top-[-10%] p-1 bg-gray-300 text-gray-950'}>
            The popularity of the artist in the US. The value will be between 0 and 100. One column shows the range of 25 points.
          </div>
          <PopularityRate rate={artistPopularity}/>
        </div>
      </div>

      <div
        className='border-solid border-2 border-spotify-basic-green rounded-full px-[20px] py-[4px] cursor-pointer mx-2 my-[2px] hover:animate-pulse'
      >
        <Link
          className='flex gap-2 items-center'
          to={artist.external_urls.spotify}
          target="_blank"
        >
          <img 
            src={require('../images/Spotify_Icon_CMYK_Green.png')} alt='spotify-icon'
            className='w-[30px] h-[30px]'
          />
          <p
            className='text-[12px] sm:text-[14px] tracking-wider'
          >LISTEN ON SPOTIFY</p>
        </Link>
      </div>
    </div>
  )
}
