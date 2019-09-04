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

//NOTE FOR TL: Went through and re-did project on outside file and copied it in. :) 

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('a');
//added content
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];


//styling
nav[0].style.color = "green";
nav[1].style.color = "cyan";
nav[2].style.color = "purple";
nav[3].style.color = "orange";
nav[4].style.color = "red";
nav[5].style.color = "brown";

//END Nav

//cta h1
const sec1 = document.querySelectorAll(".cta .cta-text h1");
sec1[0].textContent = siteContent["cta"]["h1"];
sec1[0].innerText = siteContent.cta.h1.split(' ').join('\n');

//cta button
const sec1But = document.querySelectorAll(".cta .cta-text button")
sec1But[0].textContent = siteContent['cta']['button'];

//cta image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//END CTA

//h4 top
const mainTop = document.querySelectorAll('.main-content .top-content .text-content h4')
mainTop[0].textContent = siteContent['main-content']['features-h4'];
mainTop[1].textContent = siteContent['main-content']['about-h4'];

//p top
const mainTopP = document.querySelectorAll('.main-content .top-content .text-content p')
mainTopP[0].textContent = siteContent['main-content']['features-content'];
mainTopP[1].textContent = siteContent['main-content']['about-content'];

//main img
const mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom h4
const mainBot = document.querySelectorAll('.main-content .bottom-content .text-content h4')
mainBot[0].textContent = siteContent['main-content']['services-h4'];
mainBot[1].textContent = siteContent['main-content']['product-h4'];
mainBot[2].textContent = siteContent['main-content']['vision-h4'];

//bot p
const mainBotP = document.querySelectorAll('.main-content .bottom-content .text-content p')
mainBotP[0].textContent = siteContent['main-content']['services-content'];
mainBotP[1].textContent = siteContent['main-content']['product-content'];
mainBotP[2].textContent = siteContent['main-content']['vision-content'];

//contact h4
const contactH4 = document.querySelectorAll('.contact h4')
contactH4[0].textContent = siteContent['contact']['contact-h4'];

//contact p
const contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// //contact split
// let addressArray = siteContent['contact']['address'].split(' ');
// addressArray.splice(4, 0, '\r\n');
// contactBot2[0].innerText = addressArray.join(' ');

//footer
const foot = document.querySelectorAll("footer");
foot[0].textContent = siteContent["footer"]["copyright"];

//create new elements
const newA = document.createElement('a');
newA.textContent = "List";
newA.style.color = "pink";

const newA2 = document.createElement('a');
newA2.textContent = "Info"
newA2.style.color = "black";

//append new elements
const addA = document.querySelector('nav');
addA.prepend(newA);
addA.append(newA2);



//PRE FLEX PROJECT BELOW
// const siteContent = {
//   "nav": {
//     "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//     "img-src": "img/logo.png"
//   },
//   "cta": {
//     "h1": "DOM Is Awesome",
//     "button": "Get Started",
//     "img-src": "img/header-img.png"
//   },
//   "main-content": {
//     "features-h4":"Features",
//     "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "about-h4":"About",
//     "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "middle-img-src": "img/mid-page-accent.jpg",
//     "services-h4":"Services",
//     "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "product-h4":"Product",
//     "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "vision-h4":"Vision",
//     "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   },
//   "contact": {
//     "contact-h4" : "Contact",
//     "address" : "123 Way 456 Street Somewhere, USA",
//     "phone" : "1 (888) 888-8888",
//     "email" : "sales@greatidea.io",
//   },
//   "footer": {
//     "copyright" : "Copyright Great Idea! 2018"
//   },
// };

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

// //nav
// const nav = document.querySelectorAll("header nav a");
// nav[0].textContent = siteContent["nav"]["nav-item-1"];
// nav[1].textContent = siteContent["nav"]["nav-item-2"];
// nav[2].textContent = siteContent["nav"]["nav-item-3"];
// nav[3].textContent = siteContent["nav"]["nav-item-4"];
// nav[4].textContent = siteContent["nav"]["nav-item-5"];
// nav[5].textContent = siteContent["nav"]["nav-item-6"];
// nav[5].style.color = "green";

// //color
// const navColor = document.querySelectorAll("a");
// nav[0].style.color = "green";
// nav[1].style.color = "green";
// nav[2].style.color = "green";
// nav[3].style.color = "green";
// nav[4].style.color = "green";



// //cta h1
// const sec1 = document.querySelectorAll(".cta .cta-text h1");
// sec1[0].textContent = siteContent["cta"]["h1"];
// sec1[0].innerText = siteContent.cta.h1.split(' ').join('\n');
// sec1[0].style.color = "blue";

// //cta button
// const sec1But = document.querySelectorAll(".cta .cta-text button");
// sec1But[0].textContent = siteContent["cta"]["button"];

// //cta img
// let pic = document.getElementById("cta-img");
// pic.setAttribute('src', siteContent["cta"]["img-src"]);

// //main content h4
// const sec2h4 = document.querySelectorAll(".main-content .top-content .text-content h4");
// sec2h4[0].textContent = siteContent["main-content"]["features-h4"];
// sec2h4[1].textContent = siteContent["main-content"]["about-h4"];

// //main content p
// const sec2p = document.querySelectorAll(".main-content .top-content .text-content p");
// sec2p[0].textContent = siteContent["main-content"]["features-content"];
// sec2p[1].textContent = siteContent["main-content"]["features-content"];

// //main pic
// let mainPic = document.getElementById("middle-img");
// mainPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// //main content bot h4
// const sec2Both4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");
// sec2Both4[0].textContent = siteContent["main-content"]["services-h4"];
// sec2Both4[1].textContent = siteContent["main-content"]["product-h4"];
// sec2Both4[2].textContent = siteContent["main-content"]["vision-h4"];

// //main content bot p
// const sec2Botp = document.querySelectorAll(".main-content .bottom-content .text-content p");
// sec2Botp[0].textContent = siteContent["main-content"]["services-content"];
// sec2Botp[1].textContent = siteContent["main-content"]["product-content"];
// sec2Botp[2].textContent = siteContent["main-content"]["vision-content"];

// //contact h4
// const contactBot = document.querySelectorAll(".contact h4");
// contactBot[0].textContent = siteContent["contact"]["contact-h4"];

// //contact p
// const contactBot2 = document.querySelectorAll(".contact p");
// contactBot2[0].textContent = siteContent["contact"]["address"];
// contactBot2[1].textContent = siteContent["contact"]["phone"];
// contactBot2[2].textContent = siteContent["contact"]["email"];

// //contact split
// let addressArray = siteContent['contact']['address'].split(' ');
// addressArray.splice(4, 0, '\r\n');
// contactBot2[0].innerText = addressArray.join(' ');

// //OR
// //contactInfo[0].style.width = '20%';

// //footer
// const foot = document.querySelectorAll("footer");
// foot[0].textContent = siteContent["footer"]["copyright"];


// //const ctaTxt = document.querySelector(".cta-text h1");
// //ctaTxt.textContent = siteContent["cta"]["h1"];
// //document.write("\n");





