import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import ProfileImage from "../components/ProfileImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout headerTitle="about">
    <SEO title="about" />

    <Container>
      <ProfileImage />
      <Info>
        <h1>Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
          voluptates recusandae veritatis earum cum error nisi laudantium ipsa
          unde.
        </p>
      </Info>
    </Container>
  </Layout>
)

export default IndexPage

const Logo = styled.div``

const Container = styled.div`
  max-width: 300px;
  display: flex;
`

const Info = styled.section``
