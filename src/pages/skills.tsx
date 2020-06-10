import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SkillsPage: React.FC = () => (
  <Layout headerTitle="skills">
    <SEO title="skills" />
    <p>Welcome to skills page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SkillsPage
