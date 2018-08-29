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
contentA.appendChild(navigation)



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let title = document.getElementsByClassName("cta-text h1");

let topButton = document.querySelector('button');

let ctaImg = document.getElementById('cta-img');

let contentTopTitle1 = document.querySelector('.main-content h4');

let contentTopTitle1 = document.querySelectorAll('.main-content h4')[0];

let contentTopTitle2 = document.querySelectorAll('.main-content h4')[1];

let contentToptext1 = document.querySelectorAll('.main-content p')[0];

let contentToptext2 = document.querySelectorAll('.main-content p')[1];

let middleImg = document.getElementById("middle-img");

let contentBottitle1 = document.querySelectorAll('.bottom-content h4')[0];

let contentBottext1 = document.querySelectorAll('.bottom-content p')[0];

let contentBottitle2 = document.querySelectorAll('.bottom-content h4')[1];

let contentBottext2 = document.querySelectorAll('.bottom-content p')[1];

let contentBottitle3 = document.querySelectorAll('.bottom-content h4')[2];

let contentBottext3 = document.querySelectorAll('.bottom-content p')[2];

let contactTitle = document.querySelector('.contact h4');

let contactText1 = document.querySelectorAll('.contact p')[0];

let contactText2 = document.querySelectorAll('.contact p')[1];

let contactText3 = document.querySelectorAll('.contact p')[2];

let footer = document.querySelector('footer p');

