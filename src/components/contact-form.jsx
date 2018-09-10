import React from 'react';

class ContactForm extends React.Component {
	 constructor(props){
	    super(props);
	    this.state = { 
		    firstNameValue: "",
		    lastNameValue: "",
		    companyValue: "",
		    jobTitleValue: "",
		    emailValue: "",
		    phoneValue: ""
		    
		 };
	  }
	changeText(event){
		  this.setState({
		  	[event.target.id]: event.target.value
		  })
	}			
  render() {	 
	 return(		 
       <div className="popup-holder">
       		<div className="container">
          		<h2 className="form-header">Let’s Talk</h2> 
		  		<div className="thank-you-msg text hide-me" dangerouslySetInnerHTML = {{__html : '<strong>Thank you from Constellation!</strong> <br/> We appreciate your interest in finding a better strategy for purchasing power. Someone from Constellation will be in touch with you soon.'}} />		  			
<form acceptCharset="UTF-8" method="post" action="https://events.constellation.com/l/484581/2018-09-08/7tsvj" className="form show-me" id="pardot-form">
	<div className="form-field  first_name pd-text required    ">
		<label className="field-label" htmlFor="484581_33987pi_484581_33987">First Name*</label>
		<input value={this.state.firstNameValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33987pi_484581_33987" id="firstNameValue"  className="text" size="30" maxLength="40" />
		</div>
		<div className="form-field  last_name pd-text required    ">
			<label className="field-label" htmlFor="484581_33989pi_484581_33989">Last Name*</label>
			<input value={this.state.lastNameValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33989pi_484581_33989" id="lastNameValue"  className="text" size="30" maxLength="80" />
			</div>
			<div className="form-field  company pd-text required    ">
				<label className="field-label" htmlFor="484581_33991pi_484581_33991">Company*</label>
				<input value={this.state.companyValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33991pi_484581_33991" id="companyValue"  className="text" size="30" maxLength="255" />
				</div>
				<div className="form-field  job_title pd-text required    ">
					<label className="field-label" htmlFor="484581_33993pi_484581_33993">Job Title*</label>
					<input value={this.state.jobTitleValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33993pi_484581_33993" id="jobTitleValue"  className="text" size="30" maxLength="128" />
					</div>
					<div className="form-field  email pd-text required    ">
						<label className="field-label" htmlFor="484581_33995pi_484581_33995">Email*</label>
						<input value={this.state.emailValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33995pi_484581_33995" id="emailValue"   className="text" size="30" maxLength="255"/>
						</div>
						<div className="form-field  phone pd-text     ">
							<label className="field-label" htmlFor="484581_33997pi_484581_33997">Phone Number</label>
							<input value={this.state.phoneValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33997pi_484581_33997" id="phoneValue"  className="text" size="30" maxLength="40" />
							</div>
	
						<div className="submit blue">
							<input value="Submit" onChange = {this.changeText.bind(this)} type="submit" id="form-submit" accessKey="s" 	/>
							</div>
						</form>		   		
				<div className="close-btn">
	               <button className="bg-oj close-chart">Close</button>
	            </div>   
           </div>
       </div>	 		 
	 )
  }
}

export default ContactForm
