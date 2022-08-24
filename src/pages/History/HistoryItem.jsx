import React from "react";
import {
  Trash,
} from "react-bootstrap-icons";
import {
  useNavigate
} from "react-router-dom";
import {
  LabelThumbnail,
  LabelTitle,
  LabelText,
} from "../../components/Atoms";
import {
  removeDataFromStorage,
} from "../../services/storageServices";
import "./styles/historyItem.css";


const HistoryItem = (props) => {

  const navigate = useNavigate();

  const handleRemoveHistory = () => {
    removeDataFromStorage(props.title);
    props.onRemove(); 
  };

  return (
    <div className="wrapper-history-item d-flex align-items-center justify-content-between">
      <div className="wrapper-content-history d-flex" onClick={() => navigate(`/streaming/${props.linkVideo}`)}>
        <LabelThumbnail srcImg={props.thumbImg} alter={props.title} />
        <div className="about-history">
          <LabelTitle text={props.title} />
          <LabelText text={`${props.currEps} Episode / ${props.totalEps} Episode`} />
          <LabelText text={`${props.currDuration} / ${props.totalDuration}`} />
        </div>
      </div>
      <div className="action-history" onClick={handleRemoveHistory}>
        <Trash size={30} />
      </div>
    </div>
  );
};

export default HistoryItem;
