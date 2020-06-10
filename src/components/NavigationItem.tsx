import React from "react"
import styled from "styled-components"

export default function NavigationItem() {
  return <Container>hi</Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #424657;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.25);
  transform: translateY(-50px);
`
