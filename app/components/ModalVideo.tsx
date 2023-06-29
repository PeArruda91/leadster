"use client"

import React, { useState, useEffect } from "react";
import { Modal, ModalContent, VideoGroup,  } from "../style/styles";
import VideoCard from "./videocard";
import videoData from "../api/videoData.json";

interface Video {
  title: string;
  videoId: string;
}

interface VideoData {
  playlistId: string;
  videos: Video[];
}

const ModalVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoHeight, setVideoHeight] = useState<number>(0);

  useEffect(() => {
    const calculateVideoHeight = () => {
      const windowHeight = window.innerHeight;
      const videoHeight = windowHeight * 0.8; // Ajuste a porcentagem conforme necessário
      setVideoHeight(videoHeight);
    };

    calculateVideoHeight();
    window.addEventListener("resize", calculateVideoHeight);

    return () => {
      window.removeEventListener("resize", calculateVideoHeight);
    };
  }, []);

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setVideoUrl(`https://www.youtube.com/watch?v=${video.videoId}`);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setVideoUrl(null);
    setIsOpen(false);
  };

  const renderVideoCards = () => {
    const groups: Video[][] = [];
    const videos = videoData.videos;

    for (let i = 0; i < videos.length; i += 3) {
      const group = videos.slice(i, i + 3);
      groups.push(group);
    }

    return groups.map((group, index) => (
      <VideoGroup key={index}>
        {group.map((video, index) => (
          <VideoCard key={index} video={video} onClick={() => openModal(video)} />
        ))}
      </VideoGroup>
    ));
  };

  return (
    <div>
      {/* Video cards */}
      <div>{renderVideoCards()}</div>

      {/* Modal */}
      {isOpen && videoUrl && (
        <Modal>
          <ModalContent videoHeight={videoHeight}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h4>{selectedVideo?.title}</h4>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
              title={selectedVideo?.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button onClick={() => window.open(videoUrl, "_blank")}>
              Watch Video
            </button>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ModalVideo;
