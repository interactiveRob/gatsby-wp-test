import React from 'react';
import fig1 from "../layouts/img/fig1.jpg";

class Popups extends React.Component {
  render() {	 
	 return(		 
	 	       <div className="popup-holder fig-1">
               <div className="container">
                  <img className="fig1" src={fig1} srcSet={fig1} alt=""/>
       				<div className="close-btn">
	            	   <button className="bg-oj close-chart">Close</button>
						</div>  
               </div>		
           </div> 
	 )
  }
}

export default Popups
