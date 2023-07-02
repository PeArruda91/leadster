"use client"

import React, { useState, useEffect } from "react";
import mktdigVideos from "../api/mktdigVideos.json";
import { VideoGroup, VideoCard, Modal, ModalContent } from "../style/modal";
import { FaPlay } from 'react-icons/fa';

interface Video {
  title: string;
  videoId: string;
}

interface VideoData {
  playlistId: string;
  videos: Video[];
}

const MktVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const videosPerPage = 6;

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
    const videos = mktdigVideos.videos;
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const groups: Video[][] = [];
    for (let i = 0; i < currentVideos.length; i += 3) {
      const group = currentVideos.slice(i, i + 3);
      groups.push(group);
    }

    return groups.map((group, index) => (
      <VideoGroup key={index}>
        {group.map((video, index) => (
          <VideoCard key={index}>
            <h4>{video.title}</h4>
            <button onClick={() => openModal(video)}><FaPlay /></button>
          </VideoCard>
        ))}
      </VideoGroup>
    ));
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(mktdigVideos.videos.length / videosPerPage);
  const pagination = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pagination.push(
      <button
        key={i}
        onClick={() => paginate(i)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          borderRadius: "50%",
          color: "#0084FF",
          padding: "8px 12px",
          margin: "0 5px",
          cursor: "pointer",
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      {/* Video cards */}
      <div>{renderVideoCards()}</div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {pagination}
      </div>

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
            <button
              onClick={() => window.open(videoUrl, "_blank")}
              style={{ backgroundColor: "#0084FF", color: "#FFFFFF" }}
            >
              Watch Video
            </button>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default MktVideo;
