import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import { Track } from '../components/Track';

export const Main = ({logout, token}) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState([]);
  const [userTopTrack, setUserTopTracks] = useState([]);

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

  const fetchTopTracks = async () => {
    try {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          time_range: 'short_term',
          limit: 5,
          offset: 0
        }
      })
      console.log(data.items);
    } catch(error) {
      console.error("Error fetching top tracks:", error);
    }
    
  };

  useEffect(() => {
    fetchUserName();
    fetchTopTracks();
  }, []);

  return (
    <div>
      <button onClick={goBack}>
        Logout
      </button>
      <div>
        {userName}
      </div>
    </div>
  )
}
