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
logo.setAttribute("src", siteContent.nav["img-src"]);

//pulls in pointer (HTML) and values (siteContent) into function "fill"
function fill(pointer, values) {
  //forEach index of pointer, place each index of values into pointer location.
  pointer.forEach((item, index) => (item.innerText = values[index]));
}

let navItems = document.querySelectorAll("nav a");
let navValues = Object.values(siteContent["nav"]);
fill(navItems, navValues);

//cta
let cta_h1 = document.querySelector(".cta h1");
cta_h1.innerText = siteContent.cta["h1"];
cta_h1.style.wordSpacing = "999999px";

let ctaButton = document.querySelector(".cta button");
ctaButton.innerText = siteContent.cta["button"];

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent.cta["img-src"]);
cta.style.display = "flex";

// main content

//initiate h4 and p arrays
let h4MainValues = [];
let pMainValues = [];
//"point to ALL h4 and p tags in .main-content>.text comment in HTML code"
let mainH4 = document.querySelectorAll(".main-content .text-content h4");
let mainP = document.querySelectorAll(".main-content .text-content p");
//finds "main-content" in siteContent, and assigns all keys into mainContentKeys
let mainContentKeys = Object.keys(siteContent["main-content"]);

mainContentKeys.forEach(key => {
  //forEach key in mainContentKeys, do....
  if (key.includes("h4")) {
    //...check if a key includes "h4" in name.
    h4MainValues.push(siteContent["main-content"][key]);
  } else if (key.includes("content")) {
    //...check if a key includes "p" in name.
    pMainValues.push(siteContent["main-content"][key]);
  }
  //When conditions are met, push the value from "main-content" key onto its array.

  //Future function ideas: make a function that brings in keys
});

//fills each tag location with the appropriate value
fill(mainH4, h4MainValues);
fill(mainP, pMainValues);

//middle img
let imgMiddle = document.getElementById("middle-img");
imgMiddle.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact section
let contactH4 = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");

contactH4.innerText = siteContent.contact["contact-h4"];
contactP[0].innerText = siteContent.contact["address"];
contactP[1].innerText = siteContent.contact["phone"];
contactP[2].innerText = siteContent.contact["email"];
contactP[0].style.width = "150px";

//footer
let footerContent = document.querySelector("footer p");
footerContent.innerText = siteContent.footer["copyright"];

//----##Task Number 3##----//
const aNew1 = document.createElement("a");
const aNew2 = document.createElement("a");
aNew1.innerText = "Hello";
aNew2.innerText = "Goodbye";
aNew1.setAttribute("href", "#");
aNew2.setAttribute("href", "#");

const firstVal = document.getElementsByTagName("nav")[0];
const lastVal = document.getElementsByTagName("nav")[0];
firstVal.prepend(aNew1);
lastVal.appendChild(aNew2);

navItems.forEach(item => (item.style.color = "green"));
document
  .querySelectorAll("nav a")
  .forEach(index => (index.style.color = "green"));
