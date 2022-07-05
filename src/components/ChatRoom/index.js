import React from 'react'
import { Row, Col } from 'antd'
import ChatWindow from './ChatWindow'
import Siderbar from './Siderbar'


const ChatRoom = () => {
  return (
    <div>
      <Row>
        <Col span={6}><Siderbar /></Col>
        <Col span={18}><ChatWindow /></Col>
      </Row>
    </div>
  )
}

export default ChatRoom