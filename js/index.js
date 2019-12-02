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

//navigation
const navElements = document.getElementsByTagName('a');
Array.from(navElements);
navElements[0].textContent = siteContent['nav']['nav-item-1'];
navElements[1].textContent = siteContent['nav']['nav-item-2'];
navElements[2].textContent = siteContent['nav']['nav-item-3'];
navElements[3].textContent = siteContent['nav']['nav-item-4'];
navElements[4].textContent = siteContent['nav']['nav-item-5'];
navElements[5].textContent = siteContent['nav']['nav-item-6'];

for (let link of navElements) {
  link.style.color = 'green';
  link.style.textDecoration = 'none';
}

//added navigation links 
const navigation = document.querySelector('nav');
const newNavLink1 = document.createElement('a');
newNavLink1.textContent = 'Peanut';
const newNavLink2 = document.createElement('a');
newNavLink2.textContent = 'Butter';

navigation.prepend(newNavLink1);
navigation.appendChild(newNavLink2);

//top section
const title = document.querySelector("h1");
title.textContent = siteContent['cta']['h1'];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//middle section
let subTitles = document.querySelectorAll('h4');
subTitles[0].textContent = siteContent['main-content']['features-h4'];
subTitles[1].textContent = siteContent['main-content']['about-h4'];
subTitles[2].textContent = siteContent['main-content']['services-h4'];
subTitles[3].textContent = siteContent['main-content']['product-h4'];
subTitles[4].textContent = siteContent['main-content']['vision-h4'];
//contact title
subTitles[5].textContent = siteContent['contact']['contact-h4'];

let subContent = document.querySelectorAll('p');
subContent[0].textContent = siteContent['main-content']['features-content'];
subContent[1].textContent = siteContent['main-content']['about-content'];
subContent[2].textContent = siteContent['main-content']['services-content'];
subContent[3].textContent = siteContent['main-content']['product-content'];
subContent[4].textContent = siteContent['main-content']['vision-content'];
//contact content
subContent[5].textContent = siteContent['contact']['address'];
subContent[6].textContent = siteContent['contact']['phone'];
subContent[7].textContent = siteContent['contact']['email'];
//footer content
subContent[8].textContent = siteContent['footer']['copyright'];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



