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

let callTo = document.getElementById("cta-img");
callTo.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const links = Object.values(siteContent.nav);
const nlist = document.querySelectorAll('nav a');

nlist.forEach(
  function(aspot, i) {
    aspot.textContent = links[i];
    document.querySelectorAll('nav a')[i].setAttribute('style', 'color: green');
  }
);

// nlist.forEach(
//   (curval, i) => {
//     document.querySelectorAll('nav a')[i].setAttribute('style', 'color: green');
//   }
// );



const navlink1 = document.createElement('a');
const navlink2 = document.createElement('a');

navlink1.textContent = 'Staff';
navlink1.setAttribute('style', 'color:green')
navlink1.href = "#";

navlink2.textContent = 'Etc';
navlink2.setAttribute('style', 'color:green')
navlink2.href = "#";

document.querySelector("nav").prepend(navlink1);

document.querySelector("nav").appendChild(navlink2);


document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.h1;

//content

let mainCont = document.querySelector('.top-content');


let featCont = mainCont.children[0];
let featHead = featCont.children[0];
let featText = featCont.children[1];

featHead.textContent = siteContent["main-content"]["features-h4"];
featText.textContent = siteContent["main-content"]["features-content"];

let aboutContent = mainCont.children[1];
let aboutHeader = aboutContent.children[0];
let aboutText = aboutContent.children[1];

aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];


let subCont = document.querySelector('.bottom-content');

let servicesContent = subCont.children[0];
let servHeader = servicesContent.children[0];
let servText = servicesContent.children[1];

servHeader.textContent = siteContent["main-content"]["services-h4"];
servText.textContent = siteContent["main-content"]["services-content"];

let prodContent = subCont.children[1];
let prodHeader = prodContent.children[0];
let prodText = prodContent.children[1];

prodHeader.textContent = siteContent["main-content"]["product-h4"];
prodText.textContent = siteContent["main-content"]["product-content"];

let visionContent = subCont.children[2];
let visionHeader = visionContent.children[0];
let visionText = visionContent.children[1];

visionHeader.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector('.contact');

let contactHeader = contact.children[0];
let contactAddress = contact.children[1];
let contactPhone = contact.children[2];
let contactEmail = contact.children[3];

contactHeader.textContent = siteContent.contact["contact-h4"];
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

let footerContent = document.querySelector('footer');
let footerText = footerContent.children[0];

footerText.textContent = siteContent.footer.copyright;

document.querySelector("button").setAttribute('style', 'background-color: green; color: white; border-radius: 3px;');
document.querySelector("button").setAttribute('style', 'background-color: green; color: white; border-radius: 3px;');

document.querySelector("footer").setAttribute('style', 'font-size: 6em;');

// const buttonlisten = document.querySelector("button").addEventListener('mouseenter', event =>)