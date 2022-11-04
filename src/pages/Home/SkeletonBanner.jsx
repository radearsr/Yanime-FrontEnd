import React from "react"
import "./styles/SkeletonBanner.css";

const SkeletonBanner = () => {
  return (
    <div className="skeleton-banner">
      <div className="skeleton skeleton-banner-img"></div>
      <div className="skeleton-txt-group">
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
        <div className="skeleton skeleton-banner-text"></div>
      </div>
    </div>
  )
}

export default SkeletonBanner;
