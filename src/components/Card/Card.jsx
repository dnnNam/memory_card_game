import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import classNames from "classnames";
import card from "../../assets/images/224ac29f-aa67-413a-b60f-332b395d6fff-removebg-preview.png";

Card.propTypes = {
  CardData: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  CardData: null,
  onClick: null,
  isFlipped: false,
};

function Card(props) {
  const { CardData, onClick, isFlipped } = props;
  const cardClass = classNames("boxes", {
    isFlipped,
  });

  function handleChange() {
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
