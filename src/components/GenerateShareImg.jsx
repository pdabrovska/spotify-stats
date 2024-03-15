import React from 'react';
import html2canvas from 'html2canvas';

const GenerateShareImg = () => {
  const generateImg = () => {
    html2canvas(document.querySelector('.topTracks')).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const img = new Image();
      img.src = imgData;
      img.width = 500;
      img.height = 600;
      document.querySelector('.shareScreen').appendChild(img);
    })
  }
  return generateImg();
}

export default GenerateShareImg