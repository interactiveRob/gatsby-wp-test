import React from 'react';
import circleDownSVG from "../layouts/img/circle-down.svg"


class Quiz extends React.Component {
  render() {	
	 const failSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#888888;stroke-width:3;stroke-miterlimit:10;}
</style>
<circle class="st0" cx="75" cy="75" r="70.8"/>
<line class="st0" x1="95" y1="55.1" x2="55" y2="95.1"/>
<line class="st0" x1="55" y1="55" x2="95.1" y2="95.1"/>
</svg>`;

	const passSVG = `
	<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><title>pass</title><circle cx="75" cy="75" r="72.09" fill="#fff" stroke="#888" stroke-miterlimit="10" stroke-width="3"/><polyline points="48.62 70.21 73.17 95.22 105.85 54.78" fill="#fff" stroke="#888" stroke-miterlimit="10" stroke-width="3"/></svg>
	`

	 const quizID = this.props.quizID;
	 return(		 
		<div className="test-container">
		    <div className="test-title add-slide-up">
		        <div className="question-mark"></div>
		        <div>
		            Test Your<br/>
		            Knowledge
		        </div>
		    </div>
			 {quizID == "quiz1" &&
				<div className="test">
			        <div className="question add-slide-up">
			            True or false: When power prices seem reasonably low, you should lock in a fixed-price contract.
			        </div>
			        <div className="answer">
			            <button className="wrong add-pop">TRUE</button> <button className="right add-pop">FALSE</button>
			        </div>
			        <div className="result pass">
			            <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: passSVG}}/>
			            <div className="explanation">
			                <b>Correct. </b>While a fixed-price contract can lock in a low price for the short term, you also have to consider the long term. Prices may be higher when it’s time to renew, forcing you to pay more. Or, prices may continue to drop after you lock in, meaning you forfeited a lower price.
			                <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>
			            </div>
			        </div>
			        <div className="result fail">
                     <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: failSVG}}/>
			            <div className="explanation">
			                <b>Incorrect. </b>While a fixed-price contract can lock in a low price for the short term, you also have to consider the long term. Prices may be higher when it’s time to renew, forcing you to pay more. Or, prices may continue to drop after you lock in, meaning you forfeited a lower price.
								 <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>			                
			            </div>
			        </div>
			   </div>				    
			 }  
		    {this.props.quizID == "quiz2" &&
             <div className="test">
                 <div className="question add-slide-up">
                     Which strategy resulted in the most significant price volatility?
                 </div>
                 <div className="answer">
                     <button className="right  add-pop">Strategies with 100% fixed or 100% index</button> <button className="wrong  add-pop">Strategies with a percentage fixed and a percentage index</button>
                 </div>
                 <div className="result pass">
                     <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: passSVG}}/>
                     <div className="explanation">
                         <b>Correct. </b>The 100% All Months Fixed and 100% Index strategies hit the highs and lows most years. This resulted in the most significant price volatility.
                         <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>
                     </div>
                 </div>
                 <div className="result fail">
                     <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: failSVG}}/>
                     <div className="explanation">
                         <b>Incorrect. </b>The 100% All Months Fixed and 100% Index strategies hit the highs and lows most years. This resulted in the most significant price volatility. Flexible strategies with a percentage fixed and percentage index achieve a more balanced result.
                      	<div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>   
                     </div>
                     
                 </div>
             </div>			    
		    }
		    {this.props.quizID == "quiz3" &&
             <div className="test">
                 <div className="question add-slide-up">
                     What can your business do to protect itself from risk and market volatility?
                 </div>
                 <div className="answer">
                     <button className="wrong add-pop">Lock in prices now</button> <button className="wrong-2 add-pop">Wait until prices drop</button> <button className="right wron add-pop">Diversify your purchasing strategy</button>
                 </div>
                 <div className="result pass">
                     <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: passSVG}}/>
                     <div className="explanation">
                         <b>Correct. </b>Businesses that manage their power purchasing based on time, price and execution can minimize risk and achieve budget&nbsp;certainty.
                         <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>
                     </div>
                 </div>
                 <div className="result fail">
                     <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: failSVG}}/>
                     <div className="explanation">
                         <b>Incorrect. </b>Locking in your price now may protect you for a contract period — but the price may be much higher when it comes time to renew, exposing you to price volatility.
                         <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>
                     </div>
                 </div>
                 <div className="result fail-2">
                    <div className=" icon pass-icon"  dangerouslySetInnerHTML={{__html: failSVG}}/>
                     <div className="explanation">
                         <b>Incorrect. </b>If your business waits, prices may go down — but there’s also a chance they may go up, exposing you to risk.
                         <div className="back-btn">
					            <button className="back-to-quiz"><img src={circleDownSVG} alt=""/> <span>Back to choices</span></button>
				            </div>
                     </div>
                 </div>                 
             </div>			    
		    }		    		    
		    
		</div>	 		 
	 )
  }
}

export default Quiz

