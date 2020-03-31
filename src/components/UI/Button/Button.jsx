import React,{useState,useEffect} from 'react';
import styles from './Button.module.scss'


const Button = (props) => {

const[classes,setClasses] = useState(styles.default);


useEffect(() => {
    if(props.classes == 'scrollTop') setClasses(styles.scrollTop);
    if(props.classes == 'greenButton') setClasses(styles.greenButton);
},[])



    return(
        <button onClick={props.onclick} className={classes}>
            <span>{props.text}</span>
        </button>
    );
};

export default Button;