import React from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "./logo.png";

export default ({ accounts }) => (

  <div className="App">
    <ToastContainer />

    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Flightsurety Flight Insurance DAPP</h1>
      <p>Decentralized application for flight insurance</p>
      <p>Project for the nano-degree program from Udacity</p>
    </div>

    <div className="section">
      <hr/>
      <h4>Do not jump over steps. </h4>
      <p>Error handling is not implemented so do not jump over steps. Go through phases as indicated</p>
      <h4>Run this DAPP in a Chrome Incognito</h4>
      <p>This Dapp should be run in a Chrome incognito window so that Metamask does not interfere.</p>
      <p>If the values are not up to date, please refresh.</p>
      <hr/>
    </div>

    <div className="section">
      <p>This Dapp needs access to multiple accounts</p>
      <h2>First 2 Active Accounts</h2>
      Account 0:<AccountData accountIndex={0} units="ether" precision={3} /><hr />
      Account 1:<AccountData accountIndex={1} units="ether" precision={3} /><hr />
      <hr />
    </div>

    <div className="section">
      <h2>Operational Control</h2>
      <p>
        FlightSuretyApp: 
        <strong>
        <ContractData contract="FlightSuretyApp" method="isOperational" />
        </strong>
      </p>
      <p>
        FlightSuretyData: 
        <strong>
        <ContractData contract="FlightSuretyData" method="isOperational" />
        </strong>
      </p>
      <p>Issue with Drizzle prevents sending Booleans. Changing the status is demonstrated
        with Tests</p>
      <hr />
      <hr />
    </div>

    <div className="section">
      <h2>Airline Registration</h2>
      <p>
        Airlines registered: 
        <ContractData contract="FlightSuretyData" method="countAirlines" />
      </p>
      <p>
        First Airline <strong>(account[1])</strong> is an Airline at contract deployment:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirline" methodArgs={[accounts[1]]} />
        </strong>
      </p>
      <p>
        First Airline <strong>(account[1])</strong> is registered:
        <strong>
        <ContractData contract="FlightSuretyData" method="isRegistered" methodArgs={[accounts[1]]} />
        </strong>
      </p>
      <hr />
      <p>
        First Airline <strong>(account[1])</strong> is Operational:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirlineOperational" methodArgs={[accounts[1]]} />
        </strong>
      </p>
      <p>
        First Airline funds:
      </p>
        <strong>
        Airline 1:<AccountData accountIndex={1} units="ether" precision={3} /><hr />
        </strong>
      <p>
        First Airline <strong>(account[1])</strong> must pay more than 10 ether in order to become operational.
        The Sumbit button will send a transaction for you from the accounts[1] in value of 10.1 ether. 
        The is Operational value will change to true.
      </p>
      <ContractForm contract="FlightSuretyApp" method="payFunding" sendArgs={{from: accounts[1], value: 10100000000000000000}} />
      <hr />
      <hr />

      <strong>
      Airline 2:<AccountData accountIndex={2} units="ether" precision={3} /><hr />
      </strong>
      <p>
        First Airline can register a second airline.
        Press Sumbit to register another airline with accounts[2] address.
      </p>
      <ContractForm contract="FlightSuretyApp" method="registerAirline"  sendArgs={{from: accounts[1]}} />
      <p>
        Second Airline <strong>(account[2])</strong> is an Airline :
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirline" methodArgs={[accounts[2]]} />
        </strong>
      </p>
      <p>
        Second Airline <strong>(account[2])</strong> is registered:
        <strong>
        <ContractData contract="FlightSuretyData" method="isRegistered" methodArgs={[accounts[2]]} />
        </strong>
      </p>
      <hr />
      <p>
        Second Airline <strong>(account[2])</strong> is Operational:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirlineOperational" methodArgs={[accounts[2]]} />
        </strong>
      </p>
      <p>
        Second Airline must pay fund in order to become operational.
      </p>
        <ContractForm contract="FlightSuretyApp" method="payFunding" sendArgs={{from: accounts[2], value: 10100000000000000000}} />
      <hr />
      <h4>
        Adding up to 4 Airlines without voting demonstrated with tests.
        Adding 5th an more Airline only with voting demonstrated with tests.
      </h4>
      <hr />
    </div>
    <hr />

    <div className="section">
      <h2>Flights</h2>

      <p>
        Register a flight with the First Airline.
        Timestamp should be sometime in the future.
        All Flights functionality demonstrated with tests.
      </p>
      <ContractForm contract="FlightSuretyApp" method="registerFlight"  
      labels={["accounts[1].address", "Ex: FL1000", "unixTimestamp: 1564487000"]} sendArgs={{from: accounts[1], gas: 9000000}}/>

      <p>
        FlightKeySize:
        <strong>
        <ContractData contract="FlightSuretyData" method="flightKeysSize" />
        </strong>
      </p>
      
      <p>
        FirstFlightKey:
        <strong>
        <ContractData contract="FlightSuretyData" method="flightKeys" methodArgs={["0"]}/>
        </strong>
      </p>
      
      <p>
        FirstFlightData:
      </p>
        <strong>
        <ContractData contract="FlightSuretyData" method="flights" methodArgs={["0x81108d6978f6f06bbea9f913e31ff906e195866afc17c7c5ac57569da8416e58"]}/>
        </strong>
    </div>

    <hr />

    <div className="section">
      <h2>Passengers</h2>
      <p>
        Buy insurance for a flight. All functionality demonstrated with tests.
        Passenger will be accounts[11] and he will buy insurance for 1000000 wei.
      </p>

      <strong>
      Passenger:<AccountData accountIndex={11} units="ether" precision={3} /><hr />
      </strong>

      <ContractForm contract="FlightSuretyApp" method="buyInsurance" sendArgs={{from: accounts[11], value: 1000000, gas: 9000000}}/>
    </div>

    <hr />
    <hr />
    <hr />

    <div className="section">
      <h2>
        Oracles
      </h2>

      <p>
        All functionality demonstrated with tests.
        After registering enough Oracles from many different accounts, you have to listen to the OracleRequest event and respond if 
        you have the specified index. The response will be generated manually.
      </p>

      <p>
        The fee is:
        <strong>
          <ContractData contract="FlightSuretyApp" method="REGISTRATION_FEE" />
        </strong>
      </p>

      <p>
        Register one Oracle from accounts[20]
      </p>
      <ContractForm contract="FlightSuretyApp" method="registerOracle" sendArgs={{from: accounts[20], value: 1000000000000000000, gas: 9000000}} />

      <p>
        Indexes for accounts[20]:
      </p>
        <strong>
          <ContractData contract="FlightSuretyApp" method="getMyIndexes" methodArgs={[{from: accounts[20], gas: 9000000}]}/>
        </strong>
      
      <p>
        Sumbit Oracle response from accounts[20]
      </p>
      <ContractForm contract="FlightSuretyApp" method="submitOracleResponse" sendArgs={{from: accounts[20], value: 1000000000000000000, gas: 9000000}} />

    </div>


  </div>
);
