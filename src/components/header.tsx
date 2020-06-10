import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </Container>
)

export default Header

const Container = styled.header`
  text-align: center;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`
