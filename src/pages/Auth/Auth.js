import { Form, Input, Button, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Auth = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API;

  const onFinish = async (values) => {
    console.log(values.email);
    console.log(values.password);

    if (!localStorage.getItem("access") && !localStorage.getItem("refresh")) {
      try {
        const response = await fetch(`${baseUrl}/api/v1/accounts/login/`, {
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
          navigate("/main");
        } else {
          console.error("Request failed:", response.status);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    } else {
      navigate("/main");
    }
  };

  return (
    <div className={styles.wrap}>
      <Form onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input type="email" required placeholder="Write your email address" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required placeholder="Enter your password" />
        </Form.Item>

        <Row justify="center">
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </Row>
        <Link to="/regis">Create account</Link>
      </Form>
    </div>
  );
};