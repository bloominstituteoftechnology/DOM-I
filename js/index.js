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

let nav = document.querySelector('nav');
let navItems = nav.querySelectorAll('a');

navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

let newNavItemNode = document.createElement('A');
newNavItemNode.href = "#"
newNavItemNode.textContent = "What"
nav.appendChild(newNavItemNode);

let newNavItemNode2 = document.createElement('A');
newNavItemNode2.href = "#"
newNavItemNode2.textContent = "Yo"
nav.prepend(newNavItemNode2);

navItems = nav.querySelectorAll('a');
navItems.forEach(x => x.style.color = 'green');

let cta = document.querySelector('.cta');
let ctaH1 = cta.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;
let ctaBtn = cta.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

let topContent = document.querySelector('.top-content');
let topContentH4s = topContent.querySelectorAll('h4');
topContentH4s[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4s[1].textContent = siteContent["main-content"]["about-h4"];

let topContentPs = topContent.querySelectorAll('p');
topContentPs[0].textContent = siteContent["main-content"]["features-content"];
topContentPs[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelector('.bottom-content');
let bottomContentH4s = bottomContent.querySelectorAll('h4');
bottomContentH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4s[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentPs = bottomContent.querySelectorAll('p');
bottomContentPs[0].textContent = siteContent["main-content"]["services-content"];
bottomContentPs[1].textContent = siteContent["main-content"]["product-content"];
bottomContentPs[2].textContent = siteContent["main-content"]["vision-content"];


let contact = document.querySelector('.contact');
let contactH4 = contact.querySelector('h4');
contactH4.textContent = siteContent.contact["contact-h4"];
let contactPs = contact.querySelectorAll('p');
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer');
let footerP = footer.querySelector('p');
footerP.textContent = siteContent.footer.copyright;