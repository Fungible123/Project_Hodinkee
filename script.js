function myFunction() {
   let dropDown = document.querySelector("#sections a");

   dropDown.addEventListener("click", function (e) {
        let panel = document.querySelector("#myDropdown");
        let panel2 = document.querySelector("#myDropdown2");

        let originalOpacity = 1;
        if (panel.style.opacity == originalOpacity) {
            panel.style.opacity = 0;
        } else {
            panel.style.opacity = originalOpacity;
            panel2.style.opacity = 0;
        }
        
    e.preventDefault();
    });
}

myFunction();

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
    e.preventDefault();
    });
}

mySecondFunction();