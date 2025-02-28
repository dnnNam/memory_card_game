import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

Card.propTypes = {
  Cards: PropTypes.array,
  isFlipped: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  Cards: [],
  isFlipped: false,
  onClick: null,
};
function Card(props) {
  const { Cards, isFlipped, onClick } = props;
  return (
    <div>
      <div className="board">
        {Cards.slice(0, 10).map((card) => (
          <div key={card.uniqueId} className="boxes">
            <img src={card.src} alt="Hình ảnh thiên nhiên"></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
