import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type Props = {
  icon: IconProp
  to: string
}

const NavigationItem: React.FC<Props> = ({ icon, to }) => {
  return (
    <Container to={to} activeStyle={{ color: "#ffc25c" }}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </Container>
  )
}

export default NavigationItem

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #424657;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: #252734;
  box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.25);

  transition: 0.3s;

  :hover {
    opacity: 0.7;
  }
`
