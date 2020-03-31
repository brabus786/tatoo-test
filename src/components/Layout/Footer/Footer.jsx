import React from 'react';
import {Container} from 'reactstrap';
import HorisontalBaner from '../../HorizontalBanner/HorizontalBanner';
import styles from './Footer.module.scss';
import mobailFuterimg from '../../../assets/img/mobailFuter.png' 


const Footer = (props) => {

   
    return(
    <footer className={styles.footer}>
        <Container>
            <div className={styles.wrap}>
            {/* {props.banner(props.bannerFooterImg)} */}
            <HorisontalBaner mobailFuterimg={mobailFuterimg} param img={props.bannerFooterImg} />
            </div>
        </Container>
    </footer>
    );
};

export default Footer;