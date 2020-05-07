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
    "h1": "DOM\nIs\nAwesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street\nSomewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.querySelectorAll('nav a');
navigation[0].textContent = 'Services';
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

let newNavItem = document.createElement('a');
newNavItem.textContent = 'Home';
let nav2 = document.querySelector('nav');
nav2.appendChild(newNavItem);
let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Author';
nav2.prepend(newNavItem2);

let newNavigation = document.querySelectorAll('nav a');
newNavigation.forEach(text => { text.style.color = 'green' });

let headerimg = document.getElementById("cta-img");
headerimg.setAttribute('src', siteContent["cta"]["img-src"]);

let headline = document.getElementsByTagName('h1');
headline[0].textContent = siteContent["cta"]["h1"];
headline[0].style.whiteSpace = 'pre';

let btn = document.getElementsByTagName('button');
btn[0].textContent = siteContent["cta"]["button"];

let topText = document.querySelectorAll(".text-content h4");
topText[0].textContent = siteContent['main-content']['features-h4'];
topText[1].textContent = siteContent['main-content']['about-h4'];
topText[2].textContent = siteContent['main-content']['services-h4'];
topText[3].textContent = siteContent['main-content']['product-h4'];
topText[4].textContent = siteContent['main-content']['vision-h4'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomText = document.querySelectorAll('.text-content p');
bottomText[0].textContent = siteContent['main-content']['features-content'];
bottomText[1].textContent = siteContent['main-content']["about-content"];
bottomText[2].textContent = siteContent['main-content']['services-content'];
bottomText[3].textContent = siteContent['main-content']['product-content'];
bottomText[4].textContent = siteContent['main-content']['vision-content'];

let cInfo = document.querySelector('.contact h4');
cInfo.textContent = siteContent['contact']['contact-h4'];
let cInfo2 = document.querySelectorAll('.contact p');
cInfo2[0].textContent = siteContent['contact']['address'];
cInfo2[1].textContent = siteContent['contact']['phone'];
cInfo2[2].textContent = siteContent['contact']['email'];

cInfo2[0].style.whiteSpace = 'pre';
let footr = document.querySelector('footer p');
footr.textContent = siteContent['footer']['copyright'];