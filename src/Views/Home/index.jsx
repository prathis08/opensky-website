import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import EventCarousel from "../../Components/Carousel";
import styles from "./syles.module.scss";
import landingImage from "../../websiteimages/landing-image.jpeg";
import centerImage from "../../websiteimages/center-image.jpg";
import Button from "@mui/material/Button";
import MasonryImageList from "../../Components/MasonryImageList";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import PackageCard from "../../Components/PackageCard";
import Footer from "../../Components/Footer";
import Contact from "../../Components/Contact";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("ALL");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <div className={styles.pageDivOne}>
        <Navbar />
        <img src={landingImage} className={styles.LandingImage} />

        <div className={styles.mainLandingDiv}>
          <span className={styles.landingText}>
            Step into the world of dream weddings
          </span>
          <span className={styles.landingSubText}>
            Welcome to Mangalam Opensky Resort, the best venue for your Grand
            Indian Wedding!
          </span>
          <a className={styles.contactBtn}>
            <div className={styles.contactBtnText}>Contact Us!</div>
          </a>
        </div>
      </div>
      <div className={styles.pageDivTwo}>
        <img src={centerImage} className={styles.centerImage} />
        <div className={styles.centerText}>
          <span className={styles.nameText}>OPENSKY</span>
          <span className={styles.subText}>RESORT</span>
        </div>
      </div>
      <div className={styles.pageDivThree}>
        <EventCarousel></EventCarousel>
      </div>
      <div className={styles.pageDivFour}>
        <span className={styles.sectionNameHeading}>GALLERY</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="3"
            viewBox="0 0 88 3"
            fill="none"
          >
            <path d="M0 1.5H88" stroke="white" stroke-width="2" />
          </svg>
          <Button
            style={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontStyle: "normal",
              lineHeight: "140%" /* 1.75rem */,
              letterSpacing: "0.1rem",
              fontWeight: selectedButton === "ALL" ? "bold" : "normal",
            }}
            onClick={() => handleButtonClick("ALL")}
          >
            ALL
          </Button>
          <Button
            style={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontStyle: "normal",
              lineHeight: "140%" /* 1.75rem */,
              letterSpacing: "0.1rem",
              fontWeight: selectedButton === "STAY" ? "bold" : "normal",
            }}
            onClick={() => handleButtonClick("STAY")}
          >
            STAY
          </Button>
          <Button
            style={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontStyle: "normal",
              lineHeight: "140%" /* 1.75rem */,
              letterSpacing: "0.1rem",
              fontWeight: selectedButton === "EXPERIENCE" ? "bold" : "normal",
            }}
            onClick={() => handleButtonClick("EXPERIENCE")}
          >
            EXPERIENCE
          </Button>
          <Button
            style={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontStyle: "normal",
              lineHeight: "140%" /* 1.75rem */,
              letterSpacing: "0.1rem",
              fontWeight: selectedButton === "TASTE" ? "bold" : "normal",
            }}
            onClick={() => handleButtonClick("TASTE")}
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
            <path d="M0 1.5H88" stroke="white" stroke-width="2" />
          </svg>
        </div>
        <div className={styles.galleryImages}>
          <MasonryImageList />
        </div>
      </div>
      <div className={styles.pageDivFive}>
        <span className={styles.sectionNameHeading}>PACKAGES</span>
        <p className={styles.packageDescription}>
          Explore our range of customizable packages to find the perfect fit for
          your event.
        </p>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <PackageCard />
          <PackageCard />
          <PackageCard />
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
