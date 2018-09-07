import React from 'react';
import blue2SVG from "../layouts/img/blue2.svg";
import orange3SVG from "../layouts/img/orange3.svg";
import playSVG from "../layouts/img/play.svg";
import circleDownSVG from "../layouts/img/circle-down.svg"

class Article extends React.Component {
  render() {	 
	 let iconSrc = this.props.icon;
	 return(		 
	 	<div className="article">
          <div className="images add-slide-up">
	          {iconSrc == "blue2SVG" &&
			        <img src={blue2SVG} alt="" />  
	          }
	          {iconSrc == "orange3SVG" &&
			        <img src={orange3SVG} alt="" />  
	          }              	                        
          </div>
          
          <div className="add-slide-up" dangerouslySetInnerHTML = {{__html : this.props.descr}} />
          {this.props.button == "watchNow" &&
	          <button className="add-pop">
	              <span>Watch now</span>
	              <img src={playSVG} alt=""/>
	          </button>	          
          }	
	       {this.props.button == "downloadNow" &&
	          <button className="add-pop">
	              <span>Download now</span>
	              <img src={circleDownSVG} alt=""/>
	          </button>	          
          }	

      </div>	 
	 )
  }
}

export default Article