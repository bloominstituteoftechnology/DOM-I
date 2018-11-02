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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.querySelector('.middle-img');
middleImage.setAttribute('src', siteContent['main-content']["middle-img-src"])

let navigate = document.querySelectorAll("nav a");
navigate.forEach((navItem, index) => {
  navItem.innerHTML = siteContent.nav[`nav-item-${index + 1}`];
  navItem.style.color = 'green';

});

let navChild = document.createElement('a');
navChild.innerHTML = 'Andrew';
navigate[5].appendChild(navChild);

let navPreChild = document.createElement('a');
navPreChild.innerHTML = 'awesome';
navigate[0].prepend(navPreChild);

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent.cta.button;

let topContentH4 = document.querySelectorAll('.top-content .text-content h4');
topContentH4[0].innerHTML = siteContent["main-content"]['features-h4']
topContentH4[1].innerHTML = siteContent["main-content"]['about-h4']

let topContentP = document.querySelectorAll('.top-content .text-content p');
topContentP[0].innerHTML = siteContent["main-content"]['features-content'];
topContentP[1].innerHTML = siteContent["main-content"]['about-content'];

let bottomContentH4 =document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH4[0].innerHTML = siteContent["main-content"]['services-h4'];
bottomContentH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomContentP[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentP[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentP[2].innerHTML =  siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent.contact["contact-h4"];
let contactArray = Object.values(siteContent.contact);

let contactsP = document.querySelectorAll('.contact p');
for (let i = 0; i < contactsP.length; i++){
  contactsP[i].innerHTML = contactArray[i+1];
}

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright']