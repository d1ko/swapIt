import { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Input } from 'antd';
import styles from './styles.module.css';
import heart from '../../assets/images/heart.png';
import fullHeart from '../../assets/images/heart-full.png';

const { Meta } = Card;

export const Cards = () => {
  const [image, setImage] = useState(heart);
  const [cards, setCards] = useState([]);

  const api = 'http://16.171.20.43/api/v1/products';

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setCards(data.results);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleClick = () => {
    setImage((prevImage) => (prevImage === heart ? fullHeart : heart));
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
            <Button>show more</Button>
            <img
              alt="none"
              src={image}
              className={styles.cardImgLike}
              onClick={handleClick}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
