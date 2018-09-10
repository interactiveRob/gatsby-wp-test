import React, { Component } from "react"
import AccordionSection from "../components/accordion-section"
import Article from "../components/article"
import ContactForm from "../components/contact-form"
import DoubleChart from "../components/double-chart"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Intro from "../components/intro"
import pdfDownload from "../layouts/img/CON_9207_Energy_Purchasing_Strategies_White_Paper Sept2018.pdf"
import Popups from "../components/popups"
import Quiz from "../components/quiz"
import Section from "../components/section"
import Solutions from "../components/solutions"
import Trio from "../components/trio"
import Wave from "../components/wave"

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
			
			<Wave id="blue2" color="blue" headline="What's causing the power market to fluctuate?" descr="A variety of events - from the weather to the economy - can cause the power market to rise and fall. Those conditions. as well as your power purchasing strategy, can have a significant impact on the price you pay for power over time. To demonstrate this. we compared how nine different purchasing strategies performed over a 13-year period. Overall, there was a 41% price variance between the highest- and lowest-performing approaches."/>
			
			<Section id="blue3" color="blue">
				<AccordionSection descr="Many different factors can affect the price of energy. The period of 2005 to 2017 covered a range of economic and market conditions, which caused the market to both rise and fall.<br />Here's a look at what happened during that time and how it affected prices."/>
				<Quiz quizID="quiz1"/>
				<Article icon="blue2SVG" descr="Staying informed on market changes can help you determine how to adjust your power purchasing accordingly. Watch our latest <a target='_blank' href='https://energy.constellation.com/market-intel_webinar-resources-july2018'>Energy Market Outlook webinar</a> to see what's ahead." button="watchNow"/>
			</Section>	
			
		    <Wave id="orange1" color="orange" headline="What power purchasing options are available?" descr="There are a range of approaches you can use to purchase power, but there are four main variables to consider within the components of price and time:" />
		    
			<Section id="orange2" color="orange">
				<div className="flex">
					<DoubleChart id="chart1" descr="Over 13 years, from 2005 to 2017, the different approaches yielded significantly different results. Here's how they compared:" chart="fig2"/>
					<DoubleChart id="chart2" descr="Constellation recently researched how nine different purchasing strategies performed over a span of 13 years:" chart="fig2a"/>
				</div>
				<Quiz quizID="quiz2"/>
<Article icon="orange3SVG" descr={"Get more detailed insight into how different purchasing strategies performed over time by downloading the white paper, <a href=" + pdfDownload + ">&ldquo;Evaluating Power Purchasing Strategies for Your Business.&rdquo;</a>"} button="downloadNow"/>
			</Section>				 

			<Wave id="green1" color="green" headline="What power purchasing strategy is best for my company?" descr="There's no one power purchasing strategy that works for every company - because every business is unique. You should base your approach on your business's preferences for the following:"/>			
			
			<Section id="green2" color="green">
				<div className="text add-slide-up">
                With a flexible purchasing strategy, you can customize the timing, layering and management of your load, so you can achieve the results that are important to your business.
            </div>
				<Quiz quizID="quiz3"/>
				<Trio/>
			</Section>		
					 
			<Wave id="grey1" color="grey" headline="What tools can help me make smarter power purchasing decisions?" descr="With Constellation, you can optimize your power purchasing strategy by customizing the following components based on your business's preferences:"/>				

			<Solutions/>
			<Footer/>
			<ContactForm/>
			<Popups/>
		</div>
    )
  }
} 

export default LandingPage