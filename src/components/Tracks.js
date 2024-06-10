import React, { useState } from "react";
import styles from "./Artist.module.css";

const Tracks = ({ tracks }) => {
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playingPreviewUrl, setPreviewUrl] = useState(null);

  const playAudio = (previewUrl) => () => {
    const audiourl = new Audio(previewUrl);
    if (!play) {
      audiourl.play();
      setAudio(audiourl);
      setPreviewUrl(previewUrl);
      setPlay(true);
    } else {
      audio.pause();
      if (playingPreviewUrl === previewUrl) {
        setPlay(false);
      } else {
        audiourl.play();
        setAudio(audiourl);
        setPreviewUrl(previewUrl);
      }
    }
  };
  return (
    <div>
      {tracks.map((track) => {
        const { id, name, album, preview_url } = track;
        return (
          <div key={id} onClick={playAudio(preview_url)}>
            <img className={styles.images} src={album.images[0].url}></img>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tracks;
