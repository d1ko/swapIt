import { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Input } from 'antd';
import styles from './styles.module.css';
import heart from '../../assets/images/heart.png';
import fullHeart from '../../assets/images/heart-full.png';

const { Meta } = Card;

export const Cards = () => {
  const [image, setImage] = useState(heart);
  const [cards, setCards] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

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

  const handleAddCard = () => {
    form.resetFields();
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreateCard = async (values) => {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        fetchCards();
        setVisible(false);
      } else {
        console.error('Error creating card');
      }
    } catch (error) {
      console.error('Error', error);
    }
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
      <div className={styles.addButton}>
        <Button type="primary" onClick={handleAddCard}>
          Add Card
        </Button>
      </div>
      <Modal title="Add Card" visible={visible} onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={handleCreateCard}>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: 'Please enter the category',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter the name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
                message: 'Please enter the quantity',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="images"
            label="Images"
            rules={[
              {
                required: true,
                message: 'Please enter the image URL',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
