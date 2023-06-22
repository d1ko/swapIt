import { Card } from "antd";
import { Button } from "antd";
import heard from '../../images/heart.png'
import fullheard from '../../images/heart-full.png'
import chat from '../../images/comment.png'
import { useState } from "react";
import styles from "./styles.module.css";

const { Meta } = Card;





export const Cards = () => {


  const [image, setImage] = useState(heard);
  const handleClick = () => {
    if (image === heard) {
      setImage(fullheard);
    } else {
      setImage(heard);
    }
  };

  return (
    <div className={styles.cards}>
      <Card
        hoverable
        className={styles.card}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            className={styles.cardImg}
          />
        }
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
          className={styles.cardB}
        />
        <div className={styles.buttonCul}>
          <Button>show more</Button>
          <img alt="none" src={image} className={styles.cardImgLike} onClick={handleClick}/>
          <img src={chat} alt="none" className={styles.cardChatIcon}/>
        </div>

      </Card>
    </div>
  );
};
