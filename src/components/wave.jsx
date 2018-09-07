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
						
						     <button className="add-pop">
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
								      <div className="data"></div>
								  </div>
								  <div className="accordion">
								      <div className="title">Percentage of load that&apos;s managed</div>
								      <div className="data"></div>
								  </div>
								  <h3>Time Navigation</h3>
								  <div className="accordion">
								      <div className="title">Time of the final purchase</div>
								      <div className="data"></div>
								  </div>
								  <div className="accordion">
								      <div className="title">Frequency of purchase</div>
								      <div className="data"></div>
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
			                        <div className="data"></div>
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
			                        <div className="data"></div>
			                    </div>
			                    <div className="accordion">
			                        <div className="title">Automation</div>
			                        <div className="data"></div>
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
								      <div className="data"></div>
								  </div>
								  <div className="accordion">
								      <div className="title">Time</div>
								      <div className="data">
								          You can select the timing and frequency of your purchases, which can help spread out risk over time.
								      </div>
								  </div>
								  <div className="accordion">
								      <div className="title">Execution</div>
								      <div className="data"></div>
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
