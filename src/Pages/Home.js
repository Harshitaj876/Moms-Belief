import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Card from '../Components/Card';
import { FaFacebook} from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { Footer_Comapny_Link, Footer_Resources_Link } from '../data';

const Home = () => {

  const data=[
    {image:'./Assets/image1.svg',heading:'Emotional Intelligence',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'},
    {image:'./Assets/image2.svg',heading:'Special Program',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'},
    {image:'./Assets/image3.svg',heading:'Regular Program',description:'Children with higher emotional intelligence are better able to pay attention. Take a trial program now!'}
  ];

  return (
      <div className='flex flex-col gap-[100px]'>
      {/*Hero Section*/}
        <div className='flex flex-col items-center justify-center gap-7 h-[759px] bg-hero_bgmobile sm:bg-hero_bg bg-contain sm:bg-contain bg-no-repeat'>
          <img src='/Assets/headerimage1.svg' alt='' className='block absolute bottom-0 sm:bottom-6 left-10 w-[147.07px] h-[151.86px] sm:w-[297.42px] sm:h-[307.11px]'></img>
          <img src='/Assets/headerimage2.svg' alt='' className='block absolute bottom-0 sm:bottom-4 right-10 w-[82.4px] h-[117.79px] sm:w-[196.42px] sm:h-[280.79px]'></img>
          <img src='/Assets/illustration1.svg' alt='' className='hidden sm:block absolute top-32 left-[300px]'></img>
          <img src='/Assets/illustration2.svg' alt='' className='hidden sm:block absolute top-32 right-[300px]'></img>
          <h1 className='font-Noto font-medium text-[25px] sm:text-[40px] leading-[35px] sm:leading-[60px]  h-[105px] w-[270px] sm:h-[120px] sm:w-[608px] text-center text-[#151B4A]'>We Empower Mom's Beliefs & Enable Childs's <span className='relative inline-block'>Growth.<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span></h1>
          <h2 className='font-normal text-[18px] sm:text-[16px] leading-[25px] sm:leading-[30px] text-[#4E516C] h-[75px] w-[324px] sm:h-[60px] sm:w-[578px] text-center m-0 tracking-wide'>We are a research-driven holistic care provider for growing children through a wide array of programs.</h2>
          <div className='relative'>
          <Link to='/programs' className=' font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767]'>Explore Programs</Link>
          <img src='/Assets/illustration3.svg' alt='' className='absolute bottom-0 right-[-100px] hidden sm:block'></img>
          <img src='/Assets/illustration4.svg' alt='' className='absolute bottom-0 right-[-40px] block sm:hidden'></img>
          </div>
          <h2 className='font-normal text-[14px] sm:text-[16px] leading-[23px] sm:leading-[26px] text-[#4E516C] h-[69px] w-[254px] sm:h-[54px] sm:w-[373px] text-center'>Or Just take <a href='/assessment' className="underline">take a free assessment</a> to see how is the growth of your child.</h2>
        </div>

      {/*Programs*/}
        <div className='flex flex-col gap-[45px] rounded-2xl sm:h-[944px] items-center justify-center m-[15px] sm:m-5 bg-program_bgmobile sm:bg-program_bg bg-cover pt-[100px] pb-[80px]'>
          <div className='flex flex-col gap-[15px] items-center justify-center pt-5 sm:pt-0'>
            <h1 className='font-Noto font-medium text-[20px] sm:text-[32px] leading-[33px] sm:leading-[55px]  h-[66px] w-[293.11px] sm:h-[58.28px] sm:w-[633px] text-center text-[#151B4A]'>Customisable Expert <span className='relative inline-block'>Curated<img src='/Assets/underline.svg' alt='' className='absolute bottom-[-5px] left-0 right-0 w-full h-auto'></img></span> Programs</h1>
            <h2 className='hidden sm:block font-normal text-[18px] leading-[27px] text-[#4E516C] h-[54px] w-[766px] text-center m-0 tracking-wide'>These programs work on applied neurological science. Our experts have curated each program with the knowledge and insights from decades of experience.</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-[50px] sm:gap-[100px]'>
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
        <div className='flex flex-col items-center justify-center gap-[70px] rounded-md'>
            <div className='flex flex-col items-center justify-center gap-[15px]'>
              <h1 className='font-Noto font-medium text-[20px] sm:text-[32px] leading-[50px] w-[136px] h-[33px] sm:w-[309px] sm:h-[50px] text-center text-[#151B4A]'>
                <span className='block sm:hidden'>Who are we?</span>
                <span className='hidden sm:block'>How do we work?</span>
              </h1>
              <h2 className='font-normal text-base sm:text-lg sm:leading-[25px] leading-[27px] w-[303px] h-[125px] sm:w-[705px] sm:h-[54px] text-center text-[#4E516C]'> Mom’s Belief is an innovation and research-driven holistic care provider for children with Special Needs and operates through a Home-Based Program.</h2>
            </div>
            <img src='/Assets/work.svg' alt='' className='hidden sm:block'></img>
            <div className='block sm:hidden relative mt-[70px]' >
              <img src='/Assets/workmobile.svg' alt='' ></img>
              <img src='/Assets/workmobile2.svg' alt=''className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></img>
            </div>
        </div>

      {/*Expert*/}
      <div className='flex flex-col rounded-xl bg-expert_bgmobile bg-cover sm:bg-expert_bg m-[15px] sm:m-5 sm:h-[817px] items-center justify-center gap-[30px] sm:gap-[60px] py-10'>
          <div className='flex flex-col items-center pt-10 gap-[15px]'>
            <h1 className='h-[66px] w-[209px] sm:h-[110px] sm:w-[334px] font-Noto text-center font-medium leading-[33px] sm:leading-[55px] text-[20px] sm:text-[32px] text-[#151B4A]'>Got More Questions?Talk To Our Experts</h1>
            <h2 className='h-[88px] w-[276px] sm:h-[60px] sm:w-[634px] text-center font-normal leading-[22px] sm:leading-[30px] text-[16px] sm:text-[18px] text-[#4E516C] tracking-wide'>These programs work on applied neurological science. Our experts have curated each program with the knowledge </h2>
          </div>
          <div className='sm:h-[452px] rounded-[14px] sm:bg-[#FFFFFF] flex flex-col items-center justify-center gap-[20px] sm:gap-[50px] p-10'>
              <h1 className='font-semibold text-[18px] sm:text-xl leading-[27px] tracking-wide h-[54px] w-[207px] sm:h-[27px] sm:w-[374px] text-[#151B4A] text-center'>Find the best program for your child</h1>
              <form className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Your Name</label>
                    <input type='text' placeholder='Enter your name' className='text-[#4E516C] h-[40px] w-[311px] sm:h-[45px] sm:w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Your Child's Name</label>
                    <input type='text' placeholder="Enter your Child's name" className='text-[#4E516C] h-[40px] w-[311px] sm:h-[45px] sm:w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Child's Age</label>
                    <input type='number' placeholder="Enter Child's age" className='text-[#4E516C] h-[40px] w-[311px] sm:h-[45px] sm:w-[301px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row mt-[22px] gap-5  '>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>E-mail id</label>
                    <input type='email' placeholder='Enter email id' className='text-[#4E516C] h-[40px] w-[311px] sm:h-[45px] sm:w-[622px] rounded-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='h-[17px] font-semibold text-[14px] leading-[16.94px] tracking-wide text-[#4E516C] mb-[10px]'>Mobile Number</label>
                    <div className='flex items-center'>
                      <select className='h-[45px] w-[63px] rounded-l-[5px] text-[#4E516C] border-[1px] border-[#CAC5C5] p-[5px] flex items-center justify-center'>
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                      </select>
                      <input type='tel' placeholder='Enter mobile no.' className='text-[#4E516C] h-[45px] w-full rounded-r-[5px] border-[1px] border-[#CAC5C5] pl-[10px]' />
                  </div>
                  </div>
                </div>
              </form>
              <div className='flex flex-col gap-[10px] items-center'>
                <button to='/signup' className='font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[30px] py-[10px] text-[#FFF] hover:bg-[#187767]'>Request a call</button>
                <h3 className='w-[189px] h-[48px] sm:w-[307px] sm:h-[24px] font-normal text-[14px] leading-6 text-[#4E516C] text-center'>We’ll keep your information private & secure</h3>
              </div>
          </div>
      </div>


      {/*Plans and Packages*/}
      <div className='hidden sm:flex flex-col gap-[50px] items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-[15px]'>
          <h1 className='w-[276px] h-[55px font-Noto font-medium text-[32px] leading-[55px] text-[#151B4A]'>Plans & Packages</h1>
          <h2 className='w-[680px] h-[60px] font-normal text-[18px] leading-[30px] text-center text-[#4E516C]'>These programs work on applied neurological science. Our experts have curated each program with the knowledge</h2>
        </div>
        <div className='flex flex-col'>
            <div class="grid grid-cols-4 gap-[17px] items-center justify-center">
                <div class="flex flex-col bg-[#FFCC00] w-[270px] h-[128px] items-center justify-center">
                    <p class="font-semibold w-[109px] h-9 text-[30px] text-[#151B4A]">₹5,200</p>
                    <p class="mt-[15px] h-[19px] w-[205px] font-normal text-[16px] text-[#151B4A]">for 8 sessions per month</p>
                </div>
                <div class="flex flex-col bg-[#FFF9E1] w-[250px] h-[115px] items-center justify-center">
                    <p class="font-semibold w-[109px] h-9 text-[30px] text-[#151B4A]">₹7,200</p>
                    <p class="mt-[15px] h-[19px] w-[205px] font-normal text-[16px] text-[#151B4A]">for 12 sessions per month</p>
                </div>
                <div class="flex flex-col bg-[#FFF9E1] w-[250px] h-[115px] items-center justify-center">
                    <p class="font-semibold w-[109px] h-9 text-[30px] text-[#151B4A]">₹14,400</p>
                    <p class="mt-[15px] h-[19px] w-[205px] font-normal text-[16px] text-[#151B4A]">for 24 sessions per month</p>
                </div>
                <div class="flex flex-col bg-[#FFF9E1] w-[250px] h-[115px] items-center justify-center">
                    <p class="font-semibold w-[109px] h-9 text-[30px] text-[#151B4A]">₹16,200</p>
                    <p class="mt-[15px] h-[19px] w-[205px] font-normal text-[16px] text-[#151B4A]">for 36 sessions per month</p>
                </div>
            </div>
            <div class="border-[1px] border-[#FFCC00] w-[1110px] p-[30px]">
                <h2 class="font-semibold text-[20px] mb-[40px]">Program Package Includes</h2>
                <div class="flex row items-top justify-between">
                  <ul class="marker:text-[#EA5858] list-disc pl-[15px] space-y-[30px]">
                      <li className='text-[#4E516C] font-normal text-[14px]'>Minimum 14 Therapy Sessions</li>
                      <li className='text-[#4E516C] font-normal text-[14px]'>10% OFF on all the center services</li>
                      <li className='text-[#4E516C] font-normal text-[14px]'>12 Resource Kits</li>
                  </ul>
                  <ul class="marker:text-[#EA5858] list-disc pl-[15px] space-y-[30px]">
                      <li className='text-[#4E516C] font-normal text-[14px]'>Free Access To The Exclusive Webinars</li>
                      <li className='text-[#4E516C] font-normal text-[14px]'>Access to community WhatsApp group</li>
                      <li className='text-[#4E516C] font-normal text-[14px]'>2 Exclusive Expert Sessions Per Quarter</li>
                  </ul>
                  <ul class="marker:text-[#EA5858] list-disc pl-[15px] space-y-[30px]">
                      <li className='text-[#4E516C] font-normal text-[14px]'>12 Counselling Sessions</li>
                      <li className='text-[#4E516C] font-normal text-[14px]'>12 Q&A Sessions</li>
                  </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-[10px]'>
          <Link to='/enroll' className=' font-semibold text-[15px] sm:text-[16px] bg-[#125E50] rounded-[60px] px-[15px] py-[6px] sm:px-[30px] sm:py-[10px] text-[#FFF] hover:bg-[#187767]'>Enroll now</Link>
          <h6 className='w-[171px] h-[24px] text-[#4E516C] font-normal text-[14px] leading-[24px]'>Get 2 Week Free Access</h6>
        </div>
      </div>

      {/*Footer*/}
      <div className='flex flex-col rounded-xl gap:[20px] sm:gap-[35px] m-[15px] p-[40px] sm:p-[50px] bg-footer_bgmobile sm:bg-footer_bg bg-cover justify-center sm:justify-start'>
        <div className='flex row gap-[50px] mt-8 items-center justify-center sm:items-start sm:justify-start'>
        <div className='flex flex-col items-center sm:items-start gap-[15px] sm:gap-[50px]'>
          <img src='/Assets/logo.svg' alt='logo' className='h-[23.97px] w-[103.22px] sm:h-[36px] sm:w-[155px]'></img>
          <div className='flex flex-col gap-[40px] sm:gap-[30px]'>
            <div className='flex flex-col gap-[15px]'>
              <h3 className='h-[14px]  sm:h-[24px] sm:w-[186px] font-semibold text-[20px] leading-6 text-[#151B4A] text-center sm:text-left'>Let’s stay in touch</h3>
              <h4 className='w-[293px] h-[96px] sm:w-[393px] font-normal text-[16px] leading-6 text-[#4E516C] tracking-wide text-center sm:text-left'>Be it your child’s academic issues, teenage troubles, developmental queries, their future concerns, your relationship with them, or your own mental peace as a parent.</h4>
            </div>
            <div className='flex gap-[15px] items-center justify-center sm:items-start sm:justify-start'>
              <FaFacebook className='h-[19px] w-[19px] sm:h-[23px] sm:w-[23px] text-[#151B4A]'/>
              <AiFillTwitterCircle className='h-[19px] w-[19px] sm:h-[23px] sm:w-[23px] text-[#151B4A]'/>
              <AiFillInstagram className='h-[19px] w-[19px] sm:h-[23px] sm:w-[23px] text-[#151B4A]'/>
            </div>
          </div>
        </div>

          <div className='hidden sm:flex row h-[276px] w-[420px] justify-between'>
            <div className='flex flex-col justify-between'>
              <h6 className='font-semibold text-base leading-6 text-[#151B4A]'>Company</h6>
                {Footer_Comapny_Link.map(({name, path}, index) =>{
                    return(
                        <NavLink to={path}>
                          <div className="w-fit">
                            <h3 className='relative font-normal text-[16px] leading-[27px] text-[#4E516C] group'>{name}
                            <span className='absolute left-0 bottom-1 w-full h-[1px] bg-[#4E516C] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></span>
                            </h3>
                          </div>
                        </NavLink>
                    )
                  })}
            </div>
            <div className='flex flex-col justify-between'>
                <h6 className='font-semibold text-base leading-6 text-[#151B4A]'>Resources</h6>
                {Footer_Resources_Link.map(({name, path}, index) =>{
                    return(
                        <NavLink to={path}>
                          <div className="w-fit">
                            <h3 className='font-normal relative text-[16px] leading-[27px] text-[#4E516C] group'>{name}
                            <span className='absolute left-0 bottom-1 w-full h-[1px] bg-[#4E516C] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></span>
                            </h3>
                            
                          </div>
                        </NavLink>
                    )
                  })}
            </div>
          </div>
        </div>
        <div className='relative mt-6'>
          <img src='/Assets/footerImage.svg' alt='footer' className='absolute right-0 bottom-0 h-[47.5px] w-[55.81px] sm:h-[144.52px] sm:w-[169.78px]'></img>
          <hr className="border-[#4E516C/13]"/>
        </div>
        <div className='flex items-center justify-center'>
          <h1 className='font-normal text-[8px] sm:text-[14px] leading-6 tracking-wide text-[#4E516C]'>Copyright © 2022 Mom’s Belief. A unit of Rays of Belief Pvt Ltd.</h1>
        </div>
      </div>

      </div>
  );
}

export default Home