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

//Updates the images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');
let headimage = document.getElementById("cta-img");
headimage.setAttribute('src', 'img/header-img.png');
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', 'img/mid-page-accent.jpg');
//updates the main header and button
const mainheader = document.querySelector('h1');
mainheader.textContent = 'DOM IS AWESOME'
const bigbutton = document.querySelector('button');
bigbutton.textContent = 'Get Started'
//updates the h4s throughout the page
const h4s = document.getElementsByTagName('h4');
h4s[0].textContent = 'Features';
h4s[1].textContent = 'About';
h4s[2].textContent = 'Services';
h4s[3].textContent = 'Product';
h4s[4].textContent = 'vision';
h4s[5].textContent = 'contact';
//updates the paragraphs
const theipsums = document.getElementsByTagName('p');
theipsums[0].textContent = 'Metrics investor non-disclosure agreement lean startup handshake branding innovator supply chain network effects scrum project disruptive angel investor gamification growth hacking. Twitter pivot lean startup technology interaction design MVP validation venture angel investor crowdfunding seed money android gamification.';
theipsums[1].textContent = 'Metrics investor non-disclosure agreement lean startup handshake branding innovator supply chain network effects scrum project disruptive angel investor gamification growth hacking. Twitter pivot lean startup technology interaction design MVP validation venture angel investor crowdfunding seed money android gamification.';
theipsums[2].textContent = 'Metrics investor non-disclosure agreement lean startup handshake branding innovator supply chain network effects scrum project disruptive angel investor gamification growth hacking. Twitter pivot lean startup technology interaction design MVP validation venture angel investor crowdfunding seed money android gamification.';
theipsums[3].textContent = 'Metrics investor non-disclosure agreement lean startup handshake branding innovator supply chain network effects scrum project disruptive angel investor gamification growth hacking. Twitter pivot lean startup technology interaction design MVP validation venture angel investor crowdfunding seed money android gamification.';
theipsums[4].textContent = 'Metrics investor non-disclosure agreement lean startup handshake branding innovator supply chain network effects scrum project disruptive angel investor gamification growth hacking. Twitter pivot lean startup technology interaction design MVP validation venture angel investor crowdfunding seed money android gamification.';
theipsums[5].textContent = '123 way 456 street Somewhere, USA';
theipsums[6].textContent = '1-888-888-8888';
theipsums[7].textContent = 'Sales@greatidea.io';
theipsums[8].textContent = 'Copywright Great Idea! 2018';
//fixes the a tags
const thelinks = document.getElementsByTagName('a');
console.log(thelinks);
thelinks[0].textContent = 'Services';
thelinks[1].textContent = 'Product';
thelinks[2].textContent = 'Vision';
thelinks[3].textContent = 'Features';
thelinks[4].textContent = 'About';
thelinks[5].textContent = 'Contact';

