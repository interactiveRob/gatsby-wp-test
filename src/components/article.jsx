import React from 'react';
import blue2SVG from "../layouts/img/blue2.svg";
import orange3SVG from "../layouts/img/orange3.svg";
import playSVG from "../layouts/img/play.svg";
import circleDownSVG from "../layouts/img/circle-down.svg"
import pdfDownload from "../layouts/img/CON_9207_Energy_Purchasing_Strategies_White_Paper Sept2018.pdf"

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
	          <a href="https://energy.constellation.com/market-intel_webinar-resources-july2018" className="add-pop btn">
	              <span>Watch now</span>
	              <img src={playSVG} alt=""/>
	          </a>	          
          }	
	       {this.props.button == "downloadNow" &&
	          <a href={pdfDownload} target="_blank" className="add-pop btn">
	              <span>Download now</span>
	              <img src={circleDownSVG} alt=""/>
	          </a>	          
          }	

      </div>	 
	 )
  }
}

export default Article
