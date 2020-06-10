import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"

type Props = {
  icon: IconProp
}

const NavigationItem: React.FC<Props> = ({ icon }) => {
  return (
    <Container>
      <FontAwesomeIcon color="#252734" icon={icon} size="2x" />
    </Container>
  )
}

export default NavigationItem

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #424657;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 3px 6px 0 rgb(0, 0, 0, 0.25);
`
