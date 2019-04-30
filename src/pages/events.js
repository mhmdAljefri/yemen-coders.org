import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <div style={{ padding: '50px 0' }}>
      <Wrapper>
        <h1>Upcoming Events</h1>
        <p>Our Aim is to make usefull Events and share The knowladge amoung the</p>
        <Link to="/">Go back to the homepage</Link>
      </Wrapper>
    </div>
  </Layout>
)

export default Events;

