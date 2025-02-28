import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

Card.propTypes = {
  Card: PropTypes.object,
  isFlipped: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  Card: null,
  isFlipped: false,
  onClick: null,
};
function Card(props) {
  const { Card, isFlipped, onClick } = props;
  return (
    <div>
      <div key={Card.uniqueId} className="boxes">
        <img src={Card.src} alt="Hình ảnh thiên nhiên"></img>
      </div>
    </div>
  );
}

export default Card;
