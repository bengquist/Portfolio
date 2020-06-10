import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage: React.FC = () => (
  <Layout headerTitle="projects">
    <SEO title="projects" />
    <p>Welcome to projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectsPage
