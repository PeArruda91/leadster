"use client"

import React, { useState } from "react";
import styled from "styled-components";
import videoData from "../api/videoData.json";

interface Video {
  title: string;
  videoId: string;
}

interface VideoData {
  playlistId: string;
  videos: Video[];
}

const VideoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const VideoCard = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }

  button:last-child {
    margin-right: 0;
  }
`;

const ModalVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

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
          <VideoCard key={index}>
            <h3>{video.title}</h3>
            <button onClick={() => openModal(video)}>Open Modal</button>
          </VideoCard>
        ))}
      </VideoGroup>
    ));
  };

  return (
    <div>
      {/* Video cards */}
      <div>
        {renderVideoCards()}
      </div>

      {/* Modal */}
      {isOpen && videoUrl && (
        <Modal>
          <ModalContent>
            {/* Video player */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
              title={selectedVideo?.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Video title */}
            <h2>{selectedVideo?.title}</h2>

            {/* Watch video button */}
            <button onClick={() => window.open(videoUrl, "_blank")}>
              Watch Video
            </button>

            {/* Close button */}
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ModalVideo;
