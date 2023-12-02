[
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
