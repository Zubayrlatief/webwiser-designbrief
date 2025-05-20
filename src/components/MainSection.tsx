import React from 'react'

export const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="https://zubayrlatief.github.io/webwiser-hosted-images/desktop_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
      </div>
    </div>
  )
}