import {Form , Input , Button , Row} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useState } from 'react'

export const Auth = () => {
    const [values, setValues]  = useState({
        nickname: '',
        number: '',
        email: '',
        password: '',
    });
    const navigate  = useNavigate();

    const [auth, setAuth] = useState({
        auth: false,
    });
    // const {setAuth} = !auth;

    const onSubmit = (values) => {
        console.log(values.nickname);
        console.log(values.number);
        console.log(values.email);
        console.log(values.password);
        navigate('/main');
    }

    return (
        <div className={styles.wrap}>
            <Form onFinish={onSubmit}>

                <Form.Item label='email'  name='email' >
                    <Input type='email' required placeholder='write your email address' />
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input type='password' required placeholder='Enter your password' />
                </Form.Item>

                <Row justify='center'>
                    <Button htmlType='submit' type='primary'>Add</Button>
                </Row>
                <Link to='/regis' >Creat account</Link>
            </Form>
        </div>
    );
  }