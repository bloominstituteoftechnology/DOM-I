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
let logo1 = document.getElementById("logo-img");
logo1.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation section
let nav = document.querySelectorAll('a');

// This will add the content to each 'a'
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

// This will change the color to green
nav.forEach(link => link.style.color = 'green')

// This will create two new Navigation Links -- a tags
const aNav1 = document.createElement('a');
const mNav1 = document.querySelector('nav');
aNav1.textContent = "Reviews";
aNav1.href = "#";
mNav1.prepend(aNav1);
aNav1.style.color = 'green';

const aNav2 = document.createElement('a');
const mNav2 = document.querySelector('nav');
aNav2.textContent = "Testimonies";
aNav2.href = "#";
mNav2.append(aNav2);
aNav2.style.color = 'green';

// Beginning of Main Content DOM Manipulation
// Header
let header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

// Button
let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Img
let logo2 = document.querySelector("#cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content
let mContent = document.querySelectorAll('.text-content');
mContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
mContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
mContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
mContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];
mContent[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
mContent[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
mContent[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
mContent[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
mContent[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
mContent[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// Img
let logo3 = document.querySelector('#middle-img');
logo3.setAttribute('src',siteContent['main-content']['middle-img-src'])

// Contact Section
let contact = document.querySelector('.contact');
contact.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];
