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


// Navigation
let navigation = document.querySelectorAll('header nav a');
navigation[0].innerHTML = siteContent["nav"]["nav-item-1"];
navigation[1].innerHTML = siteContent["nav"]["nav-item-2"];
navigation[2].innerHTML = siteContent["nav"]["nav-item-3"];
navigation[3].innerHTML = siteContent["nav"]["nav-item-4"];
navigation[4].innerHTML = siteContent["nav"]["nav-item-5"];
navigation[5].innerHTML = siteContent["nav"]["nav-item-6"];
contentA.appendChild(navigation);



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let title = document.getElementsByClassName("cta-text h1");
title.innerHTML = siteContent["cta"]["h1"];

let topButton = document.querySelector('button');
topButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let contentTopTitle = document.querySelectorAll('.main-content h4');
contentTopTitle[0].innerHTML = siteContent["main-content"]["features-h4"];
contentTopTitle[1].innerHTML = siteContent["main-content"]["about-h4"];

let contentToptext = document.querySelectorAll('.main-content p');
contentToptext[0].innerHTML = siteContent["main-content"]["features-content"];
contentToptext[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contentBottitle = document.querySelectorAll('.bottom-content h4');
contentBottitle[0].innerHTML = siteContent["main-content"]["services-h4"];
contentBottitle[1].innerHTML = siteContent["main-content"]["product-h4"];
contentBottitle[2].innerHTML = siteContent["main-content"]["vision-h4"];

let contentBottext = document.querySelectorAll('.bottom-content p');
contentBottext[0].innerHTML = siteContent["main-content"]["services-content"];
contentBottext[1].innerHTML = siteContent["main-content"]["product-content"];
contentBottext[2].innerHTML = siteContent["main-content"]["vision-content"];


let contactTitle = document.querySelector('.contact h4');
contactTitle.innerHTML = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent["footer"]["copyright"];
