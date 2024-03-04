import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';
import { Artist } from '../components/Artist';
import { FilterButton } from '../components/FilterButton';
import CardSkeleton from '../components/CardSkeleton';
//icons
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';
//framer motion library
import {motion} from 'framer-motion';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  //values for fetching data from Spotify
  const [time_range, setTime_range] = useState('short_term');
  const [limit, setLimit] = useState(5);

  const goBack = () => {
    logout();
    navigate('/');
  }

  // changes limit property in fetchTopTracks and fetchTopArtists
  const changeLimit = (number) => {setLimit(number)};
  // changes limit property in fetchTopTracks and fetchTopArtists
  const changeTimeRange = (time) => {setTime_range(time)};

  //fetch user Name from Spotify
  const fetchUserName = async () => {
    try {
        const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserName(data.display_name);
    } catch(error) {
      console.error("Error fetching username:", error);
    }
    
  };

  const fetchTopTracks = async (time_range, limit) => {
    try {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          time_range: time_range,
          limit: limit,
          offset: 0
        }
      })
      setUserTopTracks(data.items);
    } catch(error) {
      console.error("Error fetching top tracks:", error);
    }
    
  };

  const fetchTopArtists = async (time_range, limit) => {
    try {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/artists", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          time_range: time_range,
          limit: limit,
          offset: 0
        }
      })
      setUserTopArtists(data.items)
    } catch(error) {
      console.error("Error fetching top artists:", error);
    }
    
  };

  // fetching user name (once)
  useEffect(() => {
    fetchUserName();
  }, []);
  //fetching top songs and artists
  useEffect(() => {
    fetchTopTracks(time_range, limit);
    fetchTopArtists(time_range, limit);
    setIsLoading(false)
  }, [time_range, limit]);

  return (
    <motion.div 
      className='relative flex flex-col items-center justify-center gap-y-5 md:text-lg min-h-[80vh] px-[10px] sm:px-[5%] md:px-[5%] lg:px-10 mt-[45px] sm:text-sm mb-[75px]'

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <button onClick={goBack}
      className='btn mt-2 absolute top-[-60px] right-0 '
      >
        Logout
      </button>
      <div className='max-w-[70vw] text-center'>
        Hi {userName}, ready to relive your musical journey? Dive into your personalized Spotify Wrapped—where your top tracks and favorite artists await! Explore the tunes that shaped your day, all neatly wrapped up just for you whenever you want.
      </div>
      <div className='filters flex gap-2 flex-wrap'>
        <FilterButton text={'Top 5'} id={'top5'} value={5} name={'top'} checked={'checked'}
          setProperty={changeLimit}
        />
        <FilterButton text={'Top 10'} id={'top10'} value={10} name={'top'} 
          setProperty={changeLimit}
        />
        <FilterButton text={'Top 15'} id={'top15'} value={15} name={'top'}
          setProperty={changeLimit}
        />
        <FilterButton text={'Last 4 weeks'} id={'4weeks'} value={'short_term'} name={'time'} checked={'checked'}
          setProperty={changeTimeRange}
        />
        <FilterButton text={'Last 6 months'} id={'6months'} value={'medium_term'} name={'time'}
          setProperty={changeTimeRange}
        />
        <FilterButton text={'All time Favourites'} id={'longTime'} value={'long_term'} name={'time'}
          setProperty={changeTimeRange}
        />
      </div>
      {/*carousel navigation buttons*/}
      <div className='flex items-center gap-2 lg:hidden'>
          <button
            onClick={()=>{setTranslateX(translateX !== 0 ? 0 : 100)}}
            className='bg-inherit'
          >
            <ChevronLeftIcon
              className='w-6 h-7'
            />
          </button>
          <div className={translateX === 0 ? `w-3 h-3 rounded-full bg-zinc-200` : `w-3 h-3 rounded-full bg-zinc-600`}></div>
          <div className={translateX === 100 ? `w-3 h-3 rounded-full bg-zinc-200` : `w-3 h-3 rounded-full bg-zinc-600`}></div>
          <button
            onClick={()=>{setTranslateX(translateX !== 100 ? 100 : 0)}}
            className='bg-inherit'
          >
            <ChevronRightIcon
              className='w-6 h-7'
            />
          </button>
      </div>

      <div 
        className='w-[90%] smX:w-min lg:w-full m-auto overflow-hidden mt-[-10px]'
        
      >
        <div
          className='flex justif-center lg:justify-center lg:gap-4'
          style={{
            transform: `translateX(-${translateX}%)`
          }}
        >
          <div className='flex-shrink-0 w-full rounded-md py-5 px-7
           lg:flex-shrink-1 lg:w-fit'>
          <h1 className='bg-inherit font-semibold  animate-fadeUpDelay'>Your Top Songs:</h1>
          {/*Displays top songs*/}
          <div className='bg-inherit'>
            {isLoading && [...Array(5)].map((e,i) => <CardSkeleton key={i}/>)}
            {userTopTracks?.map((track, key) => (
              <Track 
              track={track} key={key} number={key} token={token}
              />
              
            ))}

          </div>
          </div>
          <div className='flex-shrink-0 w-full rounded-md py-5 px-7 mdLG:flex-shrink-1 mdLG:w-fit'>
            <h1 className='bg-inherit font-semibold animate-fadeUpDelay'>Your Top Artists:</h1>
            {/*Displays top artists*/}
            <div className='bg-inherit'>
              {isLoading && [...Array(5)].map((e, i) => <CardSkeleton key={i}/>)}
              {userTopArtists?.map((artist, key) => (
                  <Artist 
                  artist={artist} key={key} number={key} token={token}
                  />
                  
                ))}

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
