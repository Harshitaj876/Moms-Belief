import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='flex flex-col items-center gap-7'>
        <img src={data.image} alt='Images' className='border-[1.5px] border-[#EA5858] p-4'></img>
        <div className='flex flex-col gap-2'>
            <h3 className='h-[27px] w-[231px] text-[#151B4A] font-semibold text-[20px] leading-[27px]'>{data.heading}</h3>
            <h4 className='h-[81px] w-[290px] text-[#4E516C] font-normal text-[16px] leading-[27px]'>{data.description}</h4>
            <Link to='/programs' className='h-[27px] w-[139px] text-[#EA5858] font-normal text-[16px] leading-[27px]'>See all programs</Link>
        </div>
    </div>
  )
}

export default Card