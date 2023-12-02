#[cfg(test)]
mod tests {
    use core::option::OptionTrait;
    use core::traits::TryInto;
    use snforge_std::{declare, ContractClassTrait, start_prank, stop_prank};
    use clinex::clinex_dao::{IDAODispatcher, IDAODispatcherTrait};
    use clinex::clinex_token::{ITokenDispatcher, ITokenDispatcherTrait};
    use core::array::ArrayTrait;
    use starknet::{ContractAddress,get_caller_address, get_contract_address};

    // #[test]
    fn setup() -> ContractAddress {
        // First declare and deploy a contract
        let contract = declare('ClinexDao');
        // Initialize Constructor
        let mut deploy = ArrayTrait::new();
        let contract_address = contract.precalculate_address(@deploy);
        let owner: ContractAddress = 0x03af13f04C618e7824b80b61e141F5b7aeDB07F5CCe3aD16Dbd8A4BE333A3Ffa.try_into().unwrap();
        start_prank(contract_address, owner);
        let deployed = contract.deploy(@deploy).unwrap();
        deployed;
        stop_prank(contract_address);
        deployed
    }

    #[test]
    fn test_join_dao() {
        let contract_address = setup();
        let user: ContractAddress = 0x03af13f04C618e7824b80b61e141F5b7aeDB07F5CCe3aD16Dbd8A4BE333A3Ffa.try_into().unwrap();
        // Create a Dispatcher object that will allow interacting with the deployed contract
        let dispatcher = IDAODispatcher { contract_address };

        start_prank(contract_address, get_contract_address());
        // Call a view function of the contract
        let mint = dispatcher.join_dao();
    }

}