import React, { useState } from 'react';
import axios from 'axios';

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

const Home = (props) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const switchFilterState = () => {
    setFilterOpen(!isFilterOpen);
  }


  let allMasters = props.users.map(userData => {
    return {
      price: 1500,
      currency: 'ք',
      sales: false,
      img: [userData.avatar_url],
      avatar: userData.avatar_url,
      name: userData.login,
      fire: fireGreen,
      hot: userData.site_admin,
      profileUrl: userData.html_url
    }
  });



  return (
    <Layout
      bannerFooter={imgHorizontal}
    >

      <MainTemplate
        allMasters={allMasters}
        isFilterOpen={isFilterOpen}
        switchFilterState={switchFilterState}
        bannerFooter={imgHorizontal}
      />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users');

  return {
    users: response.data
  };
}

export default Home;
