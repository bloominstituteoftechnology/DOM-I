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



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])

let navmain = document.querySelectorAll("nav a");
navmain[0].innerHTML = "Services";
navmain[1].innerHTML = "Product";
navmain[2].innerHTML = "Vision";
navmain[3].innerHTML = "Features";
navmain[4].innerHTML = "About";
navmain[5].innerHTML = "Contact";


let ctah1 = document.querySelector(".cta h1");
ctah1.innerHTML = siteContent["cta"]["h1"];

let ctabtn = document.querySelector(".cta button");
ctabtn.innerHTML = "Get Started";

let ctalogo = document.getElementById("cta-img");
ctalogo.setAttribute("src", siteContent["cta"]["img-src"])

let mainh4 = document.querySelectorAll(".main-content h4");
mainh4[0].innerHTML = "Features";
mainh4[1].innerHTML = "About";
mainh4[2].innerHTML = "Services";
mainh4[3].innerHTML = "Product";
mainh4[4].innerHTML = "Vision";

let mainh4con = document.querySelectorAll(".main-content p");
mainh4con[0].innerHTML = siteContent["main-content"]["features-content"];
mainh4con[1].innerHTML = siteContent["main-content"]["about-content"];
mainh4con[2].innerHTML = siteContent["main-content"]["services-content"];
mainh4con[3].innerHTML = siteContent["main-content"]["product-content"];
mainh4con[4].innerHTML = siteContent["main-content"]["vision-content"];

let midlogo = document.getElementById("middle-img");
midlogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",

let conth4 = document.querySelector(".contact h4");
conth4.innerHTML = siteContent["contact"]["contact-h4"];

let addr = document.querySelectorAll(".contact p");
addr[0].innerHTML = siteContent["contact"]["address"];
addr[1].innerHTML = siteContent["contact"]["phone"];
addr[2].innerHTML = siteContent["contact"]["email"];

// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

let foot = document.querySelector("footer p")
foot.innerHTML = siteContent["footer"]["copyright"];







