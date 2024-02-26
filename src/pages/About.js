import React, {useRef} from 'react'
import { Link} from 'react-router-dom';
//framer motion library
import {motion} from 'framer-motion';


export const About = () => {
  const popularityRef = useRef();
  return (
    <motion.div
      className='flex flex-col items-center py-10 gap-5 text-justify'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div
        className='w-[80%]'
      >
        <h1
          className='text-lg font-bold'
        >What is SpotifyStats?</h1>
        <p>
          SpotifyStats is a web app designed to offer users an insightful glimpse into their Spotify listening habits whenever they want. The focus is on two key elements - top artists and top songs. The user is also able to check the popularity of the song/artist they listened to.
          &#40;
          <button
            className='underline text-violet-200 hover:text-violet-400'
            onClick={() => {
              popularityRef.current.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            more about popularity&gt;&gt;
          </button>
          &#41; <br/><br/>
          In SpotifyStats the Spotify Web API is used. The official documentation and more about policies of Spotify API:
          <Link 
            to={'https://developer.spotify.com/documentation/web-api'}
            className='underline ml-[3px] text-violet-200 hover:text-violet-400'
          >
            more &gt;&gt;
          </Link>
        </p>
      </div>
      <div
        className='w-[80%]'
      >
        <h1
          className='text-lg font-bold'
          id='popularity'
          ref={popularityRef}
        >How popularity is counted?</h1>
        <p>
          &bull; <strong>The popularity of the track.</strong> The value will be between 0 and 100, with 100 being the most popular.
          The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.
          Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. Note: the popularity value may lag actual popularity by a few days: the value is not updated in real time. The result is based on accessibility in the USA.
          <br/>
          &bull; <strong>The popularity of the artist.</strong>  The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks. The result is based on accessibility in the USA.
        </p>
      </div>
    </motion.div>
  )
}
