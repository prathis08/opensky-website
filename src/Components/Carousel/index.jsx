import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import landingImage from "../../assets/core/landing-image.jpeg";
import centerImage from "../../assets/core/center-image.jpg";

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
  // Add key state to force re-rendering of animated elements
  const [animationKey, setAnimationKey] = useState(0);
  // Track direction of animation (left or right)
  const [direction, setDirection] = useState("right");
  // Track if animation is in progress to prevent multiple rapid clicks
  const [isAnimating, setIsAnimating] = useState(false);

  // Reference to the previous slide for smoother transitions
  const [prevIndex, setPrevIndex] = useState(null);

  // Handle animation completion
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800); // Match this to the animation duration

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;

    // Determine direction based on index change
    setDirection(index > activeIndex ? "right" : "left");
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    // Set animating state to prevent multiple rapid transitions
    setIsAnimating(true);
    // Increment animation key to force re-rendering
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const goToPrevious = () => {
    if (isAnimating) return;

    const newIndex = activeIndex === 0 ? events.length - 1 : activeIndex - 1;
    setDirection("left");
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setIsAnimating(true);
    // Increment animation key to force re-rendering
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const goToNext = () => {
    if (isAnimating) return;

    const newIndex = activeIndex === events.length - 1 ? 0 : activeIndex + 1;
    setDirection("right");
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setIsAnimating(true);
    // Increment animation key to force re-rendering
    setAnimationKey((prevKey) => prevKey + 1);
  };

  // Choose the appropriate animation class based on direction
  const getAnimationClass = () => {
    return direction === "right" ? styles.slideFromRight : styles.slideFromLeft;
  };

  // Get background image animation class based on direction
  const getImageAnimationClass = () => {
    return direction === "right"
      ? styles.slideImageFromRight
      : styles.slideImageFromLeft;
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Background image with overlay - using img tag with dynamic URL */}
      <div className={styles.imageWrapper}>
        {/* Current slide image */}
        <img
          key={`image-${animationKey}`}
          src={events[activeIndex].url}
          alt={`${events[activeIndex].title} background`}
          className={`${styles.backgroundImage} ${getImageAnimationClass()}`}
        />

        {/* Previous slide image (helps with more realistic transitions) */}
        {prevIndex !== null && isAnimating && (
          <img
            src={events[prevIndex].url}
            alt={`Previous slide background`}
            className={`${styles.backgroundImage} ${styles.prevImage}`}
            style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
          />
        )}
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
              disabled={isAnimating}
            >
              {event.title}
            </button>
          </div>
        ))}
      </div>

      {/* Carousel content */}
      <div className={styles.carouselContent}>
        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          className={styles.arrowLeft}
          disabled={isAnimating}
        >
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
              <h1
                key={`title-${animationKey}`}
                className={`${styles.title} ${getAnimationClass()}`}
              >
                {events[activeIndex].title}
              </h1>
            </div>

            {/* Subtitle with fixed height */}
            <div className={styles.subtitleContainer}>
              <p
                key={`subtitle-${animationKey}`}
                className={`${styles.subtitle} ${getAnimationClass()}`}
                style={{ animationDelay: "0.1s" }}
              >
                {events[activeIndex].subtitle}
              </p>
            </div>

            {/* Description with fixed height */}
            <div className={styles.descriptionContainer}>
              <p
                key={`desc-${animationKey}`}
                className={`${styles.description} ${getAnimationClass()}`}
                style={{ animationDelay: "0.2s" }}
              >
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
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          className={styles.arrowRight}
          disabled={isAnimating}
        >
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
