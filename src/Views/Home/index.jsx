import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import EventCarousel from "../../Components/Carousel";
import styles from "./styles.module.scss";
import landingImage from "../../assets/photos/EXPERIENCE/1.jpg";
import centerImage from "../../assets/photos/EXPERIENCE/5.jpg";
import Button from "@mui/material/Button";
import MasonryImageList from "../../Components/MasonryImageList";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import PackageCard from "../../Components/PackageCard";
import Footer from "../../Components/Footer";
import Contact from "../../Components/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("ALL");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Define categories with content
  const categoriesWithContent = {
    ALL: true,
    EXPERIENCE: true,
    STAY: false, // No content yet
    TASTE: false, // No content yet
  };

  // Package data for different offerings
  const packages = [
    {
      title: "Elegant Wedding",
      description:
        "Our signature wedding package with premium amenities for your perfect day.",
      price: "₹2,50,000",
      features: [
        "Venue decoration with floral arrangements",
        "Catering for up to 200 guests",
        "Professional photography & videography",
        "DJ and entertainment options",
      ],
    },
    {
      title: "Corporate Retreat",
      description:
        "Perfect for team building and business meetings in a serene environment.",
      price: "₹1,75,000",
      features: [
        "Conference room setup with AV equipment",
        "Catering for up to 50 attendees",
        "Outdoor team-building activities",
        "Accommodation for executives",
      ],
    },
    {
      title: "Weekend Getaway",
      description:
        "Escape the city for a relaxing weekend at our beautiful resort.",
      price: "₹35,000",
      features: [
        "Luxury accommodation for 2 nights",
        "All meals included",
        "Access to all resort amenities",
        "Complimentary spa session",
      ],
    },
  ];

  return (
    <>
      <div className={styles.pageDivOne}>
        <Navbar />
        <img
          src={landingImage}
          className={styles.LandingImage}
          alt="Open Sky Resort Landing"
        />

        <div className={styles.mainLandingDiv}>
          <span className={styles.landingText}>
            Step into the world of dream weddings
          </span>
          <span className={styles.landingSubText}>
            Welcome to Mangalam Opensky Resort, the best venue for your Grand
            Indian Wedding!
          </span>
          <Link to="/contact" className={styles.contactBtn}>
            <div className={styles.contactBtnText}>Contact Us!</div>
          </Link>
        </div>
      </div>
      <div className={styles.pageDivTwo}>
        <img
          src={centerImage}
          className={styles.centerImage}
          alt="Open Sky Resort"
        />
        <div className={styles.centerText}>
          <span className={styles.nameText}>OPENSKY</span>
          <span className={styles.subText}>RESORT</span>
        </div>
      </div>
      <div className={styles.pageDivThree}>
        <EventCarousel />
      </div>
      <div className={styles.pageDivFour}>
        <span className={styles.sectionNameHeading}>GALLERY</span>
        <div className={styles.galleryButtonGroup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="3"
            viewBox="0 0 88 3"
            fill="none"
          >
            <path d="M0 1.5H88" stroke="white" strokeWidth="2" />
          </svg>
          <Button
            className={
              selectedButton === "ALL"
                ? styles.galleryButtonActive
                : styles.galleryButton
            }
            onClick={() => handleButtonClick("ALL")}
          >
            ALL
          </Button>
          <Button
            className={
              selectedButton === "STAY"
                ? styles.galleryButtonActive
                : styles.galleryButton
            }
            onClick={() => handleButtonClick("STAY")}
            disabled={!categoriesWithContent.STAY} // Disable if no content
          >
            STAY
          </Button>
          <Button
            className={
              selectedButton === "EXPERIENCE"
                ? styles.galleryButtonActive
                : styles.galleryButton
            }
            onClick={() => handleButtonClick("EXPERIENCE")}
          >
            EXPERIENCE
          </Button>
          <Button
            className={
              selectedButton === "TASTE"
                ? styles.galleryButtonActive
                : styles.galleryButton
            }
            onClick={() => handleButtonClick("TASTE")}
            disabled={!categoriesWithContent.TASTE} // Disable if no content
          >
            TASTE
          </Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="3"
            viewBox="0 0 88 3"
            fill="none"
          >
            <path d="M0 1.5H88" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className={styles.galleryImages}>
          <MasonryImageList category={selectedButton} />
        </div>
      </div>
      <div className={styles.pageDivFive}>
        <span className={styles.sectionNameHeading}>PACKAGES</span>
        <p className={styles.packageDescription}>
          Explore our range of customizable packages to find the perfect fit for
          your event.
        </p>
        <Stack
          direction={{ xs: "column", md: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          className={styles.packageContainer}
        >
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              features={pkg.features}
            />
          ))}
        </Stack>
      </div>
      <div className={styles.pageDivSix}>
        <span className={styles.sectionNameHeading}>Contact Us</span>
        <p className={styles.packageDescription}>
          Take the Next Step Towards Your Dream Event with Mangalam OpenSky
          Resort
        </p>
        <Contact />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
