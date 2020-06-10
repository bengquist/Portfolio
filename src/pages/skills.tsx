import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SkillCard from "../components/SkillCard"
import skills from "../data/skills"

const SkillsPage: React.FC = () => (
  <Layout headerTitle="skills">
    <SEO title="skills" />

    <Container>
      {skills.map(skill => (
        <SkillCard {...skill} />
      ))}
    </Container>
  </Layout>
)

export default SkillsPage

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
  grid-gap: 1rem;
`
