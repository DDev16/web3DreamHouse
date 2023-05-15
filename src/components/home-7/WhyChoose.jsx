import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../home-7/WhyChoose.module.css';




const WhyChoose = () => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "flaticon-high-five",
      title: "Leverage Blockchain Technology for Real Estate",
      text: ` Transform your property transactions with our cutting-edge blockchain technology. Our platform is designed to streamline the cumbersome, traditional processes associated with buying, selling, and managing properties. By leveraging the transparency, security, and efficiency of blockchain, we're able to provide a seamless and secure experience for users. With us, say goodbye to lengthy paperwork, unclear property histories, and the uncertainty of property transactions..`,
    },
    {
      id: 2,
      icon: "flaticon-home-1",
      title: "Decentralized or Centralized - You Choose",
      text: ` We believe in the power of choice and flexibility. Therefore, our platform provides options for both decentralized and centralized operations. Our decentralized approach empowers you with peer-to-peer transactions, giving you full control and privacy over your property deals. Meanwhile, our centralized system offers the reliability and structure of traditional real estate processes, with an added layer of blockchain security and efficiency. Choose the option that best suits your needs and comfort level..`,
    },
    {
      id: 3,
      icon: "flaticon-profit",
      title: "Wide Range of Properties",
      text: ` Explore a diverse array of properties on our platform. Whether you're looking for residential, commercial, or investment properties, we've got you covered. Our blockchain-powered database ensures that all listed properties are legitimate, with clear and unalterable histories. With our comprehensive search function, finding the perfect property that suits your preferences and budget is just a few clicks away.`,
    },
    {
      id: 4,
      icon: "flaticon-profit",
      title: "Wide Range of Properties",
      text: ` Explore a diverse array of properties on our platform. Whether you're looking for residential, commercial, or investment properties, we've got you covered. Our blockchain-powered database ensures that all listed properties are legitimate, with clear and unalterable histories. With our comprehensive search function, finding the perfect property that suits your preferences and budget is just a few clicks away.`,
    },
    {
      id: 5,
      icon: "flaticon-profit",
      title: "Wide Range of Properties",
      text: ` Explore a diverse array of properties on our platform. Whether you're looking for residential, commercial, or investment properties, we've got you covered. Our blockchain-powered database ensures that all listed properties are legitimate, with clear and unalterable histories. With our comprehensive search function, finding the perfect property that suits your preferences and budget is just a few clicks away.`,
    },
    {
      id: 6,
      icon: "flaticon-profit",
      title: "Wide Range of Properties",
      text: ` Explore a diverse array of properties on our platform. Whether you're looking for residential, commercial, or investment properties, we've got you covered. Our blockchain-powered database ensures that all listed properties are legitimate, with clear and unalterable histories. With our comprehensive search function, finding the perfect property that suits your preferences and budget is just a few clicks away.`,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <Carousel 
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {whyChooseContent.map((item) => (
        <div className={`${styles['col-md-6']} ${styles['col-lg-4']} ${styles['col-xl-4']}`} key={item.id}>
          <div className={`${styles.why_chose_us} ${styles.home7}`}>
            <div className={styles.icon}>
              <span className={item.icon}></span>
            </div>
            <div className={styles.details}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
       </Carousel>
    
  
  );
};

export default WhyChoose;
