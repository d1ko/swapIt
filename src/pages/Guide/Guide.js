import { Button } from "antd";
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

export const Guide = () => {
    return (
      <main className={styles.container}>
        <div className={styles.title}>
          <h2>Инструкция по использованию сайта "SwapIt"</h2>
          <ol>
            <li>Откройте главную страницу, чтобы ознакомиться с общим описанием и возможностями сайта.</li>
            <li>Для просмотра доступных предметов для обмена, перейдите на страницу "Продукты".</li>
            <li>Используйте фильтры и категории для уточнения результатов поиска.</li>
            <li>Нажмите на предмет, чтобы просмотреть подробности и фотографии.</li>
            <li>Если вы хотите предложить свои вещи для обмена, зарегистрируйтесь или войдите в свою учетную запись.</li>
            <li>На странице предмета вы можете связаться с пользователем, чтобы обсудить детали обмена.</li>
            <li>Используйте систему рейтинга и отзывов, чтобы оценить других участников и делиться своим опытом.</li>
            <li>Помните о безопасности и осторожности при встрече и обмене предметами.</li>
            <li>Если у вас возникли вопросы или проблемы, обратитесь к документации или свяжитесь с нашей службой поддержки.</li>
          </ol>
        </div>
      </main>
    );
  }
  
 