import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import RoomList from './RoomList'
import Userinfo from './Userinfo'

const SiderbarStyled = styled.div`
  background-color: #3f0e40;
  color:White;
  height: 100vh;
`

const Siderbar = () => {
  return (
    <SiderbarStyled>
    <Row>
      <Col span={24}><Userinfo /></Col>
      <Col span={24}><RoomList /></Col>
    </Row>
    </SiderbarStyled>
  )
}

export default Siderbar