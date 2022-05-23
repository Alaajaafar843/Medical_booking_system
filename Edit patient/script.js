
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

        function validation(e) { 

                if ( fname.value.length > 0){
                fname.classList.add("success");
            }
            else { 
                fname.classList.add("error");
            }
            if (lname.value.length > 0) { 
                lname.classList.add('success')
            }
            else { 
                lname.classList.add("error")
            }
            if(email.value.length > 0){ 
                email.classList.add('success')
            }
            else { 
                email.classList.add('error')
            }
            if (password.value.length > 0) { 
                password.classList.add("success")
            }
            else { 
                password.classList.add('error')
            }
            if ( newpassword.value.length > 0 && newpassword.value !== password.value){ 
                newpassword.classList.add('success')
            }
            else { 
                newpassword.classList.add('error')
                alert("New Password Can't be the same as old Password")
            }
            if (confirmpassword.value === newpassword.value && confirmpassword.value.length > 0) {
                confirmpassword.classList.add('success')
            } else { 
                confirmpassword.classList.add('error')
                alert("Passwords doesn't match!")
            }
             e.preventDefault();
             
        }
        submitBtn.addEventListener('click', validation)