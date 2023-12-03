import Head from 'next/head';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Link from "next/link";
import { useRouter } from 'next/router';
import ClimateData1 from '@/components/climatedata1';
import { connect, disconnect } from 'get-starknet';
import { Contract } from 'starknet';

export default function AdminControl({weather, temperature, pressure, humidity, windspeed, location, longitude, latitude}){
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');

    axios.defaults.withCredentials = true;
    const getAdminDataProcess = async () => {
      await axios.get('/api/admincookiesconfirm')
        .then((res) => {
          console.log('Check Auth Response:', res); // Add this line for debugging
          if (res.status === 200) {
            setAuth(true);
            setEmail(res.data.admin.email);
          } else {
            setAuth(false);
          }
        })
        .catch((err) => {
          console.log('Check Auth Error:', err); // Add this line for debugging
          setAuth(false);
        });
      }
   
    useEffect(() => {
    getAdminDataProcess();
    AOS.init();
    }, []);  

  const router = useRouter();
  const handleAdminLogoutByClearingCookies = async(e) => {
    e.preventDefault();
    await axios.get('/api/admincookiesdeletetologout')
    .then ((res) => {
        router.push('/adminsignin')
    })
    .catch ((err) => {
      console.log(err)
    })
  }

  const [values, setValues] = useState({
    id:"",
    picturelink:"",
    date:"",
    description:"",
    sociallink:""
})

const handleInput = (event) => {
    const cleanedValue = event.target.value.replace(/["{}]/g, ''); // Remove curly braces and double quotes
    setValues((prev) => ({ ...prev, [event.target.name]: cleanedValue }));
  };

  const [displayComponent, setDisplayComponent] = useState("addpostcomponent")
  const changeDisplayComponent = (initialdisplaycomponent) => {
    setDisplayComponent(initialdisplaycomponent)
  }

  const [addpostbuttonbgcolor, setaddpostbuttonbgcolor] = useState("#080")
  const [updatepostbuttonbgcolor, setupdatepostbuttonbgcolor] = useState("#fff")
  const [deletepostbuttonbgcolor, setdeletepostbuttonbgcolor] = useState("#fff")

  const changeAddPostColor = () => {
    setaddpostbuttonbgcolor("#080")
    setupdatepostbuttonbgcolor("#fff")
    setdeletepostbuttonbgcolor("#fff")
  }

  const changeUpdatePostColor = () => {
    setaddpostbuttonbgcolor("#fff")
    setupdatepostbuttonbgcolor("#080")
    setdeletepostbuttonbgcolor("#fff")
  }

  const changeDeletePostColor = () => {
    setaddpostbuttonbgcolor("#fff")
    setupdatepostbuttonbgcolor("#fff")
    setdeletepostbuttonbgcolor("#080")
  }

  const [loading, setLoading] = useState(false); // Add a loading state  
  const handleSubmitforInsertingBlogPost = async (e) => {
    setLoading(true);
    e.preventDefault();
      await axios.post("/api/insertblogpostdatabyadmin", values)
      .then (res => {
          if (res.status === 200){
          alert("successfully added blog post!")
          }
          else {
              alert ("Check your network and try again!")
          }
      })
      .catch (err => alert("Check your network and try again!"))
      .finally(() => {
        setLoading(false); //(whether successful or not), stop loading
      });
    }

    const handleSubmitforUpdatingBlogPost = async (e) => {
      setLoading(true);
      e.preventDefault();
        await axios.post("/api/updateblogpostdatabyadmin", values)
        .then (res => {
            if (res.status === 200){
            alert("successfully updated blog post!")
            }
            else {
                alert ("Check your network and try again!")
            }
        })
        .catch (err => alert("Check your network and try again!"))
        .finally(() => {
          setLoading(false); //(whether successful or not), stop loading
        });
      }

      const handleSubmitforDeletingBlogPost = async (e) => {
        setLoading(true);
        e.preventDefault();
          await axios.post("/api/deleteblogpostdatabyadmin", values)
          .then (res => {
              if (res.status === 200){
              alert("successfully deleted blog post!")
              }
              else {
                  alert ("Check your network and try again!")
              }
          })
          .catch (err => alert("Check your network and try again!"))
          .finally(() => {
            setLoading(false); //(whether successful or not), stop loading
          });
        }



        //to write to climate contract
        const climateContractAddress = "0x05e5aac54bfb81faf747f7064197736626fd0a7f412c77755d9da7f40ca1c015"
        const ClimateContractABI = [
          {
            type: "impl",
            name: "IReportImpl",
            interface_name: "clinex::clinex_climate_report::IReport",
          },
          {
            type: "struct",
            name: "clinex::clinex_climate_report::Report",
            members: [
              {
                name: "location",
                type: "core::felt252",
              },
              {
                name: "longitude",
                type: "core::integer::u128",
              },
              {
                name: "latitude",
                type: "core::integer::u128",
              },
              {
                name: "temperature",
                type: "core::integer::u128",
              },
              {
                name: "humidity",
                type: "core::integer::u128",
              },
              {
                name: "weather",
                type: "core::felt252",
              },
              {
                name: "pressure",
                type: "core::integer::u128",
              },
              {
                name: "wind_speed",
                type: "core::integer::u128",
              },
              {
                name: "index",
                type: "core::integer::u128",
              },
            ],
          },
          {
            type: "interface",
            name: "clinex::clinex_climate_report::IReport",
            items: [
              {
                type: "function",
                name: "get_climate_reports",
                inputs: [],
                outputs: [
                  {
                    type: "core::array::Array::<clinex::clinex_climate_report::Report>",
                  },
                ],
                state_mutability: "view",
              },
              {
                type: "function",
                name: "get_climate_report",
                inputs: [
                  {
                    name: "index",
                    type: "core::integer::u128",
                  },
                ],
                outputs: [
                  {
                    type: "clinex::clinex_climate_report::Report",
                  },
                ],
                state_mutability: "view",
              },
              {
                type: "function",
                name: "create_climate_report",
                inputs: [
                  {
                    name: "weather",
                    type: "core::felt252",
                  },
                  {
                    name: "temperature",
                    type: "core::integer::u128",
                  },
                  {
                    name: "pressure",
                    type: "core::integer::u128",
                  },
                  {
                    name: "humidity",
                    type: "core::integer::u128",
                  },
                  {
                    name: "wind_speed",
                    type: "core::integer::u128",
                  },
                  {
                    name: "location",
                    type: "core::felt252",
                  },
                  {
                    name: "longitude",
                    type: "core::integer::u128",
                  },
                  {
                    name: "latitude",
                    type: "core::integer::u128",
                  },
                ],
                outputs: [
                  {
                    type: "core::integer::u128",
                  },
                ],
                state_mutability: "external",
              },
            ],
          },
          {
            type: "event",
            name: "clinex::clinex_climate_report::ClinexClimate::ClimateEvent",
            kind: "struct",
            members: [
              {
                name: "index",
                type: "core::integer::u128",
                kind: "key",
              },
              {
                name: "string",
                type: "core::felt252",
                kind: "data",
              },
            ],
          },
          {
            type: "event",
            name: "clinex::clinex_climate_report::ClinexClimate::Event",
            kind: "enum",
            variants: [
              {
                name: "ClimateEvent",
                type: "clinex::clinex_climate_report::ClinexClimate::ClimateEvent",
                kind: "nested",
              },
            ],
          },
        ];        
        const insertClimateData1 = async() => {
          try {
            const starknet = await connect()
            const signer = starknet.account
            const climateContractWriteSettings = new Contract(ClimateContractABI, climateContractAddress, signer)
            // Convert parameters to be useful for StarkNet as required data types
            const isValidHex = (str) => /^[0-9a-fA-F]+$/.test(str);
            const convertToBigInt = (hexString) => {
              if (isValidHex(hexString)) {
                // Remove the "0x" prefix and convert to BigInt
                return BigInt(`0x${hexString}`);
              } else {
                return BigInt(0); 
              }
            };

            const weatherBigInt = convertToBigInt(weather);
            const temperatureBigInt = convertToBigInt(temperature);
            const pressureBigInt = convertToBigInt(pressure);
            const humidityBigInt = convertToBigInt(humidity);
            const windspeedBigInt = convertToBigInt(windspeed);
            const locationBigInt = convertToBigInt(location);
            const longitudeBigInt = convertToBigInt(longitude);
            const latitudeBigInt = convertToBigInt(latitude);    

          const writeToClimateContract = await climateContractWriteSettings.create_climate_report(weatherBigInt, temperatureBigInt, pressureBigInt, humidityBigInt, windspeedBigInt, locationBigInt, longitudeBigInt, latitudeBigInt);
          }
          catch (error){
            console.log(error)
          }
        }


  if (auth) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="p-[5%] pb-[60%] maindivforadminpanel" style={{backgroundImage:"url(images/bg13.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>
      <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500] lg:mt-[0] md:mt-[0] mt-[0.5cm]" style={{display:"block", transition:"0.5s ease-in-out"}}>
        <span className='cursor-pointer' onClick={(e) => handleAdminLogoutByClearingCookies(e)}>
            <img src="images/switch.png" width="35" style={{display:"inline-block"}} /> &nbsp; 
            <span style={{textShadow:"2px 2px #900"}}>LOGOUT</span>
        </span>
      </div>
      
      <div className='text-center lg:text-[200%] md:text-[200%] text-[150%]  mt-[1cm] font-[600]' style={{display:"block", transition:"0.5s ease-in-out"}}>
        <img src="images/admin.png" width="50" style={{display:"inline-block"}}/> &nbsp; 
        <span className='text-[#fff]'>Admin Control Panel</span> 
      </div>

     <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-[2cm]'>

      <div className='grid grid-cols-1'>
      <div className='bg-[rgba(0,0,0,0.7)]' style={{border:"4px solid #fff"}}>
    <div className='bg-[#000] text-center lg:text-[120%] md:text-[120%] font-[500]'>
    <img src="images/thelogo.png" width="120" className='mx-[auto]' />
    </div>
    <div className='bg-[#010] py-[0.3cm] mb-[0.2cm] text-center font-[600]' style={{display:"block"}}>
      <div>
      <button className='px-[0.5cm] py-[0.2cm] my-[0.3cm] text-[#000] rounded-md' style={{backgroundColor:addpostbuttonbgcolor}} onClick={(e) => changeDisplayComponent("addpostcomponent") & changeAddPostColor()}>Add Post</button> &nbsp; 
      <button className='px-[0.5cm] py-[0.2cm] my-[0.3cm] text-[#000] rounded-md' style={{backgroundColor:updatepostbuttonbgcolor}} onClick={(e) => changeDisplayComponent("updatepostcomponent") & changeUpdatePostColor()}>Update Post</button> &nbsp; 
      <button className='px-[0.5cm] py-[0.2cm] text-[#000] rounded-md' style={{backgroundColor:deletepostbuttonbgcolor}} onClick={(e) => changeDisplayComponent("deletepostcomponent") & changeDeletePostColor()}>Delete Post</button>
      </div>
    </div>
    {displayComponent === "addpostcomponent" &&
    <form onSubmit={(e) => handleSubmitforInsertingBlogPost(e)} data-aos="zoom-in" className='p-[5%] pb-[1cm]' style={{transition:"0.5s ease-in-out"}}>
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.picturelink} id="picturelink" name="picturelink" onChange={handleInput} placeholder='Type the link to a related image' />
      <input type="date" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.date} id="date" name="date" onChange={handleInput} placeholder='Type a date' />
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.description} id="description" name="description" onChange={handleInput} placeholder="Give your post a description" />
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.sociallink} id="sociallink" name="sociallink" onChange={handleInput} placeholder="Provide a link to your post on social media" />
      <button type="submit" className='signinbutton p-[0.3cm] font-[600] bg-[#000] rounded-md text-center w-[100%]'>Add a Post to the Blog</button>
    </form>
    }

   {displayComponent === "updatepostcomponent" &&
    <form onSubmit={(e) => handleSubmitforUpdatingBlogPost(e)} data-aos="zoom-in" className='p-[5%] pb-[1cm]' style={{transition:"0.5s ease-in-out"}}>
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.id} id="id" name="id" onChange={handleInput} placeholder='Input ID of post you want to edit' />
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' value={values.picturelink} id="picturelink" name="picturelink" onChange={handleInput} placeholder='Update the related image link' />
      <input type="date" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' value={values.date} id="date" name="date" onChange={handleInput} placeholder='Update the date' />
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' value={values.description} id="description" name="description" onChange={handleInput} placeholder="Update the post description" />
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' value={values.sociallink} id="sociallink" name="sociallink" onChange={handleInput} placeholder="Update link to the post on social media" />
      <button type="submit" className='signinbutton p-[0.3cm] font-[600] bg-[#000] rounded-md text-center w-[100%]'>Update Blog Post</button>
    </form>
    }

   {displayComponent === "deletepostcomponent" &&
    <form onSubmit={(e) => handleSubmitforDeletingBlogPost(e)} data-aos="zoom-in" className='p-[5%] pb-[1cm]' style={{transition:"0.5s ease-in-out"}}>
      <input type="text" className='p-[0.3cm] w-[100%] outline-[#010] bg-[#ddd] placeholder-[#555] lg:placeholder-[120%] md:placeholder-[120%] text-[#000] mb-[0.5cm]' required value={values.id} id="id" name="id" onChange={handleInput} placeholder='Input ID of post you want to delete' />
      <button type="submit" className='deletepostbutton p-[0.3cm] font-[600] bg-[#500] rounded-md text-center w-[100%]'>Delete Blog Post</button>
    </form>
    }
    </div>
    </div>

    <div className='grid-cols-1'>
    <div className='bg-[rgba(0,0,0,0.7)]' style={{border:"4px solid #fff"}}>
    <div className='bg-[#000] text-center lg:text-[120%] md:text-[120%] font-[500]'>
    <img src="images/thelogo.png" width="120" className='mx-[auto]' />
    </div>
    <div className='bg-[#010] py-[0.3cm] mb-[0.2cm] text-center font-[600]' style={{display:"block"}}>
     <div className='text-[120%] font-[600]'>Add Climate Data</div>
     <div style={{display:"none"}}><ClimateData1 location={location} longitude={longitude} latitude={latitude} temperature={temperature} humidity={humidity} weather={weather} pressure={pressure} windspeed={windspeed}/></div>
    </div>
    <div className='p-[5%] my-[1cm]'><button onClick={(e) => insertClimateData1(e)} className='p-[0.3cm] font-[600] bg-[#000] rounded-md w-[100%] text-center signinbutton'>Submit Daily Climate Report</button></div>
    </div>
    </div>
      
    </div>

      
      
    {loading ? (
        <div className="custom-loader">
          <div className="loader-spinner"></div>
        </div>
      ) : <div></div>}

      
      </div>
    </>
  );
  }
};
