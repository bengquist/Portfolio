import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout headerTitle="about">
    <SEO title="about" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/skills/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

const Logo = styled.div``
