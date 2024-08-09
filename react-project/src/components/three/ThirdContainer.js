import React from 'react'
import MenuHorizontal from '../MenuHorizontal'
import ThirdList from './ThirdList'

const container = {
  position: 'absolute',
  bottom: '5%',
  margin: '20px 0 0 -100px',
  displayContent: 'center',
  width: '40%',
  height: '200px',
  justifyContent: 'center',
  left: '20%',
}

const ThirdContainer = () => {
  return (
    <div style={container}>
      <MenuHorizontal />
      <ThirdList />
    </div>
  )
}

export default ThirdContainer
