const Pricing = () => {
  const pricingContent = [
    {
      id: 1,
      price: "56",
      title: "Aspirant Plan",
      features: [
        "Access to standard areas of the metaverse",
"1 Customizable Avatar",
"Access to basic NFT Real Estate listings",
"1 Free NFT Artwork per month",
"Eligibility to become an Agent",
"Earn 1% commission on sales",
"Agent dashboard with performance analytics",
"Standard Support"      ],
    },
    {
      id: 2,
      price: "190",
      title: "Ambassador Plan",
      features: [
"Access to premium areas of the metaverse",
"3 Customizable Avatars",
"Access to premium NFT Real Estate listings",
"2 Free NFT Artworks per month",
"Eligibility to become a Senior Agent",
"Earn 2% commission on sales",
"Agent dashboard with advanced performance analytics",
"Priority Support",
"Exclusive training and workshops for agents",
"Access to NFT Real Estate market analytics"
      ],
    },
    {
      id: 3,
      price: "291",
      title: "Magnate Plan",
      features: [
        "Full access to all areas of the metaverse",
"5 Customizable Avatars",
"Access to all NFT Real Estate listings, including exclusive ones", 
"3 Free NFT Artworks per month",
"Eligibility to become a Master Agent",
"Earn 3% commission on sales",
"Agent dashboard with comprehensive performance analytics",
"24/7 Premium Support",
"Priority participation in exclusive NFT auctions",
"Access to advanced NFT Real Estate market analytics",
"Magnate Member Badge in the metaverse",
"Exclusive networking opportunities with industry experts and top agents",
"Dedicated account manager for personalized support"
      ],
    },
  ];
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <div className="pricing_table">
            <div className="pricing_header">
              <div className="price">${item.price}</div>
              <h4>{item.title}</h4>
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                {item.features.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="pricing_footer">
              <a className="btn pricing_btn btn-block" href="#">
                Select Package
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
