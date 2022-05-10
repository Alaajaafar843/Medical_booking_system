

 
let fn = document.getElementById("fullname");
let error_Fn =document.getElementById("error_fullName");

fn.onblur =function (){
    if (fn.value == "" ){
        error_Fn.innerHTML ="can't be empty"; 
        error_Fn.style.color="red"
        fn.className ="border-red"
        
    }
   
}

fn.onkeyup = function (){
    if (fn.value.length < 7){
        error_Fn.innerHTML = "Please enter your Full Name"
        fn.style.border ="2px solid red ";
        error_Fn.style.color="red";
        fn.className ="border-red"
    }
    else{
        fn.style.borderColor ="green " ;
        error_Fn.innerHTML="success";
        error_Fn.style.color="green";
        fn.className ="border-green"
    }
}

let em =  document.getElementById("email");
let error_Em = document.getElementById("error_email");
const regexo = /^([\.\_a-zA-Z0-9]+)@((gmail+)||(hotmail+)||(icloud+))\.(com)$/;

em.onblur = function (){
    if (em.value==""){
        error_Em.innerHTML ="can't be empty"
        error_Em.style.color="red"
        em.className = "border-red"
    }
}

em.onkeyup= function(){
      if (regexo.test(em.value)){
       error_Em.innerHTML = "your email is valid";
       error_Em.style.color="green"; 
       em.className = "border-green" 
       
    }

    else{

        error_Em.innerHTML = "your email is Invalid"
        error_Em.style.color="red";
        em.className = "border-red"
    }
}


let address = document.getElementById("address");
let error_address = document.getElementById("error_address");

address.onblur = function (){
    if(address.value == ""){
        error_address.innerHTML = "can't be empty";
        error_address.style.color="red"
        address.className ="border-red"
    }
}

address.onkeydown = function (){
     if (address.value.length <5){
        error_address.innerHTML ="please enter full address"
        error_address.style.color ="red"
        address.className ="border-red"
    }
    else {
        error_address.innerHTML ="success"
        error_address.style.color="green"
        address.className ="border-green"
    }
}


let city = document.getElementById("city");
let error_city = document.getElementById("error_city");

city.onblur = function (){
    if(city.value == ""){
        error_city.innerHTML ="can't be empty";
        error_city.style.color="red"
        city.className ="border-red"
    }
}
city.onkeydown = function (){
    if(city.value.length <4){
          error_city.innerHTML="enter full name city";
          error_city.style.color="red";
          city.className ="border-red"
    }
    else{
        error_city.innerHTML = "success"
        error_city.style.color = "green"
        city.className ="border-green"
    }
}

let  state = document.getElementById("state");
let error_state = document.getElementById("error_state")

state.onblur = function (){
    if(state.value == ""){
        error_state.innerHTML = "can't be empty"
        error_state.style.color = "red"
        state.className ="border-red"
    }

}
state.onkeydown = function () {
    if (state.value.length < 3){
        error_state.innerHTML = "please enter full state"
        error_state.style.color = "red"
        state.className ="border-red"
    }
    else{
        error_state.innerHTML = "success"
        error_state.style.color = "green"
        state.className ="border-green"
    }
}


let zipCode = document.getElementById("zip code");
let error_zipCode = document.getElementById("error_zipCode")

zipCode.onblur = function () {
    if(zipCode.value==""){
    error_zipCode.innerHTML = "can't be empty"
    error_zipCode.style.color = "red"
    zipCode.className ="border-red"

}
}
zipCode.onkeydown = function () {
    if (zipCode.value.length != 2 && zipCode.value.length != 3 ){
        error_zipCode.innerHTML = "please enter full zipCode"
        error_zipCode.style.color = "red"
        zipCode.className ="border-red"
    }
     if(zipCode.value.length == 2 || zipCode.value.length == 3){
        error_zipCode.innerHTML = "success"
        error_zipCode.style.color = "green"
        zipCode.className ="border-green"
    }

}


let cardName = document.getElementById("name card") ;
let error_cardName = document.getElementById("error_cardName")

cardName.onblur = function () {
    if(cardName.value==""){
    error_cardName.innerHTML = "can't be empty"
    error_cardName.style.color = "red"
    cardName.className ="border-red"

}
}

cardName.onkeydown = function () {
    if (cardName.value.length < 5){
       
        error_cardName.innerHTML = "please enter full cardName"
        error_cardName.style.color = "red"
        cardName.className ="border-red"
    }
    else{
        error_cardName.innerHTML = "success"
        error_cardName.style.color = "green"
        cardName.className ="border-green"
    }

}

let cardNumber = document.getElementById("card number")
let error_cardNumber = document.getElementById("error_cardNumber")


cardNumber.onblur = function () {
    if(cardNumber.value==""){
    error_cardNumber.innerHTML = "can't be empty"
    error_cardNumber.style.color = "red"
    cardNumber.className ="border-red"
    }
}

cardNumber.onkeydown = function () {
    if(cardNumber.value.length==15 ){
        error_cardNumber.innerHTML = "success"
        error_cardNumber.style.color = "green"
        cardNumber.className ="border-green"
    }
       
    
    else {
        error_cardNumber.innerHTML = "please enter full cardNumber";
        error_cardNumber.style.color = "red";
        cardNumber.className ="border-red";     
    }
}


let month = document.getElementById("month")
let error_month = document.getElementById("error_month")

month.onblur = function () {
    if (month.value ==""){
    error_month.innerHTML = "can't be empty"
    error_month.style.color = "red"
    month.className ="border-red"
}

}

month.onchange = function(){
    if (month.value ==""){
        error_month.innerHTML = "can't be empty"
        error_month.style.color = "red"
        month.className ="border-red"
    }
    else{
        error_month.innerHTML = "success"
        error_month.style.color = "green"
        month.className ="border-green"
    }
}


let year = document.getElementById("year");
let error_year = document.getElementById("error_year")

year.onblur = function () {
    if (year.value ==""){
    error_year.innerHTML = "can't be empty"
    error_year.style.color = "red"
    year.className ="border-red"
}

}
year.onchange = function(){
    if (year.value ==""){
        error_year.innerHTML = "can't be empty"
        error_year.style.color = "red"
        year.className ="border-red"
    }
    else{
        error_year.innerHTML = "success"
        error_year.style.color = "green"
        year.className ="border-green"
    }
}



let cvv = document.getElementById("cvv");
let error_cvv = document.getElementById("error_cvv");

cvv.onblur = function () {
    if (cvv.value == ""){
        error_cvv.innerHTML = "can't be empty"
        error_cvv.style.color= "red"
        cvv.className ="border-red"
    }
}


cvv.onkeydown = function () {
    if (  cvv.value.length ==2 || cvv.value.length ==3 ){
        error_cvv.innerHTML = "success"
        error_cvv.style.color = "green"
        cvv.className ="border-green"
    }
    else{
        error_cvv.innerHTML = "please enter full cvv"
        error_cvv.style.color = "red"
        cvv.className ="border-red"
    }
    

}
 const meetingId =document.getElementById("meting-id")
 const  meetPassword = document.getElementById("meet-password")



 function check() {
 
     if (fn.value == "") {
         error_Fn.innerHTML = "can't be empty";
         error_Fn.style.color = "red"
         fn.focus()
     }
 
     if (em.value == "") {
         error_Em.innerHTML = "can't be empty";
         error_Em.style.color = "red"
         em.focus()
     }
 
     if (address.value == "") {
         error_address.innerHTML = "can't be empty";
         error_address.style.color = "red"
         address.focus()
     }
 
     if (city.value == "") {
         error_city.innerHTML = "can't be empty";
         error_city.style.color = "red"
         city.focus()
     }
 
     if (state.value == "") {
         error_state.innerHTML = "can't be empty";
         error_state.style.color = "red"
         state.focus()
     }
     if (zipCode.value == "") {
         error_zipCode.innerHTML = "can't be empty";
         error_zipCode.style.color = "red"
         zipCode.focus()
     }
     if (cardName.value == "") {
         error_cardName.innerHTML = "can't be empty";
         error_cardName.style.color = "red";
         cardName.focus()
     }
     if (cardNumber.value == "") {
         error_cardNumber.innerHTML = "can't be empty";
         error_cardNumber.style.color = "red";
         cardNumber.focus()
     }
     if (month.value == "") {
         error_month.innerHTML = "can't be empty";
         error_month.style.color = "red"
         month.focus()
     }
     if (year.value == "") {
         error_year.innerHTML = "can't be empty";
         error_year.style.color = "red"
         year.focus()
     }
     if (cvv.value == "") {
         error_cvv.innerHTML = "can't be empty";
         error_cvv.style.color = "red"
         cvv.focus()
     }
 
     else {
        
     
        
         const newPatients = JSON.parse(localStorage.getItem("doctors"))
         var patients = newPatients
         if (!patients) patients = []
 
         patients.push({
             
             FirstName: fn.value,
             Email: em.value,
             address : address.value,
             city : city.value,
             state : state.value,
             zipCode : zipCode.value,
             cardName:cardName.value,
             cardNumber: cardNumber.value,
             month:month.value,
             year:year.value,
             cvv : cvv.value
             
         
         });
        
         if(localStorage.length==0){
             localStorage.setItem("doctors", JSON.stringify(patients))
             return
 
         }
         
         for(i=0;i<localStorage.length;i++){
             if(patients[i].Email == em.value || patients[i].cardName==cardName.value || patients[i].cardNumber==cardNumber.value || patients[i].cvv==cvv.value  ){
                       alert("enter a correct Data")
             }
             else{
 
                 localStorage.setItem("doctors", JSON.stringify(patients))
 
             }
         }
 
     }
 }

