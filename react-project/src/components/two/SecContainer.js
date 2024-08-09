import React from 'react'
import MenuHorizontal from "../MenuHorizontal";
import SecList from './SecList';

const container = {
  display: 'inline-block',
  margin: '0 0 0 50px',
  width: '70%',
  height: 'auto',
  padding: '30px 0 0 10px',
}


const SecContainer = () => {
  return (
    <div style={container}>
      <MenuHorizontal />
      <SecList />
    </div>
  )
}

export default SecContainer
