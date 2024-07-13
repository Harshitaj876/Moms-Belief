import React from 'react'
import { links } from '../data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { HiMenuAlt1 } from 'react-icons/hi'
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between px-10 py-[10px] bg-[#565656]/5 mt-0 sm:mt-8 absolute left-0 right-0'>
      <div className='flex items-center gap-5 w-full sm:w-auto'>
        <HiMenuAlt1 style={{ height: '20px', width: '23px' }} className='sm:hidden' />
        <LazyLoadImage
          src='/Assets/logo.png'
          alt='Logo'
          className='h-[36px] w-[155px] mx-auto sm:mx-0'
        />
      </div>

        <ul className='hidden sm:flex row gap-[35px]'>
          {links.map(({name, path}, index) =>{
              return(
                <li key ={index}>
                  <NavLink to={path}>
                    <div className="relative">
                      <h3 className='font-medium text-[14px]'>{name}</h3>
                      {name === "Emotional Intelligence" && (
                        <span className="absolute bottom-[18px] right-0 w-[27px] h-[12px] bg-[#EA5858] text-white text-[9px] flex items-center justify-center rounded-[6px]">
                          NEW
                        </span>
                      )}
                    </div>
                  </NavLink>
                </li>
              )
            })}
        </ul>

      <div className='hidden sm:flex row gap-[10px]'>
        <Link to='/login' className='font-semibold text-[14px] border-[1px] border-[#125E50] rounded-[60px] px-[20px] py-[7px] text-[#125E50] hover:bg-[#FAFFFE]'>Login</Link>
        <Link to='/signup' className='font-semibold text-[14px] bg-[#125E50] rounded-[60px] px-[20px] py-[7px] text-[#FFF] hover:bg-[#187767]'>Signup</Link>
      </div>
    </div>
  )
}

export default NavBar