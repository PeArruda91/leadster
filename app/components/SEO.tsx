"use client"

import React, { useState, useEffect } from "react";
import seo from "../api/seo.json";
import { FaPlay } from 'react-icons/fa';
import { VideoGroup, VideoCard, Modal, ModalContent, Description } from "../style/modal";

interface Video {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  descricao: string;
}

interface VideoData {
  playlistId: string;
  videos: Video[];
}

const SEO: React.FC = () => {
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

  const isMobileOrTablet = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
  };

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    if (isMobileOrTablet()) {
      window.open(`https://www.youtube.com/watch?v=${video.videoId}`);
    } else {
      setVideoUrl(`https://www.youtube.com/watch?v=${video.videoId}`);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setVideoUrl(null);
    setIsOpen(false);
  };

  const renderVideoCards = () => {
    const videos = seo.videos;
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
            <img src={video.thumbnailUrl} alt={video.title} />
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

  const pageNumbers = Math.ceil(seo.videos.length / videosPerPage);
  const pagination = [];
  for (let i = 1; i <= pageNumbers; i++) {
    const isSelected = i === currentPage;
    pagination.push(
      <button
        key={i}
        onClick={() => paginate(i)}
        style={{
          backgroundColor: isSelected ? "#0084FF" : "transparent",
          border: "none",
          borderRadius: "10%",
          color: isSelected ? "#FFFFFF" : "#000000",
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
      <div>{renderVideoCards()}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <span style={{ marginRight: "5px", marginTop: "5px" }}>Página:</span>
        {pagination}
      </div>

      {isOpen && videoUrl && (
        <Modal>
          <ModalContent>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h4> <span className="h4-title">SEO:</span> {selectedVideo?.title}</h4>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
              title={selectedVideo?.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <Description>

              <h5>Descrição:</h5>
              <hr style={{ width: '100%', borderTop: '1px solid black' }} />

              <h6>{selectedVideo?.descricao}</h6>
            </Description>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default SEO;
