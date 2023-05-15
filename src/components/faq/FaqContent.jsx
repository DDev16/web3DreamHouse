const FaqContent = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              What is a blockchain real estate DApp?
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              A blockchain real estate DApp refers to a decentralized application built on a blockchain platform that enables users to buy, sell, or trade real estate properties using smart contracts and non-fungible tokens (NFTs).</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              How does a blockchain real estate DApp work?
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              A blockchain real estate DApp leverages the immutability and transparency of blockchain technology to facilitate secure and transparent real estate transactions. It allows users to list properties, verify ownership, execute contracts, and transfer property rights using smart contracts and NFTs.
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What are the advantages of using a blockchain real estate DApp?
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Using a blockchain real estate DApp offers several advantages, including increased transparency, reduced intermediaries, enhanced security, faster transactions, fractional ownership options, and the ability to track the entire transaction history of a property.</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How do I buy or sell real estate using a blockchain DApp?
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              To buy or sell real estate using a blockchain DApp, users need to create an account, browse available listings, select a property of interest, negotiate terms, execute a smart contract, transfer payment in cryptocurrency, and receive the corresponding NFT representing ownership rights. </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What is the role of non-fungible tokens (NFTs) in a blockchain real estate DApp?
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Non-fungible tokens (NFTs) in a blockchain real estate DApp represent unique digital assets that certify ownership or access rights to specific real estate properties. NFTs ensure the authenticity, provenance, and transferability of real estate assets on the blockchain.</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How does blockchain technology ensure the security and transparency of real estate transactions?
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Blockchain technology provides security and transparency in real estate transactions by utilizing cryptographic algorithms, decentralized consensus mechanisms, and distributed ledger systems. These features prevent fraud, tampering, and unauthorized modifications, ensuring the integrity of property records.</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Can I use cryptocurrencies to purchase real estate through a blockchain DApp?
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Yes, blockchain real estate DApps often support cryptocurrencies as a means of payment. Buyers can use popular cryptocurrencies like Bitcoin or Ethereum to purchase real estate properties listed on the DApp, providing a seamless and borderless transaction experience.</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
What are the legal implications and regulations surrounding blockchain real estate transactions?            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              Blockchain real estate transactions may be subject to existing real estate laws and regulations in the relevant jurisdictions. It is important to comply with local laws regarding property transfers, taxes, and registration procedures when conducting transactions through a blockchain real estate DApp.</p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
How can I verify the authenticity and ownership of a property represented by an NFT?            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              The authenticity and ownership of a property represented by an NFT on a blockchain real estate DApp can be verified by examining the blockchain records, which contain the transaction history, ownership transfers, and smart contract details associated with the NFT. These records provide a transparent and immutable proof of ownership. </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
What happens in case of disputes or issues with a real estate transaction on a blockchain DApp?            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
              In case of disputes or issues with a real estate transaction on a blockchain DApp, resolution mechanisms can be built into the DApp itself. This can involve arbitration, escrow services, or decentralized governance systems to address conflicts and ensure fair resolutions among the involved parties.</p>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
