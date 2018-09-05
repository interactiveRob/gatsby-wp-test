import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Hero from "../components/hero"
import Intro from "../components/intro"
import LandingPage from "../templates/landing-page"

const IndexPage = (data) => (		
      <div>
	    <LandingPage data={data.data}/> 
       <pre>{JSON.stringify(data.data , null, 1)}</pre>
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