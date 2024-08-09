import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('주요 구성품', 'main', <AppstoreOutlined />, [
    getItem('CPU', 'a'),
    getItem('GPU', 'b'),
    getItem('메모리', 'c'),
    getItem('메인보드', 'd'),
    getItem('...', 'more1'),
  ]),
  {
    type: 'divider',
  },
  getItem('주변기기', 'etc', <SettingOutlined />, [
    getItem('키보드', 'e'),
    getItem('마우스', 'f'),
    getItem('모니터', 'g'),
    getItem('스피커', 'h'),
    getItem('...', 'more2'),
  ]),
];

const CompoList = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        float: 'right',
        margin: '100px 100px 0 0',
        width: 256,
        // background: 'transparent',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
      }}
      defaultSelectedKeys={['a', 'e']}
      defaultOpenKeys={['main', 'etc']}
      mode="inline"
      items={items}
    />
  );
};
export default CompoList;