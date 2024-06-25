import React, { useState } from "react";
import styles from "./Artist.module.css";
import "./Tracks.css";

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

  const trackIcon = (track) => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }
    if (play && playingPreviewUrl === track.preview_url) {
      return <span>| |</span>;
    } else {
      return <span>&#9654;</span>;
    }
  };

  return (
    <div class="wrapper">
      <div class="inner-containers">
        {tracks.map((track) => {
          const { id, name, album, preview_url } = track;
          return (
            <div
              key={id}
              onClick={playAudio(preview_url)}
              class="inner-container"
              tabindex={id}>
              <img className={styles.tracks_image} src={album.images[0].url} />
              {/* <img
                class="inner-container"
                style="background-image: url(album.images[0].url)"></img>*/}
              <p>{name}</p>
              <p className={styles.track_icon}>{trackIcon(track)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
