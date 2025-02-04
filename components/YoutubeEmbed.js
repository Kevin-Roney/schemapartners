import React from "react";
import PropTypes from "prop-types";
import styles from '../styles/Services.module.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="900"
      height="506"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;