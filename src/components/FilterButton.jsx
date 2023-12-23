import React from 'react';

export const FilterButton = ({id, value, name,checked, text, setProperty}) => {

  return (
    <div>
      <input className='absolute w-0 h-0 opacity-0' 
        type='radio'
        id={id}
        value={value}
        name={name}
        defaultChecked={checked}
        onClick={()=>setProperty(value)}
      />
      <label htmlFor={id}>
        <div 
          className=
            'border-solid border-2 border-spotify-basic-green rounded-full px-[12px] py-[7px] cursor-pointer checked:bg-blue-500'
        >
          {text}
        </div>
      </label>
     </div>
  )
}
