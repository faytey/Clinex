#[cfg(test)]
mod tests {
    use core::option::OptionTrait;
    use core::traits::TryInto;
    use snforge_std::{declare, ContractClassTrait, start_prank, stop_prank};
    use clinex::clinex_climate_report::{IReportDispatcher, IReportDispatcherTrait};
    use core::array::ArrayTrait;
    use starknet::{ContractAddress,get_caller_address};

    // #[test]
    fn setup() -> ContractAddress {
        // First declare and deploy a contract
        let contract = declare('ClinexClimate');
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
    fn test_climate_reports() {
        let contract_address = setup();
        // Create a Dispatcher object that will allow interacting with the deployed contract
        let dispatcher = IReportDispatcher { contract_address };

        // Call a view function of the contract
        let add_report = dispatcher.create_climate_report(
            'Cloudy Weather', 1, 2, 3, 4, 'Nigeria', 10, 11
        );
        assert(add_report == 1, 'Incorrect report');
        assert(dispatcher.get_climate_reports().len() == 1, 'Incorrect');
    }

}