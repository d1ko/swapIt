import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";

const { Item } = Form;

export const Registration = () => {
  const navigate = useNavigate();
  const api = process.env.REACT_APP_API

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
        navigate("/main"); // Переход на другую страницу после успешной регистрации
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
    <div>
      <h2>Register Form</h2>
      <Form form={form} onFinish={onFinish}>
        <Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Item>
        <Item label="Phone Number" name="phone_number">
          <Input />
        </Item>
        <Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Item>
      </Form>
      {showAlert && (
        <Alert
          message="Something went wrong, please try again later!"
          type="error"
          closable
          onClose={() => setShowAlert(false)}
          className="mt-3"
        />
      )}
    </div>
  );
};

export default Registration;
