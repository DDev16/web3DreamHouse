import Link from "next/link";
import React, { useState } from 'react';
import Web3 from "web3";
import contractABI from "../common/user-credentials/registration.json"
import { useRouter } from 'next/router';

    

const Form = () => {

  const [log, setLog] = useState("");
  const router = useRouter();

   
    
    

  const handleRegisterWithMetamask = async () => {
    setLog("Attempting to connect with MetaMask...");
    if (typeof window.ethereum !== 'undefined') {
        setLog("MetaMask is installed!");
        const web3 = new Web3(window.ethereum);
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setLog(`Connected with the account ${accounts[0]}`);

            const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 

            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods.register().send({ from: accounts[0] });

            setLog('User registered successfully');

            // Redirect to my-dashboard
            router.push('/my-dashboard');

        } catch (error) {
            setLog("User account already registered");
        }
    } else {
        setLog('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

  
  return (
    <form action="#">
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-thm">Login</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="User Name"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="email"
          className="form-control"
          required
          placeholder="Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
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
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
          id="terms"
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Register
      </button>
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
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* <div className="col-lg-6"> */}
      <button
    type="button"
    className="btn btn-log w-100 btn-thm"
    onClick={handleRegisterWithMetamask}
>
    Register with MetaMask
</button>
<pre>{log}</pre>
{/* </div> */}

      {/* more signin options */}
    </form>
  );
};

export default Form;
