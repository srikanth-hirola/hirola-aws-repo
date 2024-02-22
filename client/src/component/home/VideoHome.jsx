


import React, { useState, useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [previewTimeout, setPreviewTimeout] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const startPreview = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 1;
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
      setVideoPlaying(true);
      setShowThumbnail(false);
    }
  };

  const stopPreview = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1;
      videoRef.current.pause();
      setVideoPlaying(false);
      setShowThumbnail(true); // Show the thumbnail when the video stops
    }
  };

  const handleMouseEnter = () => {
    startPreview();
    const timeoutId = setTimeout(() => {
      setPreviewTimeout(null);
      stopPreview();
    }, 4000);
    setPreviewTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    if (previewTimeout !== null) {
      clearTimeout(previewTimeout);
      setPreviewTimeout(null);
      stopPreview();
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup: Stop the video and clear the timeout when the component unmounts.
      stopPreview();
      if (previewTimeout !== null) {
        clearTimeout(previewTimeout);
        setPreviewTimeout(null);
      }
    };
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showThumbnail && (
        <img
          src="/images/others/1.png"
          loading="lazy" alt="Thumbnail"
          width="100%"
          max-width="32rem"
        />
      )}
      <video
        ref={videoRef}
        style={{ display: videoPlaying ? 'block' : 'none' }}
        width="100%"
        max-width="32rem"
        onPlay={() => setVideoPlaying(true)}
      >
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
      </video>
    </div>
  );
};

export default VideoComponent;
