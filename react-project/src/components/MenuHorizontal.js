import React from 'react'

const items = ['판매순', '높은가격순', '낮은가격순', '신상품순', '상품의견 많은 순'];

const style = {
  textAlign: 'center',
  width: 'auto',
  height: 'auto',
  lineHeight: '30px',
  fontSize: '1.1em',
  borderRadius: '10px',
  margin: '10px 10px',
  wordWrap: 'break-word',
  background: 'transparent',
};

const MenuHorizontal = () => {
  return (
    <div>
      {items.map((item, index) => (
        <button type="button" key={index} defaultValue={item} style={style} >{item}</button>
      ))
      }
    </div>
  )
}

export default MenuHorizontal
