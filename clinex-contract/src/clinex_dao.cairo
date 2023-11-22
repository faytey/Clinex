use starknet::ContractAddress; 
use array::ArrayTrait;

#[starknet::interface]
trait IDAO<TContractState> {
    fn join_dao(ref self: TContractState ) -> u128;
    fn access(self: @TContractState) -> bool;
    fn member_list(self: @TContractState) -> ArrayTrait;
    fn view_proposals(self: @TContractState) -> ArrayTrait;
    fn create_proposal(ref self: TContractState) -> u128;
    fn vote(ref self: TContractState, proposal_id: u128) -> bool;
    fn execute_proposal(ref self: TContractState, proposal_id: u128) -> bool;
    fn rejected_proposals(self: @TContractState) -> ArrayTrait;
}

#[starknet::contract]
mod ClinexDao {
    use clinex::clinex_token::{get_balance_of_user, transfer};
    use starknet::{get_caller_address, get_contract_address};

    #[storage]
    struct Storage {
        proposals: ArrayTrait::new,
        proposal_count: u128,
        members_count: u128,
        member_list: ArrayTrait::new,
        is_member: LegacyMap::<ContractAddress,bool>,
        rejected_proposals: ArrayTrait::new,
        is_voted: LegacyMap::<Proposal, bool>,
        member_id: u128
    }

    struct Proposal {
        proposal_id: u128,
        vote_count: u128,
        name: felt252,
        description: felt252,
        deadline: u256,
        is_proposed: bool,
    }

    #[external(v0)]
    impl IDaoImpl of clinex::clinex_dao::IDAO<ContractState>{
        fn join_dao(ref self: ContractState ) -> u128 {
            assert(self.is_member.read(get_caller_address()) == false, 'Already a Member');
            assert(get_balance_of_user(get_caller_address()) >= 1000, 'Insufficient Tokens');
            transfer(get_contract_address, 1000);
            self.member_list.append(get_caller_address());
            self.is_member.write(true);
            self.member_count.write(self.members_count.read() + 1);
            self.member_id.write(self.members_count.read());
            
        }
        fn access(self: @TContractState) -> bool{
            assert(self.is_member.read() == true, 'Not a member');
        }
        fn member_list(self: @ContractState) -> ArrayTrait {
            self.access();
            self.member_list.read()   
        }
        fn view_proposals(self: @ContractState) -> ArrayTrait {
            self.access();
            self.proposals.read()
        }
        fn create_proposal(ref self: ContractState, title: felt252, desc: felt252, deadline: u128) -> u128 {
            self.access();
            let new_proposal = Proposal {
                proposal_id: proposal_id + 1, 
                vote_count: vote_count + 1, 
                name: title, 
                description: desc, 
                deadline: deadline, 
                is_proposed: true
            };
            self.proposals.append(new_proposal);
            self.proposal_count.write(self.proposal_count.read() + 1);
            new_proposal.proposal_id
        }
        fn vote(ref self: ContractState, proposal_id: u128) -> bool {
            self.access();

        }
        fn execute_proposal(ref self: ContractState, proposal_id: u128) -> bool {
            self.access();

        }
        fn rejected_proposals(self: @ContractState) -> ArrayTrait {
            self.access();
            self.rejected_proposals.read()
        }
    }
}