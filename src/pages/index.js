import React from 'react'
import Hero from "../components/hero"
import Intro from "../components/intro"
import LandingPage from "../templates/landing-page"
import Link from 'gatsby-link'


const IndexPage = (data) => (
  <div>
  <LandingPage data={data.data}/>
  </div>
 ) 
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