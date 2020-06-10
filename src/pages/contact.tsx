import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage: React.FC = () => (
  <Layout headerTitle="contact">
    <SEO title="contact" />
    <p>Welcome to contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
