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
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
var radioMale = document.getElementById('radioMale');
var radioFemale = document.getElementById('radioFemale');
var radioOther = document.getElementById('radioOther');
var errorgender = document.getElementById('errorgender');
var otherInput = document.getElementById('otherInput');
var DOB = document.getElementById('DOB');
var speciality = document.getElementById('speciality');
var errorSpec = document.getElementById('errorSpec');
var nationality = document.getElementById('nationality');
var errornatio = document.getElementById('errornatio');
var state = document.getElementById('state');
var errorstate = document.getElementById('errorstate');
var city = document.getElementById('city');
var errorCity = document.getElementById('errorCity');
var erroruni = document.getElementById('erroruni');
var uni = document.getElementById('uni');
var major = document.getElementById('major');
var errorM = document.getElementById('errorM');
var phone = document.getElementById('phone');
var errorphone = document.getElementById('errorphone');
var terms = document.getElementById('terms');
var tandc = document.getElementById('tandc');


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
        if (email.value.match(pattern)){
            email.classList.add('success')
            erroremail.innerHTML = ""
        }
        else { 
            email.classList.add('error');
            erroremail.innerHTML = "Please Enter a Valid Email!";
            e.preventDefault()
        }
        
        if ( ( radioMale.checked == false ) && ( radioFemale.checked == false ) && (radioOther.checked == false))
        {
            errorgender.innerHTML = "Please Select Your Gender"
            e.preventDefault()
        return false;
        }
        else { 
            errorgender.innerHTML = ""
        }
        if (speciality.value ==""){
            errorSpec.innerHTML = "Select a Value!"
            e.preventDefault()
            return false
        }
        if (nationality.value ==""){
            errornatio.innerHTML = "Select a Value!"
            e.preventDefault()
            return false
        }
        if (state.value ==""){
            errorstate.innerHTML = "Select a State!"
            e.preventDefault()
            return false
        }
        else { 
            errorstate.innerHTML = ""
        }
        if (city.value ==""){
            errorCity.innerHTML = "Select a City!"
            e.preventDefault()
            return false
        }
        else { 
            errorCity.innerHTML = ""
        }
        if (uni.value === ""){
            erroruni.innerHTML = "University Can't be Empty!"
            e.preventDefault()
        }
        else{
            erroruni.innerHTML = "";
        }
        if (major.value === ""){
            errorM.innerHTML = "Major Can't be Empty!"
            e.preventDefault()
        }
        else{
            errorM.innerHTML = "";
        }
        if (phone.value === ""){
        errorphone.innerHTML = "Please Enter a Valid Phone Number!"
            e.preventDefault()
        }
        else{
            errorphone.innerHTML = "";
        }
        if (terms.checked == false){
            e.preventDefault()
            alert("To Procceed You Need To Agree to Our Terms and Services")
        }
        
    }
    registerBtn.addEventListener('click', validation)

      
{ 
        function other() { 
            if (radioOther.checked == true){ 
            otherInput.classList.remove('otherInput');
        }
         else { 
             otherInput.classList.add('otherInput');
         }
        }
           
}
  {

    var displayDegree = document.getElementById('displayDegree');
    var degreebtn = document.getElementById('degreebtn');
    var bachelor_master_upload = document.getElementById('bachelor_master_upload')


    function buttonFakeDegree () { 
        bachelor_master_upload.click()
    }
    degreebtn.addEventListener('click', buttonFakeDegree)
    
    bachelor_master_upload.addEventListener('change', function(){
        if (bachelor_master_upload.value){ 
            displayDegree.innerHTML = bachelor_master_upload.value.match(
                /[\/\\]([\w\d\s\.\-\(\)]+)$/
              )[1];
        } else { 
            displayDegree.innerHTML = "No File Selected"
        }
    });

  }
  {

    var cvbtn = document.getElementById('cvbtn');
    var cv_resume_upload = document.getElementById('cv_resume_upload');
    var displayCv = document.getElementById('displayCv')


    function buttonFakeCv () { 
        cv_resume_upload.click()
    }
    cvbtn.addEventListener('click', buttonFakeCv)
    
    cv_resume_upload.addEventListener('change', function(){
        if (cv_resume_upload.value){ 
            displayCv.innerHTML = cv_resume_upload.value.match(
                /[\/\\]([\w\d\s\.\-\(\)]+)$/
              )[1];
        } else { 
            displayCv.innerHTML = "No File Selected"
        }
    });

  }