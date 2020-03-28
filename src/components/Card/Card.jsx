import React from 'react';
import styles from './Card.module.scss';
import buttonImg from '../../assets/img/Group46.svg'

const Card = (props) => {
    

    console.log(props.data.img);

    let fullCard = (
        <div className={styles.card}>
        <div className={styles.card__img}>

            <img src="" alt=""/>

            <div className={props.data.sales?[styles.card__price,styles.active].join(' '):styles.card__price}>
                <span>{props.data.price}</span>
                <span>{props.data.currency}</span>
            </div>
        </div>
        <div className={styles.card__user}></div>
    </div>
    )

    if(props.data.button){
        fullCard = (
           <div className={styles.cardButton}>
               <button>Показать еще</button>
               <img src={buttonImg} alt="buttonImg"/>
           </div>
        );
    }


    return fullCard;
};

export default Card;