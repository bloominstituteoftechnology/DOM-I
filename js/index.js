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


let navItems = document.querySelectorAll('a');
navItems[0].innerText = siteContent["nav"]["nav-item-1"];
navItems[1].innerText = siteContent["nav"]["nav-item-2"];
navItems[2].innerText = siteContent["nav"]["nav-item-3"];
navItems[3].innerText = siteContent["nav"]["nav-item-4"];
navItems[4].innerText = siteContent["nav"]["nav-item-5"];
navItems[5].innerText = siteContent["nav"]["nav-item-6"];


let ctaHeading = document.querySelector('h1');
ctaHeading.innerText = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('button');
ctaButton.innerText = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let mainHeadings = document.querySelectorAll('.text-content h4');
mainHeadings[0].innerText = siteContent["main-content"]["features-h4"];
mainHeadings[1].innerText = siteContent["main-content"]["about-h4"];
mainHeadings[2].innerText = siteContent["main-content"]["services-h4"];
mainHeadings[3].innerText = siteContent["main-content"]["product-h4"];
mainHeadings[4].innerText = siteContent["main-content"]["vision-h4"];


let mainP = document.querySelectorAll('.text-content p');
mainP[0].innerText = siteContent["main-content"]["features-content"];
mainP[1].innerText = siteContent["main-content"]["about-content"];
mainP[2].innerText = siteContent["main-content"]["services-content"];
mainP[3].innerText = siteContent["main-content"]["product-content"];
mainP[4].innerText = siteContent["main-content"]["vision-content"];

let topImage = document.getElementById("middle-img");
topImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHeading = document.querySelectorAll('.contact h4');
contactHeading[0].innerText = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent["contact"]["address"];
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

let footerP = document.querySelectorAll('footer');
footerP[0].innerText = siteContent["footer"]["copyright"];


//stretch styles
//It works just wanted the page to look normal.
let mainNav = document.querySelector('nav');
mainNav.style.flexDirection = 'column';
mainNav.style.alignItems = 'center';

navItems.forEach(item => item.style.color = 'blue');

mainHeadings.forEach(item => item.style.color = 'red');