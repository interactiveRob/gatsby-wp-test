import React, { Component } from "react"
import Layout from "../layouts"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
		<p>PlaceHolder Text</p>
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