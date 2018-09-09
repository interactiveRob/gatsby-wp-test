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

document.querySelector('#form-submit').addEventListener('click',function(e){
	e.preventDefault();
	form_submit();
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