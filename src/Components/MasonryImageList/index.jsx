import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Import photos with correct paths
import img1 from "../../assets/photos/EXPERIENCE/1.jpg";
import img2 from "../../assets/photos/EXPERIENCE/2.jpg";
import img3 from "../../assets/photos/EXPERIENCE/3.jpg";
import img4 from "../../assets/photos/EXPERIENCE/4.jpg";
import img5 from "../../assets/photos/EXPERIENCE/5.jpg";
import img6 from "../../assets/photos/EXPERIENCE/6.jpg";
import img7 from "../../assets/photos/EXPERIENCE/7.jpg";

export default function MasonryImageList({ category = "ALL" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // width < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px <= width < 960px

  // Define photos by category with varying heights for visual interest
  const galleryData = {
    EXPERIENCE: [
      { img: img1, title: "Resort Experience 1", rows: 2 },
      { img: img2, title: "Resort Experience 2", rows: 1 },
      { img: img3, title: "Resort Experience 3", rows: 1 },
      { img: img4, title: "Resort Experience 4", rows: 2 },
      { img: img5, title: "Resort Experience 5", rows: 1 },
      { img: img6, title: "Resort Experience 6", rows: 2 },
      { img: img7, title: "Resort Experience 7", rows: 1 },
    ],
    STAY: [], // Currently empty
    TASTE: [], // Currently empty
  };

  // Filter images based on selected category
  const getDisplayImages = () => {
    if (category === "ALL") {
      // For ALL, combine photos from all categories
      return [
        ...galleryData.EXPERIENCE,
        ...galleryData.STAY,
        ...galleryData.TASTE,
      ];
    }
    return galleryData[category] || [];
  };

  const displayImages = getDisplayImages();

  // Dynamic column count based on image count and screen size
  const getOptimalColumnCount = (imageCount) => {
    if (isMobile) return 1;
    if (isTablet) return Math.min(2, Math.ceil(imageCount / 2));

    // Desktop: Adjust columns based on image count
    if (imageCount <= 2) return 1;
    if (imageCount <= 5) return 2;
    return 3;
  };

  const columns = getOptimalColumnCount(displayImages.length);

  // Show empty state message when no images are available for a category
  if (displayImages.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <p>No images available for this category yet. Check back soon!</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        maxHeight: isMobile ? "800px" : "1000px",
      }}
    >
      <ImageList
        variant="quilted"
        cols={columns}
        rowHeight={isMobile ? 200 : 250}
        gap={isMobile ? 4 : 8}
      >
        {displayImages.map((item, index) => (
          <ImageListItem key={index} cols={1} rows={item.rows || 1}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "4px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
