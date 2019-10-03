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

const myASelection = document.querySelector('a');
const myTextSelection = document.querySelector('.text-content');

const customImage = document.querySelector('#cta-img');
customImage.src = 'img/header-img.png';

// task 2


const navbar = document.querySelectorAll('nav a');
for(let i = 1;i<7;i++){
navbar[i-1].textContent = siteContent.nav[`nav-item-${i}`]};


//Dom is Awesome
const domIs = document.querySelector('.cta .cta-text h1');
domIs.textContent = siteContent["cta"]["h1"];

//Get Started Button
const domButton = document.querySelector('.cta .cta-text button');
domButton.textContent = siteContent.cta['button'];


//middle header4s
const midSection = document.querySelectorAll('.top-content .text-content h4');


midSection[0].textContent = siteContent["main-content"]["features-h4"];
midSection[1].textContent = siteContent["main-content"]["about-h4"];


//middle paragraphs
const midSectionP = document.querySelectorAll('.top-content .text-content p');

midSectionP[0].textContent = siteContent["main-content"]["features-content"];
midSectionP[1].textContent = siteContent["main-content"]["about-content"];


//middle image
const midImage = document.querySelector('.middle-img');
midImage.src = "img/mid-page-accent.jpg";

//middle section bottom headers
const botSection = document.querySelectorAll('.bottom-content .text-content h4');
botSection[0].textContent = siteContent["main-content"]["services-h4"];
botSection[1].textContent = siteContent["main-content"]["product-h4"];
botSection[2].textContent = siteContent["main-content"]["vision-h4"];

//middle section bottom paragraphs
const botSectionP = document.querySelectorAll('.bottom-content .text-content p');
botSectionP[0].textContent = siteContent["main-content"]["services-content"];
botSectionP[1].textContent = siteContent["main-content"]["product-content"];
botSectionP[2].textContent = siteContent["main-content"]["vision-content"];

//contact section
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent["contact"]["contact-h4"];

const contactsP = document.querySelectorAll('.contact p');
contactsP[0].textContent = siteContent["contact"]["address"];
contactsP[1].textContent = siteContent["contact"]["phone"];
contactsP[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


//green nav bar
const navbarGreen = document.querySelectorAll('nav a');
for(let i = 1;i<7;i++){
navbarGreen[i-1].style.color = 'green'};

//app and prepend
const navbarParent = document.querySelector('nav');
const hello = document.createElement('a');
hello.textContent="Hello"
navbarParent.append(hello);

const hello1 = document.createElement('a');
hello1.textContent="Hello"
navbarParent.prepend(hello1);



