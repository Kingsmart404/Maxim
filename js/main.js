
function openMenu() {
    const menu = document.querySelector(".nav_menu_list");
    menu.classList.toggle("show");
    
    const links = menu.querySelectorAll("a");
    links.forEach((link )=> {
        link.addEventListener("click",() => {
            menu.classList.remove("show");
        })
    })
}


var countDownDate = new Date("October 7 2025 00:00:00").getTime();
var countDowninterval = setInterval(() => {
    
    var now = new Date().getTime();
    distance =countDownDate - now



    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hrs = Math.floor(distance %(1000 * 60 * 60 * 24) /( 1000 * 60 * 60));
    const Minute = Math.floor(distance%(1000*60*60)/(1000*60))
    const Secs = Math.floor(distance %(1000 * 60 )/( 1000));
 document.getElementById("Days").innerHTML = Days;
 document.getElementById("Hrs").innerHTML = Hrs;
 document.getElementById("Minute").innerHTML = Minute;
 document.getElementById("Secs").innerHTML = Secs;
    
},1000);





































// alert("Grace is there");


// let Home = document.getElementById("Home");
// Home.style.color = "red";

// let msg = document.querySelectorAll(".msg")
// // msg.style.color = "Blue";
// msg.forEach(e => e.style.color = "yellow");



// let ul = document.getElementsByTagName("ul");
// ul[0].style.color = "Red";
// ul[1].style.color = "Yellow";
// ul[2].style.color = "purple";
// ul[3].style.color = "blue";
// ul[4].style.color = "Black";

// let title = document.getElementById("title")
// let text = document.querySelector(".text")
// let button = document.getElementById("btn")


// button.addEventListener("click" , () => {
//     title.style.color = "blue";
// })





// let Button = document.getElementById("Submit")

// Button.addEventListener("click", () => {
//     alert("who is there")
// } )