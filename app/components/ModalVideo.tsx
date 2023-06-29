"use client"

import React, { useState, useEffect } from "react";
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
  width: calc(33.33% - 80px);
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;

  h4 {
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
  padding: 25px 0;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 425px;
  height: 511px;
  position: relative;

  h4 {
    margin-bottom: 10px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  span.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  iframe {
    width: 100%;
    height: calc(60% - 50px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #007bff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const ModalVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoHeight, setVideoHeight] = useState<number>(0);

  useEffect(() => {
    const calculateVideoHeight = () => {
      const windowHeight = window.innerHeight;
      const videoHeight = windowHeight * 0.8;
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
          <VideoCard key={index}>
            <h4>{video.title}</h4>
            <button onClick={() => openModal(video)}>Open Modal</button>
          </VideoCard>
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
          <ModalContent>
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
