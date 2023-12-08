import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);

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

  useEffect(() => {
    fetchUserName();
    fetchTopTracks('short_term', 5);
  }, []);

  return (
    <div>
      <button onClick={goBack}>
        Logout
      </button>
      <div>
        {userName}
      </div>
      <div>
        {userTopTracks?.map((track, key) => <Track 
          track={track} key={key}
          />)}

      </div>
    </div>
  )
}
