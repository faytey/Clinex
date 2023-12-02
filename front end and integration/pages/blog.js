import Head from 'next/head';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Link from "next/link";

export default function Blog(){

    const [allBlogPosts, setAllBlogPosts] = useState([]);
    const getAllBlogPostsData = async () => {
      try {
        const response = await axios.get('/api/showallblogpostsdatabyadmin'); // Correct API endpoint URL
        setAllBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    useEffect(() => {
    AOS.init();
    getAllBlogPostsData();
  }, []);  

  return (
    <>
      <Head>
        <title>CliNex Blog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="p-[5%] pb-[60%] maindivforblog" style={{backgroundImage:"url(images/people.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>
      <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500] lg:mt-[0] md:mt-[0] mt-[0.5cm]"><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>
      
      <div className='text-center lg:text-[220%] md:text-[200%] text-[180%]  mt-[1cm] font-[600]' style={{display:"block"}}>
        <img src="images/blog2.png" width="60" style={{display:"inline-block"}}/> &nbsp; 
        <span className='text-[#fff]'>CliNex Blog</span> 
      </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-[2cm]'>
        {allBlogPosts.map((posts) => (
        <div key={posts.id} data-aos="zoom-in" className='grid grid-cols-1 bg-[rgba(0,0,0,0.96)]' style={{transition:"0.5s ease-in-out", border:"3px solid #fff"}}>
         <img className='w-[100%]' src={posts.picturelink} />
         <div className='px-[5%] pb-[1cm]'>
         <div className='mt-[0.3cm]' style={{display:"block"}}>
            <img src="images/calendar.png" width="40" style={{display:"inline-block"}}/> &nbsp; 
            <span className='font-[500] text-[120%]'>{posts.date}</span> 
         </div>
         <div className='mt-[0.3cm] uppercase font-[500] lg:text-[120%] md:text-[120%]'>{posts.description}</div>
         <div className='mt-[0.5cm]' style={{display:"block"}}><Link className='text-[120%] font-[600] text-[#ccc]' href={posts.sociallink}><span>See More</span> &nbsp; <i className='fa fa-hand-point-right'></i></Link></div>
         </div>
         </div>
         ))}
        </div>
      
      </div>
    </>
  );
};
