import React from 'react';
import styles from './UserInfo.module.scss';
import { Col, Row } from 'reactstrap';

const UserInfo = (props) => {
    return (
        <div className={styles.userInfo}>   
            <div className={styles.userInfo__location}>
                <span className={styles.userInfo__locationLabel}>Ваш город:</span>
                <span className={styles.userInfo__town}>{props.location}</span>
            </div>
            <div className={styles.userInfo__avatarWrap}>
                <div className={styles.userInfo__avatar}><img src={props.avatar} alt="avatar" /></div>
                <span className={styles.userInfo__nameUser} >{props.name}</span>
            </div>
        </div>
    );
};

export default UserInfo;