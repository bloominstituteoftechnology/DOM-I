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

// --------------------------------------------------------

let nav1 = document.querySelectorAll("a");

nav1.forEach(function(value, i) {
  value.textContent = siteContent.nav[`nav-item-${i+1}`];
});

const dia = document.querySelector('h1');
dia.textContent = siteContent.cta.h1

const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
ctaHeading.style.color = 'dodgerblue';

const bigImg = document.getElementById('cta-img');
bigImg.src = "img/header-img.png"

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;
button.style[`background-color`] = "dodgerblue";
// button.addEventListener(click, function(event) {
//   button.textContent = "Yes it is!";
// });
// ---------------------------- headers --------------------------------

const feature = document.querySelectorAll('.top-content .text-content h4')[0];
feature.textContent = siteContent[`main-content`][`features-h4`];

const about = document.querySelectorAll('.top-content .text-content h4')[1];
about.textContent = siteContent[`main-content`][`about-h4`];

// ------------------------- paragraphs ------------------------------

const para1 = document.querySelectorAll('.top-content .text-content p')[0];
para1.textContent = siteContent[`main-content`][`features-content`];

const para2 = document.querySelectorAll('.top-content .text-content p')[1];
para2.textContent = siteContent[`main-content`][`about-content`];

// ---------------------------------------------------------------------

const litImg = document.getElementById('middle-img');
litImg.src = "img/mid-page-accent.jpg";

// ------------------------------ headers -------------------------------

const service = document.querySelectorAll('.bottom-content .text-content h4')[0];
service.textContent = siteContent[`main-content`][`services-h4`];

const product = document.querySelectorAll('.bottom-content .text-content h4')[1];
product.textContent = siteContent[`main-content`][`product-h4`];

const vision = document.querySelectorAll('.bottom-content .text-content h4')[2];
vision.textContent = siteContent[`main-content`][`vision-h4`];

// ------------------------- paragraphs ---------------------------------

const para3 = document.querySelectorAll('.bottom-content .text-content p')[0];
para3.textContent = siteContent[`main-content`][`services-content`];

const para4 = document.querySelectorAll('.bottom-content .text-content p')[1];
para4.textContent = siteContent[`main-content`][`product-content`];

const para5 = document.querySelectorAll('.bottom-content .text-content p')[2];
para5.textContent = siteContent[`main-content`][`vision-content`];

// ----------------------------------------------------------------------

const contact = document.querySelectorAll('.contact h4')[0];
contact.textContent = siteContent[`contact`][`contact-h4`];

// ----------------------------------------------------------------------

const para6 = document.querySelectorAll('.contact p')[0];
para6.textContent = siteContent[`contact`][`address`];

const para7 = document.querySelectorAll('.contact p')[1];
para7.textContent = siteContent[`contact`][`phone`];

const para8 = document.querySelectorAll('.contact p')[2];
para8.textContent = siteContent[`contact`][`email`];

// ----------------------------------------------------------------------

const foot = document.querySelector('footer p');
foot.textContent = siteContent[`footer`][`copyright`];

// ----------------------------------------------------------------------

const home = document.createElement('a');
home.textContent = "Home";

const shop = document.createElement('a');
shop.textContent = "Shop";

// ----------------------------------------------------------------------

const newnav = document.querySelector('nav');
newnav.prepend(home);

const newnav2 = document.querySelector('nav');
newnav2.appendChild(shop);

// ----------------------------------------------------------------------

const navText = document.querySelectorAll('a');
navText.forEach(element => {
  element.style.color = 'green'
});

// ----------------------------------------------------------------------

const makeLink = document.querySelectorAll('a')[0];
makeLink.href = "#";

const makeLink2 = document.querySelectorAll('a')[7];
makeLink2.href = "#";

// ----------------------------------------------------------------------
