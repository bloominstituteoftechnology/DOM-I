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

let titleDom = document.getElementsByTagName("title");
const titleDomManipulate = document.querySelector('title')
titleDomManipulate.innerText = "Great Idea!"

let setNav = document.getElementsByTagName('a');
setNav[0].innerText = siteContent["nav"]["nav-item-1"]
setNav[1].innerText = siteContent["nav"]["nav-item-2"]
setNav[2].innerText = siteContent["nav"]["nav-item-3"]
setNav[3].innerText = siteContent["nav"]["nav-item-4"]
setNav[4].innerText = siteContent["nav"]["nav-item-5"]
setNav[5].innerText = siteContent["nav"]["nav-item-6"]

for (let i = 0; i < setNav.length; i++){
  let greenNav = setNav[i].style.color = "green";
  greenNav;
}

let newNavItem = document.createElement('a');
let newNavItem2 = document.createElement('a');

let navigation = document.querySelector('header nav');

newNavItem.innerText = 'Learn To Code Bro';
newNavItem2.innerText = 'DOM Harder';

newNavItem.href = 'https://learn.lambdaschool.com';
newNavItem2.href = 'https://developer.mozilla.org/en-US/docs/Glossary/DOM';

navigation.appendChild(newNavItem);
navigation.prepend(newNavItem2);

for (let i = 0; i < setNav.length; i++){
  let greenNav = setNav[i].style.color = "green";
  greenNav;
}



document.getElementsByClassName('cta');
document.getElementsByTagName('h1');
let h1Update = document.querySelector('h1');
h1Update.innerText = siteContent["cta"]["h1"];

let buttonUpdate = document.querySelector('button');
buttonUpdate.innerText = siteContent["cta"]["button"];



let imgUpdateId2 = document.querySelector('#cta-img');
imgUpdateId2.setAttribute('src', siteContent['cta']["img-src"]);

let imgSnip = document.querySelector('#middle-img');
imgSnip.setAttribute('src', siteContent['main-content']['middle-img-src']);



let animation1 = function(){
  imgUpdateId2.style.backgroundColor = "green";
  
}

buttonUpdate.addEventListener('click', animation1);

// let featuresUpdateH4 = document.querySelector('.main-content .top-content .text-content[0]');
// featuresUpdateH4.innerText = "Features";

// let contentUpdateP = document.querySelector('.main-content .top-content .text-content p');
// contentUpdateP.innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// let aboutUpdateH4 = document.querySelector('.main-content .top-content .text-content[1]');
// aboutUpdateH4.innerText = "About";

document.getElementsByTagName('h4');
let getH4 = document.querySelectorAll('h4');
getH4[0].innerText = siteContent["main-content"]["features-h4"];
getH4[1].innerText = siteContent["main-content"]["about-h4"];
getH4[2].innerText = siteContent["main-content"]["services-h4"];
getH4[3].innerText = siteContent["main-content"]["product-h4"];
getH4[4].innerText = siteContent["main-content"]["vision-h4"];
getH4[5].innerText = siteContent["contact"]["contact-h4"];

let getP = document.querySelectorAll('p');

getP[0].innerText = siteContent["main-content"]["features-content"];
getP[1].innerText = siteContent["main-content"]["about-content"];
getP[2].innerText = siteContent["main-content"]["services-content"];
getP[3].innerText = siteContent["main-content"]["product-content"];
getP[4].innerText = siteContent["main-content"]["vision-content"];
getP[5].innerText = siteContent["contact"]["address"];
getP[6].innerText = siteContent["contact"]["phone"];
getP[7].innerText = siteContent["contact"]["email"];
getP[8].innerText = siteContent['footer']['copyright'];