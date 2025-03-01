import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import classNames from "classnames";
import card from "../../assets/images/224ac29f-aa67-413a-b60f-332b395d6fff-removebg-preview.png";

Card.propTypes = {
  CardData: PropTypes.object,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  CardData: null,
  onClick: null,
};

function Card(props) {
  const { CardData, onClick } = props;
  const [isFlipped, setIsFlipped] = useState(CardData.isFlipped);
  const cardClass = classNames("boxes", {
    isFlipped,
  });

  function handleChange() {
    setIsFlipped(true);

    if (!onClick) return;
    onClick(CardData);
  }
  return (
    <div>
      <div className={cardClass} onClick={() => handleChange(CardData)}>
        <div className="card-inner" key={CardData.uniqueId}>
          <div className="card-front">
            <img src={CardData.src} alt="Hình ảnh thiên nhiên"></img>
          </div>

          <div className="card-back">
            <img className="img_back" src={card} alt="ảnh sau" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
