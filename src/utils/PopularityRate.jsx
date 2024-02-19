import React from 'react';

export const PopularityRate = ({rate}) => {
  let popularity = rate <= 25 ? 1 : rate <= 50 ? 2 : rate <= 75 ? 3 : 4 ;

  const isSecond = popularity > 1 ? true : false;
  const isThird = popularity > 2 ? true : false;
  const isFourth = popularity === 4 ? true : false;

  return (
    <div className='bg-inherit flex gap-1 items-end'>
      <div className='w-1 h-6 bg-green-500'></div>
      <div className={isSecond ? 'w-1 h-8 bg-green-500' : 'w-1 h-8 bg-blue-500'}></div>
      <div className={isThird ? 'w-1 h-10 bg-green-500' : 'w-1 h-10 bg-blue-500'}></div>
      <div className={isFourth ? 'w-1 h-12 bg-green-500' : 'w-1 h-12 bg-blue-500'}></div>
    </div>
  )
}
