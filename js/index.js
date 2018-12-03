const siteContent = {
  "nav": {
    "nav-item-0": "Services",
    "nav-item-1": "Product",
    "nav-item-2": "Vision",
    "nav-item-3": "Features",
    "nav-item-4": "About",
    "nav-item-5": "Contact",
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
logo.setAttribute('src', "img/logo.png")

const codeImg = document.querySelector('#cta-img');

codeImg.src = siteContent.cta["img-src"];

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent[`main-content`]["middle-img-src"];

//nav

const nav = document.querySelector("nav");

const navArray = Array.from(document.querySelectorAll('a'))

for(let i in navArray){
  navArray[i].textContent = siteContent.nav[`nav-item-${i}`];
}

//navend

const cta = document.querySelector(".cta");

cta.querySelector('h1').textContent = siteContent.cta.h1;
cta.querySelector('button').textContent = siteContent.cta.button;

//cta end

const main = document.querySelector('.main-content');

main.querySelectorAll('h4')[0].textContent = siteContent[`main-content`]["features-h4"];
main.querySelectorAll('p')[0].textContent = siteContent[`main-content`]["features-content"];

main.querySelectorAll('h4')[1].textContent = siteContent[`main-content`]["about-h4"];
main.querySelectorAll('p')[1].textContent = siteContent[`main-content`]["about-content"];

main.querySelectorAll('h4')[2].textContent = siteContent[`main-content`]["services-h4"];
main.querySelectorAll('p')[2].textContent = siteContent[`main-content`]["services-content"];

main.querySelectorAll('h4')[3].textContent = siteContent[`main-content`]["product-h4"];
main.querySelectorAll('p')[3].textContent = siteContent[`main-content`]["product-content"];

main.querySelectorAll('h4')[4].textContent = siteContent[`main-content`]["vision-h4"];
main.querySelectorAll('p')[4].textContent = siteContent[`main-content`]["vision-content"];

//main end

const contact = document.querySelector('.contact');

contact.querySelector('h4').textContent = siteContent.contact["contact-h4"];
contact.querySelectorAll('p')[0].textContent = siteContent.contact.address;
contact.querySelectorAll('p')[1].textContent = siteContent.contact.phone;
contact.querySelectorAll('p')[2].textContent = siteContent.contact.email;

//contact end

const footer = document.querySelector('footer');

footer.querySelector('p').textContent = siteContent.footer.copyright