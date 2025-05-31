import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import landingImage from "../../assets/core/landing-image.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h1 className={styles.headerTitle}>ABOUT OPENSKY RESORT</h1>
          <p className={styles.headerSubtitle}>
            Discover the elegance and beauty of Mangalam OpenSky Resort, a
            premier destination for weddings, events, and memorable experiences.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.sectionText}>
              Founded with a vision to create breathtaking experiences, OpenSky
              Resort has established itself as the perfect venue for grand
              Indian weddings and special events. Nestled in a picturesque
              location, our resort combines natural beauty with luxurious
              amenities to create an unforgettable setting for your
              celebrations.
            </p>
            <p className={styles.sectionText}>
              With years of experience hosting weddings and events of all sizes,
              our dedicated team ensures that every detail is perfect, allowing
              you to focus on creating memories that will last a lifetime.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={landingImage}
              alt="OpenSky Resort"
              className={styles.aboutImage}
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.imageContainer}>
            <img
              src={landingImage}
              alt="OpenSky Resort Facilities"
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Facilities</h2>
            <p className={styles.sectionText}>
              OpenSky Resort offers a wide range of world-class facilities
              designed to make your event exceptional. From spacious banquet
              halls to outdoor garden venues, our spaces can be customized to
              match your vision and requirements.
            </p>
            <p className={styles.sectionText}>
              Our accommodations provide luxurious comfort for your guests,
              while our culinary team creates exquisite dishes that blend
              traditional flavors with contemporary presentation.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2
            className={styles.sectionTitle}
            style={{ textAlign: "center", width: "100%" }}
          >
            What Makes Us Special
          </h2>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌟</div>
              <h3 className={styles.featureTitle}>Personalized Service</h3>
              <p className={styles.featureDesc}>
                Dedicated event coordinators to handle every detail
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🍽️</div>
              <h3 className={styles.featureTitle}>Exquisite Cuisine</h3>
              <p className={styles.featureDesc}>
                Customizable menus with a blend of traditional and contemporary
                options
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏨</div>
              <h3 className={styles.featureTitle}>Luxurious Accommodation</h3>
              <p className={styles.featureDesc}>
                Comfortable and elegant rooms for your guests
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌄</div>
              <h3 className={styles.featureTitle}>Scenic Location</h3>
              <p className={styles.featureDesc}>
                Beautiful landscapes providing the perfect backdrop
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📸</div>
              <h3 className={styles.featureTitle}>Perfect Photospots</h3>
              <p className={styles.featureDesc}>
                Numerous picturesque locations for memorable photos
              </p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎵</div>
              <h3 className={styles.featureTitle}>Entertainment Options</h3>
              <p className={styles.featureDesc}>
                Variety of entertainment facilities for all types of events
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
