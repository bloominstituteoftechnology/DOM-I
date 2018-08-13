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
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
let midPageaccent = document.getElementById("middle-img");
midPageaccent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navItem1 = document.querySelector('a');
navItem1.innerText = siteContent['nav']["nav-item-1"];


let navItem2 = document.querySelectorAll('a')[1];
navItem2.innerText = siteContent['nav']["nav-item-2"];


let navItem3 = document.querySelectorAll('a')[2];
navItem3.innerText = siteContent['nav']["nav-item-3"];


let navItem4 = document.querySelectorAll('a')[3];
navItem4.innerText = siteContent['nav']["nav-item-4"];


let navItem5 = document.querySelectorAll('a')[4];
navItem5.innerText = siteContent['nav']["nav-item-5"];


let navItem6 = document.querySelectorAll('a')[5];
navItem6.innerText = siteContent['nav']["nav-item-6"];



let h1Header = document.querySelector('h1');
h1Header.innerText = siteContent['cta']['h1'];

let getStarted = document.querySelector('button');
getStarted.innerText = siteContent['cta']['button'];

let featuresH4 = document.querySelector('h4');
featuresH4.innerText = siteContent['main-content']["features-h4"];

let featureContent = document.querySelector('p');
featureContent.innerText = siteContent['main-content']["features-content"];

let aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.innerText = siteContent['main-content']["about-h4"];

let aboutContent = document.querySelectorAll('p')[1];
aboutContent.innerText = siteContent['main-content']["about-content"];

let servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.innerText = siteContent['main-content']["services-h4"];

let servicesContent = document.querySelectorAll('p')[2];
servicesContent.innerText = siteContent['main-content']["services-content"];

let productH4 = document.querySelectorAll('h4')[3];
productH4.innerText = siteContent['main-content']["product-h4"];

let productContent = document.querySelectorAll('p')[3];
productContent.innerText = siteContent['main-content']["product-content"];

let visionH4 = document.querySelectorAll('h4')[4];
visionH4.innerText = siteContent['main-content']["vision-h4"];

let visionContent = document.querySelectorAll('p')[4];
visionContent.innerText = siteContent['main-content']["vision-content"];


let contactH4 = document.querySelectorAll('h4')[5];
contactH4.innerText = siteContent["contact"]["contact-h4"];

let address = document.querySelectorAll('p')[5];
address.innerText = siteContent["contact"]["address"];

let phone = document.querySelectorAll('p')[6];
phone.innerText = siteContent["contact"]["phone"];

let email = document.querySelectorAll('p')[7];
email.innerText = siteContent["contact"]["email"];

let copyright = document.querySelectorAll('p')[8];
copyright.innerText = siteContent["footer"]["copyright"];


let newNavEllast = document.createElement('a');
let newNavElfirst = document.createElement('a');
let homeNavElement = document.querySelector('nav');

homeNavElement.appendChild(newNavElfirst);
homeNavElement.prepend(newNavEllast);
newNavEllast.innerHTML = "firstInLine";
newNavElfirst.innerHTML = "Blog";



let navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.color = 'green';
}

