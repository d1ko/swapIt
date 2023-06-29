import { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Input, Carousel } from 'antd';
import styles from './styles.module.css';
import heart from '../../assets/images/heart.png';
import fullHeart from '../../assets/images/heart-full.png';

const { Meta } = Card;

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const api = process.env.REACT_APP_API;

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${api}/api/v1/products`);
      const data = await response.json();
      // Добавляем начальное состояние лайка для каждой карточки
      const cardsWithLikes = data.results.map((card) => ({
        ...card,
        liked: false,
      }));
      setCards(cardsWithLikes);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleClick = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleLike = (cardId) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, liked: !card.liked } : card
      )
    );
  };

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card
          key={card.id}
          hoverable
          className={styles.card}
          cover={<img alt="example" src={card.images[0].image} className={styles.cardImg} />}
        >
          <Meta title={card.name} description={card.description} className={styles.cardB} />
          <div className={styles.buttonCul}>
            <Button onClick={() => handleClick(card)}>Show More</Button>
            {card.liked ? (
              <img
                alt="none"
                src={fullHeart}
                className={styles.cardImgLike}
                onClick={() => handleLike(card.id)}
              />
            ) : (
              <img
                alt="none"
                src={heart}
                className={styles.cardImgLike}
                onClick={() => handleLike(card.id)}
              />
            )}
          </div>
        </Card>
      ))}
      {selectedCard && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
          className={styles.modal}
        >
          <h2>{selectedCard.name}</h2>
          <Carousel>
            {selectedCard.images.map((image) => (
              <div key={image.id}>
                <img src={image.image} alt="example" className={styles.modalImg} />
              </div>
            ))}
          </Carousel>
          <p>{selectedCard.description}</p>
          <Button type="primary">Exchange</Button>
        </Modal>
      )}
    </div>
  );
};
