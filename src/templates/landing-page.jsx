import React, { Component } from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"

class LandingPage extends Component {
	componentDidMount() {
		require('../layouts/logic.js')
	}
	
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

export default LandingPage