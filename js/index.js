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



//Updated circle img 
let circ = document.getElementById("cta-img");
circ.setAttribute('src', siteContent["cta"]["img-src"]);



//Updated middle long img
let longImg = document.getElementById("middle-img");
longImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



//Updated text for nav
const links = document.querySelectorAll('nav a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];



//Updated cta text div
const headOne = document.querySelector('.cta-text h1');
headOne.textContent = siteContent['cta']['h1'];

const ctaBut = document.querySelector('.cta-text button')
ctaBut.textContent = siteContent['cta']['button'];



//top content
const feature = document.querySelectorAll('.main-content .text-content h4');
feature[0].textContent = siteContent['main-content']['features-h4']; 

const featurePara = document.querySelectorAll('.main-content .text-content p')
featurePara[0].textContent = siteContent['main-content']['features-content'];

const about = document.querySelectorAll('.main-content .text-content h4');
about[1].textContent = siteContent['main-content']['about-h4'];

const aboutPara = document.querySelectorAll('.main-content .text-content p');
aboutPara[1].textContent = siteContent['main-content']['about-content'];



//bottom content
const services = document.querySelectorAll('.main-content .text-content h4');
services[2].textContent = siteContent['main-content']['services-h4'];

const servicesPara = document.querySelectorAll('.main-content .text-content p');
servicesPara[2].textContent = siteContent['main-content']['services-content'];

const product = document.querySelectorAll('.main-content .text-content h4');
product[3].textContent = siteContent['main-content']['product-h4'];

const productPara = document.querySelectorAll('.main-content .text-content p');
productPara[3].textContent = siteContent['main-content']['product-content'];

const vision = document.querySelectorAll('.main-content .text-content h4');
vision[4].textContent = siteContent['main-content']['vision-h4'];

const visionPara = document.querySelectorAll('.main-content .text-content p');
visionPara[4].textContent = siteContent['main-content']['vision-content'];



//contact content
const con = document.querySelector('.contact h4');
con.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent['contact']['address'];

const phone = document.querySelectorAll('.contact p');
phone[1].textContent = siteContent['contact']['phone'];

const email = document.querySelectorAll('.contact p');
email[2].textContent = siteContent['contact']['email'];



//footer content
const foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];