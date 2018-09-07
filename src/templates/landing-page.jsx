import React, { Component } from "react"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Wave from "../components/wave"
import AccordionSection from "../components/accordion-section"
import Quiz from "../components/quiz"
import Section from "../components/section"

class LandingPage extends Component {
	componentDidMount() {
		require('../layouts/js/logic.js')
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
			
			<Wave color="blue" headline="What's causing the power market to fluctuate?" descr="A variety of events - from the weather to the economy - can cause the power market to rise and fall. Those conditions. as well as your power purchasing strategy, can have a significant impact on the price you pay for power over time. To demonstrate this. we compared how nine different purchasing strategies performed over a 13-year period. Overall, there was a 41% price variance between the highest- and lowest-performing approaches."/>
			
			<Section id="blue3" color="blue">
				<AccordionSection descr="Many different factors can affect the price of energy. The period of 2005 to 2017 covered a range of economic and market conditions, which caused the market to both rise and fall.<br />Here's a look at what happened during that time and how it affected prices."/>
				<Quiz/>
			</Section>	

		</div>
    )
  }
} 

export default LandingPage