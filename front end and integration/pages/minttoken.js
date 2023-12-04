import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { connect, disconnect } from "get-starknet";
import { Contract, RpcProvider } from "starknet";
import { useRouter } from "next/router";

export default function GetToken() {
    const [connectWallet, setConnectWallet] = useState(true)
    const [connectedWallet, setConnectedWallet] = useState(false)
    const [userswalletaddress, setuserswalletaddress] = useState(null) 

    //to connect our wallet
    const connecttheWallet = async (e) => {
      try {
        e.preventDefault();
        const starknet = await connect();
        const walletAddress = starknet.account.address
        console.log(walletAddress)

         // Update state
         setConnectedWallet(true);
         setConnectWallet(false);
         setuserswalletaddress(walletAddress)
      
      } catch (error) {
        console.log('Error connecting to StarkNet:', error.message);
      }
    };

    //to disconnect our wallet
    const disconnectWallet = async(e) => {
      e.preventDefault();
      const starknet = await disconnect();
      setConnectedWallet(false)
      setConnectWallet(true)
      setuserswalletaddress(null)
    } 
    
  
    //to read from contract
    const [clinexBalance, setClinexBalance] = useState()
    const contractAddress = "0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f"
    const  abi_erc20 = [
      {
        type: "impl",
        name: "ITokenImpl",
        interface_name: "clinex::clinex_token::IToken",
      },
      {
        type: "interface",
        name: "clinex::clinex_token::IToken",
        items: [
          {
            type: "function",
            name: "mint",
            inputs: [
              {
                name: "address",
                type: "core::starknet::contract_address::ContractAddress",
              },
            ],
            outputs: [],
            state_mutability: "external",
          },
          {
            type: "function",
            name: "transfer",
            inputs: [
              {
                name: "address",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "amount",
                type: "core::integer::u128",
              },
            ],
            outputs: [],
            state_mutability: "external",
          },
          {
            type: "function",
            name: "approval",
            inputs: [
              {
                name: "to",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "amount",
                type: "core::integer::u128",
              },
            ],
            outputs: [],
            state_mutability: "external",
          },
          {
            type: "function",
            name: "allowance",
            inputs: [
              {
                name: "from",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "to",
                type: "core::starknet::contract_address::ContractAddress",
              },
            ],
            outputs: [
              {
                type: "core::integer::u128",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "transfer_from",
            inputs: [
              {
                name: "from",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "to",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "amount",
                type: "core::integer::u128",
              },
            ],
            outputs: [],
            state_mutability: "external",
          },
          {
            type: "function",
            name: "withdrawTokens",
            inputs: [
              {
                name: "contract_address",
                type: "core::starknet::contract_address::ContractAddress",
              },
              {
                name: "amount",
                type: "core::integer::u128",
              },
            ],
            outputs: [],
            state_mutability: "external",
          },
          {
            type: "function",
            name: "get_name",
            inputs: [],
            outputs: [
              {
                type: "core::felt252",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "get_symbol",
            inputs: [],
            outputs: [
              {
                type: "core::felt252",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "get_decimal",
            inputs: [],
            outputs: [
              {
                type: "core::integer::u128",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "get_total_supply",
            inputs: [],
            outputs: [
              {
                type: "core::integer::u128",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "get_balance_of_user",
            inputs: [
              {
                name: "user",
                type: "core::starknet::contract_address::ContractAddress",
              },
            ],
            outputs: [
              {
                type: "core::integer::u128",
              },
            ],
            state_mutability: "view",
          },
          {
            type: "function",
            name: "get_owner",
            inputs: [],
            outputs: [
              {
                type: "core::starknet::contract_address::ContractAddress",
              },
            ],
            state_mutability: "view",
          },
        ],
      },
      {
        type: "constructor",
        name: "constructor",
        inputs: [],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::TransferFrom",
        kind: "struct",
        members: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "key",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "data",
          },
          {
            name: "amount",
            type: "core::integer::u128",
            kind: "data",
          },
        ],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::Transfer",
        kind: "struct",
        members: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "key",
          },
          {
            name: "amount",
            type: "core::integer::u128",
            kind: "data",
          },
        ],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::Mint",
        kind: "struct",
        members: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "key",
          },
          {
            name: "amount",
            type: "core::integer::u128",
            kind: "data",
          },
        ],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::Withdraw",
        kind: "struct",
        members: [
          {
            name: "contract_address",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "key",
          },
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "data",
          },
          {
            name: "amount",
            type: "core::integer::u128",
            kind: "data",
          },
        ],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::Approval",
        kind: "struct",
        members: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "key",
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress",
            kind: "data",
          },
          {
            name: "amount",
            type: "core::integer::u128",
            kind: "data",
          },
        ],
      },
      {
        type: "event",
        name: "clinex::clinex_token::ClinexToken::Event",
        kind: "enum",
        variants: [
          {
            name: "TransferFrom",
            type: "clinex::clinex_token::ClinexToken::TransferFrom",
            kind: "nested",
          },
          {
            name: "Transfer",
            type: "clinex::clinex_token::ClinexToken::Transfer",
            kind: "nested",
          },
          {
            name: "Mint",
            type: "clinex::clinex_token::ClinexToken::Mint",
            kind: "nested",
          },
          {
            name: "Withdraw",
            type: "clinex::clinex_token::ClinexToken::Withdraw",
            kind: "nested",
          },
          {
            name: "Approval",
            type: "clinex::clinex_token::ClinexToken::Approval",
            kind: "nested",
          },
        ],
      },
    ]
    const readContract = async () => {
     try {
    const starknet = await connect();
    const provider = new RpcProvider({nodeUrl:"https://starknet-goerli.g.alchemy.com/v2/pGPx7iRpQNfUa7C8tJAVoslLtXkkIUi-"}); 
      const contract = new Contract(abi_erc20, contractAddress, provider);
      const balance = await contract.get_balance_of_user(starknet.account.address);
      const balanceConvert = balance.toString();
      console.log(balanceConvert)
      setClinexBalance(balanceConvert)
    } catch (error) {
      console.log(error)
    }
    }
    readContract();


    //to write to contract
    const router = useRouter();
    const [clinexAmount, setClinexAmount] = useState()
    const [mintedCLINEXsuccessAlert, setmintedCLINEXsuccessAlert] = useState(false)
    const writeContract = async() => {
      try {
        const starknet = await connect();
        setConnectedWallet(true);
        setConnectWallet(false);
        const signer = starknet.account
        const contractSettings = new Contract(abi_erc20, contractAddress, signer)
        const mintClinex = await contractSettings.mint(starknet.account.address)
        setmintedCLINEXsuccessAlert(true)
          setTimeout(() => {
            router.push('/governance');
          }, 5000); // delay by 5000 milliseconds or 5 seconds
      } catch (error) {
        console.log(error)
      }
    }
     const closeMintAlert = () => {
      setmintedCLINEXsuccessAlert(false)
      }  
    

    useEffect(() => {
        AOS.init();
      }, [])
 
    return (
        <>
   <Head>
   <title>MINT CliNex Token $CTK</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
        <div className="p-[5%] pb-[60%] maindivforbuytoken" style={{backgroundImage:"url(images/bg01.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500] lg:mt-[0] md:mt-[0] mt-[0.5cm]"><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>
        <div className="text-center mt-[2cm]">
          {connectWallet ? (<span className="bg-[#224] px-[0.5cm] py-[0.3cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #aaa"}} onClick={(e) => connecttheWallet(e)}>Connect Wallet</span>) : (<div></div>)}
          {connectedWallet ? (<span className="bg-[#228] px-[0.5cm] py-[0.3cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #fff"}} onClick={(e) => disconnectWallet(e)}><i className="fa fa-circle text-[#090]"></i> &nbsp; Connected</span>) : (<div></div>)}
          </div>

          <div className="text-center lg:text-[120%] md:text-[120%] text-[#090] mt-[1cm] overflow-auto font-[500]">{userswalletaddress}</div>

        <div className="text-center lg:text-[120%] md:text-[120%] mt-[1cm] lg:px-[10%] md:px-[10%]">Ensure you have installed the ArgentX or Braavos smart wallet extension on your browser and connect wallet to mint $CTK. <br></br>
        Owning <span className="text-[#083]">$CTK </span>tokens gives you access to the governance of the ecosystem.</div>

        <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
        <div className="lg:mx-[20%] md:mx-[15%] py-[1cm]">
            <div className="text-center"><span className="text-[120%] font-[600] pb-[0.2cm] rounded-full px-[0.3cm]" style={{borderBottom:"4px solid #083"}}>Mint CLINEX Token</span></div>
            <form className="mt-[2cm]">
            <div className="bg-[#111] rounded-xl p-[5%]" style={{boxShadow:"-2px -2px 2px 2px #fff"}}>
                <div><span className="px-[0.4cm] py-[0.2cm] rounded-md bg-[rgba(0,0,0,0.4)]">CTK</span></div>
                <div className="mt-[3%]">Balance: {clinexBalance}<span id="CLINEXbalance"></span></div>
                <input className="py-[0.2cm] text-[#fff] w-[100%] mt-[3%] rounded-md outline-none bg-[#111]" type="text" id="clinexAmount" name="clinexAmount" value="1000" onChange={(e) => setClinexAmount(e.target.value)}/>
            </div>
            <button type="submit" onClick={(e) => {e.preventDefault(); writeContract(clinexAmount)}} className="w-[100%] bg-[#000] font-[600] mt-[1cm] p-[0.2cm] rounded-md actionbutton" style={{transition:"0.5s ease-in-out", boxShadow:"2px 2px 2px 2px #fff"}}>Mint</button>
            </form>
        </div>
        </div>

        {mintedCLINEXsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="fixed ml-[5%] top-1 right-[5%] bg-[rgba(0,0,0,0.9)] text-white px-4 py-3 rounded-md" style={{transition:"0.5s ease-in-out"}}>
        <span>You have successfully minted 1000 $CTK tokens. Check wallet.</span> &nbsp; &nbsp;
        <button><i className="fa fa-circle-xmark text-[130%] font-[600] text-[#a00]" onClick={closeMintAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }

        </div>
        </>
    )
}