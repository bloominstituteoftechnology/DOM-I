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

// images

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// build nav

const navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];


// cta 

const header1 = document.querySelector("h1");
header1.textContent = siteContent["cta"]["h1"];

const button1 = document.querySelector("button");
button1.textContent = siteContent["cta"]["button"];

//h4 
const headers = document.querySelectorAll("h4");
headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
headers[5].textContent = siteContent["contact"]["contact-h4"];

// h4 p 
const para = document.querySelectorAll("p");
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];
para[5].textContent = siteContent["contact"]["address"];
para[6].textContent = siteContent["contact"]["phone"];
para[7].textContent = siteContent["contact"]["email"];
para[8].textContent = siteContent["footer"]["copyright"];

// new navbar

const newElement = document.createElement("a");
newElement.textContent = "Home";

const parentElement = document.querySelector("nav");
parentElement.prepend(newElement);

const newElement1 = document.createElement("a");
newElement1.textContent = "Login";
parentElement.appendChild(newElement1);

const arrNavBar = Array.from(navBar);
navBar.forEach(element => { element.style.color = "green"});




// styles
headers.forEach(element => { element.style.color = "red"});
para.forEach (element => { element.style.color = "teal"});





