import React from "react"
import styled from "styled-components"

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <h2>{siteTitle}</h2>
  </Container>
)

export default Header

const Container = styled.header`
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: white;
  text-decoration: none;
`
