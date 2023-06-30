import { Form, Input, Button, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const Auth = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API;


  const onFinish = async (values) => {
    console.log('sadd');

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
          navigate("/");
          window.location.reload();
          
        } else {
          console.error("Request failed:", response.status);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className={styles.wrap}>
      <div>
        <h2 style={{ textAlign: "center" }}>Вход</h2>
        <Form onFinish={onFinish}>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input type="email" placeholder="Write your email address" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Write your password" />
          </Form.Item>

          <Row justify="center">
            <Button htmlType="submit" type="primary">
              Login
            </Button>
          </Row>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link to="/regis">Create account</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
