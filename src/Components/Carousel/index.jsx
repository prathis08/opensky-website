import React, { useState } from "react";
import styles from "./styles.module.scss";
import landingImage from "../../websiteimages/landing-image.jpeg";
import centerImage from "../../websiteimages/center-image.jpg";

const WeddingCarousel = () => {
  // Sample data for wedding events with image URLs
  const events = [
    {
      id: 1,
      title: "Engagement",
      subtitle: "Indoor Hall | 100 people",
      description:
        "A beautiful ceremony where the couple exchanges rings and promises.",
      active: false,
      url: landingImage, // Replace with your actual image path
    },
    {
      id: 2,
      title: "Haldi",
      subtitle: "Garden Area | 75 people",
      description:
        "Traditional ceremony where turmeric paste is applied to the bride and groom.",
      active: false,
      url: centerImage, // Replace with your actual image path
    },
    {
      id: 3,
      title: "Mehendi & Sangeet",
      subtitle: "Indoor Hall | 150 people",
      description:
        "Celebration with henna application, music, and dance performances.",
      active: true,
      url: landingImage, // Replace with your actual image path
    },
    {
      id: 4,
      title: "Wedding",
      subtitle: "Main Venue | 200 people",
      description: "The main ceremony where the couple takes their vows.",
      active: false,
      url: centerImage, // Replace with your actual image path
    },
    {
      id: 5,
      title: "Reception",
      subtitle: "Banquet Hall | 250 people",
      description: "The final celebration with dinner and festivities.",
      active: false,
      url: landingImage, // Replace with your actual image path
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start with Mehendi & Sangeet

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = activeIndex === 0 ? events.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex === events.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Background image with overlay - using img tag with dynamic URL */}
      <div className={styles.imageWrapper}>
        <img
          src={events[activeIndex].url}
          alt={`${events[activeIndex].title} background`}
          className={styles.backgroundImage}
        />
      </div>

      {/* Navigation tabs */}
      <div className={styles.navigationTabs}>
        {events.map((event, index) => (
          <div key={event.id} className={styles.tabItem}>
            <button
              onClick={() => goToSlide(index)}
              className={`${styles.tabButton} ${
                activeIndex === index ? styles.activeTab : ""
              }`}
            >
              {event.title}
            </button>
          </div>
        ))}
      </div>

      {/* Carousel content */}
      <div className={styles.carouselContent}>
        {/* Left arrow */}
        <button onClick={goToPrevious} className={styles.arrowLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="59"
            viewBox="0 0 31 59"
            fill="none"
          >
            <path d="M30 1L2 29L30 57.5" stroke="white" stroke-width="2" />
          </svg>
        </button>

        {/* Content with fixed height */}
        <div className={styles.contentContainer}>
          {/* Fixed size content container */}
          <div className={styles.contentWrapper}>
            {/* Title with fixed height */}
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{events[activeIndex].title}</h1>
            </div>

            {/* Subtitle with fixed height */}
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>{events[activeIndex].subtitle}</p>
            </div>

            {/* Description with fixed height */}
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                {events[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Dots/indicators with pill for active */}
          <div className={styles.indicators}>
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.indicator} ${
                  index === activeIndex ? styles.activeIndicator : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button onClick={goToNext} className={styles.arrowRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="59"
            viewBox="0 0 31 59"
            fill="none"
          >
            <path d="M1 1L29 29L1 57.5" stroke="white" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WeddingCarousel;
