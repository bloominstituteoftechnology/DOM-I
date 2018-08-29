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
    "h1": "DOM<br>Is<br>Awesome",
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
cl = console.log;
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
let navBar = document.querySelectorAll("nav a");
let title = document.querySelector('.cta-text h1');
let button = document.querySelector('.cta-text button');
let titleImg = document.querySelector("#cta-img");
let topTitles = document.querySelectorAll('.top-content .text-content h4');
let topContent = document.querySelectorAll('.top-content .text-content p');
let middleImg = document.querySelector('.middle-img');
let bottomTitles = document.querySelectorAll('.bottom-content .text-content h4');
let bottomContent = document.querySelectorAll('.bottom-content .text-content p');
let contactTitle = document.querySelector('.contact h4');
let contactDetails = document.querySelectorAll('.contact p');
let footer = document.querySelector('footer p');

for (let i = 0; i < navBar.length; i++) {
  navBar[i].innerHTML = siteContent.nav["nav-item-" + (i + 1)];
}

logo.setAttribute('src', siteContent["nav"]["img-src"])
button.innerHTML = siteContent.cta.button;
title.innerHTML = siteContent.cta.h1;
titleImg.setAttribute('src', siteContent.cta['img-src']);
topTitles[0].innerHTML = siteContent['main-content']['features-h4'];
topTitles[1].innerHTML = siteContent['main-content']['about-h4'];
topContent[0].innerHTML = siteContent['main-content']['features-content'];
topContent[1].innerHTML = siteContent['main-content']['about-content'];
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
bottomTitles[0].innerHTML = siteContent['main-content']['services-h4'];
bottomTitles[1].innerHTML = siteContent['main-content']['product-h4'];
bottomTitles[2].innerHTML = siteContent['main-content']['vision-h4'];
bottomContent[0].innerHTML = siteContent['main-content']['services-content'];
bottomContent[1].innerHTML = siteContent['main-content']['product-content'];
bottomContent[2].innerHTML = siteContent['main-content']['vision-content'];
contactTitle.innerHTML = siteContent.contact['contact-h4'];
contactDetails[0].innerHTML = siteContent.contact.address;
contactDetails[1].innerHTML = siteContent.contact.phone;
contactDetails[2].innerHTML = siteContent.contact.email;
footer.innerHTML = siteContent.footer.copyright;

//adding a third paragraph to the middle section
let addedDiv = document.createElement('div.text-content');
let topMainContent = document.querySelector('.top-content');
topMainContent.prepend(addedDiv);
let addedH4 = document.createElement('h4');
let addedP = document.createElement('p');
addedDiv.appendChild(addedH4);
addedDiv.appendChild(addedP);
addedH4.innerHTML = "History";
addedP.innerHTML = "History content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//changing the color of the main tital and the text size of the bottom paragraphs
title.style.color = '#0055A8';
bottomContent.forEach((obj,i) => {bottomContent[i].style.fontSize="12px"})


// var navParent = document.querySelector('nav');
// var newAnchor = document.createElement('a');
// newAnchor.innerHTML = 'FAQ';
// navParent.appendChild(newAnchor);