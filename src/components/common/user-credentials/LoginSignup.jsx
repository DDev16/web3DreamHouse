import React, { useState } from 'react';
import Web3 from "web3";
import contractABI from "../user-credentials/registration.json"


const LoginSignup = () => {
    const [log, setLog] = useState("");

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
    }
    
    

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
            } catch (error) {
                setLog("User account already registered");
            }
        } else {
            setLog('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }
  

    return (
        <div className="modal-content">
            <div className="modal-header">
                <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="btn-close"
                ></button>
            </div>
            {/* End .modal-header */}

            <div className="modal-body container pb20">
                <div className="row">
                    <div className="col-lg-12">
                        <ul
                            className="sign_up_tab nav nav-tabs"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    href="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                >
                                    Login
                                </a>
                            </li>
                            {/* End login tab */}

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    href="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Register
                                </a>
                            </li>
                            {/* End Register tab */}
                        </ul>
                        {/* End .sign_up_tab */}
                    </div>
                </div>
                {/* End .row */}

                <div className="tab-content container" id="myTabContent">
                    <div
                        className="row mt25 tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        <div className="col-lg-6 col-xl-6">
                            <div className="login_thumb">
                                <img
                                    className="img-fluid w100"
                                    src="/assets/images/resource/login.jpg"
                                    alt="login.jpg"
                                />
                            </div>
                        </div>
                        {/* End col */}

                        <div className="col-lg-6 col-xl-6">
                            <div className="login_form">
                                <form action="#">
                                    <div className="heading">
                                        <h4>Login</h4>
                                    </div>
                                    {/* End heading */}

                                    <div className="row mt25">
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-fb w-100"
                                            >
                                                <i className="fa fa-facebook float-start mt5"></i>{" "}
                                                Login with Facebook
                                            </button>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-googl w-100"
                                            >
                                                <i className="fa fa-google float-start mt5"></i>{" "}
                                                Login with Google
                                            </button>
                                        </div>
                                    </div>
                                    <button
        type="button"
        className="btn btn-log w-100 btn-thm"
        onClick={handleLoginWithMetamask}
    >
        Log In with MetaMask
    </button>
    <pre>{log}</pre>

                                    {/* End .row */}

                                    <hr />

                                    <div className="input-group mb-2 mr-sm-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inlineFormInputGroupUsername2"
                                            placeholder="User Name Or Email"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End input-group */}

                                    <div className="input-group form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Password"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-password"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End input-group */}

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

                                        <a
                                            className="btn-fpswd float-end"
                                            href="#"
                                        >
                                            Lost your password?
                                        </a>
                                    </div>
                                    {/* End remember me checkbox */}

                                    <button
                                        type="submit"
                                        className="btn btn-log w-100 btn-thm"
                                    >
                                        Log In
                                    </button>
                                    {/* End submit button */}

                                    <p className="text-center">
                                        Dont have an account?{" "}
                                        <a className="text-thm" href="#">
                                            Register
                                        </a>
                                    </p>
                                </form>
                            </div>
                            {/* End .col .login_form */}
                        </div>
                    </div>
                    {/* End .tab-pane */}

                    <div
                        className="row mt25 tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        <div className="col-lg-6 col-xl-6">
                            <div className="regstr_thumb">
                                <img
                                    className="img-fluid w100"
                                    src="/assets/images/resource/regstr.jpg"
                                    alt="regstr.jpg"
                                />
                            </div>
                        </div>
                        {/* End . left side image for register */}

                        <div className="col-lg-6 col-xl-6">
                            <div className="sign_up_form">
                                <div className="heading">
                                    <h4>Register</h4>
                                </div>
                                {/* End .heading */}

                                <form action="#">
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-fb w-100"
                                            >
                                                <i className="fa fa-facebook float-start mt5"></i>{" "}
                                                Login with Facebook
                                            </button>
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn btn-googl w-100"
                                            >
                                                <i className="fa fa-google float-start mt5"></i>{" "}
                                                Login with Google
                                            </button>
                                        </div>
                                    </div>
                                    <button
    type="button"
    className="btn btn-log w-100 btn-thm"
    onClick={handleRegisterWithMetamask}
>
    Register with MetaMask
</button>
<pre>{log}</pre>


                                    {/* End .row */}

                                    <hr />

                                    <div className="form-group input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputName"
                                            placeholder="User Name"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .row */}

                                    <div className="form-group input-group  mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail2"
                                            placeholder="Email"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .row */}

                                    <div className="form-group input-group  mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword2"
                                            placeholder="Password"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-password"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .row */}

                                    <div className="form-group input-group  mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword3"
                                            placeholder="Re-enter password"
                                        />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="flaticon-password"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .row */}

                                    <div className="form-group ui_kit_select_search mb-3">
                                        <select
                                            className="form-select"
                                            data-live-search="true"
                                            data-width="100%"
                                        >
                                            <option data-tokens="SelectRole">
                                                Single User
                                            </option>
                                            <option data-tokens="Agent/Agency">
                                                Agent
                                            </option>
                                            <option data-tokens="SingleUser">
                                                Multi User
                                            </option>
                                        </select>
                                    </div>
                                    {/* End from-group */}

                                    <div className="form-group form-check custom-checkbox mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="terms"
                                        />
                                        <label
                                            className="form-check-label form-check-label"
                                            htmlFor="terms"
                                        >
                                            I have accept the Terms and Privacy
                                            Policy.
                                        </label>
                                    </div>
                                    {/* End from-group */}

                                    <button
                                        type="submit"
                                        className="btn btn-log w-100 btn-thm"
                                    >
                                        Sign Up
                                    </button>
                                    {/* End btn */}

                                    <p className="text-center">
                                        Already have an account?{" "}
                                        <a className="text-thm" href="#">
                                            Log In
                                        </a>
                                    </p>
                                </form>
                                {/* End .form */}
                            </div>
                        </div>
                        {/* End register content */}
                    </div>
                    {/* End .tab-pane */}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
