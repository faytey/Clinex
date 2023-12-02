
## About the Clinex Project.        [Our Website](https://clinexapp.vercel.app)

Providing the most impactful solutions to climate related problems around the world. CliNex DAO is open to NGOs, businesses, agencies, and organisations. To become a member, you will have to mint CliNex tokens which give you access to the DAO.

 ## Purpose of CliNex
Our mission is to provide NGOs, businesses, agencies, and organisations with a straightforward means of supporting thousands of victims of climate change worldwide. We collect live climate change data, and using our DAO as a powerful tool, members can create, view and vote for proposals. A proposal agreed upon (voted) by the DAO is being effected i.e., if the proposal with the highest votes is to give food and shelter to the climate change victims, the DAO takes action and puts it into effect. As a means of follow-up, our website features a blog to show community updates and an admin dashboard to manage these updates.

# Contract Addresses 
[Token Contract Address: 0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f ](https://goerli.voyager.online/contract/0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f)

[DAO Contract Address: 0x02036e19074e2f0087bf7bcd46b091338224d751266743c231cc44d19af327bf](https://goerli.voyager.online/contract/0x02036e19074e2f0087bf7bcd46b091338224d751266743c231cc44d19af327bf)

[Climate Contract Address : 0x05e5aac54bfb81faf747f7064197736626fd0a7f412c77755d9da7f40ca1c015](https://goerli.voyager.online/contract/0x05e5aac54bfb81faf747f7064197736626fd0a7f412c77755d9da7f40ca1c015)


 ## Key features
Key features of CliNex

DAO, dApp, Token, Climate data and contract, 
Blog, Admin dashboard.


## Smart contract Tools
Scarb, Rust, Snforge and Cairo

## Front end Tools
Technologies used for front end and integration: 
Starknet.js, Next.js, Tailwind CSS, JavaScript,
OpenWeatherMap API, Google map API. [Explore Our Dapp](https://clinexapp.vercel.app)

# CliNex Token ($CTK)

CliNex Token is a StarkNet smart contract that implements a simple token standard. It allows users to mint and perform other token-related operations. It gives access to become a member of the Dao and participate in the governance


### Minting Tokens

To mint tokens, call the `mint` function:
[Mint token](https://clinexapp.vercel.app/minttoken)

### Getting Token Information

To get more information about the token, you can use the following functions from the stark scan where the token contract is deployed.

- `get_name`
- `get_symbol`
- `get_decimal`
- `get_total_supply`
- `get_balance_of_user`
- `get_owner`

## Events

The contract emits this event:

- `Mint`

This event can be used to track minting activities on the token contract.

## License

This project is licensed under the MIT License



# CliNex DAO Smart Contract

## Overview
CliNex Dao is a decentralized autonomous organization (DAO) built on StarkNet with a mission to confront climate change. Leveraging the blockchain technology, CliNex Dao fosters transparency and collaboration in addressing environmental challenges. The DAO empowers a global network of participants or organizations (NGOs, Businesses and Agencies), to contribute to sustainable practices and promote innovative solutions for climate change. Through a democratic governance model, token holders with a minimum of 1000 $CTK tokens engage in creation of proposals, voting on proposals, influence decisions made to tackle climate problems and  resource allocations.

## Features

- **Membership Management:** For users to join the DAO, they should have a minimum 1000 $CTK Token .
- **Proposal Creation:** DAO members can create proposals, providing details such as title, description, and deadline.
- **Voting of Proposals:** Members can vote on proposals, influencing their approval or rejection.
- **Viewing of Proposals:** Members can view a list of all the proposals that have been made in the Dao 

## Contract Structure

### DAO Interface (`IDAO`)

The `IDAO` interface defines the methods that the Clinex DAO contract implements. It includes functions for joining the DAO, accessing DAO features, managing member lists, creating and viewing proposals, voting on proposals, and executing proposals.

### CliNex DAO Contract (`CliNexDao`)

The `CliNexDao` contract implements the `IDAO` interface and provides the core logic for DAO operations. It uses StarkNet storage to maintain information about proposals, members, votes, and other relevant data.

### Proposal Struct

The `Proposal` struct represents a DAO proposal, containing details such as the proposal ID, title, description, deadline, and the propasal

## Usage

### Joining the DAO

To join the CliNex DAO, a user can go to the DAO page on the website and click on [Join DAO](https://clinexapp.vercel.app/governance) tab to join the Dao . (Provided the user have atleast 1000 $CTK token in their wallet)


### Creating a Proposal
To `create_proposal` members can click on the [create propasal](https://clinexapp.vercel.app/governance) tab on the website, the functions return the unique id of the proposal.



### Viewing Proposals

Members can view the list of proposals by clicking on the [View proposal](https://clinexapp.vercel.app/governance) tab on the website 


### Voting on a Proposal

Members can vote for their favourite proposal by clicking the [Vote proposal](https://clinexapp.vercel.app/governance) tab on the website

## Contributors

- [Faith M. Roberts](https://github.com/faytey)
- [Patrick Ominisan](https://github.com/mrpatrick030)
- [Jeremiah D. Oyeniran](https://github.com/jerydam)

## License

This Clinex DAO smart contract is licensed under the MIT license.
```

