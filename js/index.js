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
// Img generation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const cta_img = document.querySelector('#cta-img');
console.log(cta_img);
cta_img.src = "img/header-img.png";
cta_img.alt = "Call to action!";

const middle_img = document.querySelector('#middle-img');
console.log(middle_img);
middle_img.src = "img/mid-page-accent.jpg";
middle_img.alt = "Middle image!";

//Text generation//

//nav
const nav_bar = document.querySelector('nav a');
console.log(nav_bar);
nav_bar.innerHTML = siteContent['nav'];
// Call to action elements
const cta_text_header = document.querySelector('.cta-text h1');
cta_text_header.innerHTML = siteContent['cta']['h1'];
const cta_button = document.querySelector('.cta-text button');
cta_button.innerHTML = siteContent['cta']['button'];
//

// Main content
// Top content headers
const top_content_text_header = document.querySelectorAll('.top-content .text-content h4');
top_content_text_header[0].innerHTML = siteContent['main-content']['features-h4'];
top_content_text_header[1].innerHTML = siteContent['main-content']['about-h4'];

// Top content text
const top_content_text_content = document.querySelectorAll('.top-content .text-content p');
top_content_text_content[0].innerHTML = siteContent['main-content']['features-content'];
top_content_text_content[1].innerHTML = siteContent['main-content']['about-content'];
//

// Bottom content headers
const bottom_content_text_header = document.querySelectorAll('.bottom-content .text-content h4');
bottom_content_text_header[0].innerHTML = siteContent['main-content']['services-h4'];
bottom_content_text_header[1].innerHTML = siteContent['main-content']['product-h4'];
bottom_content_text_header[2].innerHTML = siteContent['main-content']['vision-h4'];

// Bottom content text
const bottom_content_text_content = document.querySelectorAll('.bottom-content .text-content p');
bottom_content_text_content[0].innerHTML = siteContent['main-content']['services-content'];
bottom_content_text_content[1].innerHTML = siteContent['main-content']['product-content'];
bottom_content_text_content[2].innerHTML = siteContent['main-content']['vision-content'];
//

// Contact
const contact_header = document.querySelector('.contact h4');
contact_header.innerHTML = siteContent['contact']['contact-h4'];
const contact_text = document.querySelectorAll('.contact p');
contact_text[0].innerHTML = siteContent['contact']['address'];
contact_text[1].innerHTML = siteContent['contact']['phone'];
contact_text[2].innerHTML = siteContent['contact']['email'];

// Footer

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },