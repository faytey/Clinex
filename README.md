## About the StarkNet CliNex Project.        [Our Website](https://clinexapp.vercel.app)

Providing the most impactful solutions to climate related problems around the world. CliNex DAO is open to NGOs, businesses, agencies, and organisations. To become a member, you will have to mint CliNex tokens which give you access to the DAO.

 ## Purpose of CliNex
Our mission is to provide NGOs, businesses, agencies, and organisations with a straightforward means of supporting thousands of victims of climate change worldwide. We collect live climate change data, and using our DAO as a powerful tool, members can create, view and vote for proposals. A proposal agreed upon (voted) by the DAO is being effected i.e., if the proposal with the highest votes is to give food and shelter to the climate change victims, the DAO takes action and puts it into effect. As a means of follow-up, our website features a blog to show community updates and an admin dashboard to manage these updates.

# Contract Addresses 
[Token Contract Address: 0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f ](https://goerli.voyager.online/contract/0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f)

[DAO Contract Address: 0x02036e19074e2f0087bf7bcd46b091338224d751266743c231cc44d19af327bf](https://goerli.voyager.online/contract/0x02036e19074e2f0087bf7bcd46b091338224d751266743c231cc44d19af327bf)

[Climate Contract Address : 0x05e5aac54bfb81faf747f7064197736626fd0a7f412c77755d9da7f40ca1c015](https://goerli.voyager.online/contract/0x05e5aac54bfb81faf747f7064197736626fd0a7f412c77755d9da7f40ca1c015)


 ## Key features
### Key features of CliNex

DAO, dApp, Token, Climate data and contract, 
Blog, Admin dashboard.


## Smart contract Tools
Scarb, Rust, Snforge and Cairo

## Front end Tools
Technologies used for front end and integration: 
Starknet.js, Next.js, Tailwind CSS, JavaScript,
OpenWeatherMap API, Google map API. [Explore Our Dapp](https://clinexapp.vercel.app)

# CliNex Token ($CTK)

## Overview 
CliNex Token is a StarkNet smart contract that implements a simple token standard. It allows users to mint and perform other token-related operations. It gives access to become a member of the Dao and participate in the governance. **To interact with this contract, ensure you have ArgentX or Braavos Smart Wallet extension installed on your browser, connect to the testnet and request for goerli Eth which will be used to pay for transaction fees.**


### Minting Tokens

To mint tokens, call the `mint` function:
[Mint token](https://clinexapp.vercel.app/minttoken).

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
CliNex Dao is a decentralized autonomous organization (DAO) built on StarkNet with a mission to confront climate change. Leveraging the blockchain technology, CliNex Dao fosters transparency and collaboration in addressing environmental challenges. The DAO empowers a global network of participants or organizations (NGOs, Businesses and Agencies), to contribute to sustainable practices and promote innovative solutions for climate change. Through a democratic governance model, token holders with a minimum of 1000 $CTK tokens engage in creation of proposals, voting on proposals, influence decisions made to tackle climate problems and  resource allocations. **To interact with this contract, ensure you have ArgentX or Braavos Smart Wallet extension installed on your browser, connect to the testnet and request for goerli Eth which will be used to pay for transaction fees.**

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
To create proposal members can click on the [create propasal](https://clinexapp.vercel.app/governance) tab on the website, the function return the unique id of the proposal.



### Viewing Proposals

Members can view the list of proposals by clicking on the [View proposal](https://clinexapp.vercel.app/governance) tab on the website 


### Voting on a Proposal

Members can vote for their favourite proposal by clicking the [Vote proposal](https://clinexapp.vercel.app/governance) tab on the website

### View vote on a proposal 
A member can view the number of votes on a proposal by clicking on the [view number of votes](https://clinexapp.vercel.app/governance) tab on the website. input the vote id and click on submit to see the number of votes 

# CliNex Climate changed Datas / Contract

## Overview

The CliNex Climate changed Data / Contract is a decentralized application (DApp) built on the StarkNet blockchain, aiming to facilitate climate data reporting and analysis. This smart contract allows users to create, retrieve, and explore climate reports securely and transparently.

## Features

### 1. Climate Report Structure

The contract defines a `Report` structure with the following fields:

- `location`: Geographical location represented as a felt252.
- `longitude` and `latitude`: Coordinates of the reporting location.
- `temperature`, `humidity`, `pressure`, and `wind_speed`: Environmental parameters recorded in u128 format.
- `weather`: Description of the weather in felt252 format.
- `index`: Unique identifier for each climate report.

### 2. Interface Functions

The contract provides an interface `IReport` with the following functions:

- `get_climate_reports`: Retrieves an array of all climate reports stored on the contract.
- `get_climate_report`: Retrieves a specific climate report based on its index.
- `create_climate_report`: Creates a new climate report with provided environmental data and emits a corresponding event.

### 3. Storage

The contract maintains a storage structure, including a `LegacyMap` for storing individual reports and a `report_count` variable to keep track of the total number of reports.

### 4. Events

The contract defines an event `ClimateEvent` that is emitted when a new climate report is created. This event includes the report's index and a descriptive string.

## Usage

1. **Get All Climate Reports:**
   - Call the `get_climate_reports` function to retrieve an array of all climate reports.

2. **Get Specific Climate Report:**
   - Call the `get_climate_report` function with the desired report index to retrieve specific climate report details.

3. **Create New Climate Report:**
   - Call the `create_climate_report` function with the required environmental data to create a new climate report.

4. **Events:**
   - Monitor the emitted `ClimateEvent` to stay informed about new climate reports and their respective indices.

## Development

- **Dependencies:**
  - This contract depends on the StarkNet SDK and StarkWare modules.

- **External Functions:**
  - External functions are implemented for the `IReport` interface to interact with the contract.

- **Events:**
  - The contract emits events for key activities, providing transparency and an audit trail.


## Contributors

- [Faith M. Roberts](https://github.com/faytey) - Smart Contract Engineer.
- [Patrick Ominisan](https://github.com/mrpatrick030) - Blockchain Engineer.
- [Jeremiah D. Oyeniran](https://github.com/jerydam) - Blockchain Developer.

## License

This Clinex DAO smart contract is licensed under the MIT license.
```

