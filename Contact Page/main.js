const form = document.getElementById('form');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const messages = document.getElementById('messages');
const btn = document.getElementById('btn');

{ 
    function validation (e) { 
        
        if(uname.value === "") { 
        uname.classList.add("error")
        }
        if(uname.value !== "") { 
        uname.classList.remove("error")
        uname.classList.add("success")
        
        }
        if(email.value === "") { 
        email.classList.add("error")
        }
        if(email.value !== "") { 
        email.classList.remove("error")
        }
        
        
        if(messages.value === "") { 
        messages.classList.add("error")
        }
        if(messages.value !== "") { 
         messages.classList.remove("error")
         messages.classList.add("success")
        }
        
        e.preventDefault();
    }
    btn.addEventListener('click', validation)
}
{ 
    
}
{ 
    let input = document.getElementsByTagName('input')

    function letterOnly (input) { 
        var restric = /[^a-z]/gi ;
        uname.value = input.value.replace(restric, "");
    }
    
}