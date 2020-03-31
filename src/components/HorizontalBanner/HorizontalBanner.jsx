import React from 'react';
import styles from './HorizontalBanner.module.scss';

const HorizontalBanner = (props) => {
    return (
        <div className={styles.HorizontalBanner}>
            <p className={styles.HorizontalBanner__text}>
                рекламный <br />баннер
            </p>
            <img className={styles.HorizontalBanner__img} src={props.img} alt="img"/>
        </div>
    );
};

export default HorizontalBanner;