function myFunction() {
    var dropDown = document.querySelector("#myDropdown").classList.toggle("active");

// Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function(e) {
        if (!e.target.matches("#sections")) {
        var myDropdown = dropDown;
        }
        if (myDropdown.classList.contains("active")) {
        myDropdown.classList.remove("active");
        }
    })
}
