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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navigation = document.querySelectorAll ("nav a");
navigation[0] .textContent = siteContent["nav"]["nav-item-1"];
navigation[1] .textContent = siteContent["nav"]["nav-item-2"];
navigation[2] .textContent = siteContent["nav"]["nav-item-3"];
navigation[3] .textContent = siteContent["nav"]["nav-item-4"];
navigation[4] .textContent = siteContent["nav"]["nav-item-5"];
navigation[5] .textContent = siteContent["nav"]["nav-item-6"];

let logoTitle = document.querySelector("h1");
logoTitle.textContent = siteContent["cta"]["h1"];

let heroImg = document.getElementById('cta-img');
heroImg.setAttribute('src', siteContent['cta']['img-src']);

let startBtn = document.querySelector ("button");
startBtn.textContent = siteContent ["cta"]["button"];



let mContent = document.querySelectorAll(".text-content");
mContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
mContent[0].children[1].textContent = siteContent["main-content"] ["features-content"];
mContent[1].children[0].textContent = 
siteContent["main-content"]["about-h4"];
mContent[1].children[1].textContent = siteContent["main-content"]["about-content"];
let snippets = document.getElementById('middle-img');

snippets.setAttribute('src', siteContent['main-content']["middle-img-src"]);

mContent[2].children[0].textContent = siteContent ["main-content"]["services-h4"];
mContent[2].children[1].textContent = siteContent ["main-content"]["services-content"];
mContent[3].children[0].textContent = siteContent ["main-content"]["product-h4"];
mContent[3].children[1].textContent = siteContent ["main-content"]["product-content"];
mContent[4].children[0].textContent = siteContent ["main-content"]["vision-h4"];
mContent[4].children[1].textContent = siteContent ["main-content"]["vision-content"];

let contactInfo = document.querySelectorAll(".contact");

contactInfo[0].children[0].textContent = siteContent ["contact"]["contact-h4"];
contactInfo[0].children[1].textContent = siteContent ["contact"]["address"];
contactInfo[0].children[2].textContent = siteContent ["contact"]["phone"];
contactInfo[0].children[3].textContent = siteContent ["contact"]["email"];

let copy = document.querySelectorAll("footer");

copy[0].textContent = siteContent ["footer"]["copyright"];








