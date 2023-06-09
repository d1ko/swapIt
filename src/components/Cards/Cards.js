import { useState, useEffect, Suspense } from "react";
import { Card, Button, Modal, Form, Input, Carousel, Spin } from "antd";
import styles from "./styles.module.css";
import heart from "../../assets/images/heart.png";
import fullHeart from "../../assets/images/heart-full.png";

const { Search } = Input;

const { Meta } = Card;

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState({});
  const [loading, setLoading] = useState(true);

  const api = process.env.REACT_APP_API;

  useEffect(() => {
    fetchCards();
  }, [searchQuery]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${api}/api/v1/products/`);
      const data = await response.json();
      const cardsWithLikes = data.results.map((card) => ({
        ...card,
        liked: false,
      }));

      const filteredCards = cardsWithLikes.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setCards(filteredCards);

      filteredCards.forEach((card) => {
        console.log(card);
        fetchUserId(card.id);
      });
      setLoading(false);
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
      const response = await fetch(`${api}/api/v1/accounts/users/${id}/`, {
        headers: {
          'Autharization': `Bearer ${localStorage.getItem('access')}`
        }
      });
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
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Имитируем задержку загрузки в течение 3 секунд

    return () => {
      clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Spin />
        </>
      ) : (
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
                      src={card.image}
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
                  <div>
                        <img
                          src={selectedCard.image}
                          alt="example"
                          className={styles.modalImg}
                        />
                      </div>
                  </Carousel>
                  <p>{selectedCard.description}</p>
                  <Button type="primary">Exchange</Button>
                </Modal>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
