import React from 'react'

const blob_filter_id = 'blob';

const Blob = () => {

  return (
    <svg style={{position: 'fixed', top: '100vh'}}>
      <defs>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
          <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
        </filter>
      </defs>
    </svg>
  )
}

export default Blob;
export {blob_filter_id};