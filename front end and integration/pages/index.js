import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import ProjectHeader from '@/components/header';
import ClimateData1 from '@/components/climatedata1';
import ClimateData5 from '@/components/climatedata5';
import Footer from '@/components/footer';

export default function Home(){
  const [homeBlogPosts, setHomeBlogPosts] = useState([]);
  const getHomeBlogPostsData = async () => {
    try {
      const response = await axios.get('/api/showblogdatabyadminonhomepage'); // Correct API endpoint URL
      setHomeBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    AOS.init();
    getHomeBlogPostsData();
  }, [])
  return (
    <>
    <Head>
   <title>CliNex - Offering solutions to the planet's ecosystem</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className='maindiv'>
    <ProjectHeader />
    <div className='lg:px-[15%] md:px-[10%] px-[5%]' style={{transition:"0.5s ease-in-out"}}>


      <div data-aos="zoom-out" className='p-[5%] lg:pt-[3%] pb-[10%] bg-[rgba(200,210,200,0.98)] lg:mt-[0] md:mt-[1cm] mt-[1cm] rounded-xl' style={{transition:"0.5s ease-in-out"}}>
      <div className='text-center text-[#090] lg:text-[150%] px-[10%] mx-[auto] secondmenu'>
        <Link href="/"><img src="images/thelogo.png" width="160" className='cursor-pointer' style={{display:"inline-block"}} /></Link> &nbsp; &nbsp; &nbsp; &nbsp;
        <Link href="/minttoken"><span className='secondmenuspan pb-[0.1cm]'>Become a Member</span></Link> &nbsp; &nbsp;
        <Link href="/governance"><span className='secondmenuspan pb-[0.1cm]'>Governance</span></Link> &nbsp; &nbsp;
        <Link href="/climatedata"><span className='secondmenuspan pb-[0.1cm]'>Climate Data</span></Link> &nbsp; &nbsp;
        <Link href="/blog"><span className='secondmenuspan pb-[0.1cm]'>Blog</span></Link> &nbsp; &nbsp;
        <Link href="/adminsignin"><span className='secondmenuspan pb-[0.1cm]'>Admin Area</span></Link>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:mt-[1cm] gap-8'>
      <div className='grid-cols-1'>
        <div className='lg:text-[250%] md:text-[200%] text-[150%] font-[600] text-[#090]'>Built on StarkNet to Confront Climate Change Problems</div>
        <div className='lg:text-[130%] md:text-[120%] text-[110%] text-[#060] mt-[1cm]'>Providing the most impactful solutions to climate related problems around the world. 
        CliNex DAO is open to NGOs, businesses, agencies, and organisations. To become a member, you will have to buy CliNex tokens which give you access to the DAO.</div>
        <div className='mt-[1cm]'><i className='fa fa-handshake-angle text-[#090] font-[600] text-[120%]'></i> &nbsp; <Link href="/governance"><button className='px-[0.5cm] py-[0.2cm] bg-[#090] rounded-full font-[600] cursor-pointer firstsectionbuttons'>Join CliNex DAO</button></Link></div>
        <div className='mt-[0.5cm]'><i className='fa fa-people-group text-[#090] font-[600] text-[120%]'></i> &nbsp; <Link href="#homeblogupdates"><button className='px-[0.5cm] py-[0.2cm] bg-[#090] rounded-full font-[600] cursor-pointer firstsectionbuttons'>Latest Community Updates</button></Link></div>
        <div className='mt-[0.5cm]'><i className='fa fa-cloud-sun text-[#090] font-[600] text-[120%]'></i> &nbsp; <Link href="#homeclimatediv"><button className='px-[0.5cm] py-[0.2cm] bg-[#090] rounded-full font-[600] cursor-pointer firstsectionbuttons'>View Latest Climate Changes</button></Link></div>
      </div>
      <div className='grid-cols-1 text-center'>
        <img src="images/bg2.jpg" className='rounded-xl firstsectionbuttons' />
        <div className='font-[600] mt-[0.5cm] text-center lg:text-[130%] md:text-[130%] text-[120%] text-[#090]'>CliNex: The Planet's Ultimate Climate Change Solution</div>
      </div>
      </div>
      </div>

   
      <div className='mt-[2cm] bg-[rgba(200,210,200,0.98)] p-[5%] pb-[2cm] rounded-xl' id="homeclimatediv" style={{transition:"0.5s ease-in-out"}}>
      <div className='text-center lg:text-[250%] md:text-[200%] text-[180%] font-[600]' style={{display:"block"}}>
        <img src="images/homeclimatechange.png" width="60" className='fa-fade' style={{display:"inline-block", animationDuration:"3s"}}/> &nbsp; 
        <span className='text-[#090]'>Live Climate Data</span> 
      </div>
      <div data-aos="zoom-out" className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-[1cm] gap-8 text-[#000]' style={{transition:"0.5s ease-in-out"}}>
      <div className='grid grid-cols-1'>
        <ClimateData1 />
      </div>
      <div className='grid grid-cols-1'>
        <ClimateData5 />
      </div>
      </div>
      <Link href="/climatedata"><div className='mt-[1cm] p-[0.15cm] bg-[#080] text-center secondsectionbutton cursor-pointer rounded-full' style={{display:"block"}}><img src="images/tap.png" width="40" style={{display:"inline-block"}} /> &nbsp; <span className='text-[120%] font-[500]'>Learn More</span></div></Link>
      </div>

      <div className='mt-[2cm] bg-[rgba(200,210,200,0.98)] p-[5%] rounded-xl' style={{transition:"0.5s ease-in-out"}}>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8'>
        <div className='grid-cols-1'>
        <img data-aos="flip-up" className='rounded-xl' src="images/climate-effects.jpg" style={{transition:"0.5s ease-in-out"}}/>
        </div>
        <div className='grid-cols-1'>
          <div className='text-[#090] lg:text-[250%] md:text-[200%] text-[150%] font-[600] lg:text-right text-center lg:pl-[15%]'>Become a CliNex Member Now and Make a Difference</div>
          <div className='lg:text-[130%] md:text-[120%] text-[110%] text-center text-[#060] mt-[1cm] lg:pl-[5%]'>
            This is your chance to become a part of the planet's ultimate climate change solution, where you can make a difference by participating in the governance of the CliNex DAO, 
            and let your actions make the planet a better place.
          </div>
        </div>
      </div>
      <div className='mt-[1cm]'>
        <div className='text-[#090] lg:text-[250%] md:text-[200%] text-[150%] font-[600] text-center' style={{display:"block"}}>
          <img src="images/light-bulb.png" width="60" className='fa-shake' style={{display:"inline-block", animationDuration:"5s"}} /> &nbsp; 
          <div style={{display:"inline-block"}}>Why We Exist</div>
        </div>
        <div className='lg:text-[130%] md:text-[120%] text-[110%] text-center text-[#060] mt-[0.8cm] lg:px-[10%]'>
         Our mission is to provide NGOs, businesses, agencies, and organisations with a straightforward means of supporting thousands of victims of climate change worldwide.
          We collect <span className='font-[600]'>climate change data,</span> and using our <span className='font-[600]'>DAO</span> as a powerful tool, you can create, view and vote for proposals.
           A proposal agreed upon (voted) by the DAO is being effected i.e., if the proposal with the highest votes
          is to give food and shelter to the climate change victims, the DAO takes action and puts it into effect.
        </div>
      </div>
      </div>

      <div className='mt-[2cm] bg-[rgba(200,210,200,1)] p-[5%] rounded-xl' id="homeblogupdates" style={{transition:"0.5s ease-in-out"}}>
      <div className='text-center lg:text-[250%] md:text-[200%] text-[180%] font-[600]' style={{display:"block"}}>
        <img src="images/blog3.png" width="60" style={{display:"inline-block"}}/> &nbsp; 
        <span className='text-[#090]'>Latest Blog Updates</span> 
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-[1cm]'>
        {homeBlogPosts.map((posts) => (
        <div key={posts.id} data-aos="zoom-in" className='grid grid-cols-1 bg-[rgba(0,0,0,0.96)]' style={{transition:"0.5s ease-in-out", border:"3px solid #fff"}}>
         <img className='w-[100%]' src={posts.picturelink} />
         <div className='px-[5%] pb-[1cm]'>
         <div className='mt-[0.3cm]' style={{display:"block"}}>
            <img src="images/calendar.png" width="40" style={{display:"inline-block"}}/> &nbsp; 
            <span className='font-[500] text-[120%]'>{posts.date}</span> 
         </div>
         <div className='mt-[0.3cm] uppercase font-[500] lg:text-[120%] md:text-[120%]'>{posts.description}...</div>
         <div className='mt-[0.5cm]' style={{display:"block"}}><Link className='text-[120%] font-[600] text-[#ccc]' href="/blog"><span>View on Blog</span> &nbsp; <i className='fa fa-arrow-right'></i></Link></div>
         </div>
         </div>
         ))}
        </div>
      </div>
   
   
     </div>
     <div>
     <Footer />
     </div>
     </div>
  
  </>
  );
};

