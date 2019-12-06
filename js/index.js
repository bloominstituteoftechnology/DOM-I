const siteContent = {
  "nav": {
    "nav-item-0": "Hello",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "whatever",
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

//Task #1 Images
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]); 

let accentImg = document.getElementById("middle-img");
accentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Task #2 HTML file
       
let $contentH1 = document.querySelectorAll('.cta-text h1');
$contentH1[0].textContent = siteContent['cta']['h1'];

let $contentButton = document.querySelectorAll('.cta-text button');
$contentButton[0].textContent = siteContent['cta']['button'];

let $contentP = document.querySelectorAll('.text-content p');
$contentP[0].textContent = siteContent['main-content']['features-content'];
$contentP[1].textContent = siteContent['main-content']['about-content'];
$contentP[2].textContent = siteContent['main-content']['services-content'];
$contentP[3].textContent = siteContent['main-content']['product-content'];
$contentP[4].textContent = siteContent['main-content']['vision-content'];

const mainContentH4s = document.querySelectorAll('.text-content h4');
mainContentH4s[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentH4s[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentH4s[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentH4s[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentH4s[4].innerHTML = siteContent["main-content"]["vision-h4"];

let $contentContact = document.querySelectorAll('.contact h4');
let $contentContactP = document.querySelectorAll('.contact p');
$contentContact[0].textContent = siteContent['contact']['contact-h4'];
$contentContactP[0].textContent = siteContent['contact']['address'];
$contentContactP[1].textContent = siteContent['contact']['phone'];
$contentContactP[2].textContent = siteContent['contact']['email'];

let $contentFooter = document.querySelectorAll('footer p');
$contentFooter[0].textContent = siteContent['footer']['copyright'];

let myNavValues = Object.values(siteContent.nav);

let navTag1 = document.createElement('a');
let navTag2 = document.createElement('a');
let mainNav = document.querySelector('nav');

mainNav.appendChild(navTag1);
mainNav.prepend(navTag2);

let $nav = document.querySelectorAll('nav a');
console.log($nav);
$nav.forEach((aTag, index) => {
  aTag.style.color='green';
  aTag.textContent = myNavValues[index];
});

$contentH1[0].style.color = 'green';


