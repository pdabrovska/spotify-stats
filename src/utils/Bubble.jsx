import React from 'react'

const Bubble = ({bub}) => {
  const bubbleStyle = {
    '--size': bub.size,
    '--time': bub.time,
    '--delay': bub.delay,
    '--distance' : bub.distance,
    left: bub.position
  };

  return (
    <div
      className={`absolute top-0 rounded-full bg-spotify-basic-green animate-bubbleSize animate-bubbleMove translate-x-[-50%] translate-y-[100%]`}
      style={bubbleStyle}
    >
    </div>
  )
}

export default Bubble