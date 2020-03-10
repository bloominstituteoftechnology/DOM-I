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
    "address": "123 Way 456 Street Somewhere, USA",
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

// Selectors - Task 1
const nav = document.querySelectorAll('nav a');
const cta = document.querySelectorAll('.cta');
const title = document.querySelector('h1');
const header_img = document.getElementById('cta-img');
const ctaButton = document.querySelector('button');
const mainContentH4 = document.querySelectorAll('.main-content h4');
const mainContentP = document.querySelectorAll('.main-content p');
const middle_img = document.getElementById('middle-img');
const contactHeader = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
const footer = document.querySelector('footer');


// Task 2: Update the HTML with the JSON data

//Navigation menu
nav.forEach(element => {
  nav[0].textContent = siteContent.nav["nav-item-1"];
  nav[1].textContent = siteContent.nav["nav-item-2"];
  nav[2].textContent = siteContent.nav["nav-item-3"];
  nav[3].textContent = siteContent.nav["nav-item-4"];
  nav[4].textContent = siteContent.nav["nav-item-5"];
  nav[5].textContent = siteContent.nav["nav-item-6"];

});
// change nav text to green
nav.forEach(element => {
  element.style.color = 'green';
});

const newNav = document.querySelector('nav')

// Create 2 new elements
const newLink1 = document.createElement('a')
newLink1.textContent = 'Portfolio';
newLink1.href = '#';
newLink1.style.color = 'green';
const newLink2 = document.createElement('a')
newLink2.textContent = 'Portfolio';
newLink2.href = '#';
newLink2.style.color = 'green';

// .appendChild() + Prepend()
newNav.appendChild(newLink1);
newNav.prepend(newLink2)



//CTA Section
header_img.src = siteContent.cta["img-src"]
title.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaButton.style.color = 'blue'

// Main Content


mainContentH4.forEach(element => {
  mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
  mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
  mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
  mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
  mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
});
middle_img.src = 'img/mid-page-accent.jpg'

mainContentH4.forEach(element => {
  mainContentP[0].textContent = siteContent["main-content"]["features-content"];
  mainContentP[1].textContent = siteContent["main-content"]["about-content"];
  mainContentP[2].textContent = siteContent["main-content"]["services-content"];
  mainContentP[3].textContent = siteContent["main-content"]["product-content"];
  mainContentP[4].textContent = siteContent["main-content"]["vision-content"];
});

//Contact
contactHeader.textContent = siteContent.contact["contact-h4"];
contactP.forEach(element => {
  contactP[0].textContent = siteContent.contact.address;
  contactP[1].textContent = siteContent.contact.phone;
  contactP[2].textContent = siteContent.contact.email;

});

//footer
footer.textContent = siteContent.footer.copyright

//Stretch
mainContentH4.forEach(element => {
  element.style.color = 'orange';
});
contactP.forEach(element => {

  element.style.background = '#ffc87c';
});

//add event listener
document.querySelector('button').addEventListener('click', function () {
  alert('I have been clicked')
  // let orangeColor = document.querySelector('body').style.color = '#ffc87c';
});