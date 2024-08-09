import React from 'react';

const itemsSecond = ['인기제품', '가격대별', '성능별'];
const itemsThird = ['커스터마이징', '호환성 검사']

const wrapstyle = {
  float: 'left',
  margin: '0 0 0 30px',
};

const secondstyle = {
  textAlign: 'center',
  width: '200px',
  height: '100px',
  font: '2em bold',
  lineHeight: '100px',
  borderRadius: '20px',
  margin: '40px auto',
};

const thirdstyle = {
  textAlign: 'center',
  width: '200px',
  height: '100px',
  font: '2em bold',
  lineHeight: '100px',
  borderRadius: '20px',
  margin: '130px auto',
};

const MenuVertical = (props) => {
  if (props.secondpage) {
    return (
      <div style={wrapstyle}>
        {itemsSecond.map((item, index) => (
          <div key={index} style={secondstyle} >{item}</div>))
        }
      </div>
    )

  } else {
    return (
      <div style={wrapstyle}>
        {itemsThird.map((item, index) => (
          <div key={index} style={thirdstyle} >{item}</div>))
        }
      </div>
    )
  }
};

export default MenuVertical;
