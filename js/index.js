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


/* Nav */

let nav = document.querySelectorAll('nav a');

nav.forEach(item => item.style = 'color: #15840D');
for (let i=0; i<nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

var navParent = document.querySelector('nav');
var newTag = document.createElement('a');
newTag.innerHTML = 'Q&A';
newTag.style = 'color: #15840D';
navParent.appendChild(newTag);


/*Images */

let greatIdea = document.querySelector('.logo');
greatIdea.src = "img/logo.png";

let ctaImage = document.querySelector('#cta-img');
ctaImage.src = "img/header-img.png";

let middleImage = document.querySelector('.middle-img');
middleImage.src = "img/mid-page-accent.jpg";

let paragraphTag = document.getElementsByTagName('p');

for (let i = 0; i < paragraphTag.length; i++) {
  paragraphTag[i].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
}


/* Section 1 */

let domIsAwesome = document.querySelectorAll('.cta-text h1');
for (let i = 0; i < domIsAwesome.length; i++) {
  domIsAwesome[i].textContent = "DOM Is Awesome";
}

let button = document.querySelectorAll('.cta-text button');
for (let i = 0; i < button.length; i++) {
  button[i].textContent = "Get Started";
}


/* Section 2 */

let features = document.querySelectorAll(".text-content h4");



/* Contact */

let contact = document.querySelectorAll(".contact p");
console.log(contact);

for (let i = 0; i < contact.length; i++) {
 if ( i === 0 ) {
   contact[ i ].textContent = siteContent.contact.address;
 }
 if ( i === 1 ) {
  contact[ i ].textContent = siteContent.contact.phone;
  } 
  if ( i === 2 ) {
  contact[ i ].textContent = siteContent.contact.email;
  }
}

let contactHeader = document.querySelectorAll(".contact h4");

for (let i = 0; i < contactHeader.length; i++) {
  contactHeader[i].textContent = "Contact";
}


/* Footer */

let footer = document.querySelectorAll("footer p");
for (let i = 0; i < footer.length; i++) {
  footer[i].textContent = "Copyright Great Idea! 2018";
}