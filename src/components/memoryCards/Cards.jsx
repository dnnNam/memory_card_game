import React, { useEffect, useState } from "react";
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

  const [flippedCards, setFlippedCards] = useState([]); // lưu các thẻ đã được lật
  const [matchedCard, setMatchedCard] = useState([]); // lưu các thẻ  đã khớp
  const [shuffledCards, setShuffedCards] = useState([]);
  useEffect(() => {
    const duplicatedCards = [...cards, ...cards].map((card, index) => ({
      ...card,
      uniqueId: `${card.id}-${index}`, // ID duy nhất để tránh lỗi React key
      originalId: card.id, // ID gốc để so sánh khi chơi
      isFlipped: false, // mặc định lúc đầu chưa lật
    }));

    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    setShuffedCards(shuffledCards);
    // Math.random thì nó random số thập phân từ 0 đến 1 , nếu ra âm thì ra đằng trước , sau dương ra đằng sau
    // nên bỏ useEffect để mỗi lần render một lần
  }, [cards]);

  function handleChange(CardData) {
    if (
      flippedCards.length === 2 || // nếu đã chọn 2 thì không cho click thêm
      flippedCards.some((card) => card.uniqueId === CardData.uniqueId) || // kiểm tra xem carData đã bị click chưa nếu có rồi ko cho click
      matchedCard.includes(CardData) // nếu như trong mảng những thẻ đã khớp có carData thì không cho click luôn
    ) {
      return;
    }

    // clone ra mảng mới lấy card thẻ đã click

    setFlippedCards((prev) => {
      const newFlippedCards = [...prev, CardData];
      // nếu đã có 2 thẻ click thì  kiểm tra
      if (newFlippedCards.length === 2) {
        setTimeout(() => {
          checkMatched(newFlippedCards[0], newFlippedCards[1]);
        }, 500); // Để đảm bảo React có thời gian render cả hai thẻ trước khi kiểm tra
      }

      // nên bỏ vào setState vì nếu bấm thẻ thứ 2 react re-render ko kịp nó sẽ không lật ảnh thứ 2
      return newFlippedCards;
    });
  }

  function checkMatched(prevCard, Card) {
    if (prevCard.originalId === Card.originalId) {
      setMatchedCard((prev) => [...prev, prevCard.originalId]); // lưu lại id đã được lật
      setFlippedCards([]); // reset mảng thẻ được lật
    } else {
      // nếu khác nhau thì , lật úp sau 1 giây
      setTimeout(() => {
        setFlippedCards([]);
      });
    }
  }

  function handleReset() {
    setFlippedCards([]);
    setMatchedCard([]);
    // xáo trộn lại chơi lại từ đầu
    const duplicatedCards = [...cards, ...cards].map((card, index) => ({
      ...card,
      uniqueId: `${card.id}-${index}`,
      originalId: card.id,
      isFlipped: false,
    }));
    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    setShuffedCards(shuffledCards);
  }

  return (
    <div className="container">
      <h1 className="title">
        Memory Card Game In <span className="react_element">React</span>
      </h1>
      <div className="board">
        {shuffledCards.slice(0, 10).map((card) => (
          <Card
            key={card.uniqueId}
            CardData={card}
            isFlipped={
              flippedCards.find(
                (Flipped) => Flipped.uniqueId === card.uniqueId
              ) || matchedCard.includes(card.originalId)
              // nếu như mà có click thì trả về true hoặc các card đã khợp trả về true
            }
            onClick={handleChange}
          />
        ))}
      </div>
      <div className="reset">
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Cards;
