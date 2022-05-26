const form = document.getElementById('form');
const uname = document.getElementById('inptName');
const email = document.getElementById('email');
const messages = document.getElementById('messages');
const btn = document.getElementById('btn');

 
    function validation(e) { 
        
        if ( uname.value.length > 0){
            uname.classList.add("success");
        }
        else { 
            uname.classList.add("error");
            e.preventDefault();
        }
        if ( email.value.length > 0){
            email.classList.add("success");
        }
        else { 
            email.classList.add("error");
            e.preventDefault();
        }
        if ( messages.value.length > 0){
            messages.classList.add("success");
        }
        else { 
            messages.classList.add("error");
            e.preventDefault();
        }
        
 
        
        // e.preventDefault();
    }
    btn.addEventListener('click', validation)

 
    

    let input = document.getElementsByTagName('input')

    function letterOnly (input) { 
        var restric = /[^a-z]/gi ;
        uname.value = input.value.replace(restric, "");
    }
    
