import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      {showVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-2 right-2 p-2 bg-white rounded-full"
              onClick={() => setShowVideo(false)}
            >
              Close
            </button>
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoPlayer;
