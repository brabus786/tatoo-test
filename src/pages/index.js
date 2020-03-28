import React from 'react';
import Layout from '../components/Layout/Layout';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/Group46.svg';

const Home = () => {


  const blokPayAttentionTo = [
    {
      price:1500,
      currency: 'ք',
      sales:false,
      img:[img2,img3,img4],
      smallImg1:true,
      smallImg1:true,
      avatar:'',
      name:''
    },{
      price:1500,
      currency: 'ք',
      sales:true,
      img:[img1],
      smallImg1:true,
      smallImg1:true,
      avatar:'',
      name:''
    },{
      price:1500,
      currency: 'ք',
      sales:false,
      img:[img2,img3,img4],
      smallImg1:true,
      smallImg1:true,
      avatar:'',
      name:''
    },{
      price:1500,
      currency: 'ք',
      sales:false,
      img:[img2,img3,img4],
      smallImg1:true,
      smallImg1:true,
      avatar:'',
      name:''
    },{
      price:1500,
      currency: 'ք',
      sales:false,
      img:[img2,img3,img4],
      smallImg1:true,
      smallImg1:true,
      avatar:'',
      name:''
    },{
      button:true,
    },
  ]

  return (
        <Layout>
          <MainTemplate PayAttentionTo={blokPayAttentionTo} />
        </Layout>
    )
}

export default Home
