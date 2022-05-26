
    var fakeBtn = document.getElementById('fakebtn');

    fakeBtn.addEventListener('click', function(){
        image_input.click();

    });

    const image_input = document.querySelector("#changeBtn");

        image_input.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector("#imgUpload").style.backgroundImage = `url(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
        });

        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var city = document.getElementById('city');
        var password = document.getElementById('password');
        var newpassword = document.getElementById('newpassword');
        var confirmpassword = document.getElementById('confirmpassword');
        var submitBtn = document.getElementById('submitBtn');
        var errorpassword = document.getElementById('errorpassword');
        var errornewpassword = document.getElementById('errornewpassword');
        var errorconfirmpassword = document.getElementById('errorconfirmpassword');
        var errorname = document.getElementById('errorname');
        var errorlastname = document.getElementById('errorlastname');
        var erroremail = document.getElementById('erroremail');


        function validation(e) { 

                if ( fname.value.length > 0){
                fname.classList.add("success");
            }
            else { 
                fname.classList.add("error");
                errorname.innerHTML = "Please Enter a valid First Name"

                // e.preventDefault();
            }
            if (lname.value.length > 0) { 
                lname.classList.add('success')
            }
            else { 
                lname.classList.add("error")
                errorlastname.innerHTML = "Please Enter a valid Last Name"

                // e.preventDefault();
            }
            // if(email.value.length > 0){ 
            //     email.classList.add('success')
            // }
            // else { 
            //     email.classList.add('error')
            //     erroremail.innerHTML = "Please Enter a valid Email"

            //     // e.preventDefault();
            // }
            if (password.value.length > 0) { 
                password.classList.add("success")
            }
            else { 
                password.classList.add('error')
                errorpassword.innerHTML = "Choose a valide password!"

                // e.preventDefault();
                
            }
            if ( newpassword.value.length > 0 && newpassword.value !== password.value){ 
                newpassword.classList.add('success')
            }
            else { 
                newpassword.classList.add('error')
                errornewpassword.innerHTML = "New Password Can't be the same as old Password!"

                // e.preventDefault();
            }
            if (confirmpassword.value === newpassword.value && confirmpassword.value.length > 0) {
                confirmpassword.classList.add('success')
                
            } else { 
                confirmpassword.classList.add('error')
                errorconfirmpassword.innerHTML = "Passwords doesn't match!"

                
            }
             e.preventDefault();

            //  $.ajax({
            //      url:'ojoi',
            //      type: 'POST',
            //      data:{
            //          email: email.value
            //      },
            //  })
             
        }
        // submitBtn.addEventListener('submit', validation)

        function emailval(){
                if (email.value.length > 0){
                    email.classList.add('success')
                }
                if(email.value.length < 0) { 
                    email.classList.add('error')
                    erroremail.innerHTML = "fill it out!"
                }
            
        }
    // var restric = /[^a-z]/gi ;
    //                 email.value = email.value.replace(restric, "");