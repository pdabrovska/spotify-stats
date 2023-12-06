import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Main = ({logout}) => {
  const navigate = useNavigate();

  const goBack = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      <button onClick={goBack}>
        Logout
      </button>
    </div>
  )
}
