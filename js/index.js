const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

let aTag = document.getElementsByTagName("a");
let nav = document.getElementsByTagName("nav");
// siteContent["nav"].forEach(element => {
//   aTag;
// });
aTag[0].innerHTML = siteContent["nav"]["nav-item-1"]
aTag[1].innerHTML = siteContent["nav"]["nav-item-2"]
aTag[2].innerHTML = siteContent["nav"]["nav-item-3"]
aTag[3].innerHTML = siteContent["nav"]["nav-item-4"]
aTag[4].innerHTML = siteContent["nav"]["nav-item-5"]
//aTag[5].innerHTML = siteContent["nav"]["nav-item-6"]

console.log(nav)


var testElement = document.createElement("a");
testNode = document.createTextNode("Welcome");

testElement.appendChild(testNode);
nav[0].appendChild(testElement);


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Image of code snippet
let imag = document.getElementById("cta-img");
imag.setAttribute('src', siteContent["cta"]["img-src"])

//Middle image
let middleImag = document.getElementById("middle-img");
middleImag.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaText = document.querySelector(".cta-text");
ctaText.childNodes[1].innerHTML = siteContent["cta"]["h1"];
ctaText.childNodes[3].innerHTML = siteContent["cta"]["button"];

let topContent = document.querySelector(".top-content");
topContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["features-h4"];
topContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["features-content"];

topContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["about-h4"];
topContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["about-content"];
// topContent.childNodes[2].innerHTML = siteContent["main-content"]["features-h4"];
// topContent.childNodes[3].innerHTML = siteContent["main-content"]["about-content"];


let bottomContent = document.querySelector(".bottom-content");
bottomContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["services-content"];

bottomContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["product-h4"];
bottomContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["product-content"];

bottomContent.childNodes[5].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent.childNodes[5].children[1].innerHTML = siteContent["main-content"]["vision-content"];


let contact = document.querySelector(".contact");
contact.childNodes[1].innerHTML = siteContent["contact"]["contact-h4"];
contact.childNodes[3].innerHTML = siteContent["contact"]["address"];
contact.childNodes[5].innerHTML = siteContent["contact"]["phone"];
contact.childNodes[7].innerHTML = siteContent["contact"]["email"];

footer = document.getElementsByTagName("footer");
footer[0].innerHTML = siteContent["footer"]["copyright"]
footer[0].style.color = "red";


var testNode = document.createTextNode(" twitter");
//var testNode2 = document.createTextNode(" facebook");

console.log(footer);
footer[0].appendChild(testNode);
