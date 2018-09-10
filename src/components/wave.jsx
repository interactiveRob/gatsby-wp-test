import React from 'react';
import deepSVG from "../layouts/img/deep.svg";

class Hero extends React.Component {
  render() {
	 
	 const waveColor = this.props.color;
	 
	 return(		 
		<section id={this.props.id} className={"wave " + waveColor}>
		  <div className="container">
		      <h2 className="add-slide-up">{this.props.headline}</h2>
					  {waveColor == "blue" && 
				      <div className="flex">	
							<div>						  
						     <p className="add-slide-up">
						         {this.props.descr}
						     </p>
						
						     <button className="add-pop" id="open-fig-1">
						         <span>Dig deeper</span>
						         <img src={deepSVG}/>
						     </button>			              
							</div>
							<div></div>
						</div>
						
		            }
						{waveColor == "orange" && 
					      <div className="flex">	
								<div className="big-white add-slide-up">
									{this.props.descr}					 		
								</div>
								<div className="accordion-container add-slide-up">
								  <h3>Price Navigation</h3>
								  <div  className="accordion">
								      <div className="title">Timeframe of managed load</div>
								      <div className="data">This represents the timeframe that the customer’s load was managed — for example, for all months, just winter or summer months and during the on-peak period.</div>
								  </div>
								  <div className="accordion">
								      <div className="title">Percentage of load that&apos;s managed</div>
								      <div className="data">This represents the percentage of load that’s fixed, compared to the percentage that’s actively managed.</div>
								  </div>
								  <h3>Time Navigation</h3>
								  <div className="accordion">
								      <div className="title">Time of the final purchase</div>
								      <div className="data">This represents the time when the purchase was made — for example, two months prior to the first delivery month or 12 months prior to the first delivery month.</div>
								  </div>
								  <div className="accordion">
								      <div className="title">Frequency of purchase</div>
								      <div className="data">This represents the increments or “layering” in which the load was purchased — for example, purchased all at once, in 12 equal purchases, or in three equal purchases.</div>
								  </div>
								</div> 
							</div>	 
						}
						{waveColor == "green" && 
					      <div className="flex">	
								<div className="big-white add-slide-up">
									{this.props.descr}					 		
								</div>
			                <div className="accordion-container add-slide-up">
			                    <div  className="accordion">
			                        <div className="title">Risk tolerance</div>
			                        <div className="data">For more accurate budgeting and planning, businesses often prefer to minimize risk. However, there are ways to take advantage of market variations while reducing risk. Your level of risk tolerance can influence which solution is best for your business.</div>
			                    </div>
			                    <div className="accordion">
			                        <div className="title">Budget certainty</div>
			                        <div className="data">
			                            If you don't know how much you're going to pay for power in the next six, 12 or 24 months, it can become challenging to manage your business budget.<br/>
			                            Many Businesses find it valuable to use a strategy that maximizes budget predictability.
			                        </div>
			                    </div>
			                    <div className="accordion">
			                        <div className="title">Flexibility</div>
			                        <div className="data">Do you want a power purchasing strategy that gives you flexibility as the market changes? Or do you want to remain in the same strategy, no matter what?</div>
			                    </div>
			                    <div className="accordion">
			                        <div className="title">Automation</div>
			                        <div className="data">Rather than worrying about whether you’re making the right purchasing decision at the right time, you can automate some or all of your power purchasing. This allows you to use an algorithmic approach make purchases, which can help you achieve a more consistent price over time. </div>
			                    </div>
			                </div>
							</div>								
						}
						{waveColor == "grey" && 
					      <div className="flex">								
								<div className="big-white add-slide-up">
									{this.props.descr}					 		
								</div>
								<div className="accordion-container add-slide-up">
								  <div  className="accordion">
								      <div className="title">Price</div>
								      <div className="data">By selecting your solution and the percentage of your load that’s fixed versus index, you can mitigate the impact of price fluctuations</div>
								  </div>
								  <div className="accordion">
								      <div className="title">Time</div>
								      <div className="data">
								          You can select the timing and frequency of your purchases, which can help spread out risk over time.
								      </div>
								  </div>
								  <div className="accordion">
								      <div className="title">Execution</div>
								      <div className="data">Choose to make purchase decisions yourself, or leverage Constellation’s proprietary algorithms and insight to automatically make purchase decisions for you.</div>
								  </div>
								</div>							
							</div>
						}
							          
		  </div>
		</section>	 
	 )
  }
}

export default Hero
