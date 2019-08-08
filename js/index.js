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

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
// const body = document.querySelector.body;
// //document.body.textContent = siteContent[“cta”][“h1"];
// const navBar = document.querySelectorAll('a');
// console.log(navBar);
// navBar[0].textContent = "Services";
// navBar[1].textContent = "Product";
// navBar[2].textContent = "Vision";
// navBar[3].textContent = "Features";
// navBar[4].textContent = "About";
// navBar[5].textContent = "Contact";
// let cta = document.getElementById("cta-img");
// cta.setAttribute('src', siteContent["cta"]["img-src"]);
// console.log(cta);

// let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// console.log(middleImg);

// let ctaText = document.getElementsByClassName("cta");
// console.log(ctaText);
// //ctaText.setAttribute('src', siteContent["cta"]["h1"]);

// let mainContent = document.querySelectorAll(['.text-content']);
// mainContent[0].textContent = siteContent['main-content']['features-h4'];
// mainContent[1].textContent = siteContent['main-content']['about-h4'];
// mainContent[2].textContent = siteContent['main-content']['services-h4'];
// mainContent[3].textContent = siteContent['main-content']['product-h4'];
// mainContent[4].textContent = siteContent['main-content']['vision-h4'];


// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

/* Nav */
let newItem = document.createElement('a');
let newItem2 = document.createElement('a');
let navItem = document.querySelectorAll('nav a');
let nav = document.querySelector('nav');

newItem.textContent = 'Blog';
newItem2.textContent = 'Home';

navItem.forEach(
  (item, i) =>
    (item.textContent = siteContent.nav['nav-item-' + (i + 1)]) &&
    (item.style.color = 'lightgrey')
);

nav.appendChild(newItem);
nav.prepend(newItem2);

newItem.style.color = 'grey';
newItem2.style.color = 'grey';

/* CTA Section */

// Query Selectors
let ctaHeading = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
let ctaHeadingArr = siteContent.cta.h1.split(' ');

// Set textContent of cta elements
ctaHeading.innerHTML = ctaHeadingArr.join('<br>');
ctaBtn.textContent = siteContent.cta.button;

// Set src attribute for cta image
ctaImg.src = siteContent.cta['img-src'];

// Main 

// Store main-content object to create an array
let mainContent = siteContent['main-content'];

// Query Selectors
let mainContentHeadings = document.querySelectorAll('.text-content h4');
let mainContentText = document.querySelectorAll('.text-content p');
let mainContentImg = document.querySelector('#middle-img');

// Store Object Values in Array for loop
let mainContentArr = Object.entries(mainContent);
let mainContentHeadingArr = [];
let mainContentTextArr = [];

// Use forEach and .includes to create heading and content arrays
mainContentArr.forEach(item => {
  if (item[0].includes('h4')) {
    mainContentHeadingArr.push(item[1]);
  } else if (item[0].includes('content')) {
    mainContentTextArr.push(item[1]);
  }
});

// Loop through nodes and set textContent to their respective array values
for (let i = 0; i < mainContentHeadings.length; i++) {
  mainContentHeadings[i].textContent = mainContentHeadingArr[i];
  mainContentText[i].textContent = mainContentTextArr[i];
}

// src middle-img
mainContentImg.setAttribute(
  'src',
  siteContent['main-content']['middle-img-src']
);


// Contact
let contactHeading = document.querySelector('.contact h4');
let contactParagraphs = document.querySelectorAll('.contact p');
let contact = siteContent.contact;

// Contact Array for looping through paragraphs
let contactArr = [contact.address, contact.phone, contact.email];

// Set h4 to contact-h4
contactHeading.textContent = siteContent.contact['contact-h4'];

// Set p tags to contact address, phone and email
for (let i = 0; i < contactParagraphs.length; i++) {
  contactParagraphs[i].textContent = contactArr[i];
}

/* Footer */
let copyright = document.querySelector('footer p');
copyright.textContent = ('copyright 2019');