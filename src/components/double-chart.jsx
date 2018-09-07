import React from 'react';
import orange1SVG from "../layouts/img/orange1.svg";
import orange2SVG from "../layouts/img/orange2.svg";
import searchSVG from "../layouts/img/search.svg";
import fig2a from "../layouts/img/fig2a.png";
import fig2a2x from "../layouts/img/fig2a2x.png";

class DoubleChart extends React.Component {
  render() {	 
	 return(		 
       <div className="article chart-article">
           <div className="images add-slide-up">
	           {this.props.id == "chart1" &&
               <img src={orange1SVG} alt=""/>		           
	           }
	           {this.props.id == "chart2" &&
               <img src={orange2SVG} alt=""/>		           
	           }
           </div>
           <div className="add-slide-up bold">
               {this.props.descr}
           </div>
           <button className="view-chart  add-pop">
               <span>View chart</span>
               <img src={searchSVG} alt=""/>
           </button>
           <div className="chart">
               <div className="container">
                   <img src={fig2a} srcSet={fig2a2x} alt=""/>
                   <div className="data">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ipsam impedit. Laudantium harum nihil animi nam ipsum. In commodi soluta magnam quam, expedita omnis, porro modi vero, nulla id velit!
                   </div>
                   <button className="close-chart">Close</button>
               </div>
           </div>
       </div>	 	
		 )
	}
}

export default DoubleChart
