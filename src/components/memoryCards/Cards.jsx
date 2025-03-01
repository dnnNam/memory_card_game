import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cards.scss";
import Card from "../Card/Card";

Cards.propTypes = {
  cards: PropTypes.array,
};

Cards.defaultProps = {
  cards: [],
};

function Cards(props) {
  const { cards } = props;
  const [flippedCards, setFlippedCards] = useState([]); // lưu nhưng state đã lật

  const duplicatedCards = [...cards, ...cards].map((card, index) => ({
    ...card,
    uniqueId: `${card.id}-${index}`, // ID duy nhất để tránh lỗi React key
    originalId: card.id, // ID gốc để so sánh khi chơi
    isFlipped: false, // mặc định lúc đầu chưa lật
  }));

  const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
  // Math.random thì nó random số thập phân từ 0 đến 1 , nếu ra âm thì ra đằng trước , sau dương ra đằng sau

  return (
    <div className="container">
      <h1 className="title">
        Memory Card Game In <span className="react_element">React</span>
      </h1>
      <div className="board">
        {shuffledCards.slice(0, 10).map((card) => (
          <Card CardData={card} />
        ))}
      </div>

      <button className="reset">Reset</button>
    </div>
  );
}

export default Cards;
