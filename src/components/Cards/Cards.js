import { useState, useEffect } from "react";
import { Card, Button, Modal, Form, Input, Carousel } from "antd";
import styles from "./styles.module.css";
import heart from "../../assets/images/heart.png";
import fullHeart from "../../assets/images/heart-full.png";

const { Search } = Input;

const { Meta } = Card;

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(selectedCard);
  const [searchQuery, setSearchQuery] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState({});
  console.log(userId);

  const api = process.env.REACT_APP_API;

  useEffect(() => {
    fetchCards();
  }, [searchQuery]);

  useEffect(() => {
    fetchUserInfo();
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

      // Применяем линейный поиск для фильтрации карточек по запросу
      const filteredCards = cardsWithLikes.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setCards(filteredCards);

      // Получение информации о пользователе
      filteredCards.forEach((card) => {
        fetchUserId(card.created_by);
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`${api}/api/v1/accounts/users`);
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const fetchUserId = async (id) => {
    try {
      const response = await fetch(`${api}/api/v1/accounts/users/${id}/`);
      const data = await response.json();
      setUserId(data);
    } catch (error) {
      console.error("Error", error);
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
    <>
      <div className={styles.cards}>
        <Search
          placeholder="Введите текст для поиска"
          value={searchQuery}
          className={styles.input}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          enterButton
        />
        <div className={styles.box}>
          {cards.map((card) => (
            
<Card
              key={card.id}
              hoverable
              className={styles.card}
              cover={
                <img
                  alt="example"
                  src={card.images[0].image}
                  className={styles.cardImg}
                />
              }
            >
              <Meta
                title={card.name}
                description={card.description}
                className={styles.cardB}
              />
              <span>{card.created_by}</span>
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
              {userId && (
                <>
                  {/* <span>Имя: {userInfo?.username}</span>
                  <span>Номер: {userInfo?.phone_number}</span>
                  <span>Почта: {userInfo?.email}</span> */}
                  <span>Имя: {userId?.username}</span>
                  <span>Номер: {userId?.phone_number}</span>
                  <span>Почта: {userId?.email}</span>
                </>
              )}
              <h2>{selectedCard.name}</h2>
              <Carousel>
                {selectedCard.images.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.image}
                      alt="example"
                      className={styles.modalImg}
                    />
                  </div>
                ))}
              </Carousel>
              <p>{selectedCard.description}</p>
              <Button type="primary">Exchange</Button>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};
