// accordion
document.querySelectorAll('.accordion-container').forEach(ac =>{
    ac.querySelectorAll('.accordion').forEach(accordion =>{
        accordion.addEventListener('click',function(){
            //check if element is open
            if(accordion.classList.contains('open')){
                //remove the class
                accordion.classList.remove('open');
            }
            else{
                //close all accordions in that contianer
                ac.querySelectorAll('.accordion').forEach(oneAcc => oneAcc.classList.remove('open'));
                //open this specific one
                accordion.classList.add('open');
            }
        })
    })
})

//accordion data propagation
document.querySelectorAll('.accordion .data').forEach(data =>{
    data.addEventListener('click',function(e){
        e.stopPropagation();
    })
})

//test
document.querySelectorAll('.test-container').forEach(test=>{
    test.querySelector('.right').addEventListener('click',function(){
        test.querySelector('.answer').classList.add('clicked');
        setTimeout(() => {
            test.querySelector('.test').classList.add('yes');            
        }, 800);
    });
    test.querySelectorAll('.wrong').forEach(wrong=>{
        wrong.addEventListener('click', function(){
            test.querySelector('.answer').classList.add('clicked');
            setTimeout(() => {
                test.querySelector('.test').classList.add('no');            
            }, 800);
        })
    })
})

//chart

document.querySelectorAll('.chart-article').forEach(chartContainer =>{
    chartContainer.querySelector('.view-chart').addEventListener('click',function(){
        chartContainer.querySelector('.chart').classList.add('open');
        document.querySelector('body').classList.add('no-scroll');
    });
    chartContainer.querySelector('.close-chart').addEventListener('click',function(){
        chartContainer.querySelector('.chart').classList.remove('open');
        document.querySelector('body').classList.remove('no-scroll');
    });
})

//contact us popup
const popup = document.querySelector('.popup-holder');

document.querySelectorAll('.contact-cta').forEach(contactCTA =>{
    contactCTA.addEventListener('click',function(){
        popup.classList.add('open');
        document.querySelector('body').classList.add('no-scroll');
    });
    popup.querySelector('.close-chart').addEventListener('click',function(){
        popup.classList.remove('open');
        document.querySelector('body').classList.remove('no-scroll');
    });    
})

//form
function form_submit(){
	var formData = new FormData( document.getElementById("pardot-form") );
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "https://events.constellation.com/l/484581/2018-09-08/7tsvj");
	xmlhttp.send(formData);
	console.log('request sent');
}

function validate_form(){
	//error messages
	let req_msg = '<span class="error"> --This field is required.</span>'
	let email_msg = '<span class="error"> --Invalid email address.</span>'

	let valid = false;
	if(!document.querySelector('.error')){
		valid = true;
	}
	
	document.querySelectorAll('#pardot-form .form-field').forEach(formInput =>{
		let this_input = formInput.querySelector('input');
		let this_id = this_input.getAttribute('id');
		let this_label = formInput.querySelector('.field-label');				
		
		let test_inputs = function(e){
			let this_value = this_input.getAttribute('value');

			//refresh errors
			let this_error = formInput.querySelector('.error');
			if (this_error){
				this_error.remove();
			}
			
			if(this_value.length == 0 && formInput.classList.contains('required')){
				this_label.insertAdjacentHTML('beforeend', req_msg);
			}
			else if(this_input.getAttribute('id') == 'emailValue') {
				if(this_value.indexOf('@') == -1 || this_value.indexOf('.') == -1 ){
					this_label.insertAdjacentHTML('beforeend', email_msg);					
				}
			}
			else{
				//nothing
				//console.log(this_id + ' ' + this_input.getAttribute('value').length);
				//console.log( this_id + ' validation passed');
			}
		}
		
		this_input.addEventListener('change', test_inputs);
		this_input.addEventListener('blur', test_inputs);
	});
	
	//if there are no error messages, allow the form to be submitted
	return valid; 
}

validate_form();		

function thank_you_msg(){
	let contact_form = document.querySelector('#pardot-form');
	let form_header = document.querySelector('.form-header'); 
	let thank_you_msg = document.querySelector('.thank-you-msg'); 
	
	contact_form.classList.remove('show-me');
	contact_form.classList.add('hide-me');
	form_header.classList.add('hide-me');
	
	thank_you_msg.classList.remove('hide-me');
	thank_you_msg.classList.add('show-me');
}

document.querySelector('#form-submit').addEventListener('click', function(e){
	e.preventDefault();

	//triggers a 'change' event on all form inputs so they validate when [Submit] is clicked

	document.querySelectorAll('#pardot-form input').forEach(input =>{
		if ("createEvent" in document) {
		    var evt = document.createEvent("HTMLEvents");
		    evt.initEvent("change", false, true);
		    input.dispatchEvent(evt);
		}
		else{
		    input.fireEvent("onchange");		
		}
	});
	
	if(validate_form()){
		console.log('submit validation passed');
		//form_submit();		
		thank_you_msg();
	} else{
		console.log('submit validation falied');
	}
		
	
});


// animations

window.addEventListener('scroll', slideUp);
slideUp();

function slideUp(){
    document.querySelectorAll('.add-slide-up').forEach(slide=>{
        var box = slide.getBoundingClientRect();
        if((document.documentElement.scrollTop+document.documentElement.clientHeight > (box.top + document.documentElement.scrollTop))){
            slide.classList.add('slide-up');
        }
    });
    document.querySelectorAll('.add-pop').forEach(slide=>{
        var box = slide.getBoundingClientRect();
        if((document.documentElement.scrollTop+document.documentElement.clientHeight > (box.top + document.documentElement.scrollTop))){
            slide.classList.add('pop');
        }
    });
}