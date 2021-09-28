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

//Add Image of a code snippet
let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"]);

//Add Image of code snippets across the screen
let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Add nav a content
const first_a = document.querySelector('a:nth-of-type(1)');
first_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-1"]} </a>`;

const second_a = document.querySelector('a:nth-of-type(2)');
second_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-2"]} </a>`;

const third_a = document.querySelector('a:nth-of-type(3)');
third_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-3"]} </a>`;

const fourth_a = document.querySelector('a:nth-of-type(4)');
fourth_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-4"]} </a>`;

const fifth_a = document.querySelector('a:nth-of-type(5)');
fourth_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-5"]} </a>`;

const sixth_a = document.querySelector('a:nth-of-type(6)');
sixth_a.innerHTML = `<a href="#"> ${siteContent["nav"]["nav-item-6"]} </a>`;

// Add h1 tag content
const h1_Tag = document.querySelector('h1');
h1_Tag.innerHTML = `<h1>DOM <br> Is<br> Awesome  </h1>`;

//Add button name
const butn = document.querySelector('button');
butn.textContent = siteContent["cta"]["button"];

// Add top Content
const topContent = document.querySelector('.top-content');
const textContentLeft = topContent.querySelector('.text-content');
const textContentRight = textContentLeft.nextElementSibling;

const h4TopLeft = textContentLeft.querySelector('h4');
const pTopLeft = textContentLeft.querySelector('p');
h4TopLeft.innerHTML = `<h4> ${siteContent["main-content"]["features-h4"]} </h4>`;
pTopLeft.innerHTML = `<p> ${siteContent["main-content"]["features-content"]} </p>`;

const h4TopRight = textContentRight.querySelector('h4');
const pTopRight = textContentRight.querySelector('p');
h4TopRight.innerHTML = `<h4> ${siteContent["main-content"]["about-h4"]} </h4>`;
pTopRight.innerHTML = `<p> ${siteContent["main-content"]["about-content"]} </p>`;

// Add bottom Content
const bottomContent = document.querySelector('.bottom-content');
const textBtmContentLeft = bottomContent.querySelector('.text-content');
const textBtmContentMiddle = textBtmContentLeft.nextElementSibling;
const textBtmContentRight = textBtmContentMiddle.nextElementSibling;

const h4BtmLeft = textBtmContentLeft.querySelector('h4');
const pBtmLeft = textBtmContentLeft.querySelector('p');
h4BtmLeft.innerHTML = `<h4> ${siteContent["main-content"]["services-h4"]} </h4>`;
pBtmLeft.innerHTML = `<p> ${siteContent["main-content"]["services-content"]} </p>`;

const h4BtmMiddle = textBtmContentMiddle.querySelector('h4');
const pBtmMiddle = textBtmContentMiddle.querySelector('p');
h4BtmMiddle.innerHTML = `<h4> ${siteContent["main-content"]["product-h4"]} </h4>`;
pBtmMiddle.innerHTML = `<p> ${siteContent["main-content"]["product-content"]} </p>`;

const h4BtmRight = textBtmContentRight.querySelector('h4');
const pBtmRight = textBtmContentRight.querySelector('p');
h4BtmRight.innerHTML = `<h4> ${siteContent["main-content"]["vision-h4"]} </h4>`;
pBtmRight.innerHTML = `<p> ${siteContent["main-content"]["vision-content"]} </p>`;

// Add contact section
const contactSec = document.querySelector('.contact');
const h4Contact = contactSec.querySelector('h4');
const addr = h4Contact.nextElementSibling;
const tel = addr.nextElementSibling;
const email = tel.nextElementSibling;

h4Contact.innerHTML = `<h4> ${siteContent["contact"]["contact-h4"]} </h4>`;
addr.innerHTML = `<p> ${siteContent["contact"]["address"]} </p>`;
tel.innerHTML = `<p> ${siteContent["contact"]["phone"]} </p>`;
email.innerHTML = `<p> ${siteContent["contact"]["email"]} </p>`;

//Add footer section
const footerSec = document.querySelector('footer');
const pFooter = footerSec.querySelector('p');

pFooter.innerHTML = `<p> ${siteContent["footer"]["copyright"]} </p>`;