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
let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];


let navTxt = document.querySelectorAll("a");
navTxt[0].textContent = siteContent["nav"]["nav-item-1"];
navTxt[1].textContent = siteContent["nav"]["nav-item-2"];;
navTxt[2].textContent = siteContent["nav"]["nav-item-3"];;
navTxt[3].textContent = siteContent["nav"]["nav-item-4"];;
navTxt[4].textContent = siteContent["nav"]["nav-item-5"];;
navTxt[5].textContent = siteContent["nav"]["nav-item-6"];;

navTxt.forEach(element => element.style.color = "green");

let buttonTxt = document.querySelector("button");
buttonTxt.textContent = "Get Started";

let titleTxt = document.querySelector("h1");
titleTxt.textContent = "DOM Is Awesome";

let headerTxt = document.querySelectorAll("h4");
headerTxt[0].textContent = siteContent["main-content"]["features-h4"];
headerTxt[1].textContent = siteContent["main-content"]["about-h4"];
headerTxt[2].textContent = siteContent["main-content"]["services-h4"];
headerTxt[3].textContent = siteContent["main-content"]["product-h4"];
headerTxt[4].textContent = siteContent["main-content"]["vision-h4"];
headerTxt[5].textContent = siteContent["contact"]["contact-h4"];

let pTxt = document.querySelectorAll("p");
pTxt[0].textContent = siteContent["main-content"]["features-content"]; 
pTxt[1].textContent = siteContent["main-content"]["about-content"];
pTxt[2].textContent = siteContent["main-content"]["services-content"];
pTxt[3].textContent = siteContent["main-content"]["product-content"];
pTxt[4].textContent = siteContent["main-content"]["vision-content"];
pTxt[5].textContent = siteContent["contact"]["address"];
pTxt[6].textContent = siteContent["contact"]["phone"];
pTxt[7].textContent = siteContent["contact"]["email"];
pTxt[8].textContent = siteContent["footer"]["copyright"];