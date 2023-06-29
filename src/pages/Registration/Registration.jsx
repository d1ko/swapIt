import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";

const { Item } = Form;

export const Registration = () => {
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API;

  const [form] = Form.useForm();
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await fetch(`${api}/api/v1/accounts/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        console.log(data);
        console.log("Регистрация прошла успешно!");
        navigate("/"); // Переход на другую страницу после успешной регистрации
      } else {
        // Обработка ошибок при регистрации
        const errorData = await response.json();
        console.log("Ошибка при регистрации:", errorData);
        setShowAlert(true);
      }
    } catch (error) {
      console.log("Ошибка при выполнении запроса:", error);
      setShowAlert(true);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div>
        <h2 style={{ textAlign: "center" }}>Регистрация</h2>
        <Form form={form} onFinish={onFinish}>
          <Item label="Имя пользователя" name="username" rules={[{ required: true }]}>
            <Input placeholder="Write your name"/>
          </Item>
          <Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="Write your email addres"/>
          </Item>
          <Item label="Номер телефона" name="phone_number">
            <Input placeholder="Write your phone number"/>
          </Item>
          <Item label="Пароль" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Write your password"/>
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Зарегистрироваться
            </Button>
          </Item>
        </Form>
        {showAlert && (
          <Alert
            message="Что-то пошло не так, попробуйте позже!"
            type="error"
            closable
            onClose={() => setShowAlert(false)}
            className="mt-3"
          />
        )}
      </div>
    </div>
  );
};

export default Registration;
