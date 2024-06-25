import { Box } from "@mui/material";
import React from "react";
import styles from "./Artist.module.css";

export const Artist = ({ artist }) => {
  if (!artist) return null;

  const { images, name, followers, genres } = artist;
  return (
    <Box>
      <h3 className={styles.heading}>{name}</h3>
      <p className={styles.heading}>{followers.total}</p>
      <p className={styles.heading}>{genres.join(",")}</p>
      <img
        src={images[0] && images[0].url}
        alt="atrist-profile"
        className={styles.images}
      />
    </Box>
  );
};
export default Artist;
