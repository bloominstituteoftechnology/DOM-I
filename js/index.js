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
ctaImg.src = 'img/header-img.png'

let middleImg = document.getElementById("middle-img");
middleImg.src = 'img/mid-page-accent.jpg';

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta.h1;

let ctaB = document.querySelector('.cta-text button');
ctaB.innerHTML = siteContent.cta.button;

let features = document.getElementsByTagName('h4');
//contains "h4??"
features[0].innerHTML = "Features";
features[1].innerHTML =  siteContent["main-content"]["about-h4"];
features[2].innerHTML = "Services";
features[3].innerHTML = siteContent["main-content"]["vision-h4"];
features[4].innerHTML =  siteContent["main-content"]["product-h4"];

features[5].innerHTML =  siteContent["contact"]["contact-h4"];


let aTags = document.querySelectorAll("a");
// aTags[0].innerHTML= siteContent.nav[`nav-item-1`];
// aTags[1].innerHTML= siteContent.nav[`nav-item-2`];
const navFunction = function(){
  for(let i=1; i < 6; i++) {
      aTags[i].innerHTML = siteContent.nav[`nav-item-${i}`];
      aTags[i].style.backgroundColor = "green";
  }
}
navFunction();


// let nav = document.querySelector('nav');
// nav.style.color = "blue";
// const results =siteContent.filter(word => word.includes('content'));
// console.log(siteContent);



let content = document.querySelectorAll("p");
content[0].innerHTML = siteContent["main-content"]["features-content"];
content[1].innerHTML = siteContent["main-content"]["about-content"];
content[2].innerHTML = siteContent["main-content"]["services-content"];
content[3].innerHTML = siteContent["main-content"]["product-content"];
content[4].innerHTML = siteContent["main-content"]["vision-content"];

content[5].innerHTML = siteContent["contact"]["address"];
content[6].innerHTML = siteContent["contact"]["phone"];
content[7].innerHTML = siteContent["contact"]["email"];

content[8].innerHTML = siteContent["footer"]["copyright"];
