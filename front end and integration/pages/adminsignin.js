import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Signin(){
  const [values, setValues] = useState({
    email:"",
    password:"",
    secretkey:""
})

const handleInput = (event) => {
    const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
    setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue }));
  };

const [loading, setLoading] = useState(false); // Add a loading state  
const router = useRouter();
const handleSubmitforSendingAdminSigninData = async (e) => {
  setLoading(true);
  e.preventDefault();
    await axios.post("/api/sendsignindataforadminlogin", values)
    .then (res => {
        if (res.status === 200){
        router.push('/admincontrolpage');
        }
        else {
            alert ("Wrong details!")
        }
    })
    .catch (err => alert("Error!"))
    .finally(() => {
      setLoading(false); //(whether successful or not), stop loading
    });
  }

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
    <Head>
   <title>Admin Sign in</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className="p-[5%] pb-[50%] maindivforadminsignin" style={{backgroundImage:"url(images/bg8.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>
   <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500] lg:mt-[0] md:mt-[0] mt-[0.5cm]"><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>

   <div data-aos="zoom-in" className='lg:mx-[25%] md:mx-[20%] lg:my-[12%] md:my-[12%] my-[35%] bg-[#030]' style={{border:"4px solid #fff", transition:"0.5s ease-in-out"}}>
    <div className='bg-[#000] text-center lg:text-[120%] md:text-[120%] font-[500]'>
    <img src="images/thelogo.png" width="120" className='mx-[auto]' />
    </div>
    <div className='bg-[#010] p-[0.2cm] mb-[0.2cm] text-center lg:text-[130%] md:text-[130%] text-[105%] font-[600]' style={{display:"block"}}>
      <div><img src="images/shield.png" width="40" style={{display:"inline-block"}} /> &nbsp; This page is accessible to only this site's webmaster</div>
    </div>
    <form onSubmit={(e) => handleSubmitforSendingAdminSigninData(e)} className='p-[5%] pb-[1cm]'>
      <input type="email" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.email} id="email" name="email" onChange={handleInput} placeholder='Type your email' />
      <input type="password" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.password} id="password" name="password" onChange={handleInput} placeholder='Type your password' />
      <input type="password" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.secretkey} id="secretkey" name="secretkey" onChange={handleInput} placeholder="Type webmaster's key" />
      <button type="submit" className='signinbutton p-[0.3cm] font-[600] bg-[#000] rounded-md text-center w-[100%]'>Sign in to Admin Dashboard</button>
    </form>
   </div>

   {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}

   

   </div> 
  </>
  );
};

