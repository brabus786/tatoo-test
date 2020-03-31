import React from 'react';
import styles from './Card.module.scss';
import buttonImg from '../../assets/img/Group46.svg'

const Card = (props) => {

    const img = props.data.img && props.data.img.map((data, i) => {
        return data;
    });

    let blockImg = (<></>);

    if (img) {
        if (img.length > 1) {
            blockImg = (
                <div className={styles.card__blockImg}>
                    <div className={styles.card__blockImg_first}>
                        <img src={img[0]} alt="img" />
                    </div>
                    <div className={styles.card__blockImg_second}>
                        <img src={img[1]} alt="img" />
                        <img src={img[2]} alt="img" />
                    </div>
                </div>
            )
        } else {
            blockImg = (
                <div className={styles.card__onePhoto}>
                    <img src={img[0]} alt="img" />
                </div>
            )
        }
    }



    let fullCard = (
        <div className={styles.card}>
            <div className={styles.card__img}>

                {blockImg}

                <div className={props.data.sales ? [styles.card__price, styles.active].join(' ') : styles.card__price}>
                    <span>{props.data.price}</span>
                    <span>{props.data.currency}</span>
                </div>
            </div>
            <div className={styles.card__user}>

                    <div className={[styles.card__wrapAvatar,].join(' ')}>
                         <img className={styles.card__fire}  src={props.data.fire} alt="fire"/>
                         <img className={styles.card__ava} src={props.data.avatar !== undefined ? props.data.avatar : null} alt="avatar" />
                    </div>
                
                <span>{props.data.name !== undefined ? props.data.name : null}</span>
            </div>
        </div>
    )

    if (props.data.button) {
        fullCard = (
            <div className={styles.cardButton}>
                <button>Показать еще</button>
                <img src={buttonImg} alt="buttonImg" />
            </div>
        );
    }


    return fullCard;
};

export default Card;