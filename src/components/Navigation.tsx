import {
  faEnvelope,
  faImages,
  faToolbox,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import styled from "styled-components"
import NavigationItem from "./NavigationItem"

export default function Navigation() {
  return (
    <Container>
      <NavigationItem icon={faUserCircle} to="/" />
      <NavigationItem icon={faToolbox} to="/skills" />
      <NavigationItem icon={faImages} to="/projects" />
      <NavigationItem icon={faEnvelope} to="/contact" />
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
  display: flex;
  justify-content: space-around;
  transform: translateY(30px);
`
