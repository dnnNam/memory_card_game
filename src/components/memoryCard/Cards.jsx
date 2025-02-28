import React from "react";
import PropTypes from "prop-types";
import "./Cards.scss";

Cards.propTypes = {
  cards: PropTypes.array,
};

Cards.defaultProps = {
  cards: [],
};

function Cards(props) {
  const { cards } = props;
  return (
    <div className="container">
      <h1 className="title">
        Memory Card Game In <span className="react_element">React</span>
      </h1>
      <div className="board">
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="boxes">
              <img src={card.urls.regular} alt={`Ảnh ${card.id + 1}`}></img>
            </div>
          ))}
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}

export default Cards;
