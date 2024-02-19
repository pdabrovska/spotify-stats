import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';
import { Artist } from '../components/Artist';
import { FilterButton } from '../components/FilterButton';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
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
    fetchTopArtists(time_range, limit)
  }, [time_range, limit]);

  return (
    <div className='relative flex flex-col items-center justify-center gap-y-5 md:text-lg min-h-[80vh] px-[10px] sm:px-[5%] md:px-[5%] lg:px-10 mt-[45px] sm:text-sm'>
      <button onClick={goBack}
      className='btn mt-2 absolute top-[-60px] right-0 '
      >
        Logout
      </button>
      <div className='max-w-[70vw] text-center'>
        Hey {userName}, ready to relive your musical journey? Dive into your personalized Spotify Wrapped—where your top tracks and favorite artists await! Explore the tunes that shaped your day, all neatly wrapped up just for you whenever you want.
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
      <div className='flex flex-col gap-7 flex-col md:flex-row'>
        <div className='bg-zinc-800 rounded-md py-5 px-7'>
          <h1 className='bg-inherit font-semibold'>Your Top Songs:</h1>
          {/*Displays top songs*/}
          <div className='bg-inherit'>
            {userTopTracks?.map((track, key) => (
              <Track 
              track={track} key={key} number={key} token={token}
              />
              
            ))}

          </div>
        </div>
        <div className='bg-zinc-800 rounded-md py-5 px-7'>
          <h1 className='bg-inherit font-semibold'>Your Top Artists:</h1>
          {/*Displays top artists*/}
          <div className='bg-inherit'>
            {userTopArtists?.map((artist, key) => (
                <Artist 
                artist={artist} key={key} number={key} token={token}
                />
                
              ))}

          </div>
        </div>
      </div>
    </div>
  )
}
