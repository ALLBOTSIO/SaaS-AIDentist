import React from 'react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0&title=0&byline=0&portrait=0`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Promotional Video"
      />
    </div>
  );
};

export default React.memo(VideoPlayer);