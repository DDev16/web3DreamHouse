import Link from "next/link";
import React, { useState } from 'react';
import Web3 from "web3";
import contractABI from "../abi/registration.json";
import { useRouter } from 'next/router';

const Form = () => {

  const [log, setLog] = useState("");
  const router = useRouter();

  const handleLoginWithMetamask = async () => {
      setLog("Attempting to login with MetaMask...");
      console.log("Attempting to login with MetaMask...");
      if (typeof window.ethereum !== 'undefined') {
          setLog("MetaMask is installed!");
          console.log("MetaMask is installed!");
          const web3 = new Web3(window.ethereum);
          try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              const account = accounts[0];
              setLog(`Logged in with the account ${account}`);
              console.log(`Logged in with the account ${account}`);
  
              const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
              const contract = new web3.eth.Contract(contractABI, contractAddress);
  
              const isRegistered = await contract.methods.isRegistered(account).call();
              if (!isRegistered) {
                  setLog('This account is not registered');
                  console.log('This account is not registered');
                  return;
              }
  
              const message = `Sign this message to confirm you own the account ${account}`;
              const signature = await web3.eth.personal.sign(message, account);
              const recoveredAccount = await web3.eth.personal.ecRecover(message, signature);
  
              setLog(`Recovered account: ${recoveredAccount}`);
              console.log(`Recovered account: ${recoveredAccount}`);
              setLog(`Original account: ${account}`);
              console.log(`Original account: ${account}`);
              
              if (recoveredAccount.toLowerCase() === account.toLowerCase()) {
                  setLog('Login successful');
                  console.log('Login successful');
                  
              } else {
                  setLog('Login failed');
                  console.log('Login failed');
              }
          } catch (error) {
              console.error(error);
              setLog("Error during login: " + error.message);
          }
      } else {
          setLog('Non-Ethereum browser detected. You should consider trying MetaMask!');
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
       // Redirect to my-dashboard
       router.push('/my-dashboard');

  }
  
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link href="/register">
            <a className="text-thm">Sign Up!</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder="User Name Or Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          Remember me
        </label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
      </button>
      <button
        type="button"
        className="btn btn-log w-100 btn-thm"
        onClick={handleLoginWithMetamask}
    >
        Log In with MetaMask
    </button>
    <pre>{log}</pre>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
