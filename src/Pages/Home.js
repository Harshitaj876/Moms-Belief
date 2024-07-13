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
      <div className='flex flex-col gap-[100px]'>
      {/*Hero Section*/}
        <div className='flex flex-col items-center justify-center gap-7 h-[759px] bg-[#FFF6CC]'>
          <img src='/Assets/illustration1.svg' alt='' className='hidden sm:block absolute top-32 left-[300px]'></img>
          <img src='/Assets/illustration2.svg' alt='' className='hidden sm:block absolute top-32 right-[300px]'></img>
          <h1 className='font-Noto font-medium text-[25px] sm:text-[40px] leading-[35px] sm:leading-[60px]  h-[105px] w-[270px] sm:h-[120px] sm:w-[608px] text-center text-[#151B4A]'>We Empower Mom's Beliefs & Enable Childs's <span className='relative inline-block'>Growth.<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span></h1>
          <h2 className='font-normal text-[18px] sm:text-[16px] leading-[25px] sm:leading-[30px] text-[#4E516C] h-[75px] w-[324px] sm:h-[60px] sm:w-[578px] text-center m-0 tracking-wide'>We are a research-driven holistic care provider for growing children through a wide array of programs.</h2>
          <Link to='/signup' className='font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767]'>Explore Programs</Link>
          <h2 className='font-normal text-[14px] sm:text-[16px] leading-[23px] sm:leading-[26px] text-[#4E516C] h-[69px] w-[254px] sm:h-[54px] sm:w-[373px] text-center'>Or Just take <a href='/assessment' className="underline">take a free assessment</a> to see how is the growth of your child.</h2>
        </div>

      {/*Programs*/}
        <div className='flex flex-col gap-[45px] items-center justify-center bg-[#E4F7F3] h-[944px]'>
          <div className='flex flex-col gap-[15px] items-center justify-center'>
            <h1 className='font-Noto font-medium text-[20px] sm:text-[32px] leading-[33px] sm:leading-[55px]  h-[66px] w-[293.11px] sm:h-[58.28px] sm:w-[633px] text-center text-[#151B4A]'>Customisable Expert <span className='relative inline-block'>Curated<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span> Programs</h1>
            <h2 className='hidden sm:block font-normal text-[18px] leading-[27px] text-[#4E516C] h-[54px] w-[766px] text-center m-0 tracking-wide'>These programs work on applied neurological science. Our experts have curated each program with the knowledge and insights from decades of experience.</h2>
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

      {/*How do we work*/}
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-[15px]'>
              <h1 className='font-Noto font-medium text-[20px] sm:text-[32px] leading-[50px] w-[136px] h-[33px] sm:w-[309px] sm:h-[50px] text-center'>
                <span className='block sm:hidden'>Who are we?</span>
                <span className='hidden sm:block'>How do we work?</span>
              </h1>
              <h2 className='font-normal text-base sm:text-lg sm:leading-[25px] leading-[27px] w-[303px] h-[125px] sm:w-[705px] sm:h-[54px] text-center text-[#4E516C]'> Mom’s Belief is an innovation and research-driven holistic care provider for children with Special Needs and operates through a Home-Based Program.</h2>
            </div>
        </div>

      {/*Expert*/}
      <div className='flex flex-col bg-[#E4F7F3] h-[817px] items-center justify-center gap-[60px]'>
          <div className='flex flex-col items-center justify-center gap-[15px]'>
            <h1 className='h-[110px] w-[334px] font-Noto text-center font-medium leading-[55px] text-[32px]'>Got More Questions?Talk To Our Experts</h1>
            <h2 className='h-[60px] w-[634px] text-center font-normal leading-[30px] text-[18px] text-[#4E516C] tracking-wide'>These programs work on applied neurological science. Our experts have curated each program with the knowledge </h2>
          </div>
          <div className='w-[1023px] h-[452px] rounded-[14px] bg-[#FFFFFF] flex flex-col items-center justify-center gap-[50px]'>
              <h1 className='font-semibold text-xl leading-[27px] tracking-wide h-[27px] w-[374px] text-[#151B4A]'>Find the best program for your child</h1>
              <form className='flex flex-col'>
                <div className='grid grid-cols-3 gap-5'>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Your Name</label>
                    <input placeholder='Enter your name' className='h-[45px] w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Your Child's Name</label>
                    <input placeholder="Enter your Child's name" className='h-[45px] w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Child's Age</label>
                    <input placeholder="Enter Child's age" className='h-[45px] w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                </div>

                <div className='flex mt-[22px] gap-5  '>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>E-mail id</label>
                    <input placeholder='Enter email id' className='h-[45px] w-[622px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Mobile Number</label>
                    <input placeholder='Enter mobile no.' className='h-[45px] w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                </div>
              </form>
              <div className='flex flex-col gap-[10px] items-center'>
                <Link to='/signup' className='font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767] w-[174px] h-[44px]'>Request a call</Link>
                <h3 className='w-[307px] h-[24px] font-normal text-[14px] leading-6 text-[#4E516C]'>We’ll keep your information private & secure</h3>
              </div>
          </div>
      </div>
      {/*Plans and Packages*/}
      {/*Footer*/}
      </div>
  );
}

export default Home