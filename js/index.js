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

//Navbar
const navBarContent = document.querySelectorAll('a');
navBarContent.forEach((item, i) => item.innerHTML = siteContent['nav'][`nav-item-${i+1}`]);
navBarContent.forEach((item) => item.style.color = "green");
const parentNav = document.querySelector('nav');
const prependMe = document.createElement('a');
parentNav.prepend(prependMe);
prependMe.innerText = "Hello";
const appendMe = document.createElement('a');
parentNav.appendChild(appendMe);
appendMe.innerText = "Goodbye";

//CTA
const ctaHead = document.querySelector('h1');
ctaHead.innerHTML = siteContent["cta"]["h1"];
const ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main
const mainConHead = document.querySelectorAll('.main-content h4');
mainConHead[0].innerHTML = siteContent['main-content']['features-h4'];
mainConHead[1].innerHTML = siteContent['main-content']['about-h4'];
mainConHead[2].innerHTML = siteContent['main-content']['services-h4'];
mainConHead[3].innerHTML = siteContent['main-content']['product-h4'];
mainConHead[4].innerHTML = siteContent['main-content']['vision-h4'];
const mainConText = document.querySelectorAll('p');
mainConText[0].innerHTML = siteContent['main-content']['features-content'];
mainConText[1].innerHTML = siteContent['main-content']['about-content'];
mainConText[2].innerHTML = siteContent['main-content']['services-content'];
mainConText[3].innerHTML = siteContent['main-content']['product-content'];
mainConText[4].innerHTML = siteContent['main-content']['vision-content'];
const mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Contact
const contactHead = document.querySelector('.contact h4');
contactHead.innerHTML = siteContent['contact']['contact-h4'];
const contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = siteContent['contact']['address'];
contactText[1].innerHTML = siteContent['contact']['phone'];
contactText[2].innerHTML = siteContent['contact']['email'];

//Footer
const footerText = document.querySelector('footer p');
footerText.innerHTML = siteContent['footer']['copyright'];
