import React from "react";

const SkeletonShowMore = ({ count }) => {
  return (
    Array.apply(null, {length: count}).map(() => (
      <div className="skeleton-show-more">
        <div className="skeleton skeleton-img"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    ))
  );
};

export default SkeletonShowMore;
