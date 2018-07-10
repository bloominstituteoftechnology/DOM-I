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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let image = document.querySelectorAll("img");
image[0].setAttribute('src', siteContent["nav"]["img-src"]);
image[1].setAttribute('src', siteContent["cta"]["img-src"]);
image[2].setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelector('.cta button').innerHTML=siteContent['cta']['button'];
document.querySelector('.cta h1').innerHTML=siteContent['cta']['h1'];
document.querySelector('footer p').innerHTML=siteContent['footer']['copyright'];

document.querySelector('.contact h4 ').innerHTML=siteContent['contact']['contact-h4'];
let contactP=document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];


let navStuff=document.querySelectorAll('nav a');
navStuff[0].innerHTML = siteContent["nav"]["nav-item-1"];
navStuff[0].style.color = "green";
navStuff[1].innerHTML = siteContent["nav"]["nav-item-2"];
navStuff[1].style.color = "green";
navStuff[2].innerHTML = siteContent["nav"]["nav-item-3"];
navStuff[2].style.color = "green";
navStuff[3].innerHTML = siteContent["nav"]["nav-item-4"];
navStuff[3].style.color = "green";
navStuff[4].innerHTML = siteContent["nav"]["nav-item-5"];
navStuff[4].style.color = "green";
navStuff[5].innerHTML = siteContent["nav"]["nav-item-6"];
navStuff[5].style.color = "green";

let bottomHead = document.querySelectorAll(".bottom-content h4"); 
bottomHead[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomHead[1].innerHTML = siteContent["main-content"]["product-h4"]
bottomHead[2].innerHTML = siteContent["main-content"]["vision-h4"]

let bottomInfo = document.querySelectorAll(".bottom-content p")
bottomInfo[0].innerHTML = siteContent["main-content"]["services-content"]
bottomInfo[1].innerHTML = siteContent["main-content"]["product-content"]
bottomInfo[2].innerHTML = siteContent["main-content"]["vision-content"]

let topHead = document.querySelectorAll(".top-content h4"); 
topHead[0].innerHTML = siteContent["main-content"]["features-h4"]
topHead[1].innerHTML = siteContent["main-content"]["about-h4"]

let topInfo = document.querySelectorAll(".top-content p"); 
topInfo[0].innerHTML = siteContent["main-content"]["features-content"]
topInfo[1].innerHTML = siteContent["main-content"]["about-content"]

let newA = document.createElement("a");
let newAText = document.createTextNode("Home"); 


let newA2 = document.createElement("a")
let newAText2 = document.createTextNode("Partners")

newA.appendChild(newAText);

document.querySelector("nav").prepend(newA);

newA2.appendChild(newAText2);

document.querySelector("nav").appendChild(newA2); 

newA2.style.color = "green";
newA.style.color = "green";