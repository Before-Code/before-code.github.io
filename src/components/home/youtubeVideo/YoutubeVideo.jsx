/* eslint-disable react/prop-types */
import { useState } from "react";

const YoutubeVideo = ({ videoId, thumbnailUrl }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
  };

  const opts = {
    width: "650",
    height: "350",
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1, // Remove YouTube logo
    },
  };

  return (
    <>
      {!videoPlaying ? (
        <div className="custom-thumbnail" onClick={playVideo}>
          <img
            className="full"
            style={{ cursor: "pointer" }}
            src={thumbnailUrl}
            alt="Custom Thumbnail"
          />
        </div>
      ) : (
        <div className="youtube-video">
          <iframe
            allow="autoplay"
            title="YouTube Video"
            width={opts.width}
            height={opts.height}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${opts.playerVars.autoplay}&controls=${opts.playerVars.controls}&showinfo=${opts.playerVars.showinfo}&modestbranding=${opts.playerVars.modestbranding}`}
            allowFullScreen></iframe>
        </div>
      )}
    </>
  );
};

export default YoutubeVideo;
