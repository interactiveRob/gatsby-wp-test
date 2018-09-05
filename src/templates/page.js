import React, { Component } from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
	let hero_headline = ''
	
	if(currentPage.acf !== null){
		hero_headline = currentPage.acf.hero_headline
	}
	
    return ( 
      <div>
    
      	<Hero/>
        <Intro/>
      </div>
    )
  }
} 

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!){
	wordpressPage(id: {eq: $id}) {
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