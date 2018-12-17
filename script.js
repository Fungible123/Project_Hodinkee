// this is the function for section menu

function myFunction() {
   let dropDown = document.querySelector("#sections a"); //selecting the sections link

   dropDown.addEventListener("click", function (e) { //adding an event listener to the sections link
        let panel = document.querySelector("#myDropdown");
        let panel2 = document.querySelector("#myDropdown2");
        let originalOpacity = 1;

        // checking if opacity is set to 1 or 0 then applying necessary opacity style to display dropdown
        if (panel.style.opacity == originalOpacity) {
            panel.style.opacity = 0;
            
        } else {
            panel.style.opacity = originalOpacity;
            panel2.style.opacity = 0;
        }

        // close sections menu when clicked outside 
        window.onclick = function(event){  
            if (!event.target.contains(dropDown)) {
              panel.style.opacity = 0;
            }
        }

        // close sections menu when page is scrolled

        window.onscroll = function(){
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos) {
                panel.style.opacity = 0;
            }
        }

        e.preventDefault();
    });
    
}

myFunction();

// this is the function for brands menu

function mySecondFunction() {
    let dropDown = document.querySelector("#brands a");

    dropDown.addEventListener("click", function (e) {
        let panel2 = document.querySelector("#myDropdown2");
        let panel1 = document.querySelector("#myDropdown");
        let originalOpacity2 = 1;

        if (panel2.style.opacity == originalOpacity2) {
            panel2.style.opacity = 0;
        } else {
            panel2.style.opacity = originalOpacity2;
            panel1.style.opacity = 0;
        }  

        // close brands menu when clicked outside 
        window.onclick = function(event){  
            if (!event.target.contains(dropDown)) {
              panel2.style.opacity = 0;
            }
        }

        // close brands menu when page is scrolled

        window.onscroll = function(){
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos) {
                panel2.style.opacity = 0;
            }
        }

        e.preventDefault();
    });
}

mySecondFunction();