import { Typography, Divider } from 'antd';
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;

export const About = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>О нас</Title>
      <Divider />

      <Title level={2} className={styles.title}>Наша миссия</Title>
      <Paragraph className={styles.paragraph}>
        Добро пожаловать в наш магазин обмена! Мы платформа, которая позволяет пользователям обмениваться товарами между собой. Наша миссия - создать живое сообщество, где люди могут легко обмениваться товарами и находить уникальные предметы, которые им нужны.
      </Paragraph>

      <Title level={2} className={styles.title}>Наша команда</Title>
      <Paragraph className={styles.paragraph}>
        У нас есть дружная команда профессионалов, которые страстно относятся к созданию безупречного опыта обмена. Наша команда работает неутомимо, чтобы платформа была безопасной, удобной для использования и предоставляла ценные функции, улучшающие процесс обмена.
      </Paragraph>

      <Title level={2} className={styles.title}>Свяжитесь с нами</Title>
      <Paragraph className={styles.paragraph}>
        Если у вас есть вопросы или вам нужна помощь, не стесняйтесь обращаться в нашу службу поддержки. Вы можете связаться с нами по электронной почте support@exchangestore.com или посетить наш веб-сайт для получения дополнительной информации и ресурсов.
      </Paragraph>
    </div>
  );
};
