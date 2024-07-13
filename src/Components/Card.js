import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className='flex flex-col items-center gap-7'>
      <img src={data.image} alt='Images' className='border-[1.5px] border-[#EA5858] p-4'></img>
      <div className='flex flex-col gap-2 items-center sm:items-start'>
        <h3 className='h-[27px] w-[231px] text-[#151B4A] font-semibold text-[20px] leading-[27px] text-center sm:text-left'>{data.heading}</h3>
        <h4 className='h-[81px] w-[290px] text-[#4E516C] font-normal text-[16px] leading-[27px] text-center sm:text-left'>{data.description}</h4>
        <Link 
          to='/programs' 
          className='relative h-[27px]  text-[#EA5858] font-normal text-[16px] leading-[27px] text-center sm:text-left group'>
          See all programs
          <span className='absolute left-0 bottom-1 w-full h-[1px] bg-[#EA5858] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></span>
        </Link>
      </div>
    </div>
  )
}

export default Card;
