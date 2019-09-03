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



let navLinks = document.querySelectorAll("a");
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].textContent = siteContent["nav"]["nav-item-"+(i+1)];
  navLinks[i].style.color = "green";
};

// navNew
const navAdd = document.createElement('a')
navAdd.href = "https://lambdaschool.com";
navAdd.textContent = "Created an element here";
navAdd.style.color = "Blue";
const nav = document.querySelector("nav");
nav.appendChild(navAdd);


let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

// get started button
let button = document.querySelector("button");
  button.textContent = siteContent["cta"]["button"];
// header img
let headerImage = document.getElementById("cta-img");
  headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

// middle img
let middleImage = document.getElementById("middle-img");
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



// text content

let paragraph = document.querySelectorAll("p");
  paragraph[0].textContent = siteContent["main-content"]["features-content"];
  paragraph[1].textContent = siteContent["main-content"]["about-content"];
  paragraph[2].textContent = siteContent["main-content"]["services-content"];
  paragraph[3].textContent = siteContent["main-content"]["product-content"];
  paragraph[4].textContent = siteContent["main-content"]["vision-content"];
  paragraph[5].textContent = siteContent["contact"]["address"];
  paragraph[6].textContent = siteContent["contact"]["phone"];
  paragraph[7].textContent = siteContent["contact"]["email"];
  paragraph[8].textContent = siteContent["footer"]["copyright"];

// h4

let h4 = document.querySelectorAll("h4");
  h4[0].textContent = siteContent["main-content"]["features-h4"];
  h4[1].textContent = siteContent["main-content"]["about-h4"];
  h4[2].textContent = siteContent["main-content"]["services-h4"];
  h4[3].textContent = siteContent["main-content"]["product-h4"];
  h4[4].textContent = siteContent["main-content"]["vision-h4"];
  h4[5].textContent = siteContent["contact"]["contact-h4"];



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
