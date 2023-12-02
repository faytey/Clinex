use starknet::ContractAddress;

#[derive(Copy, Drop, Serde, starknet::Store)]
struct Report {
    location: felt252, 
    longitude: u128, 
    latitude: u128,
    temperature: u128, 
    humidity: u128, 
    weather: felt252, 
    pressure: u128, 
    wind_speed: u128, 
    index: u128,
}

#[starknet::interface]
trait IReport<TContractState> {
    fn get_climate_reports(self: @TContractState) -> Array<Report>;
    fn get_climate_report(self: @TContractState, index: u128) -> Report;
    fn create_climate_report(ref self: TContractState, weather: felt252, temperature: u128, pressure: u128, humidity: u128, wind_speed: u128, location: felt252, longitude: u128, latitude: u128) -> u128;
}

#[starknet::contract]
mod ClinexClimate {
    use starknet::ContractAddress;
    use core::array::ArrayTrait;
    use super::{Report, IReport};
    
    #[storage]
    struct Storage {
        reports: LegacyMap<u128, Report>,
        report_count: u128
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        ClimateEvent: ClimateEvent
    }

    #[derive(Drop, starknet::Event)]
    struct ClimateEvent {
        #[key]
        index: u128,
        string: felt252
    }

    #[external(v0)]
    impl IReportImpl of IReport<ContractState> {
        fn get_climate_reports(self: @ContractState) -> Array<Report> {
            let mut reports = ArrayTrait::<Report>::new();
            let total_reports = self.report_count.read();
            let mut index = 1;

            if total_reports > 0 {
                loop {
                    let report = self.reports.read(index);
                    reports.append(report);
                    index += 1;

                    if index > total_reports {
                        break;
                    }
                }
            }
            reports
        }

        fn get_climate_report(self: @ContractState, index: u128) -> Report {
            self.reports.read(index)
        }
    
        fn create_climate_report(ref self: ContractState, weather: felt252, temperature: u128, pressure: u128, humidity: u128, wind_speed: u128, location: felt252, longitude: u128, latitude: u128) -> u128 {
            let index = self.report_count.read() + 1;
            let report = Report {
                weather,
                temperature,
                pressure,
                humidity,
                wind_speed,
                location,
                longitude,
                latitude,
                index,
            };

            self.report_count.write(index);
            self.reports.write(index, report);
            self.emit(ClimateEvent {index: index, string: 'New Climate Added'});
            index
        }

    }
}