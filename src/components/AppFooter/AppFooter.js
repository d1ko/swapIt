import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

export const AppFooter = () => {
    return (
        <Footer style={{ backgroundColor: '#f0f2f5' }}>
            <Row justify='center'>
                <Col
                    span={24}
                    style={{ textAlign: 'center' }}
                >
                    <h2
                        style={{
                            fontSize: '30px',
                        }}
                    >
                        About
                    </h2>
                    <p
                        style={{
                            fontSize: '20px',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse fringilla fringilla velit, vel tempor lorem
                        eleifend non. Nulla tincidunt diam sit amet ex
                        vulputate, sed malesuada lacus scelerisque.
                    </p>
                </Col>
            </Row>
            <Row justify='center'>
                <Col
                    span={24}
                    style={{ textAlign: 'center' }}
                >
                    <h2
                        style={{
                            fontSize: '24px',
                        }}
                    >
                        Connect with Us
                    </h2>
                    <div>
                        <Link href='/'>
                            <FacebookOutlined
                                className='social-icon'
                                style={{
                                    marginRight: '0.5rem',
                                    fontSize: '30px',
                                }}
                            />
                        </Link>
                        <Link href='/'>
                            <TwitterOutlined
                                className='social-icon'
                                style={{
                                    marginRight: '0.5rem',
                                    fontSize: '30px',
                                }}
                            />
                        </Link>
                        <Link href='/'>
                            <InstagramOutlined
                                className='social-icon'
                                style={{
                                    marginRight: '0.5rem',
                                    fontSize: '30px',
                                }}
                            />
                        </Link>
                        <Link href='/'>
                            <LinkedinOutlined
                                className='social-icon'
                                style={{
                                    marginRight: '0.5rem',
                                    fontSize: '30px',
                                }}
                            />
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row justify='center'>
                <Col
                    span={24}
                    style={{ textAlign: 'center', paddingTop: '1rem' }}
                >
                    <p>© 2023 Your exchange of goods. All rights reserved.</p>
                </Col>
            </Row>
        </Footer>
    );
};
