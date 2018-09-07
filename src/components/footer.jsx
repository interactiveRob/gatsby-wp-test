import React from 'react';

class Footer extends React.Component {
  render() {	 
	 return(		 
		 <footer>
		     <div className="container">
		         <ul>
		             <li><a href="#">Constallation.com</a></li>
		             <li><a href="#">Privacy Policy</a></li>
		             <li><a href="#">Terms & Conditions</a></li>
		         </ul>
		         <div className="small">
		             Constellation is the endorsed energy supplier of this association, which receives compensation for its promotional and marketing efforts from Constellation.<br/>
		             © 2018 Constellation Energy Resources, LLC. The offerings described herein are those of Constellation NewEnergy-Gas Divison, LLC or Constellation NewEnergy Inc. affiliates of each other and utimate subsidiaries of Exelon Corporation. Brand names and product names are trademarks or service marks of their respective holders. All rights reserved. Errors and omissions excepted.
		         </div>
		     </div>
		 </footer>	 		 
	 )
  }
}

export default Footer