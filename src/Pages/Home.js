import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

const Home = () => {

  const data=[
    {image:'./Assets/image1.svg',heading:'Emotional Intelligence',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'},
    {image:'./Assets/image2.svg',heading:'Special Program',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'},
    {image:'./Assets/image3.svg',heading:'Regular Program',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'}
  ];

  return (
      <div>
        <div className='flex flex-col items-center justify-center gap-7 h-[759px] bg-[#FFF6CC]'>
          <img src='/Assets/illustration1.svg' alt='' className='hidden sm:block absolute top-32 left-[300px]'></img>
          <img src='/Assets/illustration2.svg' alt='' className='hidden sm:block absolute top-32 right-[300px]'></img>
          <h1 className='font-Noto font-medium text-[25px] sm:text-[40px] leading-[35px] sm:leading-[60px]  h-[105px] w-[270px] sm:h-[120px] sm:w-[608px] text-center text-[#151B4A]'>We Empower Mom's Beliefs & Enable Childs's <span className='relative inline-block'>Growth.<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span></h1>
          <h2 className='font-normal text-[18px] sm:text-[16px] leading-[25px] sm:leading-[30px] text-[#4E516C] h-[75px] w-[324px] sm:h-[60px] sm:w-[578px] text-center m-0'>We are a research-driven holistic care provider for growing children through a wide array of programs.</h2>
          <Link to='/signup' className='font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767]'>Explore Programs</Link>
          <h2 className='font-normal text-[14px] sm:text-[16px] leading-[23px] sm:leading-[26px] text-[#4E516C] h-[69px] w-[254px] sm:h-[54px] sm:w-[373px] text-center'>Or Just take <a href='/assessment' className="underline">take a free assessment</a> to see how is the growth of your child.</h2>
        </div>

        <div className='flex flex-col gap-[45px] items-center justify-center bg-[#E4F7F3]'>
          <div className='flex flex-col gap-[15px] items-center justify-center'>
            <h1 className='font-Noto font-medium text-[20px] sm:text-[32px] leading-[33px] sm:leading-[55px]  h-[66px] w-[293.11px] sm:h-[58.28px] sm:w-[633px] text-center text-[#151B4A]'>Customisable Expert <span className='relative inline-block'>Curated<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span> Programs</h1>
            <h2 className='hidden sm:block font-normal text-[18px] leading-[27px] text-[#4E516C] h-[54px] w-[766px] text-center m-0 '>These programs work on applied neurological science. Our experts have curated each program with the knowledge and insights from decades of experience.</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] sm:gap-[100px]'>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Card data={item} />
                {index < data.length - 1 && (
                  <hr className="block sm:hidden mx-auto w-[146px] border-[#EA5858]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Home