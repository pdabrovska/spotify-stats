import React from 'react';
import html2canvas from 'html2canvas';

const GenerateShareImg = () => {
  const generateImg = () => {
    html2canvas(document.querySelector('.topTracks'),{allowTaint: false , useCORS: true}).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const img = new Image();
      img.src = imgData;
      img.width = 1080;
      img.height = 1920;
      img.className = 'share-img object-contain';
      
      document.querySelector('.imgToShare').appendChild(img);
    })
  }
  return generateImg();
}

export default GenerateShareImg