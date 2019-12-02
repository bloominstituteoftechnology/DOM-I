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

//TASK 1, ITEM 1
let navSelector = document.querySelector('nav');
const navATag = document.querySelectorAll('a');
//--------------


//TASK 2, ITEM 2
const navAOne = navATag[0];
navAOne.textContent = 'Services';

const navATwo = navATag[1];
navATwo.textContent = 'Product';

const navAThree = navATag[2];
navAThree.textContent = 'Vision';

const navAFour = navATag[3];
navAFour.textContent = 'Features';

const navAFive = navATag[4];
navAFive.textContent = 'About';

const navASix = navATag[5];
navASix.textContent = 'Contact';
//---------------


//TASK 2, ITEM 3
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//--------------


//TASK 3, ITEM 1
navATag.forEach(item => item.style.color = 'green');
//--------------


//TASK 3, ITEM 2
const newNavATag1 = document.createElement('a');
const newNavATag2 = document.createElement('a');

newNavATag1.textContent = 'End';
newNavATag1.style.color = 'green';
navSelector.appendChild(newNavATag1);

newNavATag2.textContent = 'Home';
newNavATag2.style.color = 'green';
navSelector.prepend(newNavATag2);
//---------------


//TASK 2, ITEM 2
//---h1---
const headerSelector = document.querySelector('h1');
headerSelector.setAttribute('style', 'white-space:pre');
headerSelector.textContent = 'Dom \r\n Is \r\n Awesome';
headerSelector.style.color = 'dodgerblue';
headerSelector.style.width = '15rem';

//---button---
const buttonSelector = document.querySelector('button');
// buttonSelector.setAttribute('style');
buttonSelector.textContent = 'Get Started';
buttonSelector.style.background = 'dodgerblue';
buttonSelector.style.color = 'white';
buttonSelector.style.borderColor = 'green';

//---main-content---
const mainTitle = document.querySelectorAll('h4');
// mainTitle.style.color = 'green';
const mainText = document.querySelectorAll('p');

const titleOne = mainTitle[0];
const textOne = mainText[0];

titleOne.textContent = 'Features';
textOne.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const titleTwo = mainTitle[1];
const textTwo = mainText[1];

titleTwo.textContent = 'About';
textTwo.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const titleThree = mainTitle[2];
const textThree = mainText[2];

titleThree.textContent = 'Services';
textThree.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const titleFour = mainTitle[3];
const textFour = mainText[3];

titleFour.textContent = 'Product';
textFour.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const titleFive = mainTitle[4];
const textFive = mainText[4];

titleFive.textContent = 'Vision';
textFive.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//---contact---
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'Contact Us';

const contactPara = document.querySelectorAll('.contact p');
const contactPara1 = contactPara[0];
const contactPara2 = contactPara[1];
const contactPara3 = contactPara[2];

contactPara1.setAttribute('style', 'white-space: pre;');
contactPara1.textContent = '123 Way 456 Street \r\n Somewhere, USA';

contactPara2.textContent = '1 (888) 888-8888';
contactPara3.textContent = 'sales@greatidea.io';


//---footer---
const footerSelector = document.querySelector('footer p');
footerSelector.textContent = 'Copyright Great Idea! 2018'
//--------------