import Link from "next/link";
import { useState } from "react";

export default function ProjectHeader(){
   const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

    return (
      <nav className='flex items-center flex-wrap px-[5%] navbar' style={{background:"rgba(0,0,0,0.8)"}}>
      <div id="logo">
        <Link href='/' className='inline-flex items-center'>
        <span className="text-[160%] text-[#fff] font-[600]">
            <img src="images/thelogo.png" width="120" className="cursor-pointer"/>
          </span>
          <span className='text-xl text-white font-bold uppercase tracking-wide text-[90%]'></span>
        </Link>
      </div>
      <button id="headerbutton"
        className=' inline-flex p-3 hover:bg-maroon-600 rounded lg:hidden text-[#eee] ml-auto outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/* Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex gap-4 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto py-[2%]'
        style={{fontSize:"110%", transition:"2s ease-in-out"}}>
           
            <span style={{transition:"1s ease-in-out"}} className="rounded-md">
            <Link href='/minttoken' onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-[#eee] items-center justify-center headeranchors'>
               <span className="headeranchorsinnerspan">Become a Member</span>
            </Link>
          </span>

          <span style={{transition:"1s ease-in-out"}} className="rounded-md">
            <Link href='/governance' onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-[#eee] items-center justify-center headeranchors'>
              <span className="headeranchorsinnerspan">Governance</span>
            </Link>
            </span>

            <span style={{transition:"1s ease-in-out"}} className="rounded-md">
            <Link href='/climatedata' onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-[#eee] items-center justify-center headeranchors'>
              <span className="headeranchorsinnerspan">Climate Data</span>
            </Link>
            </span>

            <span style={{transition:"1s ease-in-out"}} className="rounded-md">
            <Link href='/blog' onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-[#eee] items-center justify-center headeranchors'>
              <span className="headeranchorsinnerspan">Blog</span>
            </Link>
            </span>

            <span style={{transition:"1s ease-in-out"}} className="rounded-md">
            <Link href='/adminsignin' onClick={handleClick} className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-[#eee] items-center justify-center headeranchors'>
              <span className="headeranchorsinnerspan">Admin Area</span>
            </Link>
            </span>

        </div>
      </div>
    </nav>

    );
}