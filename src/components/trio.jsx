import React from 'react';
import nextSVG from "../layouts/img/next.svg";
import green1SVG from "../layouts/img/green1.svg"

class Trio extends React.Component {
  render() {	 
	 return(		 
		<div>
	      <div className="images add-slide-up">
	          <img src={green1SVG} alt=""/>
	      </div>
	      <div className="text center add-slide-up">
	          Learn more about the energy purchasing strategies that can help your business achieve its goals:
	      </div>
	      <div className="flex">
	          <div className="read">
	              <div className="add-slide-up"></div>
	              <div className="add-slide-up">What Energy Purchasing Strategy Is Best for Managing Risk?</div>
	              <a href="#" className="btn add-pop">
	                  <span>Learn more</span>
	                  <img src={nextSVG} alt=""/>
	              </a>
	          </div>
	          <div className="read">
	              <div className="add-slide-up"></div>
	              <div className="add-slide-up">A Smarter Way to Purchase Power: Dollar-Cost Averaging</div>
	              <a href="#" className="btn add-pop">
	                  <span>Learn more</span>
	                  <img src={nextSVG} alt=""/>
	              </a>
	          </div>
	          <div className="read">
	              <div className="add-slide-up"></div>
	              <div className="add-slide-up">Asking the Right Questions to Find the Right Strategy For Your Business</div>
	              <a href="#" className="btn add-pop">
	                  <span>Learn more</span>
	                  <img src={nextSVG} alt=""/>
	              </a>
	          </div>
	      </div>	 
	   </div>   
	 )
  }
}

export default Trio
