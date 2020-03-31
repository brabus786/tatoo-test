import React from 'react';
import Navigation from './Navigation/Navigation';
import UserInfo from './UserInfo/UserInfo';
import styles from './Header.module.scss';
import { Container, Row, Col } from 'reactstrap';
import avatar from '../../../assets/img/avatar.png';

const Header = () => {
    return (

        <header className={styles.header}>
            <Container>
                <Row className={styles.header__wrap}>
                    <Col xl='6' lg='7' sm='4'>
                        <Navigation
                            avatar={avatar}
                        />
                    </Col>
                    <Col xl='6' lg='5' sm='8'>
                        <UserInfo
                            location='Санкт-Петербург'
                            avatar={avatar}
                            name='Дмитрий'
                        />
                    </Col>
                </Row>
            </Container>
        </header>

    );
};

export default Header;
