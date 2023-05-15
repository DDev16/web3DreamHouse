import PopupVideo from "../common/PopupVideo";

const OurMission = () => {
  const missionContent = [
    {
      id: 1,
      icon: "flaticon-user",
      number: "$0",
      meta: "Customers to date",
    },
    {
      id: 2,
      icon: "flaticon-home",
      number: "$0",
      meta: "In home sales",
    },
    {
      id: 3,
      icon: "flaticon-transfer",
      number: "$0",
      meta: "In Savings",
    },
  ];

  return (
    <>
      <div className="col-lg-8 col-xl-7">
        <div className="about_content">
          <h2>Our Mission: Changing Real Estate with Blockchain Technology</h2>
          <p>
            At Web3Realty, our mission is to revolutionize the real estate industry by leveraging the power of blockchain technology. We believe that blockchain can transform how real estate is conducted, making it more transparent, secure, and efficient for all parties involved.
          </p>
          <p>
            With our platform, we aim to address the traditional challenges of real estate, such as cumbersome paperwork, lack of transparency, and high transaction costs. By harnessing the decentralized and immutable nature of blockchain, we provide a trusted and efficient ecosystem for property transactions.
          </p>
          <p>
            Our blockchain-powered platform offers benefits such as transparency in property listings and ownership records, enhanced security through smart contracts, and streamlined processes that reduce time and costs. We strive to create a global marketplace where buyers and sellers can connect seamlessly, expanding opportunities for real estate transactions worldwide.
          </p>

          <ul className="ab_counting">
            {missionContent.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <div className="about_counting">
                  <div className="icon">
                    <span className={`${item.icon}`}></span>
                  </div>
                  <div className="details">
                    <h3>{item.number}</h3>
                    <p>{item.meta}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* End .ab_counting */}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-5">
        <div className="about_thumb">
          <img
            className="img-fluid w100"
            src="assets/images/about/1.jpg"
            alt="1.jpg"
          />
          <PopupVideo />
        </div>
      </div>
    </>
  );
};

export default OurMission;
