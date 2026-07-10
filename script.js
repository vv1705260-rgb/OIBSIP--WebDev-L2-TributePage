/* ===========================================================
   Legacy of Dreams - Tribute Page
   script.js
   Part 1
===========================================================*/

// ===============================
// DOM Elements
// ===============================

const body = document.body;

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const backToTop = document.getElementById("backToTop");

const themeToggle = document.getElementById("themeToggle");

const loader = document.querySelector(".loader");

const progressBar = document.querySelector(".progress-bar");

const typingText = document.querySelector(".typing-text");

const counterNumbers = document.querySelectorAll(".counter");

const revealElements = document.querySelectorAll(".reveal");



// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        if(loader){

            loader.classList.add("loader-hidden");

        }

    },1000);

});



// ===============================
// Mobile Menu
// ===============================

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        menuToggle.classList.toggle("active");

        navMenu.classList.toggle("active");

    });

}



navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        if(menuToggle){

            menuToggle.classList.remove("active");

        }

        if(navMenu){

            navMenu.classList.remove("active");

        }

    });

});



// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});



// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(window.scrollY/totalHeight)*100;

    if(progressBar){

        progressBar.style.width=progress+"%";

    }

});



// ===============================
// Back To Top
// ===============================

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});



if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



// ===============================
// Dark Mode
// ===============================

const currentTheme=localStorage.getItem("theme");

if(currentTheme==="dark"){

    body.classList.add("dark");

}



if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        body.classList.toggle("dark");



        if(body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }

        else{

            localStorage.setItem("theme","light");

        }

    });

}



// ===============================
// Active Navigation
// ===============================

window.addEventListener("scroll",()=>{

    let current="";



    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;



        if(window.pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });



    navLinks.forEach(link=>{

        link.classList.remove("active");



        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});



// ===============================
// Smooth Scroll
// ===============================

navLinks.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();



        const target=document.querySelector(this.getAttribute("href"));



        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});
                        
