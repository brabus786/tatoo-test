import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss';
import HorizontalBanner from '../HorizontalBanner/HorizontalBanner';
import Button from '../UI/Button/Button';


const Layout = (props) => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer bannerFooterImg={props.bannerFooter} banner={HorizontalBanner} />
            <Button onclick={scrollTop} text='наверх' classes='scrollTop' />
        </>
    );
};
export default Layout;