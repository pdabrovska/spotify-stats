import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';
import { Artist } from '../components/Artist';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);

  const goBack = () => {
    logout();
    navigate('/');
  }

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
//fix artists fetch
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
      console.log(data.items)
      setUserTopArtists(data.items)
    } catch(error) {
      console.error("Error fetching top artists:", error);
    }
    
  };

  useEffect(() => {
    fetchUserName();
    fetchTopTracks('short_term', 5);
    fetchTopArtists('short_term', 5)
  }, []);

  return (
    <div className='relative md:mx-[5%] sm:mx-[2px] flex flex-col items-center justify-center gap-y-5 md:text-lg min-h-[80vh] px-10 mt-[45px] sm:text-sm'>
      <button onClick={goBack}
      className='btn mt-2 absolute top-[-8%] right-0 '
      >
        Logout
      </button>
      <div>
        Hi {userName}, this is your fresh Spotify Wrapped! All your favourite songs from the artists you listened to recently.
      </div>
      <div className='flex gap-7'>
        <div>
          <h1>Your Top Songs:</h1>
          <div>
            {userTopTracks?.map((track, key) => (
              <Track 
              track={track} key={key} number={key}
              />
              
            ))}

          </div>
        </div>
        <div>
          <h1>Your Top Artists:</h1>
          <div>
            {userTopArtists?.map((artist, key) => (
                <Artist 
                artist={artist} key={key} number={key}
                />
                
              ))}

          </div>
        </div>
      </div>
    </div>
  )
}
