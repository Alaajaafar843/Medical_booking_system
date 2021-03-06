const emailInput = document.querySelector('#email');
const form = document.querySelector('#create-account-form');
const passwordInput = document.querySelector('#password');
let check1=false;
let check2=false;
let user;

    
function CLICKME(){
    validateForm()
    if(isFormValid()==true){
        if(user=="Doctor"){
            x = confirm("Go to Home Doctor Page")
            if(x==true){
             location.href = "../dr.home/index.html"
            }
        }
       else if(user=="Patient"){
        y= confirm("Go to Home Patient Page");
        if(y==true){
         location.href = "../Home.html"
        }
     }
     else{
        alert("Please Choose Account Type");
    }
    
    }
}


function isFormValid(){
    const inputContainers = form.querySelectorAll('.form__div');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}


function validateForm() {
  
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
        check1=true;
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    //PASSWORD

    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(passwordInput);
        check2=true;
    }

    
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}

document.getElementById("open-popup-btn-1").addEventListener("click",function(){
    document.getElementById("popup-1").classList.add("active");
    document.getElementById("l_form").classList.add("hide");
    document.getElementById("l_footer").classList.add("hide");
    document.getElementById("l_hr").classList.add("hide");
  
  });

  document.getElementById("x").addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
    document.getElementById("l_form").classList.remove("hide");
    document.getElementById("l_footer").classList.remove("hide");
    document.getElementById("l_hr").classList.remove("hide");
  });


  document.getElementById("doctor").addEventListener("click",function(){
      user="Doctor";
  document.getElementById("hello").innerHTML='<br>'+"Hello Doctor!";
  });

  document.getElementById("patient").addEventListener("click",function(){
      user="Patient"
    document.getElementById("hello").innerHTML='<br>'+"Hello Patient!";
    });

    document.getElementById("sub").addEventListener("click",function(){
     // if( isFormValid()==false){
//alert("Done");
  //    
  if(user=="Doctor" || user=="Patient"){
      return;
  }
 
      
      });

  /*
//validation for forget password
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  */