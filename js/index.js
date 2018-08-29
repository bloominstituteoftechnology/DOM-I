const siteContent = {
  "nav": {
    "nav-item-0": "Legends",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Mistakes",
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

//created elements
const afirst = document.createElement("a");
const alast = document.createElement("a");

//nav
const nav = document.querySelector('nav');
nav.prepend(afirst)
nav.appendChild(alast)

//anchor tags
const a = document.querySelectorAll('a');
a[0].innerHTML = siteContent["nav"]["nav-item-0"]
a[1].innerHTML = siteContent["nav"]["nav-item-1"]
a[2].innerHTML = siteContent["nav"]["nav-item-2"]
a[3].innerHTML = siteContent["nav"]["nav-item-3"]
a[4].innerHTML = siteContent["nav"]["nav-item-4"]
a[5].innerHTML = siteContent["nav"]["nav-item-5"]
a[6].innerHTML = siteContent["nav"]["nav-item-6"]
a[7].innerHTML = siteContent["nav"]["nav-item-7"]
//anchor tags color style
a[0].style.color = 'green';
a[1].style.color = 'green';
a[2].style.color = 'green';
a[3].style.color = 'green';
a[4].style.color = 'green';
a[5].style.color = 'green';
a[6].style.color = 'green';
a[7].style.color = 'green';

//h1
const h1 = document.querySelector('.cta-text h1');
h1.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');

//cta button
const button = document.querySelector('.cta-text button');
button.innerHTML = siteContent["cta"]["button"]

//cta image
const ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

//top content p tags
const topcontentp = document.querySelectorAll('.top-content p');
topcontentp[0].innerHTML = siteContent["main-content"]["features-content"]
topcontentp[1].innerHTML = siteContent["main-content"]["about-content"]

//middle image
const middleimg = document.getElementById('middle-img');
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom content p tags
const bottomcontentp = document.querySelectorAll('.bottom-content p');
bottomcontentp[0].innerHTML = siteContent["main-content"]["services-content"]
bottomcontentp[1].innerHTML = siteContent["main-content"]["product-content"]
bottomcontentp[2].innerHTML = siteContent["main-content"]["vision-content"]

//h4 tags
const h4 = document.querySelectorAll('h4');
h4[0].innerHTML = siteContent["main-content"]["features-h4"]
h4[1].innerHTML = siteContent["main-content"]["about-h4"]
h4[2].innerHTML = siteContent["main-content"]["services-h4"]
h4[3].innerHTML = siteContent["main-content"]["product-h4"]
h4[4].innerHTML = siteContent["main-content"]["vision-h4"]
h4[5].innerHTML = siteContent["contact"]["contact-h4"]

//contact p tags
const contactp = document.querySelectorAll('.contact p');
contactp[0].innerHTML = siteContent["contact"]["address"]
contactp[1].innerHTML = siteContent["contact"]["phone"]
contactp[2].innerHTML = siteContent["contact"]["email"]

//footer p tag
const footerp = document.querySelector('footer p');
footerp.innerHTML = siteContent["footer"]["copyright"]

