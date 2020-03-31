import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import MainTemplate from '../templates/MainTemplate/MainTemplate';

import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import ava from '../assets/img/ava.png';
import fireGreen from '../assets/img/fireGreen.svg';
import Ellipse from '../assets/img/Ellipse.svg';
import imgHorizontal from '../assets/img/imgHorizontal.png';

const Home = () => {

  const [isFilterOpen, setFilterOpen] = useState(false);
  const switchFilterState = () => {
    setFilterOpen(!isFilterOpen);
  }

  const blokPayAttentionTo = [
    {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: true,
      img: [img1],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      button: true,
    },
  ]

  const topRating = [
    {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: true,
      img: [img1],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: true,
      img: [img1],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [img2, img3, img4],
      avatar: ava,
      name: 'Дмитрий Останинкинов',
      fire: fireGreen,
      hot: Ellipse,
    }, {
      button: true,
    },
  ]

  let allMasters = [];
  for (let i = 0; i < 20; i++) {
    allMasters.push(
      {
        price: 1500,
        currency: 'ք',
        sales: false,
        img: [img2, img3, img4],
        avatar: ava,
        name: 'Дмитрий Останинкинов',
        fire: fireGreen,
        hot: Ellipse,
      }
    );
  };



  return (
    <Layout
      bannerFooter={imgHorizontal}
    >

      <MainTemplate
        payAttentionTo={blokPayAttentionTo}
        topRating={topRating}
        allMasters={allMasters}
        isFilterOpen={isFilterOpen}
        switchFilterState={switchFilterState}
        bannerFooter={imgHorizontal}
      />
    </Layout>
  )
}

export default Home;
