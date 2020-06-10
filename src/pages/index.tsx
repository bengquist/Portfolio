import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import ProfileImage from "../components/ProfileImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout headerTitle="about">
    <SEO title="about" />

    <Container>
      <ImageContainer>
        <ProfileImage />
      </ImageContainer>
      <Info>
        <h1>Full Stack Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          voluptates optio. Unde neque sit molestiae accusamus esse fugit quidem
          cupiditate ipsum reprehenderit, adipisci aliquid aperiam assumenda
          doloremque temporibus repellat consectetur.
        </p>
      </Info>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  max-width: 800px;
  display: flex;
  margin: auto;
`

const ImageContainer = styled.div`
  width: 1000px;
  margin-right: 100px;
`

const Info = styled.section`
  color: white;

  > h1 {
    margin-bottom: 1.5rem;
  }
`
