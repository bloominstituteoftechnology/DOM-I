const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Bar
let nav = document.getElementsByTagName("a");
nav[0].innerHTML = siteContent.nav["nav-item-1"];
nav[1].innerHTML = siteContent.nav["nav-item-2"];
nav[2].innerHTML = siteContent.nav["nav-item-3"];
nav[3].innerHTML = siteContent.nav["nav-item-4"];
nav[4].innerHTML = siteContent.nav["nav-item-5"];
nav[5].innerHTML = siteContent.nav["nav-item-6"];
// Navigation Color
for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}

// Appended to Nav and Color it Green
let append = document.createElement("a");
append.textContent = "Appended";

let navList = document.querySelector("nav");
navList.appendChild(append);

append.style.color = "green";
console.log(append);

// Prepend to Nav and Color Green
let prepend = document.createElement("a");
prepend.textContent = "Prepend";

let preNavList = document.querySelector("nav");
preNavList.prepend(prepend);

prepend.style.color = "green";

// let nav = document.querySelector("nav").childNodes;
// console.log(nav);

// nav[1].innerHTML = siteContent.nav["nav-item-1"];
// nav[3].innerHTML = siteContent.nav["nav-item-2"];
// nav[5].innerHTML = siteContent.nav["nav-item-3"];
// nav[7].innerHTML = siteContent.nav["nav-item-4"];
// nav[9].innerHTML = siteContent.nav["nav-item-5"];
// nav[11].innerHTML = siteContent.nav["nav-item-6"];

// for (let i = 0; i < nav.length; i++) {
//   nav[i].innerHTML;
// }

// CTA Text Area
let ctaText = document.querySelector(".cta-text > h1");
ctaText.innerHTML = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta-text > button");
ctaButton.innerHTML = siteContent.cta.button;

// CTA Image
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// Top Content
var topContent = document.querySelector(".top-content").childNodes;
// console.log(topContent); Tested location with this

// Features
topContent[1].firstElementChild.innerHTML =
  siteContent["main-content"]["features-h4"];
topContent[1].lastElementChild.innerText =
  siteContent["main-content"]["features-content"];

// About
topContent[3].firstElementChild.innerHTML =
  siteContent["main-content"]["about-h4"];
topContent[3].lastElementChild.innerHTML =
  siteContent["main-content"]["about-content"];

// Middle Image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
var bottomContent = document.querySelector(".bottom-content").childNodes;
// console.log(bottomContent); // Tested location with this

// Services
bottomContent[1].firstElementChild.innerHTML =
  siteContent["main-content"]["services-h4"];
bottomContent[1].lastElementChild.innerText =
  siteContent["main-content"]["services-content"];

// Product
bottomContent[3].firstElementChild.innerHTML =
  siteContent["main-content"]["product-h4"];
bottomContent[3].lastElementChild.innerHTML =
  siteContent["main-content"]["product-content"];

// Vision
bottomContent[5].firstElementChild.innerHTML =
  siteContent["main-content"]["vision-h4"];
bottomContent[5].lastElementChild.innerHTML =
  siteContent["main-content"]["vision-content"];

// Contact
var contact = document.querySelector(".contact").childNodes;
// console.log(contact);

contact[1].innerHTML = siteContent.contact["contact-h4"];
contact[3].innerHTML = siteContent.contact.address;
contact[5].innerHTML = siteContent.contact.phone;
contact[7].innerHTML = siteContent.contact.email;

// Footer
let footer = document.getElementsByTagName("footer");
footer[0].innerHTML = siteContent.footer.copyright;

// Append to Nav
// var  = document.createElement("div");
// var p = document.createElement("p");
// parent.append("Some text", p);

// console.log(parent.childNodes); // NodeList [ #text "Some text", <p> ]
