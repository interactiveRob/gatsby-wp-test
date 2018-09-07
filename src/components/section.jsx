import React from 'react';

class Section extends React.Component {
  render() {
	  return(
  	   <section id={this.props.id} className={this.props.color}>
	     	<div className="container">
	        	   {this.props.children}
	      </div>
		</section>       		  
	  )
	}
}


export default Section
