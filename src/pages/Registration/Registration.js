import {Form , Input , Button , Row} from 'antd'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const Registration = () => {
    const navigate  = useNavigate();
    const onSubmit = (values) => {
        console.log(values);
        navigate('/main');
    }

    return (
        <div className={styles.wrap}>
            <Form onFinish={onSubmit}>

                <Form.Item label='nickname'  name='nickname' >
                    <Input required placeholder='write your nickname' />
                </Form.Item>
                <Form.Item label='number'  name='number' >
                    <Input required placeholder='+996 (XXX) XXX - XXX' />
                </Form.Item>
                <Form.Item label='email'  name='email' >
                    <Input type='email' required placeholder='write your email address' />
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input type='password' required placeholder='Enter your password' />
                </Form.Item>

                <Row justify='center'>
                    <Button htmlType='submit' type='primary'>Add</Button>
                </Row>
            </Form>
            
        </div>
    );
}