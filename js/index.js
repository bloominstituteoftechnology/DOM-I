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

let headerLinks = document.querySelectorAll('a');
headerLinks[0].innerHTML = siteContent['nav']['nav-item-1'];
headerLinks[1].innerHTML = siteContent['nav']['nav-item-2'];
headerLinks[2].innerHTML = siteContent['nav']['nav-item-3'];
headerLinks[3].innerHTML = siteContent['nav']['nav-item-4'];
headerLinks[4].innerHTML = siteContent['nav']['nav-item-5'];
headerLinks[5].innerHTML = siteContent['nav']['nav-item-6'];


let DOMisAwesome = document.querySelector('.cta-text h1');
DOMisAwesome.innerHTML = siteContent['cta']['h1'];

let button = document.querySelector('.cta-text button');
button.innerHTML = siteContent['cta']['button'];

let codeSnippet = document.getElementById('cta-img');
codeSnippet.setAttribute('src', siteContent['cta']['img-src']);

let featuresAboutH4 = document.querySelectorAll('.top-content .text-content h4');
featuresAboutH4[0].innerHTML = siteContent['main-content']['features-h4'];
featuresAboutH4[1].innerHTML = siteContent['main-content']['about-h4'];

let featuresAboutContent = document.querySelectorAll('.top-content .text-content p');
featuresAboutContent[0].innerHTML = siteContent['main-content']['features-content'];
featuresAboutContent[1].innerHTML = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesProductVisionH4 = document.querySelectorAll('.bottom-content .text-content h4');
servicesProductVisionH4[0].innerHTML = siteContent['main-content']['services-h4'];
servicesProductVisionH4[1].innerHTML = siteContent['main-content']['product-h4'];
servicesProductVisionH4[2].innerHTML = siteContent['main-content']['vision-h4'];

let servicesProductVisionContent = document.querySelectorAll('.bottom-content .text-content p');
servicesProductVisionContent[0].innerHTML = siteContent['main-content']['services-content'];
servicesProductVisionContent[1].innerHTML = siteContent['main-content']['product-content'];
servicesProductVisionContent[2].innerHTML = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerHTML = siteContent['contact']['address'];
contactContent[1].innerHTML = siteContent['contact']['phone'];
contactContent[2].innerHTML = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];

let makeNavGreen = document.querySelectorAll('a');

makeNavGreen.forEach(function(item) {
  item.setAttribute('style', 'color: green;');
});

let nav = document.querySelector('nav');
let newLink = document.createElement('a');
let pizza = document.createElement('a');

nav.appendChild(newLink).innerHTML = 'New Link';
newLink.setAttribute('href', '#');
newLink.setAttribute('style', 'color: green;');

nav.appendChild(pizza).innerHTML = 'Pizza';
pizza.setAttribute('href', '#');
pizza.setAttribute('style', 'color: green;');

let changeTextFont = document.querySelectorAll('.text-content');
changeTextFont[0].setAttribute('style', 'color: red;');
changeTextFont[1].setAttribute('style', 'color: MediumSeaGreen;');
changeTextFont[2].setAttribute('style', 'color: slateblue;');
changeTextFont[3].setAttribute('style', 'color: violet;');
changeTextFont[4].setAttribute('style', 'color: tomato;');



