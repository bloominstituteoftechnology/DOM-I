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
let container = document.querySelectorAll('.container')

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a')
for(i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
}
// nav[0].textContent = 'Services';
// nav[0].style.color = 'grey';
// nav[1].textContent = 'Product';
// nav[1].style.color = 'grey';
// nav[2].textContent = 'Vision';
// nav[2].style.color = 'grey';
// nav[3].textContent = 'Features';
// nav[3].style.color = 'grey';
// nav[4].textContent = 'About';
// nav[4].style.color = 'grey';
// nav[5].textContent = 'Contact';
// nav[5].style.color = 'grey';

let ctaH1 = document.querySelector('h1').innerHTML = siteContent["cta"]["h1"];
// ctaH1.textContent = 'DOM Is Awesome';
let ctaButton = document.querySelector('button').innerHTML = siteContent["cta"]["button"];
// ctaButton.textContent = 'Get Started';
let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let textContentDiv = document.querySelectorAll(".text-content");
textContentDiv[0].querySelector('h4').innerHTML = siteContent['main-content']['features-h4'];
textContentDiv[0].querySelector('p').innerHTML = siteContent['main-content']['features-content'];
textContentDiv[1].querySelector('h4').innerHTML = siteContent['main-content']['about-h4'];
textContentDiv[1].querySelector('p').innerHTML = siteContent['main-content']['about-content'];
textContentDiv[2].querySelector('h4').innerHTML = siteContent['main-content']['services-h4'];
textContentDiv[2].querySelector('p').innerHTML = siteContent['main-content']['services-content'];
textContentDiv[3].querySelector('h4').innerHTML = siteContent['main-content']['product-h4'];
textContentDiv[3].querySelector('p').innerHTML = siteContent['main-content']['product-content'];
textContentDiv[4].querySelector('h4').innerHTML = siteContent['main-content']['vision-h4'];
textContentDiv[4].querySelector('p').innerHTML = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contact = document.querySelector('.contact');
contact.querySelector('h4').innerHTML = siteContent["contact"]["contact-h4"];

let contactP = contact.querySelectorAll('p');

// let contact = document.querySelectorAll('.contact');
// contact[0].querySelector('h4').innerHTML = siteContent["contact"]["contact-h4"];
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer").innerHTML = siteContent["footer"]["copyright"];

let prepend = document.createElement('a');
let appendChild = document.createElement('a');

prepend.href = '#';
prepend.textContent = "Prepend!";

appendChild.href = '#';
appendChild.textContent = "AppendChild!"

let navBar = document.querySelector('nav');

navBar.prepend(prepend);
navBar.appendChild(appendChild);

nav = document.querySelectorAll('a')

nav.forEach((e) => e.style.color = 'green');
