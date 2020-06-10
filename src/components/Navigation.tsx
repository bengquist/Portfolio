import {
  faEnvelope,
  faImages,
  faToolbox,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import NavigationItem from "./NavigationItem"

export default function Navigation() {
  return (
    <Container>
      <Link to="/skills/">
        <NavigationItem icon={faUserCircle} />
      </Link>
      <Link to="/skills/">
        <NavigationItem icon={faToolbox} />
      </Link>
      <Link to="/skills/">
        <NavigationItem icon={faImages} />
      </Link>
      <Link to="/skills/">
        <NavigationItem icon={faEnvelope} />
      </Link>
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
