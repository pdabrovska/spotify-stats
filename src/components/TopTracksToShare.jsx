import React from 'react'

const TopTracksToShare = ({tracks, artists}) => {
  console.log(tracks)
  console.log(artists)
  return (
    <div 
      className="topTracks absolute z-[-100] w-[600px] h-[920px] bg-share bg-no-repeat bg-cover bg-center"
    >
      <div
        className='bg-transparent my-20'
      >
        <img src={`${artists[0]?.images[1].url}`} 
          className='mx-auto'
        />
      </div>

      <div
        className='bg-transparent grid grid-cols-2 text-xl mx-10'
      >
        <div
          className='bg-transparent'
        >
          <h1
            className='bg-transparent text-2xl mb-2'
          >Top Artists:</h1>
          <div
            className='bg-transparent font-bold'
          >
            {
                artists?.map((artist, key) => (
                  <div
                   className='bg-transparent flex gap-[5px]'
                   key={key}
                  > 
                    <p className='bg-transparent' >{key +1}.</p>
                    <p className='bg-transparent'>{artist.name}</p>
                  </div>
                ))
              }
          </div>
        </div>
        <div
          className='bg-transparent'
        >
          <h1
            className='bg-transparent text-2xl mb-2'
          >Top Songs:</h1>
          <div
            className='bg-transparent font-bold'
          >
             {
                tracks?.map((track, key) => (
                  <div
                   className='bg-transparent flex gap-[5px]'
                   key={key}
                  > 
                    <p className='bg-transparent' >{key +1}.</p>
                    <p className='bg-transparent'>{track.name}</p>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopTracksToShare