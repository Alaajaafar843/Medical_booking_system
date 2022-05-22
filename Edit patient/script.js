
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