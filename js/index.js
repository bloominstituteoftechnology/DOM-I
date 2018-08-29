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
logo.setAttribute('src', siteContent.nav["img-src"])

let nav = document.querySelectorAll('a');
for (let i = 0; i < 6; i++) {
  nav[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
  nav[i].style.color = 'green';
}

let firstNav = document.createElement('a');
firstNav.innerHTML = 'First';
firstNav.style.color = 'green';
let lastNav = document.createElement('a');
lastNav.innerHTML = 'Last';
lastNav.style.color = 'green';
let navBar = document.querySelector('nav');
navBar.prepend(firstNav);
navBar.appendChild(lastNav);


let headline = document.querySelector('.cta-text h1');
headline.innerHTML = siteContent.cta.h1;

let getStarted = document.querySelector('button')
getStarted.innerHTML = siteContent.cta.button;

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

let mainH4 = document.querySelectorAll('.top-content h4');
mainH4[0].innerHTML = siteContent['main-content']['features-h4'];
mainH4[1].innerHTML = siteContent['main-content']['about-h4'];

let mainPara = document.querySelectorAll('.top-content p');
mainPara[0].innerHTML = siteContent['main-content']['features-content'];
mainPara[1].innerHTML = siteContent['main-content']['about-content'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].innerHTML = siteContent['main-content']['services-h4'];
bottomH4[1].innerHTML = siteContent['main-content']['product-h4'];
bottomH4[2].innerHTML = siteContent['main-content']['vision-h4'];

let bottomPara = document.querySelectorAll('.bottom-content p');
bottomPara[0].innerHTML = siteContent['main-content']['services-content'];
bottomPara[1].innerHTML = siteContent['main-content']['product-content'];
bottomPara[2].innerHTML = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent.contact['contact-h4'];

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML = siteContent.contact.address;
contactPara[1].innerHTML = siteContent.contact.phone;
contactPara[2].innerHTML = siteContent.contact.email;

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent.footer.copyright;