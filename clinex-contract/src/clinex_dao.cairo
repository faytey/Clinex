    use starknet::ContractAddress; 
    use core::array::ArrayTrait;

    #[derive(Copy, Serde, Drop, starknet::Store)]
    struct Proposal {
        proposal_id: u128,
        name: felt252,
        description: felt252,
        deadline: u128,
        proposer: ContractAddress
    }

    #[derive(Copy, Serde, Drop, starknet::Store)]
    struct Member {
        member_id: u128,
        member_address: ContractAddress,
    }

#[starknet::interface]
trait IDAO<TContractState> {
    fn join_dao(ref self: TContractState ) -> u128;
    fn member_list(self: @TContractState) -> Array<Member>;
    fn view_proposals(self: @TContractState) -> Array<Proposal>;
    fn create_proposal(ref self: TContractState, title: felt252, desc: felt252, deadline: u128) -> u128;
    fn vote(ref self: TContractState, proposal_id: u128) -> bool;
    fn view_votes(self: @TContractState, index: u128) -> u128;
}

#[starknet::contract]
mod ClinexDao {
    use clinex::clinex_token::{ITokenDispatcher, ITokenDispatcherTrait};
    use starknet::{get_caller_address, get_contract_address, get_block_timestamp, ContractAddress};
    use super::{Member, IDAO, Proposal};

    #[storage]
    struct Storage {
        proposals: LegacyMap::<u128,Proposal>,
        proposal_count: u128,
        members_count: u128,
        vote_count: LegacyMap::<u128, u128>,
        is_proposed: LegacyMap::<u128, bool>,
        member_list: LegacyMap::<u128,Member>,
        is_member: LegacyMap::<ContractAddress,bool>,
        is_voted: LegacyMap::<(u128, ContractAddress), bool>,
    }

    #[external(v0)]
    impl IDaoImpl of clinex::clinex_dao::IDAO<ContractState>{
        fn join_dao(ref self: ContractState ) -> u128 {
            let contract_address: ContractAddress = 0x01cb296d5ae3f94e244b4332b99033fb22987d9e46252414f905fece3032b23f.try_into().unwrap();
            assert(self.is_member.read(get_caller_address()) == false, 'Already a Member');
            ITokenDispatcher {contract_address}.mint(get_caller_address());
            assert(ITokenDispatcher {contract_address}.get_balance_of_user(get_caller_address()) >= 1000, 'Insufficient Tokens');
            ITokenDispatcher {contract_address}.transfer(get_contract_address(), 1000);
            let id = self.members_count.read() + 1;
            let member = Member {
                member_id: id,
                member_address: get_caller_address(),
            };
            self.member_list.write(id, member);
            self.is_member.write(member.member_address, true);
            self.members_count.write(id);
            member.member_id
        }

        fn member_list(self: @ContractState) -> Array<Member> {
            let mut members = ArrayTrait::<Member>::new();
            let count = self.members_count.read();
            let mut counter = 1;

            if count > 0 {
                loop {
                    let member = self.member_list.read(counter);
                    members.append(member);
                    counter += 1;

                    if counter > count {
                        break;
                    }
                }
            }   
            members
        }

        fn view_proposals(self: @ContractState) -> Array<Proposal> {
            let mut proposals = ArrayTrait::<Proposal>::new();
            let proposal_count = self.proposal_count.read();
            let mut counter = 1;

            if proposal_count > 0 {
                loop {
                    let proposal = self.proposals.read(counter);
                    proposals.append(proposal);
                    counter += 1;

                    if counter > proposal_count {
                        break;
                    }
                }
            }
            proposals
        }

        fn create_proposal(ref self: ContractState, title: felt252, desc: felt252, deadline: u128) -> u128 {
            assert(self.is_member.read(get_caller_address()) == true, 'Not a member');
    
            let id = self.proposal_count.read() + 1;
            
            let mut new_proposal = Proposal {
                proposal_id: id, 
                name: title, 
                description: desc, 
                deadline: deadline, 
                proposer: get_caller_address()
            };

            self.proposals.write(id, new_proposal);
            self.proposal_count.write(id);
            self.is_proposed.write(new_proposal.proposal_id, true);
            new_proposal.proposal_id
        }

        fn vote(ref self: ContractState, proposal_id: u128) -> bool {
            assert(self.is_member.read(get_caller_address()) == true, 'Not a member');
            
            assert(self.is_proposed.read(proposal_id) == true, 'Proposal does not exist' );
            assert(self.is_voted.read((proposal_id, get_caller_address())) == false, 'Already Voted');
            let votes = self.vote_count.read(proposal_id) + 1;
            self.vote_count.write(proposal_id, votes);
            self.is_voted.write((proposal_id, get_caller_address()), true);
            self.is_voted.read((proposal_id, get_caller_address()))
        }
        
        fn view_votes(self: @ContractState, index: u128) -> u128 {
            self.vote_count.read(index)
        }

    }
}