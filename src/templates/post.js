import React, { Component } from "react"
import Layout from "../layouts"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <PostIcons node={currentPage} css={{ marginBottom: rhythm(1 / 2) }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query WP_post_query {
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`