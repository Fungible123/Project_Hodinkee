function myFunction() {
   let dropDown = document.querySelector('ul.nav-options li#sections');
   
   dropDown.addEventListener("click", function (e) {

    if (e.target.tagName === 'A') {
        document.querySelector("#myDropdown").classList.toggle("active");
    }

   }, false);

}

myFunction();