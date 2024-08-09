import React from 'react'
import Head from '../Head'
import MenuVertical from '../MenuVertical'
import Options from './Options'
import CompoList from './CompoList'
import ThirdContainer from './ThirdContainer'
import backgroundthree from '../img/backgroundthree.jpg'

const ThirdPage = () => {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: 'auto',
      backgroundImage: `url(${backgroundthree})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
    >
      <Head />
      <MenuVertical thirdpage />
      <Options />
      <CompoList />
      <ThirdContainer />
    </div>
  );
};

export default ThirdPage;

