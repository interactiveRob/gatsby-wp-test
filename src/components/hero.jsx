import React from 'react';
import Motif from "../img/header-glow.png";
import Motif2x from "../img/header-glow2x.png";

let motifSrcSet = `${Motif} 1x, ${Motif2x} 2x`; 

class Hero extends React.Component {
  render() {
	 const data = this.props;
	 return(		 
	    <header>
	        <div className="container">
	            <div className="slide-right">In an uncertain market,</div>
	            <div className="slide-right">learn where to find a</div>
	            <div className="slide-right-small">stable</div>
	            <div className="slide-right">power strategy.</div>
	        </div>
	        <img src={Motif} srcSet={motifSrcSet} alt=""/>
	    </header>		 
	 )
  }
}

export default Hero