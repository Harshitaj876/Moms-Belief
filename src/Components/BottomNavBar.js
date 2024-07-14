import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
  return (
    <div className='sm:hidden fixed bottom-0 left-0 right-0 bg-black flex items-center justify-around h-[80px] rounded-t-[10px]'>
      <Link to='/programs' className='flex flex-col items-center gap-[13px]'>
        <img src='/Assets/programIcon.svg' alt='Programs' className='h-6 w-6' />
        <span className='text-[12px] font-normal text-[#FFFFFF]'>Programs</span>
      </Link>
      <Link to='/centre' className='flex flex-col items-center  gap-[13px]'>
        <img src='/Assets/centreIcon.svg' alt='Centre' className='h-6 w-6' />
        <span className='text-[12px]  font-normal text-[#FFFFFF]'>Centres</span>
      </Link>
      <Link to='/assessment' className='flex flex-col items-center  gap-[13px]'>
        <img src='/Assets/assessmentIcon.svg' alt='Assessment' className='h-6 w-6' />
        <span className='text-[12px]  font-normal text-[#FFFFFF]'>Assessment</span>
      </Link>
      <Link to='/user' className='flex flex-col items-center  gap-[13px]'>
        <img src='/Assets/userIcon.svg' alt='User' className='h-6 w-6' />
        <span className='text-[12px]  font-normal text-[#FFFFFF]'>User</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
