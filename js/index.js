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
//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//CTA
let header = document.querySelector('h1');
header.innerHTML = siteContent["cta"]["h1"]

let button = document.querySelector('button');
button.innerHTML = siteContent["cta"]["button"]

//Nav items

let navItems = document.getElementsByTagName('a');
for (let i =0; i < navItems.length; i++) {
  navItems[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`]
  navItems[i].style.color = "Green"}
  
let nav = document.querySelector('nav');

//Top Content
let topContentHeader = document.querySelectorAll('.top-content h4');
topContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"]
topContentHeader[1].innerHTML = siteContent["main-content"]["about-h4"]

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerHTML = siteContent["main-content"]["features-content"]
topContentText[1].innerHTML = siteContent["main-content"]["about-content"]

//Bottom Content
let bottomContentHeader = document.querySelectorAll('.bottom-content h4');
bottomContentHeader[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomContentHeader[1].innerHTML = siteContent["main-content"]["product-h4"]
bottomContentHeader[2].innerHTML = siteContent["main-content"]["vision-h4"]

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"]
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"]
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"]

//Contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent["contact"]["contact-h4"]

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent["contact"]["address"]
contactInfo[1].innerHTML = siteContent["contact"]["phone"]
contactInfo[2].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent["footer"]["copyright"]

let newAnchor = document.createElement('a');
newAnchor.innerText = "Home";
newAnchor.setAttribute('href', '#');
newAnchor.style.color = 'Green';
nav.prepend(newAnchor);

let newAnchor2 = document.createElement('a');
newAnchor2.innerText = "Gallery";
newAnchor2.setAttribute('href', '#');
newAnchor2.style.color = 'Green';
nav.appendChild(newAnchor2);