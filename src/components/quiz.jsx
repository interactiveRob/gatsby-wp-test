import React from 'react';

class Quiz extends React.Component {
  render() {	 
	 return(		 
		<div className="test-container">
		    <div className="test-title add-slide-up">
		        <div className="question-mark"></div>
		        <div>
		            Test Your<br/>
		            Knowledge
		        </div>
		    </div>
		    <div className="test">
		        <div className="question add-slide-up">
		            True or false: When power prices seem reasonably low, you should lock in a fixed-price contract.
		        </div>
		        <div className="answer">
		            <button className="right add-pop">TRUE</button> <button className="wrong add-pop">FALSE</button>
		        </div>
		        <div className="result pass">
		            <div className="icon"></div>
		            <div className="explanation">
		                <b>Correct. </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore explicabo pariatur earum vero, cumque perferendis sit aperiam nobis eligendi! Nulla quisquam accusamus sequi ullam nostrum sint nam deleniti expedita.
		            </div>
		        </div>
		        <div className="result fail">
		            <div className="icon"></div>
		            <div className="explanation">
		                <b>Inorrect. </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus labore explicabo pariatur earum vero, cumque perferendis sit aperiam nobis eligendi! Nulla quisquam accusamus sequi ullam nostrum sint nam deleniti expedita.
		            </div>
		        </div>
		    </div>
		</div>	 		 
	 )
  }
}

export default Quiz

