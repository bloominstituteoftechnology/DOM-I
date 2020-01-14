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


// Update links <nav>

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
link.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

//green
document.querySelectorAll('nav a').forEach(link => link.style.color = 'green');


//Update h1 
let heading1 = document.querySelector('.cta-text h1');
let headingText = document.createTextNode(siteContent["cta"]["h1"]);
heading1.appendChild(headingText);

const DomIsAwesome = headingText.splitText(3);
const textAwesome = DomIsAwesome.splitText(3);

const firstBr = document.createElement('br');
const secondBr = document.createElement('br');

heading1.insertBefore(firstBr, DomIsAwesome);
heading1.insertBefore(secondBr, textAwesome);


// Update button

let btn = document.querySelector('.cta-text').querySelector('button');
btn.textContent = siteContent["cta"]["button"];

// Update  Snip image

let imageSnip = document.getElementById('cta-img');
imageSnip.setAttribute('src', siteContent['cta']['img-src'])

// Update middle image

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Update main Content
let mainContent = document.querySelector('.main-content').querySelectorAll('.text-content');

mainContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
mainContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
mainContent[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
mainContent[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
mainContent[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];

mainContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
mainContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];
mainContent[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
mainContent[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
mainContent[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// Update contact

let contact = document.querySelector(".contact");

contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];



// Update footer

let copyright = document.querySelector("footer");
copyright.children[0].textContent = siteContent["footer"]["copyright"];