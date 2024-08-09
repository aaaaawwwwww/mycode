import React from 'react';
import { Button, Flex } from 'antd';

const buttonMenu = ['일반사무용', '게이밍PC', '2D/3D설계', '영상편집', '개발자용', '포토샵/그래픽', '서버/연산/연구용', '컴퓨터 주변기기', '기타'];

const UsageMenu = () => (
  <div>
    <style>
      {`
        .custom-button:hover {
          background-color: skyblue;
        }
      `}
    </style>
    <Flex wrap="wrap" gap="large"
      style={{
        margin: '50px auto',
        width: '70%',
        alignItems: 'left',
      }}>
      {buttonMenu.map((text, i) => (
        <Button className='button' key={i} type="primary"
          style={{
            width: '200px', height: '', background: 'transparent',
            color: 'black', border: 'solid blue 0.5px',
          }}>
          {text}
        </Button>
      ))}
    </Flex>
  </div>
);

export default UsageMenu;
