function myFunction() {
   let dropDown = document.querySelector('#sections');

   dropDown.addEventListener("click", function (e) {

        let panel = document.querySelector("#myDropdown");
        let originalOpacity = 1;
        if (panel.style.opacity == originalOpacity) {
            panel.style.opacity = 0;
        } else {
            panel.style.opacity = originalOpacity;
        }
    });
}

myFunction();