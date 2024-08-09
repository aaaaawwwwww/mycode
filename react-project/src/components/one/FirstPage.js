import React from 'react'
import Head from '../Head'
import Form from './Form'
import Footer from './Footer'
import backgroundone from '../img/backgroundone.jpg'

const FirstPage = () => {
  return (
    <div style={{
      position: 'absolute',
      height: '100%',
      backgroundImage: `url(${backgroundone})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
      <Head />
      <Form />
      <Footer />
    </div>
  )
}

export default FirstPage
