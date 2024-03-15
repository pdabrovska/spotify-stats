import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';
import { Artist } from '../components/Artist';
import { FilterButton } from '../components/FilterButton';
import CardSkeleton from '../components/CardSkeleton';
import GenerateShareImg from '../components/GenerateShareImg';
//icons
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';
import { ShareIcon} from '@heroicons/react/24/outline';
//framer motion library
import {motion} from 'framer-motion';
import ShareScreen from '../components/ShareScreen';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [topTracksShare, setTopTracksShare] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  //values for fetching data from Spotify
  const [time_range, setTime_range] = useState('medium_term');
  const [limit, setLimit] = useState(5);

  const goBack = () => {
    logout();
    navigate('/');
  }

  const share = () => {
    GenerateShareImg(topTracksShare);
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

  const fetchTopTracks = async (time_range, limit, toShare) => {
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
      toShare ? setTopTracksShare(data.items) : setUserTopTracks(data.items);
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
      setUserTopArtists(data.items);
    } catch(error) {
      console.error("Error fetching top artists:", error);
    }
    
  };

  // fetching user name (once)
  useEffect(() => {
    fetchUserName();
    fetchTopTracks('short_term', 5, true);
  }, []);
  //fetching top songs and artists
  useEffect(() => {
    fetchTopTracks(time_range, limit, false);
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
      <div
      className='absolute top-[-60px] right-0 flex flex-row-reverse gap-[8px] sm:gap-4'
      >
        <button onClick={goBack}
        className='mt-2 bg-spotify-basic-green rounded-full py-[8px] px-[13px] hover:bg-[#179a17]'
        >
          Logout
        </button>
        <button onClick={share}
        className='mt-2 border-solid border-[3px] border-spotify-basic-green rounded-full py-[8px] px-[13px] flex items-center gap-2'
        >
          <ShareIcon className='w-[18px] h-[18px]'/>
          <p>Share</p>
        </button>
      </div>

      <ShareScreen />

      <div className='topTracks absolute z-[-1]'>
        {
          topTracksShare?.map((track, key) => (
            <p key={key}>
              {track.name}
            </p>
          ))
        }
      </div>

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
        <FilterButton text={'Last 4 weeks'} id={'4weeks'} value={'short_term'} name={'time'}
          setProperty={changeTimeRange}
        />
        <FilterButton text={'Last 6 months'} id={'6months'} value={'medium_term'} name={'time'} checked={'checked'}
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
        className='w-[95%] smX:w-min lg:w-full m-auto overflow-hidden mt-[-10px]'
        
      >
        <div
          className='flex justif-center lg:justify-center lg:gap-4'
          style={{
            transform: `translateX(-${translateX}%)`
          }}
        >
          <div className='flex-shrink-0 w-full rounded-md px-0 py-5 xs:px-7
           lg:flex-shrink-1 lg:w-fit'>
          <h1 className='bg-inherit font-semibold  animate-fadeUpDelay'>Your Top Songs:</h1>
          {/*Displays top songs*/}
          <div className='bg-inherit'>
            {isLoading && [...Array(5)].map((e,i) => <CardSkeleton key={i} notEnoughData={false}/>)}
            {userTopTracks?.map((track, key) => (
              <Track 
              track={track} key={key} number={key} token={token}
              />
            ))}
            {
                userTopTracks?.length === 0 && [...Array(limit)].map((e, i) => <CardSkeleton key={i} notEnoughData={true}/>)
              }
          </div>
          </div>
          <div className='flex-shrink-0 w-full rounded-md px-0 py-5 xs:px-7 mdLG:flex-shrink-1 mdLG:w-fit'>
            <h1 className='bg-inherit font-semibold animate-fadeUpDelay'>Your Top Artists:</h1>
            {/*Displays top artists*/}
            <div className='bg-inherit'>
              {isLoading && [...Array(5)].map((e, i) => <CardSkeleton key={i} notEnoughData={false}/>)}
              {
                userTopArtists?.map((artist, key) => (
                  <Artist 
                  artist={artist} key={key} number={key} token={token}
                  />
                ))
              }
              {
                userTopArtists?.length === 0 && [...Array(limit)].map((e, i) => <CardSkeleton key={i} notEnoughData={true}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
