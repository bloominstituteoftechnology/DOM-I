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
//Images 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let image = document.getElementById("cta-img"); 
image.setAttribute('src', siteContent["cta"]["img-src"]);

let imageMiddle = document.getElementById("middle-img"); 
imageMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//navBar
let navItem = document.querySelectorAll("nav a"); 
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];


//cta content
let buttonCTA = document.querySelectorAll(".cta-text button"); 
buttonCTA[0].innerHTML = siteContent["cta"]["button"]; 

let hCTA = document.querySelectorAll(".cta-text h1"); 
hCTA[0].innerHTML = siteContent["cta"]["h1"];

//middle content
let topHeader = document.querySelectorAll(".top-content h4"); 
topHeader[0].innerHTML = siteContent["main-content"]["features-h4"]
topHeader[1].innerHTML = siteContent["main-content"]["about-h4"]

let topContent = document.querySelectorAll(".top-content p"); 
topContent[0].innerHTML = siteContent["main-content"]["features-content"]
topContent[1].innerHTML = siteContent["main-content"]["about-content"]

let bottomHeader = document.querySelectorAll(".bottom-content h4"); 
bottomHeader[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomHeader[1].innerHTML = siteContent["main-content"]["product-h4"]
bottomHeader[2].innerHTML = siteContent["main-content"]["vision-h4"]

let bottomContent = document.querySelectorAll(".bottom-content p")
bottomContent[0].innerHTML = siteContent["main-content"]["services-content"]
bottomContent[1].innerHTML = siteContent["main-content"]["product-content"]
bottomContent[2].innerHTML = siteContent["main-content"]["vision-content"]
//contact
let contactHeader = document.querySelectorAll(".contact h4"); 
contactHeader[0].innerHTML = siteContent["contact"]["contact-h4"]

let contactItem = document.querySelectorAll(".contact p"); 
contactItem[0].innerHTML = siteContent["contact"]["address"];
contactItem[1].innerHTML = siteContent["contact"]["phone"];
contactItem[2].innerHTML = siteContent["contact"]["email"];

let footerItem = document.querySelectorAll("footer p"); 
footerItem[0].innerHTMl = siteContent["footer"]["copyright"];

//new content


