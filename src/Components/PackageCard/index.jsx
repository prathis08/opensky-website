import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import landingImage from "../../websiteimages/landing-image.jpeg";
import styles from "./styles.module.scss";

export default function PackageCard({ 
  title = "Elegant Wedding Package", 
  description = "Perfect for couples looking for an all-inclusive wedding experience with premium amenities and services.",
  price = "₹1,50,000",
  features = ["Venue decoration", "Catering for 100 guests", "Photography", "DJ & Entertainment"],
  image = landingImage
}) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={image}
        className={styles.cardMedia}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.packageTitle}>{title}</h2>
        <p className={styles.packageDescription}>{description}</p>
        
        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.packageFooter}>
          <p className={styles.packagePrice}>Starting at <span>{price}</span></p>
          <button className={styles.packageButton}>View Details</button>
        </div>
      </div>
    </Card>
  );
}
