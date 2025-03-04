import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import landingImage from "../../websiteimages/landing-image.jpeg";
import styles from "./styles.module.scss";

export default function PackageCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "1rem",
        background: "rgba(48, 56, 65, 0.2)",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="50%"
        image={landingImage}
      />
      <div className={styles.cardContent}>
        <h2>Package Name</h2>
        <p>Package Description</p>
        <p>Price </p>
      </div>
    </Card>
  );
}
