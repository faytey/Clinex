
## About the Clinex project.        [Our Website](https://clinexapp.vercel.app)

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

# ClinexToken. ($CTK)

ClinexToken is a StarkNet smart contract that implements a simple token standard. It allows users to mint, transfer, approve, and perform other token-related operations. It act as a means to join the CliNex Dao and participate in the governance


### Minting Tokens

To mint tokens, call the `mint` function:
[Mint token](https://clinexapp.vercel.app/minttoken)
To n
### Transferring Tokens

To transfer tokens, call the `transfer` function:

```bash
starknet invoke --address CONTRACT_ADDRESS --abi ClinexToken ITokens.transfer --inputs '{"address": "RECEIVER_ADDRESS", "amount": AMOUNT}'
```

### Approving Allowance

To approve allowance for another address, call the `approval` function:

```bash
starknet invoke --address CONTRACT_ADDRESS --abi ClinexToken ITokens.approval --inputs '{"to": "TO_ADDRESS", "amount": AMOUNT}'
```

### Checking Allowance

To check the allowance for a specific address, call the `allowance` function:

```bash
starknet call --address CONTRACT_ADDRESS --abi ClinexToken ITokens.allowance --inputs '{"from": "FROM_ADDRESS", "to": "TO_ADDRESS"}'
```

### Transferring From

To transfer tokens from one address to another using approved allowance, call the `transfer_from` function:

```bash
starknet invoke --address CONTRACT_ADDRESS --abi ClinexToken ITokens.transfer_from --inputs '{"from": "FROM_ADDRESS", "to": "TO_ADDRESS", "amount": AMOUNT}'
```

### Withdrawing Tokens

To withdraw tokens from the contract, call the `withdrawTokens` function:

```bash
starknet invoke --address CONTRACT_ADDRESS --abi ClinexToken ITokens.withdrawTokens --inputs '{"contract_address": "CONTRACT_ADDRESS", "amount": AMOUNT}'
```

### Getting Token Information

To get information about the token, you can use the following functions:

- `get_name`
- `get_symbol`
- `get_decimal`
- `get_total_supply`
- `get_balance_of_user`
- `get_owner`

## Events

The contract emits the following events:

- `TransferFrom`
- `Transfer`
- `Mint`
- `Withdraw`
- `Approval`

These events can be used to track various activities on the contract.

## Contributing

Contributions are welcome! Please follow the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



# Clinex DAO Smart Contract

## Overview

The Clinex DAO (Decentralized Autonomous Organization) smart contract is designed to manage membership, proposals, and voting within a decentralized organization. It utilizes the StarkNet platform for secure and scalable smart contract execution.

## Features

- **Membership Management:** Users can join the DAO by staking a specified amount of tokens.
- **Proposal Creation:** DAO members can create proposals, providing details such as title, description, and deadline.
- **Voting:** Members can vote on proposals, influencing their approval or rejection.

## Contract Structure

### DAO Interface (`IDAO`)

The `IDAO` interface defines the methods that the Clinex DAO contract implements. It includes functions for joining the DAO, accessing DAO features, managing member lists, creating and viewing proposals, voting on proposals, and executing proposals.

### Clinex DAO Contract (`ClinexDao`)

The `ClinexDao` contract implements the `IDAO` interface and provides the core logic for DAO operations. It uses StarkNet storage to maintain information about proposals, members, votes, and other relevant data.

### Proposal Struct

The `Proposal` struct represents a DAO proposal, containing details such as the proposal ID, vote count, title, description, deadline, and a flag indicating whether the proposal has been proposed.

## Usage

### Joining the DAO

To join the Clinex DAO, a user can call the `join_dao` function, staking a specified amount of tokens (e.g., 1000 tokens). Upon successful membership, the user is added to the member list.

```rust
// Example: Join the DAO
const proposalId = dao.join_dao();
```

### Creating a Proposal

Members can create proposals using the `create_proposal` function, providing details such as the title, description, and deadline. The function returns the unique ID of the created proposal.

```rust
// Example: Create a Proposal
const proposalId = dao.create_proposal("Proposal Title", "Description", deadline);
```

### Viewing Proposals

Members can view the list of proposals using the `view_proposals` function.

```rust
// Example: View Proposals
const proposals = dao.view_proposals();
```

### Voting on a Proposal

Members can vote on a proposal using the `vote` function, providing the proposal ID. The function returns a boolean indicating the success of the vote.

```rust
// Example: Vote on a Proposal
const success = dao.vote(proposalId);
```

### Executing a Proposal

Once a proposal is approved through voting, members can execute the proposal using the `execute_proposal` function.

```rust
// Example: Execute a Proposal
const success = dao.execute_proposal(proposalId);
```

### Accessing Member List

To access the list of members, the `member_list` function can be used.

```rust
// Example: Access Member List
const members = dao.member_list();
```

## Getting Started

1. **Clone Repository:**
   ```bash
   git clone https://github.com/faytey/Clinex.git
   ```

2. **Install Dependencies:**
   ```bash
   cd clinex-dao
   # Install dependencies as needed
   ```

3. **Deploy Contract:**
   - Follow the StarkNet documentation on deploying contracts to deploy the `ClinexDao` contract.
   - Configure the contract parameters as necessary.

4. **Interact with Contract:**
   - Use a StarkNet-compatible environment to interact with the deployed contract.
   - Call the provided functions as needed for DAO operations.

## Contributors

- [Faith M. Roberts](https://github.com/faytey)
- [Patrick Ominisan](https://github.com/mrpatrick030)
- [Jeremiah D. Oyeniran](https://github.com/jerydam)

## License

This Clinex DAO smart contract is licensed under the [] License.
```

