import React from 'react';
import CTABar from "../components/cta-bar"
import nextSVG from "../layouts/img/next.svg";


class Solutions extends React.Component {
  render() {	 
	 return(
		<section id="solutions">		 
			<div className="container tight">
				<div className="big add-slide-up">
				To help you make informed decisions about all three components, Constellation provides a number of related solutions and tools, including:
				</div>
				<div className="solution blue-solution">
				<h2 className="add-slide-up">Flexible Index Solutions</h2>
				<div className="flex">
					<div>
						<div className="add-slide-up">
						    Our Flexible Index Solutions (FIS) program enables you to make smaller, fixed price purchases over time, which helps your business manage market extremes. By spreading out the tiing risk, your business can take advantage of price lows while still fixing costs in case prices rise.
						</div>
						<a href="#" className="btn add-pop">
						    <span>Learn more</span>
						    <img src={nextSVG} alt=""/>
						</a>
					</div>
					<div>
						<div className="add-slide-up">
						    Along with the FIS program, you can also take advantage of our Minimize Volatile Pricing (MVPe) program, which is an algorithm that buys smaller percentages of load at regularly scheduled intervals over a period of time.
						</div>
							<a href="#" className="btn add-pop">
							    <span>Learn more</span>
							    <img src={nextSVG} alt=""/>
							</a>
						</div>
					</div>
					<div className="add-slide-up">
					By using dollar-cost averaging, you can purchase a fixed amount of power on a regular basis, When prices are low, that fixed amount buys more; when prices are high, the fixed amount buys less. This can help reduce long-term risk.
					</div>
				</div>
				<div className="solution orange-solution">
					<h2 className="add-slide-up">MarketWatch</h2>
					<div className="text add-slide-up">Our MarketWatch tool is designed to help you monitor and respond to market activity. You can identify a target price and implement triggers to begin contract execution when the target price is reached.
					</div>
					<a href="#" className="btn add-pop">
					<span>Learn more</span>
					<img src={nextSVG} alt=""/>
					</a>
				</div>
			</div>
			<CTABar/>	        
		</section>	  
	 )
  }
}

export default Solutions
