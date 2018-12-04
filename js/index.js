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
    "button": "Randomize Color",
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


// Adding new elements to nav


const newFirst = document.createElement('a');
const newLast = document.createElement('a');

newFirst.href = '#';
newFirst.textContent = `I'm First`;
newLast.href = '#';
newLast.textContent = `I'm Last`;

const navBar = document.querySelector('nav');
navBar.prepend(newFirst);
navBar.appendChild(newLast);

const navItems = document.querySelectorAll('a');

navItems.forEach(item => item.style.color = getRandomColor());

// nav DOM manipulation

navItems[1].textContent = siteContent.nav["nav-item-1"];
navItems[2].textContent = siteContent.nav["nav-item-2"];
navItems[3].textContent = siteContent.nav["nav-item-3"];
navItems[4].textContent = siteContent.nav["nav-item-4"];
navItems[5].textContent = siteContent.nav["nav-item-5"];
navItems[6].textContent = siteContent.nav["nav-item-6"];



// CTA DOM manipulation
const mainHeaderText = document.querySelector('h1');
const button = document.querySelector('button');
const headerImage = document.querySelector('#cta-img');


mainHeaderText.textContent = `${siteContent.cta.h1.slice(0,3)} \r\n`;
mainHeaderText.textContent += `${siteContent.cta.h1.slice(4,6)} \r\n`;
mainHeaderText.textContent += `${siteContent.cta.h1.slice(7)}`;
mainHeaderText.style.whiteSpace = 'pre-line';
button.textContent = siteContent.cta.button;
headerImage.src = siteContent.cta["img-src"];
button.onclick = function() {
  mainHeaderText.style.color = getRandomColor();
  navItems.forEach(item => item.style.color = getRandomColor());
}

// Main Content DOM Manipulation
const topH4 = document.querySelectorAll('.main-content .top-content .text-content h4');
const topContent = document.querySelectorAll('.main-content .top-content .text-content p');
const middleImage = document.querySelector('#middle-img');
const bottomH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
const bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content p');

topH4[0].textContent =  siteContent["main-content"]["features-h4"];
topH4[1].textContent =  siteContent["main-content"]["about-h4"];
topContent[0].textContent =  siteContent["main-content"]["features-content"];
topContent[1].textContent =  siteContent["main-content"]["about-content"];
middleImage.src = siteContent["main-content"]["middle-img-src"];
bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[0].textContent =  siteContent["main-content"]["services-content"];
bottomContent[1].textContent =  siteContent["main-content"]["product-content"];
bottomContent[2].textContent =  siteContent["main-content"]["vision-content"];

// Contact DOM manipulation
const contactH4 = document.querySelector('.contact h4');
const contactParagraphs = document.querySelectorAll('.contact p');
contactH4.textContent = siteContent.contact["contact-h4"];
contactParagraphs[0].textContent = `${siteContent.contact.address.slice(0,18)} \r\n`;
contactParagraphs[0].textContent += `${siteContent.contact.address.slice(19)} \r\n`;
contactParagraphs[0].style.whiteSpace = 'pre-line';
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// Footer DOM manipulation
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

// Adding a button to change nav color

// const container = document.querySelector('.container');
// const topButton = document.createElement('button')
// topButton.textContent = 'Click me to change the nav colors!!!';
// container.prepend(topButton);
// topButton.onclick = function() {
//   navItems.forEach(item => item.style.color = getRandomColor());
// }
// topButton.style.display = 'block';
// topButton.style.marginTop = '20px';
// topButton.style.borderRadius = '5px';
// topButton.style.padding = '10px 5px';
// topButton.style.fontSize = '20px';
// topButton.style.background = 'black';
// topButton.style.color = 'white';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}












