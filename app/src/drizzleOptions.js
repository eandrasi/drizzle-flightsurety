import FlightSuretyApp from "./contracts/FlightSuretyApp.json";
import FlightSuretyData from "./contracts/FlightSuretyData.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [FlightSuretyApp, FlightSuretyData],
  events: {
    FlightSuretyApp: [
      "FlightRegistered",
      "InsuranceBought",
      "OperationalAppStateChanged",
      "AirlinePaidFunding",
      "FlightProcessed",
      "FlightKey",
      "FlightStatusInfo",
      "OracleReport",
      "OracleRequest",
      "WithdrawRequested"
    ],
    FlightSuretyData: [
      "NewAirlineRegistered",
      "OperationalDataStateChanged",
      "InsuranceCredited",
      "InsuranceHasBeenPaid"
    ]
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
