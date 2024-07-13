import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <div className='flex flex-col items-center justify-center gap-7 h-[759px] bg-[#FFF6CC]' style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}>
          <h1 className='font-Noto font-medium text-[40px] leading-[60px] h-[120px] w-[608px] text-center text-[#151B4A]'>We Empower Mom's Beliefs & Enable Childs's Growth.</h1>
          <h2 className='font-normal text-[18px] leading-[30px] text-[#4E516C] h-[60px] w-[578px] text-center m-0'>We are a research-driven holistic care provider for growing children through a wide array of programs.</h2>
          <Link to='/signup' className='font-semibold text-[16px] bg-[#125E50] rounded-[60px] px-[30px] py-[10px] text-[#FFF] hover:bg-[#187767]'>Explore Programs</Link>
          <h2 className='font-normal text-[16px] leading-[26px] text-[#4E516C] h-[54px] w-[373px] text-center'>Or Just take <a href='/assessment' className="underline">take a free assessment</a> to see how is the growth of your child.</h2>
        </div>

      </div>
  );
}

export default Home