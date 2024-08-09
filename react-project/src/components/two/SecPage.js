import React from 'react'
import Head from '../Head'
import UsageMenu from './UsageMenu'
import MenuVertical from '../MenuVertical'
import SecContainer from './SecContainer'
import backgroundtwo from '../img/backgroundtwo.jpg'

const SecPage = () => {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url(${backgroundtwo})`, backgroundSize: 'cover',
      backgroundPosition: 'center center', height: 'calc(100vh + auto)',
    }}>
      <Head />
      <UsageMenu />
      <MenuVertical secondpage />
      <SecContainer />
    </div>
  )
}

export default SecPage
