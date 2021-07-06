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

let headerimg = document.getElementById("cta-img");
headerimg.setAttribute('src', siteContent["cta"]["img-src"]);

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//let hd = document.querySelector('header');
let nav1 = document.querySelector('nav a:nth-of-type(1)');
nav1.style.color = "green";
nav1.textContent = siteContent["nav"]["nav-item-1"];

let nav2 = document.querySelector('nav a:nth-of-type(2)');
nav2.style.color = "green";
nav2.textContent = siteContent["nav"]["nav-item-2"];

let nav3 = document.querySelector('nav a:nth-of-type(3)');
nav3.style.color = "green";
nav3.textContent = siteContent["nav"]["nav-item-3"];

let nav4 = document.querySelector('nav a:nth-of-type(4)');
nav4.style.color = "green";
nav4.textContent = siteContent["nav"]["nav-item-4"];

let nav5 = document.querySelector('nav a:nth-of-type(5)');
nav5.style.color = "green";
nav5.textContent = siteContent["nav"]["nav-item-5"];

let nav6 = document.querySelector('nav a:nth-of-type(6)');
nav6.style.color = "green";
nav6.textContent = siteContent["nav"]["nav-item-6"];

const conLink = document.createElement('a');
conLink.textContent = 'Recent';
conLink.style.color  = "green";
conLink.href = '#';
document.querySelector('nav').appendChild(conLink);
console.log(conLink);

const lastLink = document.createElement('a');
lastLink.textContent = 'Advance';
lastLink.style.color  = "green";
lastLink.href = '#';
document.querySelector('nav').appendChild(lastLink);

//let heading1 = document.getElementsByTagName('h1');
//heading1.setAttribute('h1', siteContent['cta']["h1"]);
//console.log(heading1);
//console.log(document);

// const toph = document.createElement('h1');
// toph.textContent = 'DOM IS AWESOME';
// document.querySelector('.cta-text').appendChild(toph);

//let toph = document.getElementsByClassName("cta-text");
//toph.setAttribute('h1',  siteContent["cta"]["h1"]);

let toph = document.querySelector("h1");
toph.textContent = siteContent["cta"]["h1"];

let btext = document.querySelector("button");
btext.textContent = siteContent["cta"]["button"];

let textContent1 = document.querySelector(".text-content:nth-of-type(1)");
let heading1 = textContent1.querySelector('h4');
heading1.textContent = siteContent["main-content"]["features-h4"];
let info1 = textContent1.querySelector('p');
info1.textContent = siteContent["main-content"]["features-content"];


let textContent2 = document.querySelector(".text-content:nth-of-type(2)");
let heading2 = textContent2.querySelector('h4');
heading2.textContent = siteContent["main-content"]["about-h4"];
let info2 = textContent2.querySelector('p');
info2.textContent = siteContent["main-content"]["about-content"];


let textContent3 = document.querySelector(".bottom-content .text-content:nth-of-type(1)");
let heading3 = textContent3.querySelector('h4');
heading3.textContent = siteContent["main-content"]["services-h4"];
let info3 = textContent3.querySelector('p');
info3.textContent = siteContent["main-content"]["services-content"];

let textContent4 = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
let heading4 = textContent4.querySelector('h4');
heading4.textContent = siteContent["main-content"]["product-h4"];
let info4 = textContent4.querySelector('p');
info4.textContent = siteContent["main-content"]["product-content"];
console.log(heading4);

let textContent5 = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
let heading5 = textContent5.querySelector('h4');
heading5.textContent = siteContent["main-content"]["vision-h4"];
let info5 = textContent5.querySelector('p');
info5.textContent = siteContent["main-content"]["vision-content"];
console.log(heading4);