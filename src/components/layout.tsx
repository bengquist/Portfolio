/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import Header from "./header"
import Navigation from "./Navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Inner>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Body>{children}</Body>
          <Navigation />
        </Inner>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  background: #333646;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const Inner = styled.main`
  background: #252734;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const Body = styled.div`
  padding: 1rem;
`
