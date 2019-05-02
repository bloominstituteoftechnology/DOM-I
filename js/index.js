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

console.log(document);

// Example: Update the img src for the logo
// Img Selectors
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Nav
let nav = document.querySelectorAll('a');

for (i=0;i<nav.length;i++){
  nav[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
  nav[i].style.color = 'green';
}

let nav6 = document.createElement('a');
nav6.textContent = 'Clients';
nav6.style.color = 'green';
let nav7 = document.createElement('a');
nav7.textContent = 'Subscribe';
nav7.style.color = 'green';
// console.log(nav6);
// console.log(nav7);
let navBar = document.querySelector('nav');
navBar.prepend(nav6);
navBar.append(nav7);


//CTA
let headline = document.querySelector('h1');
// console.log(headline);
headline.textContent = siteContent['cta']['h1'];

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent['cta']['button'];

//Headers
let headers = document.querySelectorAll('h4');
// console.log(headers);
headers[0].textContent = siteContent['main-content']['features-h4'];
headers[1].textContent = siteContent['main-content']['about-h4'];
headers[2].textContent = siteContent['main-content']['product-h4'];
headers[3].textContent = siteContent['main-content']['services-h4'];
headers[4].textContent = siteContent['main-content']['vision-h4'];
headers[5].textContent = siteContent['contact']['contact-h4'];

//Content
let content = document.querySelectorAll('p');
// console.log(content);
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['product-content'];
content[3].textContent = siteContent['main-content']['services-content'];
content[4].textContent = siteContent['main-content']['vision-content'];
content[5].textContent = siteContent['contact']['address'];
content[6].textContent = siteContent['contact']['phone'];
content[7].textContent = siteContent['contact']['email'];
content[8].textContent = siteContent['footer']['copyright'];
