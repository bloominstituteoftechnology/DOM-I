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



let navItems=document.querySelectorAll(".container header a");
navItems[0].textContent=siteContent['nav']["nav-item-1"];
navItems[1].textContent=siteContent['nav']["nav-item-2"];
navItems[2].textContent=siteContent['nav']["nav-item-3"];
navItems[3].textContent=siteContent['nav']["nav-item-4"];
navItems[4].textContent=siteContent['nav']["nav-item-5"];
navItems[5].textContent=siteContent['nav']["nav-item-6"];

let newElement =document.createElement("a");
newElement.href="#";
newElement.textContent="Search";
let nav =document.querySelector(".container header nav");
nav.append(newElement );



let logo = document.getElementById("logo-img");
logo.src= siteContent["nav"]["img-src"];
logo.alt="Great Idea! Company logo.";



let imageHeader=document.getElementById("cta-img");
imageHeader.setAttribute('src',siteContent["cta"]["img-src"]);
imageHeader.alt="Image of a code snippet.";

let middleImage= document.getElementById("middle-img");
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"]);
middleImage.alt="Image of code snippets across the screen";

let headerLine= document.querySelector(".cta .cta-text h1");

headerLine.textContent=siteContent["cta"]["h1"];
//headerLine.style.fontWeight="bold";
headerLine.style.width = "175px";
headerLine.style.marginRight = "60px";


let btn=document.querySelector(".cta .cta-text button");

btn.textContent=siteContent["cta"]["button"];

let upperH4=document.querySelectorAll(".main-content .top-content .text-content h4");
//console.log(upper[0]);
upperH4[0].textContent =siteContent['main-content']["features-h4"];
upperH4[1].textContent=siteContent['main-content']["about-h4"];
let upperP=document.querySelectorAll(".main-content .top-content .text-content p");
upperP[0].textContent =siteContent['main-content']["features-content"];
upperP[1].textContent =siteContent['main-content']["about-content"];




let lowerH4=document.querySelectorAll(".main-content .bottom-content .text-content h4");
//console.log(upper[0]);
lowerH4[0].textContent =siteContent['main-content']["services-h4"];
lowerH4[1].textContent=siteContent['main-content']["product-h4"];
lowerH4[2].textContent=siteContent['main-content']["vision-h4"];

let lowerP=document.querySelectorAll(".main-content .bottom-content .text-content p");
lowerP[0].textContent =siteContent['main-content']["services-content"];
lowerP[1].textContent =siteContent['main-content']["product-content"];
lowerP[2].textContent =siteContent['main-content']["vision-content"];



let contactDetails = document.querySelector(".contact h4");
contactDetails.textContent =siteContent["contact"]["contact-h4"];

let contactDetailsParaList = document.querySelectorAll(".contact p");

contactDetailsParaList[0].textContent = siteContent['contact']["address"];
contactDetailsParaList[1].textContent = siteContent['contact']["phone"];
contactDetailsParaList[2].textContent = siteContent['contact']["email"];

let foot =document.querySelector("footer p")
foot.textContent =siteContent["footer"]["copyright"];

