import React from 'react';

class Quiz extends React.Component {
  render() {	
	 const quizID = this.props.quizID;
	 return(		 
		<div className="test-container">
		    <div className="test-title add-slide-up">
		        <div className="question-mark"></div>
		        <div>
		            Test Your<br/>
		            Knowledge
		        </div>
		    </div>
			 {quizID == "quiz1" &&
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
			 }  
		    {this.props.quizID == "quiz2" &&
             <div className="test">
                 <div className="question add-slide-up">
                     Which strategy resulted in the most significant price volatility?
                 </div>
                 <div className="answer">
                     <button className="right  add-pop">Strategies with 100% fixed or 100% index</button> <button className="wrong  add-pop">Strategies with a percentage fixed and a percentage index</button>
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
		    }
		    {this.props.quizID == "quiz3" &&
             <div className="test">
                 <div className="question add-slide-up">
                     What can your business do to protect itself from risk and market volatility?
                 </div>
                 <div className="answer">
                     <button className="right add-pop">Lock in prices now</button> <button className="wrong add-pop">Wait until prices drop</button> <button className="wrong add-pop">Diversify your purchasing strategy</button>
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
		    }		    		    
		    
		</div>	 		 
	 )
  }
}

export default Quiz

