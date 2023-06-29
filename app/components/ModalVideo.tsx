"use client"

import React, { useState } from "react";
import videoData from "../api/videoData.json";
import "../style/modal.css";

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
        <div key={index} className="video-group">
          {group.map((video, index) => (
            <div key={index} className="video-card">
              <h3>{video.title}</h3>
              <button onClick={() => openModal(video)}>Open Modal</button>
            </div>
          ))}
        </div>
      ));
    };
  
    return (
      <div>
        {/* Video cards */}
        <div className="flex flex-wrap">
          {renderVideoCards()}
        </div>
  
        {/* Modal */}
        {isOpen && videoUrl && (
          <div className="modal">
            <div className="modal-content">
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
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ModalVideo;
  