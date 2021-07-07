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





// ****Task 2****

//****navigation bar****

const navigation = document.querySelector('nav');
console.log(navigation);

const a1 = navigation.querySelector('a');
a1.textContent = siteContent['nav']['nav-item-1'];

const a2 = a1.nextElementSibling;
a2.textContent = siteContent['nav']['nav-item-2'];

const a3 = a2.nextElementSibling;
a3.textContent = siteContent['nav']['nav-item-3'];

const a4 = a3.nextElementSibling;
a4.textContent = siteContent['nav']['nav-item-4'];

const a5 = a4.nextElementSibling;
a5.textContent = siteContent['nav']['nav-item-5'];

const a6 = a5.nextElementSibling;
a6.textContent = siteContent['nav']['nav-item-6'];

//****title/pic****

const titulo = document.querySelector('h1');
titulo.textContent = siteContent['cta'] ['h1']

const pulsador = document.querySelector('button');
pulsador.textContent = siteContent['cta'] ['button'];

let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);

//**** main content ****


// features
const feats = document.querySelector(".top-content .text-content");

const featsKids = feats.childNodes;

const featsTitle = featsKids[1];
featsTitle.textContent = siteContent['main-content']['features-h4'];

const featsPara = featsKids[3];
featsPara.textContent = siteContent['main-content']['features-content'];


/// about
const topContents = document.querySelectorAll(".top-content .text-content");

const aboutSec = topContents[1];
const aboutKids = aboutSec.childNodes;

const aboutTitle = aboutKids[1]
aboutTitle.textContent = siteContent['main-content']['about-h4'];

const aboutBody = aboutKids[2];
aboutBody.textContent = siteContent['main-content']['about-content'];


/// services

const bottomContents = document.querySelectorAll('.bottom-content .text-content');

console.log(bottomContents)

const servSec = bottomContents[0]
const servKids = servSec.childNodes;

const servTitle = servKids[1]
servTitle.textContent = siteContent['main-content']['services-h4']

const servPara = servKids[2]
servPara.textContent = siteContent['main-content']['services-content']


/// product

const prodSec = bottomContents[1];
const prodKids = prodSec.childNodes;

const prodTitle = prodKids[1];
prodTitle.textContent = siteContent['main-content']['product-h4']

const prodPara = prodKids[2]
prodPara.textContent = siteContent['main-content']['product-content']


///vision

const visSec = bottomContents[2];
const visKids = visSec.childNodes;

const visTitle = visKids[1];
visTitle.textContent = siteContent['main-content']['vision-h4']

const visPara = visKids[2]
visPara.textContent = siteContent['main-content']['vision-content']




// *** img across ***

let crossImg = document.getElementById('middle-img');
crossImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


// *** footer ***

const contactInfo = document.querySelector('.contact');

const contactKids = contactInfo.childNodes;
const contackTitle = contactKids[0];
contackTitle.textContent = siteContent ['contact']['contact-h4']

const contactAdd = contactKids[1];
contactAdd.textContent = siteContent ['contact']['address'];

const contactPhone = contactKids[2];
contactPhone.textContent = siteContent ['contact']['phone'];

const contactEmail = contactKids[3];
contactEmail.textContent = siteContent ['contact']['email'];

const trademark = document.querySelector('footer');

const tradeKids = trademark.childNodes;

const tradeBody = tradeKids[0];
tradeBody.textContent = siteContent['footer']['copyright']


/// Part 3

a1.style.color = 'green';
a2.style.color = 'green';
a3.style.color = 'green';
a4.style.color = 'green';
a5.style.color = 'green';
a6.style.color = 'green';

const preWel = document.createElement('a');
preWel.setAttribute('href', '#')
preWel.style.color = 'green';
preWel.textContent = 'Welcome';
console.log(preWel);
navigation.prepend(preWel);

const appHir = document.createElement('a');
appHir.setAttribute('href', '#')
appHir.style.color = 'green';
appHir.textContent = 'Hiring';
navigation.append(appHir)

const allNav = navigation.childNodes;

// const allNavText = allNav.querySelectorAll('text');

// navigation.appendChild('Welcome');

console.log(navigation);



// console.log(allNav);

// allNav.forEach((item) => {item.class = 'greeny'});

// const navID = document.querySelectorAll('greeny');

// navID.forEach((item) => {item.style.color = 'green';});










