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

// Set the Nav links
const menu = document.getElementsByTagName('a');
menu[0].textContent = siteContent['nav']['nav-item-1'];
menu[1].textContent = siteContent['nav']['nav-item-2'];
menu[2].textContent = siteContent['nav']['nav-item-3'];
menu[3].textContent = siteContent['nav']['nav-item-4'];
menu[4].textContent = siteContent['nav']['nav-item-5'];
menu[5].textContent = siteContent['nav']['nav-item-6'];

// Set main picture on site
const mainPic = document.getElementById("cta-img");
mainPic.setAttribute('src',siteContent['cta']["img-src"]);

// Set CTA elements
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Set main content
const topHeader = document.querySelectorAll('.main-content .top-content .text-content h4');
topHeader[0].textContent = siteContent['main-content']['features-h4'];
topHeader[1].textContent = siteContent['main-content']['about-h4'];

const topParagraph = document.querySelectorAll('.main-content .top-content .text-content p');
topParagraph[0].textContent = siteContent['main-content']['features-content'];
topParagraph[1].textContent = siteContent['main-content']['about-content'];

const middlePicture = document.getElementById('middle-img');
middlePicture.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomHeader = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomHeader[0].textContent = siteContent['main-content']['services-h4'];
bottomHeader[1].textContent = siteContent['main-content']['product-h4'];
bottomHeader[2].textContent = siteContent['main-content']['vision-h4'];

const bottomParagraph = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomParagraph[0].textContent = siteContent['main-content']['services-content'];
bottomParagraph[1].textContent = siteContent['main-content']['product-content'];
bottomParagraph[2].textContent = siteContent['main-content']['vision-content'];

// Set contact info
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].textContent = siteContent['contact']['address'];
contactParagraph[1].textContent = siteContent['contact']['phone'];
contactParagraph[2].textContent = siteContent['contact']['email'];

// Set footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

// Change the color of the navigation text to green
const navItems = document.querySelectorAll('a')

navItems.forEach(element => {
  element.style.color = "green";
})

// Add two ne items with .appendChild() and .prepend()
const parent = document.querySelector("nav");

const link1 = document.createElement("a")
link1.textContent = "New item";
parent.appendChild(link1);

const link2 = document.createElement("a")
link2.textContent = "Other new item";
parent.prepend(link2);
