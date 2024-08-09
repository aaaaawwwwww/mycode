import { Col, Row } from 'antd';
import React from 'react';

const style = {
  width: '200px',
  height: '100px',
  background: '#0092ff',
  padding: '8px 0',
  textAlign: 'center',
  verticalAlign: 'center',
  fontSize: '1.5em',
  fontColor: 'white',
  background: 'transparent',
  color: 'black',
};

const App = () => (
  <>
    <Row style={{
      justify: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      width: '80%',
      margin: '50px 10%',
    }}
      gutter={{
        xs: 0,
        sm: 32,
        md: 32,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}><a href='http://localhost:3000/recommend'>추천 제품</a></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <div style={{ fontColor: 'black' }}><a href='http://localhost:3000/custom'>커스터마이징</a></div>
          <div><a href='http://localhost:3000/custom'>/ 견적 / 호환성검사</a></div>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><a href='http://localhost:3000/analysis'>성능 분석</a></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}><a href='http://localhost:3000/community'>커뮤니티</a></div>
      </Col>
    </Row>
  </>
);
export default App;