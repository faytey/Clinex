import Head from 'next/head';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Link from "next/link";
import ClimateData1 from '@/components/climatedata1';
import ClimateData2 from '@/components/climatedata2';
import ClimateData3 from '@/components/climatedata3';
import ClimateData4 from '@/components/climatedata4';
import ClimateData5 from '@/components/climatedata5';
import ClimateData6 from '@/components/climatedata6';
import ClimateData7 from '@/components/climatedata7';
import ClimateData8 from '@/components/climatedata8';
import ClimateData9 from '@/components/climatedata9';

export default function ClimateData(){
   
    useEffect(() => {
    AOS.init();
  }, []);  

  return (
    <>
      <Head>
        <title>Climate Data</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="p-[5%] pb-[60%] maindivforclimatedata" style={{backgroundImage:"url(images/bg9.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>
      <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500] lg:mt-[0] md:mt-[0] mt-[0.5cm]"><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>
      
      <div className='text-center lg:text-[250%] md:text-[220%] text-[220%]  mt-[1cm] font-[600]' style={{display:"block"}}>
        <img src="images/climate-change.png" width="60" style={{display:"inline-block"}}/> &nbsp; 
        <span className='text-[#fff]'>Climate Data</span> 
      </div>

      <div data-aos="zoom-in" className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[1cm] gap-8 text-[#000]' style={{transition:"0.5s ease-in-out"}}>
        <div className='grid-cols-1'>
        <ClimateData1 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData2 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData3 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData4 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData5 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData6 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData7 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData8 />
        </div>
        <div className='grid-cols-1'>
        <ClimateData9 />
        </div>
      </div>
      
      
      
      
      
      </div>
    </>
  );
};
