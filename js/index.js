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
let logo = document.querySelector(".logo");
// old-school syntax 
logo.src = siteContent["nav"]["img-src"];

// ============================== my code starts here 

let ctaImg = document.querySelector("#cta-img")
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.querySelector(".middle-img")
midImg.src = siteContent["main-content"]["middle-img-src"];

// ============================== end images code 

let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

 navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green"; 

const newElement = document.createElement("a");
newElement.textContent = "Blog";
const mainNav = document.querySelector("nav");
mainNav.prepend(newElement);
newElement.style.color = "green";

const newElement1 = document.createElement("a");
newElement1.textContent = "News";
mainNav.append(newElement1);
newElement1.style.color = "green";

console.log(navItems)



let ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let mainHeaders = document.querySelectorAll("h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainHeaders[5].textContent = siteContent["contact"]["contact-h4"];


let mainPars = document.querySelectorAll("p");
mainPars[0].textContent = siteContent["main-content"]["features-content"];
mainPars[1].textContent = siteContent["main-content"]["about-content"];
mainPars[2].textContent = siteContent["main-content"]["services-content"];
mainPars[3].textContent = siteContent["main-content"]["product-content"];
mainPars[4].textContent = siteContent["main-content"]["vision-content"];
mainPars[5].textContent = siteContent["contact"]["address"];
mainPars[6].textContent = siteContent["contact"]["phone"];
mainPars[7].textContent = siteContent["contact"]["email"];
mainPars[8].textContent = siteContent["footer"]["copyright"];