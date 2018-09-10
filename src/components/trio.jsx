import React from 'react';
import nextSVG from "../layouts/img/next.svg";
import green1SVG from "../layouts/img/green1.svg"
import article1 from "../layouts/img/st1-2x.png"
import article2 from "../layouts/img/st2-2x.png"
import article3 from "../layouts/img/st3-2x.png"

class Trio extends React.Component {
  render() {	 
	 return(		 
		<div className="trio">
	      <div className="images add-slide-up">
	          <img src={green1SVG} alt=""/>
	      </div>
	      <div className="text center add-slide-up">
	          Learn more about the energy purchasing strategies that can help your business achieve its goals:
	      </div>
	      <div className="flex">
		     
		          <div className="read">
			          		      <a target="_blank" href="https://blogs.constellation.com/energy-management/what-energy-purchasing-strategy-is-best-for-managing-risk/" >    
		              <div className="add-slide-up" style={{backgroundImage: article1}} ></div>
		              </a>
		              <div className="add-slide-up">What Energy Purchasing Strategy Is Best for Managing Risk?</div>
		              <a target="_blank" href="https://blogs.constellation.com/energy-management/what-energy-purchasing-strategy-is-best-for-managing-risk/" className="btn add-pop">
		                  <span>Learn more</span>
		                  <img src={nextSVG} alt=""/>
		              </a>
		          </div>
		      
		      
		     
		          <div className="read">
			            <a target="_blank" href="https://blogs.constellation.com/energy-management/smarter-way-purchase-natural-gas-dollar-cost-averaging/" >
			              <div className="add-slide-up" style={{backgroundImage: article2}} ></div>
		              </a>
		              <div className="add-slide-up">A Smarter Way to Purchase Power: Dollar-Cost Averaging</div>
		              <a target="_blank" href="https://blogs.constellation.com/energy-management/smarter-way-purchase-natural-gas-dollar-cost-averaging/" className="btn add-pop">
		                  <span>Learn more</span>
		                  <img src={nextSVG} alt=""/>
		              </a>
		          </div>
		       
		          <div className="read">
       		       <a target="_blank" href="https://blogs.constellation.com/energy-management/asking-right-questions-find-right-strategy-business/">   
			              <div className="add-slide-up" style={{backgroundImage: article3}}></div>
		              </a>
		              <div className="add-slide-up">Asking the Right Questions to Find the Right Strategy For Your Business</div>
		              <a target="_blank" href="https://blogs.constellation.com/energy-management/asking-right-questions-find-right-strategy-business/" className="btn add-pop">
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
