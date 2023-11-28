use core::result::ResultTrait;
use starknet::ContractAddress;

use snforge_std::{declare, ContractClassTrait};

use climateapp::IReportSafeDispatcher;
use climateapp::IReportSafeDispatcherTrait;

fn deploy_contract(name: felt252) -> ContractAddress {
    let contract = declare(name);
    contract.deploy(@ArrayTrait::new()).unwrap()
}

fn get_dispatchers() -> (IReportSafeDispatcher,) {
    let contract_address = deploy_contract('ClinexClimate');
    let safe_dispatcher = IReportSafeDispatcher { contract_address };
    (safe_dispatcher,)
}

#[test]
fn test_add_report() {
    // let contract_address = deploy_contract('ClinexClimate');

    let (report_dispatcher,) = get_dispatchers();

    let add_report = report_dispatcher
        .create_climate_report(
            'Clouds', 'Cloudy Weather', 1, 2, 3, 4, 5, 6, 7, 8, 'Nigeria', 10, 11
        );
    let reports = report_dispatcher.get_climate_reports().unwrap();
    assert(reports.len() == 1, 'Didnt add report');
}

// #[cfg(test)]
// mod tests {
//     use core::option::OptionTrait;
//     use core::traits::TryInto;
//     use snforge_std::{declare, ContractClassTrait, start_prank, stop_prank};
//     use climateapp::{IReportDispatcher, IReportDispatcherTrait};
//     use core::array::ArrayTrait;
//     use starknet::{ContractAddress, get_caller_address};

//     // #[test]
//     fn setup() -> ContractAddress {
//         // First declare and deploy a contract
//         let contract = declare('ClinexClimate');
//         // Initialize Constructor
//         let mut deploy = ArrayTrait::new();
//         let contract_address = contract.precalculate_address(@deploy);
//         let owner: ContractAddress =
//             0x03af13f04C618e7824b80b61e141F5b7aeDB07F5CCe3aD16Dbd8A4BE333A3Ffa
//             .try_into()
//             .unwrap();
//         start_prank(contract_address, owner);
//         let deployed = contract.deploy(@deploy).unwrap();
//         deployed;
//         stop_prank(contract_address);
//         deployed
//     }

//     #[test]
//     fn test_climate_reports() {
//         let contract_address = setup();
//         // Create a Dispatcher object that will allow interacting with the deployed contract
//         let dispatcher = IReportDispatcher { contract_address };

//         // Call a view function of the contract
//         let add_report = dispatcher
//             .create_climate_report(
//                 'Clouds', 'Cloudy Weather', 1, 2, 3, 4, 5, 6, 7, 8, 'Nigeria', 10, 11
//             );
//         assert(add_report == 1, 'Incorrect report');
//     }
// }
