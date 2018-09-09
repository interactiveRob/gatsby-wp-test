import React from 'react';

class ContactForm extends React.Component {
	 constructor(props){
	    super(props);
	    this.state = { textValue: "" };
	  }
	changeText(event){
		  this.setState({
			
		  })
	}			
  render() {	 
	 return(		 
       <div className="popup-holder">
           <div className="container">
				
<form acceptCharset="UTF-8" method="post" action="https://events.constellation.com/l/484581/2018-09-08/7tsvj" className="form" id="pardot-form">
	<div className="form-field  first_name pd-text required    ">
		<label className="field-label" htmlFor="484581_33987pi_484581_33987">First Name</label>
		<input value={this.state.firstNameValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33987pi_484581_33987" id="484581_33987pi_484581_33987"  className="text" size="30" maxLength="40" />
		</div>
		<div className="form-field  last_name pd-text required    ">
			<label className="field-label" htmlFor="484581_33989pi_484581_33989">Last Name</label>
			<input value={this.state.lastNameValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33989pi_484581_33989" id="484581_33989pi_484581_33989"  className="text" size="30" maxLength="80" />
			</div>
			<div className="form-field  company pd-text required    ">
				<label className="field-label" htmlFor="484581_33991pi_484581_33991">Company</label>
				<input value={this.state.companyValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33991pi_484581_33991" id="484581_33991pi_484581_33991"  className="text" size="30" maxLength="255" />
				</div>
				<div className="form-field  job_title pd-text required    ">
					<label className="field-label" htmlFor="484581_33993pi_484581_33993">Job Title</label>
					<input value={this.state.jobTitleValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33993pi_484581_33993" id="484581_33993pi_484581_33993"  className="text" size="30" maxLength="128" />
					</div>
					<div className="form-field  email pd-text required    ">
						<label className="field-label" htmlFor="484581_33995pi_484581_33995">Email</label>
						<input value={this.state.emailValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33995pi_484581_33995" id="484581_33995pi_484581_33995"  className="text" size="30" maxLength="255"/>
						</div>
						<div className="form-field  phone pd-text     ">
							<label className="field-label" htmlFor="484581_33997pi_484581_33997">Phone Number</label>
							<input value={this.state.phoneValue} onChange = {this.changeText.bind(this)} type="text" name="484581_33997pi_484581_33997" id="484581_33997pi_484581_33997"  className="text" size="30" maxLength="40" />
							</div>
	
						<div className="submit blue">
							<input value={this.state.textValue} onChange = {this.changeText.bind(this)} type="submit" id="form-submit" accessKey="s" 	/>
							</div>
						</form>		   		

               <button className="bg-oj close-chart">Close</button>
           </div>
       </div>	 		 
	 )
  }
}

export default ContactForm
