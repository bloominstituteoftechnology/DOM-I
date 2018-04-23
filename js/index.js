const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

// Example: Update the img src for the logow
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let myNavs = document.getElementsByTagName("a");
let navText = Object.values(siteContent.nav);
console.log(navText[1])
for(let i = 0; i < 5; i++){
    myNavs[i].innerHTML = navText[i];
}

let myCTA = document.getElementsByTagName("h1");

myCTA[0].innerHTML = siteContent.cta.h1;

let ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"])

let myButton = document.getElementsByTagName("button")[0];
myButton.innerHTML = siteContent["cta"]["button"]


let textContent = document.getElementsByTagName("p");
let textHeaders = document.getElementsByTagName("h4");
let mainContent = Object.values(siteContent["main-content"]);


for (let i = 0; i < 2; i++) {
  textHeaders[i].innerHTML = mainContent[2*i];
  textContent[i].innerHTML = mainContent[2*i + 1];
}

for (let i = 3; i < 6; i++) {
  textHeaders[i - 1].innerHTML = mainContent[2*i - 1];
  textContent[i - 1].innerHTML = mainContent[2*i];
}

let middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let contactInfo = Object.values(siteContent["contact"]);
let myContact = document.querySelector(".contact");
let contactHeader = myContact.getElementsByTagName("h4");
let contactSlots = myContact.getElementsByTagName("p");
contactHeader[0].innerHTML = contactInfo[0];
for (let i = 1; i < 4; i++) {
  contactSlots[i -1].innerHTML = contactInfo[i];
}
