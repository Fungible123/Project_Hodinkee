// this is the function for section menu

function myFunction() {
   let dropDown = document.querySelector("#sections a"); //selecting the sections link

   dropDown.addEventListener("click", function (e) { //adding an event listener to the sections link
        let panel1 = document.querySelector("#myDropdown");
        let panel2 = document.querySelector("#myDropdown2");
        let originalOpacity = 1;

        // checking if opacity is set to 1 or 0 then applying necessary opacity style to display dropdown
        if (panel1.style.opacity == originalOpacity) {
            panel1.style.opacity = 0;
            panel1.style.visibility = "hidden";
        } else {
            panel1.style.opacity = originalOpacity;
            panel2.style.opacity = 0;
            panel1.style.visibility = "visible";
        }

        // close sections menu when clicked outside 
        window.onclick = function(event){  
            if (!event.target.contains(dropDown)) {
              panel1.style.opacity = 0;
            }
        }

        // close sections menu when page is scrolled

        window.onscroll = function(){
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos) {
                panel1.style.opacity = 0;
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
        
        let panel3 = document.querySelector("#myDropdown2");
        let panel4 = document.querySelector("#myDropdown");
        let originalOpacity2 = 1;

        if (panel3.style.opacity == originalOpacity2) {
            panel3.style.opacity = 0;
            panel3.style.visibility = "hidden";
        } else {
            panel3.style.opacity = originalOpacity2;
            panel4.style.opacity = 0;
            panel3.style.visibility = "visible";
        }  

        // close brands menu when clicked outside 
        window.onclick = function(event){  
            if (!event.target.contains(dropDown)) {
            panel3.style.opacity = 0;
            }
        }

        // close brands menu when page is scrolled

        window.onscroll = function(){
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos) {
                panel3.style.opacity = 0;
            }
        }

        e.preventDefault();
    });
}

mySecondFunction();

// function for search menu

function myThirdFunction() {
    let openSearch = document.querySelector("#search-icon a");

    openSearch.addEventListener("click", function () {
        let searchBox = document.querySelector(".search-input-container");
        let quickLinks = document.querySelector(".search-quicklinks");
        let normalOpacity = 1;

        if (searchBox.style.opacity == normalOpacity) {
            searchBox.style.opacity = 0;
            searchBox.style.visibility = "hidden";
            searchBox.style.width = 0;
            quickLinks.style.display = "none";
        } else {
            searchBox.style.opacity = normalOpacity;
            searchBox.style.visibility = "visible";
            searchBox.style.width = "600px";
            quickLinks.style.display = "block";
        }  

        //close search bar when close search icon is clicked 
        
        document.querySelector(".close-search").addEventListener("click", function(){
            searchBox.style.opacity = 0;
            searchBox.style.visibility = "hidden";
            searchBox.style.width = 0;
            quickLinks.style.display = "none";
        });

        e.preventDefault();
    });
}

myThirdFunction();