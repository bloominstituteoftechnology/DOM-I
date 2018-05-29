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

let navItems = document.querySelectorAll('nav a');
navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";

document.querySelector('.cta-text h1').innerText = 'DOM\n Is\n Awesome';
document.querySelector('.cta-text button').innerText = 'Get Started';
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

let title = document.querySelectorAll('.text-content h4');
title[0].innerHTML = 'Features';
title[1].innerHTML = 'About';
title[2].innerHTML = 'Services';
title[3].innerHTML = 'Product';
title[4].innerHTML = 'Vision';

let description = document.querySelectorAll('.text-content p');
description[0].innerText = siteContent["main-content"]["features-content"];
description[1].innerText = siteContent["main-content"]["about-content"];
description[2].innerText = siteContent["main-content"]["services-content"];
description[3].innerText = siteContent["main-content"]["product-content"];
description[4].innerText = siteContent["main-content"]["vision-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelector('.contact h4').innerText = 'Contact';
let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerText = siteContent["contact"]["address"];
contactInfo[1].innerText = siteContent["contact"]["phone"];
contactInfo[2].innerText = siteContent["contact"]["email"];

document.querySelector('footer p').innerText = siteContent["footer"]["copyright"];

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';

let firstNav = document.createElement("a");
firstNav.setAttribute("href", "#");
firstNav.innerHTML = "First";
firstNav.style.color = 'green';
document.querySelector(".container header nav").prepend(firstNav);

let lastNav = document.createElement("a");
lastNav.setAttribute("href", "#");
lastNav.innerHTML = "Last";
lastNav.style.color = 'green';
document.querySelector(".container header nav").append(lastNav);
