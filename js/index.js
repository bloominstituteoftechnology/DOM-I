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
logo.src = "img/logo.png";

const articles = document.querySelectorAll('a');
articles[0].textContent = "Services";
articles[1].textContent = "Product";
articles[2].textContent = "Vision";
articles[3].textContent = "Features";
articles[4].textContent = "About";
articles[5].textContent = "Contact";

const title = document.querySelector('h1');
title.textContent = 'DOM Is Awesome';
const button = document.querySelector('button');
button.textContent = "Get Started";

const image = document.getElementById("cta-img");
image.src = "img/header-img.png";

const header = document.querySelectorAll('h4');
header[0].textContent = 'Features';
header[1].textContent = 'About';

const paragraph = document.querySelectorAll('p');
paragraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImage = document.getElementById("middle-img");
midImage.src = 'img/mid-page-accent.jpg'

header[2].textContent = 'Services';
header[3].textContent = 'Product';
header[4].textContent = 'Vision';

paragraph[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraph[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraph[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const contactH = document.querySelector('.contact h4');
contactH.textContent = "Contact";

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

const helpElement = document.createElement('a');
helpElement.href = '#';
helpElement.textContent = 'Help';

const staffElement = document.createElement('a');
staffElement.href = '#';
staffElement.textContent = 'Staff';

 const mainNav = document.querySelector('nav');
 mainNav.append(helpElement);
 mainNav.append(staffElement);

const footerTxt = document.querySelector('footer');
footerTxt.textContent = 'Copyright Great Idea! 2018';
const navigation = document.querySelectorAll('nav a');
navigation.forEach(function(element){
  element.style.color = "green"

})

