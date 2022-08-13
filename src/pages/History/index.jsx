import React from "react";
import {
  HistoryItem,
  Gap,
} from "../../components";
import "./history.css";

const History = () => {
  return (
    <div className="wrapper-history">
      <Gap height="1rem" />
      <HistoryItem
        thumbImg="https://185.224.82.193/img/123281l.jpg"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste optio praesentium corporis quos dignissimos voluptas aliquid iusto, consequatur ipsam!"
        type="Episode 1 / Episode 12"
      />
      <HistoryItem
        thumbImg="https://185.224.82.193/img/123281l.jpg"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste optio praesentium corporis quos dignissimos voluptas aliquid iusto, consequatur ipsam!"
        type="Episode 1 / Episode 12"
      />
      <HistoryItem
        thumbImg="https://185.224.82.193/img/123281l.jpg"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste optio praesentium corporis quos dignissimos voluptas aliquid iusto, consequatur ipsam!"
        type="Episode 1 / Episode 12"
      />
      <HistoryItem
        thumbImg="https://185.224.82.193/img/123281l.jpg"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste optio praesentium corporis quos dignissimos voluptas aliquid iusto, consequatur ipsam!"
        type="Episode 1 / Episode 12"
      />
      <HistoryItem
        thumbImg="https://185.224.82.193/img/123281l.jpg"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste optio praesentium corporis quos dignissimos voluptas aliquid iusto, consequatur ipsam!"
        type="Episode 1 / Episode 12"
      />
    </div>
  );
};

export default History;
