import React from 'react'
import Hero from "../components/hero"
import Intro from "../components/intro"
import LandingPage from "../templates/landing-page"

class IndexPage extends React.Component {
	 render() {
    const pageData = this.props.data
	    return (
	      <div>
		    <LandingPage data={pageData}/> 
	       <pre>{JSON.stringify(pageData , null, 1)}</pre>
	      </div>
	   )
   }	   
}

export default IndexPage

//query specific static front page
export const pageQuery = graphql`
query staticFrontPage($frontpage_id: Int = 5){
 	wordpressPage (wordpress_id: {eq: $frontpage_id}){
		id
		title
		acf {
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