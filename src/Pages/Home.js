import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <div className='flex flex-col items-center justify-center gap-7 h-[759px] bg-[#FFF6CC]' style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}>
          <h1 className='font-Noto font-medium text-[25px] sm:text-[40px] leading-[35px] sm:leading-[60px]  h-[105px] w-[270px] sm:h-[120px] sm:w-[608px] text-center text-[#151B4A]'>We Empower Mom's Beliefs & Enable Childs's <span className='relative inline-block'>Growth.<img src='/Assets/underline.svg' alt='' className='absolute left-0 right-0 w-full h-auto'></img></span></h1>
          <h2 className='font-normal text-[18px] sm:text-[16px] leading-[25px] sm:leading-[30px] text-[#4E516C] h-[75px] w-[324px] sm:h-[60px] sm:w-[578px] text-center m-0'>We are a research-driven holistic care provider for growing children through a wide array of programs.</h2>
          <Link to='/signup' className='font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767]'>Explore Programs</Link>
          <h2 className='font-normal text-[14px] sm:text-[16px] leading-[23px] sm:leading-[26px] text-[#4E516C] h-[69px] w-[254px] sm:h-[54px] sm:w-[373px] text-center'>Or Just take <a href='/assessment' className="underline">take a free assessment</a> to see how is the growth of your child.</h2>
        </div>
      </div>
  );
}

export default Home