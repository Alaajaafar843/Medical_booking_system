           let searchBox = document.querySelector("#search-box");
            let images =document.querySelectorAll(".container .image-container .card");
            let head =document.querySelectorAll(".container .image-container .text-primary");
            
    
    
              searchBox.oninput = () => {
               head.forEach(hide => hide.style.display = "none");
                images.forEach(hide => hide.style.display = "none");
                  let value =searchBox.value;
                  images.forEach(filter =>{
                      let title = filter.getAttribute("data-title");
                      if(value==title){
                          filter.style.display ="block";
                      }
                  });
                  head.forEach(filter =>{
                      let title = filter.getAttribute("data-title");
                      if(value==title){
                          filter.style.display ="block";
                      }
                  });
                   
                
                };