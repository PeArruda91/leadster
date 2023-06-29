import React from "react";
import { VideoCardContainer } from "../style/styles";

interface Video {
  title: string;
  videoId: string;
}

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <VideoCardContainer>
      <h4>{video.title}</h4>
      <button onClick={onClick}>Open Modal</button>
    </VideoCardContainer>
  );
};

export default VideoCard;
