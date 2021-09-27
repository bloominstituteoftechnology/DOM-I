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
let nav=document.querySelector('nav');
nav.style.color='green';
document.querySelector('a:nth-of-type(1)').innerText='Services'
document.querySelector('a:nth-of-type(2)').innerText='Product'
document.querySelector('a:nth-of-type(3)').innerText='Vision'
document.querySelector('a:nth-of-type(4)').innerText='Features'
document.querySelector('a:nth-of-type(5)').innerText='About'
document.querySelector('a:nth-of-type(6)').innerText='Contact'
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])
//a.style.textContent='Services';
// Create selectors by using any of the DOM element's methods
//const container=document.querySelector('.container')
// ] Note that IDs have been used on all images. Use the IDs to update src path content
//let middleimg= document.getElementById("middle-img");
//middleimg.src= siteContent["cta"]["img/header-img.png"];
//Using your selectors, update the content to match the example file.
//container.querySelector('a').textContent='change all the link content';
//Change the color of the navigation text to be green.
//const nav=querySelector('nav');
//nav.style.color='green';
//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//const sub=document.createElement('h2');
//const sub1=document.createElement('h1');
//nav.appendChild(sub);
//nav.prepend(sub1);
