import React from 'react';
import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';
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
            <Head>
                <title>Test work Tattoo Marketplace</title>
                <meta name='description' content='Test work Tattoo Marketplace' />
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer bannerFooterImg={props.bannerFooter} banner={HorizontalBanner} />
            <Button onclick={scrollTop} text='наверх' classes='scrollTop' />
        </>
    );
};
export default Layout;