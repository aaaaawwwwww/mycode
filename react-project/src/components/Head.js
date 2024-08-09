import React from 'react'
import { Button, Space } from 'antd'
import LoginTool from './LoginTool'

function Head() {
  return (
    <div style={{ height: '200px' }}>
      <form>
        <Space wrap style={{
          display: "flex", justifyContent: 'flex-end',
          margin: '0 100px 0 300px',
        }}>
          <Button type="text">마이페이지</Button>
          <Button type="text">장바구니</Button>
          <Button type="text">주문/배송조회</Button>
        </Space>
      </form>
      <form style={{
        display: 'inline-block',
        margin: '2% 0 0 40%',
      }}>
        <input type="text" name="text" id="text" placeholder="검색어를 입력하세요." style={{ width: "30em", height: '30px' }} />
        <button type='submit' className='searchBtn'
          style={{
            width: "50px",
            height: "30px"

          }} >
          <span>검색</span>
        </button>
      </form>
      <form style={{ display: 'relative', }}>
        <LoginTool />
      </form>

    </div>
  )
}

export default Head

