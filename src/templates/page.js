import React, { Component } from "react"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        
        if(currentPage.acf !=== null){
	        <h3>currentPage.acf.hero_headline </h3>	        
        }
      </div>
    )
  }
} 

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!){
	wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf{
	      hero_headline
      }

    }	  
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`