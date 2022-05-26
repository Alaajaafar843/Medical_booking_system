var realFile = document.getElementById('realFile');
var uploadBtn = document.getElementById('uploadBtn');
var uploadDisplay = document.getElementById('uploadDisplay');
var registerBtn = document.getElementById('registerBtn');
var firstName = document.getElementById('firstName');
var errorfname = document.getElementById('errorfname');
var errorlname = document.getElementById('errorlname');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var erroremail = document.getElementById('erroremail');


function buttonFake () { 
    realFile.click()
}
uploadBtn.addEventListener('click', buttonFake)

realFile.addEventListener('change', function(){
    if (realFile.value){ 
        uploadDisplay.innerHTML = realFile.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
          )[1];
    } else { 
        uploadDisplay.innerHTML = "No File Selected"
    }
});
    function validation (e) { 
        if (firstName.value === ""){ 
            firstName.classList.add('error')
            errorfname.innerHTML = "Please Enter Your First Name"
            e.preventDefault()
        }
        else { 
            firstName.classList.add('success');
            errorfname.innerHTML = "";
        }
        if (lastName.value === ""){ 
            lastName.classList.add('error')
            errorlname.innerHTML = "Please Enter Your Last Name"
            e.preventDefault()
        }
        else { 
            lastName.classList.add('success');
            errorlname.innerHTML = "";
        }
        if (email.value === ""){ 
            email.classList.add('error')
            erroremail.innerHTML = "Please Enter a Valid Email"
            e.preventDefault()
        }
        else { 
            email.classList.add('success');
            erroremail.innerHTML = "";
        }
        
    }
    registerBtn.addEventListener('click', validation)