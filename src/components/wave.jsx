import React from 'react';
import deepSVG from "../layouts/img/deep.svg";

class Hero extends React.Component {
  render() {
	 
	 const waveColor = this.props.color;
	 
	 return(		 
		<section id="blue2" className={"wave " + waveColor}>
		  <div className="container">
		      <h2 className="add-slide-up">{this.props.headline}</h2>
		      <div className="flex">
		          <div>
		              <p className="add-slide-up">
		                  {this.props.descr}
		              </p>
		              {waveColor == "blue" && 
			              <button className="add-pop">
			                  <span>Dig deeper</span>
			                  <img src={deepSVG}/>
			              </button>			              
		              }
		          </div>
		          <div>
			          
		          </div>
		      </div>
		  </div>
		</section>	 
	 )
  }
}

export default Hero
