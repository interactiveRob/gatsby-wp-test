import React from 'react';
import blueSVG from "../layouts/img/blue1.svg";
import circleDown from "../layouts/img/circle-down.svg";

class Intro extends React.Component {
  render() {
	 return(
	    <section id="blue1" className="blue">
	        <div className="container">
	            <div className="article">
	                <div className="images">
	                    <object data={blueSVG} alt="" type="image/svg+xml" className="add-slide-up"/>
	                </div>
	                <p className="add-slide-up">With Constellation, you can optimize your power purchasing strategy by customizing the components of price, time and execution. In a typically volatile power market, a flexible purchasing strategy can help you achieve budget certainty and mitigate risk.</p>
	                <p className="add-slide-up">Learn more by exploring the information below, or see how different purchasing strategies perform over time by reading the white paper, "<a href="#">Evaluating Power Purchasing Strategies for Your Business</a>."</p>
	                <button className="add-pop">
	                    <span>Download now</span>
	                    <object data={circleDown} type="image/svg+xml" style={{maxWidth : 20}}/>
	                </button>
	            </div>
	        </div>
	    </section>		 
	 )
  }
}

export default Intro