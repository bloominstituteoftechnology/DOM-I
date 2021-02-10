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

let navbar = document.querySelector('nav');
let cta = document.querySelector('section.cta');
let ctaImage = cta.querySelector('img#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
let button = cta.querySelector('div.cta-text button');
button.innerText = siteContent['cta']['button'];

let mainContent = document.querySelector('section.main-content');

let topContent = mainContent.querySelector('.top-content');
let textContentTopLeft = topContent.querySelectorAll('.text-content')[0];
textContentTopLeft.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textContentTopLeft.querySelector('p').textContent = siteContent['main-content']['features-content'];

let textContentTopRight = topContent.querySelectorAll('.text-content')[1];
textContentTopRight.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textContentTopRight.querySelector('p').textContent = siteContent['main-content']['about-content'];

let midImage = mainContent.querySelector('#middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContent = mainContent.querySelector('.bottom-content');
let leftBottomContent = bottomContent.querySelectorAll('.text-content')[0];
leftBottomContent.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
leftBottomContent.querySelector('p').textContent = siteContent['main-content']['services-content'];
let midBottomContent = bottomContent.querySelectorAll('.text-content')[1];
midBottomContent.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
midBottomContent.querySelector('p').textContent = siteContent['main-content']['product-content'];
let rightBottomContent = bottomContent.querySelectorAll('.text-content')[2];
rightBottomContent.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
rightBottomContent.querySelector('p').textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
contact.querySelectorAll('p')[0].innerHTML = siteContent['contact']['address'].slice(0, 18) + '<br>' + siteContent['contact']['address'].slice(18);
contact.querySelectorAll('p')[1].textContent = siteContent['contact']['phone'];
contact.querySelectorAll('p')[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.querySelector('p').innerText = siteContent['footer']['copyright'];