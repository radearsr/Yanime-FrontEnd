import React from "react";
import { Container } from "react-bootstrap";
import ResultItem from "./ResultItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ResultList.css";

const ResultList = () => {
  return (
    <Container className="content-list" fluid="lg">
      <ResultItem
        srcImg="/assets/images/poster1.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="12"
      />
      <ResultItem
        srcImg="/assets/images/poster2.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="26"
      />
      <ResultItem
        srcImg="/assets/images/poster3.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="12"
      />
      <ResultItem
        srcImg="/assets/images/poster1.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="24"
      />
      <ResultItem
        srcImg="/assets/images/poster1.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="24"
      />
      <ResultItem
        srcImg="/assets/images/poster1.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="24"
      />
      <ResultItem
        srcImg="/assets/images/poster1.jpg"
        title="Lorem ipsum dolor red ipsum"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti sit doloremque cum officiis facere magni dolore error quaerat neque."
        episodeCount="24"
      />
    </Container>
  );
};

export default ResultList;
