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
      
      
      <strong>
      Airline 3:<AccountData accountIndex={3} units="ether" precision={3} /><hr />
      </strong>
      <p>
        First Airline can register a 3rd airline.
        Press Sumbit to register another airline with accounts[3] address.
      </p>
      <ContractForm contract="FlightSuretyApp" method="registerAirline"  sendArgs={{from: accounts[1]}} />
      <p>
        Third Airline <strong>(account[3])</strong> is an Airline :
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirline" methodArgs={[accounts[3]]} />
        </strong>
      </p>
      <p>
        Third Airline <strong>(account[3])</strong> is registered:
        <strong>
        <ContractData contract="FlightSuretyData" method="isRegistered" methodArgs={[accounts[3]]} />
        </strong>
      </p>
      <hr />
      <p>
        Third Airline <strong>(account[3])</strong> is Operational:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirlineOperational" methodArgs={[accounts[3]]} />
        </strong>
      </p>
      <p>
        Third Airline must pay fund in order to become operational.
      </p>
        <ContractForm contract="FlightSuretyApp" method="payFunding" sendArgs={{from: accounts[3], value: 10100000000000000000}} />
      <hr />


      <strong>
      Airline 4:<AccountData accountIndex={4} units="ether" precision={3} /><hr />
      </strong>
      <p>
        First Airline can register a 4th airline.
        Press Sumbit to register another airline with accounts[4] address.
      </p>
      <ContractForm contract="FlightSuretyApp" method="registerAirline"  sendArgs={{from: accounts[1]}} />
      <p>
        Forth Airline <strong>(account[4])</strong> is an Airline :
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirline" methodArgs={[accounts[4]]} />
        </strong>
      </p>
      <p>
        Forth Airline <strong>(account[4])</strong> is registered:
        <strong>
        <ContractData contract="FlightSuretyData" method="isRegistered" methodArgs={[accounts[4]]} />
        </strong>
      </p>
      <hr />
      <p>
        Forth Airline <strong>(account[4])</strong> is Operational:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirlineOperational" methodArgs={[accounts[4]]} />
        </strong>
      </p>
      <p>
        Forth Airline must pay fund in order to become operational.
      </p>
        <ContractForm contract="FlightSuretyApp" method="payFunding" sendArgs={{from: accounts[4], value: 10100000000000000000}} />
      <hr />
      <hr />


      <strong>
      Airline 5:<AccountData accountIndex={5} units="ether" precision={3} /><hr />
      </strong>
      <h3>
        Fifth Airline must await voting!!!
      </h3>
      <ContractForm contract="FlightSuretyApp" method="registerAirline"  sendArgs={{from: accounts[1]}} />
      <p>
        Fifth Airline <strong>(account[5])</strong> is an Airline :
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirline" methodArgs={[accounts[5]]} />
        </strong>
      </p>
      <p>
        Fifth Airline <strong>(account[5])</strong> is registered:
        <strong>
        <ContractData contract="FlightSuretyData" method="isRegistered" methodArgs={[accounts[5]]} />
        </strong>
      </p>
      <hr />
      <p>
      Fifth Airline <strong>(account[5])</strong> is Operational:
        <strong>
        <ContractData contract="FlightSuretyData" method="isAirlineOperational" methodArgs={[accounts[5]]} />
        </strong>
      </p>
      <p>
      Fifth Airline must pay fund in order to become operational.
      </p>
        <ContractForm contract="FlightSuretyApp" method="payFunding" sendArgs={{from: accounts[5], value: 10100000000000000000}} />
      <hr />





    </div>

    {/* <div className="section">
      <h2>SimpleStorage</h2>
      <p>
        This shows a simple ContractData component with no arguments, along with
        a form to set its value.
      </p>
      <p>
        <strong>Stored Value: </strong>
        <ContractData contract="SimpleStorage" method="storedData" />
      </p>
      <ContractForm contract="SimpleStorage" method="set" />
    </div> */}

    {/* <div className="section">
      <h2>TutorialToken</h2>
      <p>
        Here we have a form with custom, friendly labels. Also note the token
        symbol will not display a loading indicator. We've suppressed it with
        the <code>hideIndicator</code> prop because we know this variable is
        constant.
      </p>
      <p>
        <strong>Total Supply: </strong>
        <ContractData
          contract="TutorialToken"
          method="totalSupply"
          methodArgs={[{ from: accounts[0] }]}
        />{" "}
        <ContractData contract="TutorialToken" method="symbol" hideIndicator />
      </p>
      <p>
        <strong>My Balance: </strong>
        <ContractData
          contract="TutorialToken"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </p>
      <h3>Send Tokens</h3>
      <ContractForm
        contract="TutorialToken"
        method="transfer"
        labels={["To Address", "Amount to Send"]}
      />
    </div> */}
    {/* <div className="section">
      <h2>ComplexStorage</h2>
      <p>
        Finally this contract shows data types with additional considerations.
        Note in the code the strings below are converted from bytes to UTF-8
        strings and the device data struct is iterated as a list.
      </p>
      <p>
        <strong>String 1: </strong>
        <ContractData contract="ComplexStorage" method="string1" toUtf8 />
      </p>
      <p>
        <strong>String 2: </strong>
        <ContractData contract="ComplexStorage" method="string2" toUtf8 />
      </p>
      <strong>Single Device Data: </strong>
      <ContractData contract="ComplexStorage" method="singleDD" />
    </div> */}
  </div>
);
