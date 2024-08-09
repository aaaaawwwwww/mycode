import React from 'react'

const st_category = {
  border: '1px solid brown',
  width: '80px',
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  backgroundColor: 'lightgrey',
  margin: '20px auto ',
}

const st_element = {
  display: 'inline-block',
  backgroundColor: 'lightgray',
  margin: '0 0 0 3px',
  borderRadius: '5px',
  padding: '5px',
}

const st_check = {
  display: 'inline-block',
  margin: '0 0 0 30px',
}

const soket = ['(인텔) 소켓 1700', '(인텔) 소켓 1500', '(인텔) 소켓 1200', '(인텔) 소켓 2066',];
const manufac = ['5mm', '7mm', '10mm'];
const core = ['2코어', '4코어', '6코어', '8코어'];
const thread = ['2쓰레드', '4쓰레드', '8쓰레드'];
const clock = ['5.0GHz 이상', '4.5GHz ~ 4.99GHz'];
const graphic = ['탑재', '미탑재'];

function Customs(props) {
  return (
    <div>
      <span style={{ ...st_category, display: 'inline-block' }}>{props.category}</span>
      <div style={{ display: 'inline-block' }}>
        {props.array.map((item, index) => (
          <div key={index} style={{
            display: 'inline-block',
            margin: '0 0 0 10px'
          }}>
            <input type='checkbox' style={st_check} />
            <span style={st_element}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Options = () => {
  return (
    <div style={{
      float: 'left',
      margin: '30px 50px 250px 50px',
      width: '55%',
      height: 'auto',
    }}>
      <span style={st_category}>제조사</span>
      <select style={{
        display: 'inline-block',
        margin: '0 0 0 40px',
        width: '100px',
        height: '30px',
      }}>
        <option defaultValue={'인텔'}>인텔</option>
        <option >AMD</option>
      </select>
      <Customs array={soket} category='소켓 구분' />
      <Customs array={manufac} category='제조 공정' />
      <Customs array={core} category='코어 수' />
      <Customs array={thread} category='쓰레드 수' />
      <Customs array={clock} category='클럭' />
      <Customs array={graphic} category='내장그래픽' />
    </div>
  )
}

export default Options
