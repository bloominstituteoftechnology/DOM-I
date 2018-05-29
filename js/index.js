const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("nav a");


let navbar = document.querySelector("nav")
let a1 = document.createElement("a")
let a2 = document.createElement("a")
navbar.appendChild(a1)
navbar.prepend(a2)

a1.innerHTML = "Portfolio"
a2.innerHTML = "Prices"
a1.style.color = "green"
a2.style.color = "green"

let nav1 = nav[0];
let nav2 = nav[1];
let nav3 = nav[2];
let nav4 = nav[3];
let nav5 = nav[4];
let nav6 = nav[5];


nav1.innerHTML = siteContent["nav"]["nav-item-1"]
nav2.innerHTML = siteContent["nav"]["nav-item-2"]
nav3.innerHTML = siteContent["nav"]["nav-item-3"]
nav4.innerHTML = siteContent["nav"]["nav-item-4"]
nav5.innerHTML = siteContent["nav"]["nav-item-5"]
nav6.innerHTML = siteContent["nav"]["nav-item-6"]

nav1.style.color = "green"
nav2.style.color = "green"
nav3.style.color = "green"
nav4.style.color = "green"
nav5.style.color = "green"
nav6.style.color = "green"

let awesomeH1 = document.querySelector(".cta-text h1");
awesomeH1.innerHTML = siteContent["cta"]["h1"];

let buttonH1 = document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"]

let pic2 = document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"])


let textConth4 = document.querySelectorAll(".top-content .text-content h4")

textConth4[0].innerHTML = siteContent["main-content"]["features-h4"];
textConth4[1].innerHTML = siteContent["main-content"]["about-h4"]

let textContp = document.querySelectorAll(".top-content .text-content p");

textContp[0].innerHTML = siteContent["main-content"]["features-content"]
textContp[1].innerHTML = siteContent["main-content"]["about-content"]


let pic3 = document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

let text2Conth4 = document.querySelectorAll(".bottom-content .text-content h4")
let text2Contp = document.querySelectorAll(".bottom-content .text-content p")

text2Conth4[0].innerHTML = siteContent["main-content"]["services-h4"]
text2Conth4[1].innerHTML = siteContent["main-content"]["product-h4"]
text2Conth4[2].innerHTML = siteContent["main-content"]["vision-h4"]

text2Contp[0].innerHTML = siteContent["main-content"]["services-content"]
text2Contp[1].innerHTML = siteContent["main-content"]["product-content"]
text2Contp[2].innerHTML = siteContent["main-content"]["vision-content"]

let contacth4 = document.querySelector(".contact h4").innerHTML = siteContent["contact"]["contact-h4"]

let contactp = document.querySelectorAll(".contact p")

contactp[0].innerHTML = siteContent["contact"]["address"]
contactp[1].innerHTML = siteContent["contact"]["phone"]
contactp[2].innerHTML = siteContent["contact"]["email"]

document.querySelector("footer p").innerHTML = siteContent["footer"]["copyright"]

