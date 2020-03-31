import React from 'react';
import styles from './Navigation.module.scss';
import logo from '../../../../assets/img/black.png';
import menuBurger from '../../../../assets/img/UI/menuBurger.svg';
import { Col } from 'reactstrap';

const Navigation = (props) => {
    return (

        <div className={styles.wrap}>
            <div className={styles.wrap__avatar}><img src={props.avatar} alt="avatar" /></div>
            <img src={logo} alt="" />
            <img src={menuBurger} alt="menuBurger" />
            <nav className={styles.wrap__nav}>
                <ul>
                    <li><a href="">Мастера</a></li>
                    <li><a href="">Студии</a></li>
                    <li><a href="">Галерея татуировок</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;


