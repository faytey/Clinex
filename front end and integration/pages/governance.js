import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { connect, disconnect } from "get-starknet";
import { Contract, RpcProvider } from 'starknet';

export default function Governance(){
    const [displayComponent, setDisplayComponent] = useState("joindaodisplay")
    const changeDisplay = (initialdisplay) => {
        setDisplayComponent(initialdisplay)
    } 

    const [joinDaoColor, setJoinDaoColor] = useState("#073")
    const [viewProposalsColor, setViewProposalsColor] = useState("#fff")
    const [createProposalsColor, setCreateProposalsColor] = useState("#fff")
    const [voteProposalsColor, setVoteProposalsColor] = useState("#fff")
    const [numberOfvotesColor, setnumberOfvotesColor] = useState("#fff")

    const changeJoinColor = () => {
        setJoinDaoColor("#073")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#fff")
        setnumberOfvotesColor("#fff")
    }

    const changeViewColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#073")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#fff")
        setnumberOfvotesColor("#fff")
    }

    const changeCreateColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#073")
        setVoteProposalsColor("#fff")
        setnumberOfvotesColor("#fff")
    }

    const changeVoteColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#073")
        setnumberOfvotesColor("#fff")
    }

    const changeNumberOfVotesColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#fff")
        setnumberOfvotesColor("#073")
    }


    

    const [connectWallet, setConnectWallet] = useState(true)
    const [connectedWallet, setConnectedWallet] = useState(false)
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
    } 


    //to read from contract
    const [clinexBalance, setClinexBalance] = useState()
    const [postedWalletAddress, setPostedWalletAddress] = useState()
    const CLINEXcontractAddress = "0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f"
    const  CLINEXabi = [
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
    const DAOcontractAddress = "0x02036e19074e2f0087bf7bcd46b091338224d751266743c231cc44d19af327bf"
    const DAOabi = [
        {
          type: "impl",
          name: "IDaoImpl",
          interface_name: "clinex::clinex_dao::IDAO",
        },
        {
          type: "struct",
          name: "clinex::clinex_dao::Member",
          members: [
            {
              name: "member_id",
              type: "core::integer::u128",
            },
            {
              name: "member_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "struct",
          name: "clinex::clinex_dao::Proposal",
          members: [
            {
              name: "proposal_id",
              type: "core::integer::u128",
            },
            {
              name: "name",
              type: "core::felt252",
            },
            {
              name: "description",
              type: "core::felt252",
            },
            {
              name: "deadline",
              type: "core::integer::u128",
            },
            {
              name: "proposer",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "interface",
          name: "clinex::clinex_dao::IDAO",
          items: [
            {
              type: "function",
              name: "join_dao",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u128",
                },
              ],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "member_list",
              inputs: [],
              outputs: [
                {
                  type: "core::array::Array::<clinex::clinex_dao::Member>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "view_proposals",
              inputs: [],
              outputs: [
                {
                  type: "core::array::Array::<clinex::clinex_dao::Proposal>",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "create_proposal",
              inputs: [
                {
                  name: "title",
                  type: "core::felt252",
                },
                {
                  name: "desc",
                  type: "core::felt252",
                },
                {
                  name: "deadline",
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
            {
              type: "function",
              name: "vote",
              inputs: [
                {
                  name: "proposal_id",
                  type: "core::integer::u128",
                },
              ],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "view_votes",
              inputs: [
                {
                  name: "index",
                  type: "core::integer::u128",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u128",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "event",
          name: "clinex::clinex_dao::ClinexDao::Event",
          kind: "enum",
          variants: [],
        },
      ];      
    const provider = new RpcProvider({nodeUrl:"https://starknet-goerli.g.alchemy.com/v2/pGPx7iRpQNfUa7C8tJAVoslLtXkkIUi-"}); 
    const CLINEXcontractReadSettings = new Contract(CLINEXabi, CLINEXcontractAddress, provider);
    const DAOcontractReadSettings = new Contract(DAOabi, DAOcontractAddress, provider);
    const readContract = async () => {
        try {
       const starknet = await connect();
       const walletAddress = starknet.account.address
         const balance = await CLINEXcontractReadSettings.get_balance_of_user(walletAddress);
         const balanceConvert = balance.toString();
         setClinexBalance(balanceConvert)
         setPostedWalletAddress(walletAddress)
       } catch (error) {
         console.log(error)
       }
       }
       readContract();


    //to write to DAO contract to join DAO
    const [joinDAOsuccessAlert, setjoinDAOsuccessAlert] = useState(false)
    const writeToJoinDao = async() => {
        try {
            const starknet = await connect();
             setConnectedWallet(true);
             setConnectWallet(false);
            const signer = starknet.account
            const contractWriteSettings = new Contract(DAOabi, DAOcontractAddress, signer)
            const joinDAO = await contractWriteSettings.join_dao();
            setjoinDAOsuccessAlert(true);
        } catch (error) {
          console.log(error)  
        }
    }
    const closejoinDAOAlert = () => {
        setjoinDAOsuccessAlert(false)
        }  
      

    //to view all proposals from DAO
    const [viewDAOproposals, setviewDAOproposals] = useState([])
    const readDAOproposals = async () => {
        try {
        const starknet = await connect();
         const proposals = await DAOcontractReadSettings.view_proposals();
         setviewDAOproposals(proposals)
       } catch (error) {
         console.log(error)
       }
       }
       readDAOproposals();


        //to write to DAO contract to create proposal
    const [proposaltitle, setproposaltitle] = useState()
    const [proposaldescription, setproposaldescription] = useState()
    const [proposaldeadline, setproposaldeadline] = useState()
    const [createProposalsuccessAlert, setCreateProposalsuccessAlert] = useState(false)
    const writeToCreateProposal = async() => {
        try {
            const starknet = await connect();
             setConnectedWallet(true);
             setConnectWallet(false);
            const signer = starknet.account
            const contractWriteSettings = new Contract(DAOabi, DAOcontractAddress, signer)
            const createProposal = await contractWriteSettings.create_proposal(proposaltitle, proposaldescription, proposaldeadline);
            setCreateProposalsuccessAlert(true);
        } catch (error) {
          console.log(error)  
        }
    }
    const closeCreateProposalAlert = () => {
      setCreateProposalsuccessAlert(false)
        } 


           //to write to DAO contract to vote proposal
    const [proposalid, setproposalid] = useState()
    const [voteProposalsuccessAlert, setVoteProposalsuccessAlert] = useState(false)
    const writeToVoteProposal = async() => {
        try {
            const starknet = await connect();
             setConnectedWallet(true);
             setConnectWallet(false);
            const signer = starknet.account
            const contractWriteSettings = new Contract(DAOabi, DAOcontractAddress, signer)
            const voteProposal = await contractWriteSettings.vote(proposalid);
            setVoteProposalsuccessAlert(true);
        } catch (error) {
          console.log(error)  
        }
    }
    const closeVoteProposalAlert = () => {
      setVoteProposalsuccessAlert(false)
        } 
        


           //to read DAO contract to get number of votes for a proposal
    const [proposalid2, setproposalid2] = useState()
    const [NumberOfVotesValue, setNumberOfVotesValue] = useState()
    const readToViewNumberOfVotesOnAProposal = async() => {
        try {
            const starknet = await connect();
             setConnectedWallet(true);
             setConnectWallet(false);
            const numberOfVotesFromExplorer = await DAOcontractReadSettings.view_votes(proposalid2);
            const numberOfVotesFromExplorerConvert = numberOfVotesFromExplorer.toString();
            setNumberOfVotesValue(numberOfVotesFromExplorerConvert);
        } catch (error) {
          console.log(error)  
        }
    }

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Head>
   <title>CliNex Governance</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className="p-[5%] lg:pb-[50%] md:pb-[50%] pb-[100%] maindivforgovernance" style={{backgroundImage:"url(images/bg01.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>

        <div className='lg:mt-[0] md:mt-[0] mt-[0.5cm]' style={{display:"block"}}>
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]" style={{display:"inline-block"}}><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>
        <div className="text-center float-right" style={{display:"inline-block"}}>
        {connectWallet ? (<span className="bg-[#224] px-[0.5cm] py-[0.3cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #aaa"}} onClick={(e) => connecttheWallet(e)}>Connect Wallet</span>) : (<div></div>)}
        {connectedWallet ? (<span className="bg-[#228] px-[0.5cm] py-[0.3cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #fff"}} onClick={(e) => disconnectWallet(e)}><i className="fa fa-circle text-[#090]"></i> &nbsp; Connected</span>) : (<div></div>)}
        </div>
        </div>

        <div className='lg:mt-[0.5cm] md:mt-[0.5cm] mt-[1cm] p-[0.5cm] lg:bg-[rgba(0,0,0,0)] md:bg-[rgba(0,0,0,0)] bg-[rgba(0,0,0,0.5)] text-center rounded-xl' style={{display:"block", transition:"0.5s ease-in-out"}}>
            <img src="images/thelogo.png" width="150" style={{display:"inline-block"}} />
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${joinDaoColor}`, color:joinDaoColor}} onClick={(e) => changeDisplay("joindaodisplay") & changeJoinColor()}>Join DAO</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${viewProposalsColor}`, color:viewProposalsColor}} onClick={(e) => changeDisplay("viewproposalsdisplay") & changeViewColor()}>View Proposals</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${createProposalsColor}`, color:createProposalsColor}} onClick={(e) => changeDisplay("createproposaldisplay") & changeCreateColor()}>Create a Proposal</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${voteProposalsColor}`, color:voteProposalsColor}} onClick={(e) => changeDisplay("voteproposaldisplay") & changeVoteColor()}>Vote for a Proposal</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${numberOfvotesColor}`, color:numberOfvotesColor}} onClick={(e) => changeDisplay("numberofvotesdisplay") & changeNumberOfVotesColor()}>View number of Votes</button>
        </div>

        <div className='mt-[1cm] lg:mx-[20%] md:mx-[10%] p-[5%] bg-[rgba(0,0,0,0.96)] rounded-xl' style={{transition:"0.5s ease-in-out"}}>
            {displayComponent === "joindaodisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Become a Member</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>You must be a $CTK holder to be part of the DAO!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Wallet Address</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' value={postedWalletAddress} onChange={(e) => setClinexBalance(e.target.value)} /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>$CTK Balance</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' value={clinexBalance} onChange={(e) => setPostedWalletAddress(e.target.value)} /></div>
                    </div>
                    <button onClick={(e) => {e.preventDefault(); writeToJoinDao(postedWalletAddress,clinexBalance)}} className='actionbutton p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Join DAO</button>
                </form>
            </div>
            }

           {displayComponent === "viewproposalsdisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
               <div className='p-[5%]' style={{border:"1px solid #eee", transition:"0.3s ease-in-out", overflow:"scroll", maxHeight:"20cm"}}>
                {viewDAOproposals ? (
                <div>
                    {viewDAOproposals.map((eachProposal) => (
                        <div className='mb-[1cm] p-[0.5cm] bg-[rgba(0,60,0,1)]' key={eachProposal.proposal_id}>
                        <div className='overflow-auto'><span className='font-[600]'>Proposal ID: </span>{eachProposal.proposal_id.toString()}</div>
                        <div className='overflow-auto'><span className='font-[600]'>Proposal name: </span>{Buffer.from(eachProposal.name.toString(16), 'hex').toString('utf-8')}</div>
                        <div className='overflow-auto'><span className='font-[600]'>Proposal description: </span>{Buffer.from(eachProposal.description.toString(16), 'hex').toString('utf-8')}</div>
                        <div className='overflow-auto'><span className='font-[600]'>Proposal deadline: </span>{eachProposal.deadline.toString()}</div>
                        <div className='overflow-auto'><span className='font-[600]'>Proposal proposer: </span>{"0x" + eachProposal.proposer.toString(16)}</div>
                       </div>
                        
                    ))}
                </div>
                ) : (<div> All proposals will display here</div>)
                }         
                </div>
            </div>
            }

         {displayComponent === "createproposaldisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Create a Proposal</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>Members of the DAO are allowed to create proposals!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal Title</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' required placeholder='Please type your proposal title' id="proposaltitle" name="proposaltitle" onChange={(e) => setproposaltitle(e.target.value)} /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal Description</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' required placeholder='Please type your proposal description' id="proposaldescription" name="proposaldescription" onChange={(e) => setproposaldescription(e.target.value)} /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal Deadline</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' required placeholder='Please fix a deadline for your proposal' id="proposaldeadline" name="proposaldeadline" onChange={(e) => setproposaldeadline(e.target.value)} /></div>
                    </div>
                    <button onClick={(e) => {e.preventDefault(); writeToCreateProposal(proposaltitle, proposaldescription, proposaldeadline)}} className='actionbutton p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Create Proposal</button>
                </form>
            </div>
            }

         {displayComponent === "voteproposaldisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Vote for a Proposal</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>Give ID of proposal to vote!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal ID</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Type the ID of this proposal' id="proposalid" name="proposalid" onChange={(e) => setproposalid(e.target.value)} /></div>
                    </div>
                    <button onClick={(e) => {e.preventDefault(); writeToVoteProposal(proposalid)}}  className='actionbutton p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Vote Proposal</button>
                </form>
            </div>
            }

             {displayComponent === "numberofvotesdisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>View the number of Votes for a Proposal</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>Give ID of proposal to view its votes!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal ID</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Type the ID of this proposal' id="proposalid2" name="proposalid2" onChange={(e) => setproposalid2(e.target.value)} /></div>
                    </div>
                    <div className='mt-[0.5cm]'>
                      {NumberOfVotesValue ? (<span><span>Number of votes: </span><span className='font-[600] text-[#090]'>{NumberOfVotesValue}</span></span> ) : (<div></div>)}</div>
                    <button onClick={(e) => {e.preventDefault(); readToViewNumberOfVotesOnAProposal(proposalid2)}}  className='actionbutton p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>View Votes</button>
                </form>
            </div>
            }
        </div>





        {joinDAOsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="fixed ml-[5%] top-[0.1cm] right-[5%] bg-[rgba(0,0,0,0.9)] text-white px-4 py-3 rounded-md" style={{transition:"0.5s ease-in-out"}}>
        <span><span className='text-[#0f0]'>Success!!!</span> &nbsp; You are now a member.</span> &nbsp; &nbsp;
        <button><i className="fa fa-circle-xmark text-[130%] font-[600] text-[#a00]" onClick={closejoinDAOAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }

       {createProposalsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="fixed ml-[5%] top-[0.1cm] right-[5%] bg-[rgba(0,0,0,0.9)] text-white px-4 py-3 rounded-md" style={{transition:"0.5s ease-in-out"}}>
        <span><span className='text-[#0f0]'>Success!!!</span> &nbsp; You have created a proposal.</span> &nbsp; &nbsp;
        <button><i className="fa fa-circle-xmark text-[130%] font-[600] text-[#a00]" onClick={closeCreateProposalAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }

        {voteProposalsuccessAlert ? 
        (<div>
        <div data-aos="slide-up" className="fixed ml-[5%] top-[0.1cm] right-[5%] bg-[rgba(0,0,0,0.9)] text-white px-4 py-3 rounded-md" style={{transition:"0.5s ease-in-out"}}>
        <span><span className='text-[#0f0]'>Success!!!</span> &nbsp; You have voted for a proposal with id number of {proposalid}.</span> &nbsp; &nbsp;
        <button><i className="fa fa-circle-xmark text-[130%] font-[600] text-[#a00]" onClick={closeVoteProposalAlert}></i></button>
        </div>
        </div>
        ) : 
        (<div></div>)
        }
    </div>
  </>
  );
};

