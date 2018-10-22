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

// so i can make a darn pr 

const nav = document.querySelectorAll('nav a');
console.log(nav);

nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const ctaImg = document.querySelector('#cta-img');
console.log(ctaImg);
ctaImg.src = siteContent.cta['img-src'];


const ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent.cta['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];



const mainContentText = document.querySelectorAll('.main-content h4');
mainContentText[0].textContent = siteContent["main-content"]['features-h4'];
mainContentText[1].textContent = siteContent["main-content"]['about-h4'];
mainContentText[2].textContent = siteContent["main-content"]['services-h4'];
mainContentText[3].textContent = siteContent["main-content"]['product-h4'];
mainContentText[4].textContent = siteContent["main-content"]['vision-h4'];


const mainContentPara = document.querySelectorAll('.main-content p');
mainContentPara[0].textContent = siteContent["main-content"]['features-content'];
mainContentPara[1].textContent = siteContent["main-content"]['about-content'];
mainContentPara[2].textContent = siteContent["main-content"]['services-content'];
mainContentPara[3].textContent = siteContent["main-content"]['product-content'];
mainContentPara[4].textContent = siteContent["main-content"]['vision-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]['middle-img-src'];

//contact info and other stuff
const contactText = document.querySelector('.contact h4');
contactText.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent.contact['address'];
contactInfo[1].textContent = siteContent.contact['phone'];
contactInfo[2].textContent = siteContent.contact['email'];

//footer stuff
document.querySelector('footer p').textContent = siteContent.footer.copyright; //lol i guess i dont need bracket notation

// Try out a loop, worked but i want to use arrow syntax
// for (let i = 0; i < nav.length; i++) {
//   nav[i].style.color = 'green';
// }

navBarGreen = Array.from(document.querySelectorAll('nav a'));
navBarGreen.map(element => element.style.color = 'green');

const nE = document.createElement('a');
nE.textContent = 'Chocolate is Life';

const nE2 = document.createElement('a');
nE2.textContent = 'Go to sleep, Trevor';


const navNew = document.querySelector('nav a');

navNew.prepend(nE);
navNew.append(nE2);