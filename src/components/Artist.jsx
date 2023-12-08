import React from 'react'

export const Artist = ({image, artist}) => {
  return (
    <div>
      <img src={image}/>
      <p>{artist}</p>
    </div>
  )
}
