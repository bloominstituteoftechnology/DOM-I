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
//==================================================================================================================//
//updating  nav bar list
const multipleSelections = document.querySelectorAll("a");
Array.from(multipleSelections).forEach(el => {
  el.style.color = " green";
});

multipleSelections[0].textContent = siteContent.nav["nav-item-1"];
multipleSelections[1].textContent = siteContent.nav["nav-item-2"];
multipleSelections[2].textContent = siteContent.nav["nav-item-3"];
multipleSelections[3].textContent = siteContent.nav["nav-item-3"];
multipleSelections[4].textContent = siteContent.nav["nav-item-5"];
multipleSelections[5].textContent = siteContent.nav["nav-item-6"];

// appending and prepending to navbar
const nav = document.querySelector("nav");
const item = document.createElement("a");
item.textContent = "whaat";
item.style.color = "blue";
const item2 = document.createElement("a");
item2.textContent = "eveer";
item2.style.color = "blue";
nav.append(item2);
nav.prepend(item);
//

//updating      section class="cta"
let i;
let text = document.querySelector("h1");
let args = [siteContent.cta["h1"]];
function input() {
  "use strict";
  for (i = 0; i < args.length; i++) {
    text.appendChild(document.createTextNode(args[i]));
    text.appendChild(document.createElement("br"));
  }
}
input(args);

const button = document.querySelector("button");
button.textContent = "Get Started";

const headImg = document.getElementById("cta-img");
headImg.setAttribute("src", siteContent["cta"]["img-src"]);
//==================================================================================================================//
//updating      section class="main-content"
var list = siteContent["main-content"]; // extract the list from the given object//
var textCon = document.querySelectorAll("div.text-content > h4"); // grabbing h4//
var img = document.getElementById("middle-img"); //grabbing the img//
img.setAttribute("src", siteContent["main-content"]["middle-img-src"]); // updating the img src//
var textConP = document.querySelectorAll("div.text-content > p"); // grabbing p//
// looping over the object and pushing the "h4" values I need in the variable//
var tx = [];
for (var key in list) {
  if (list[key].length < 10) {
    tx.push(list[key]);
  }
}
// looping over the object and pushing the "p" values I need in the variable//
var px = [];
for (var key in list) {
  if (list[key].length >= 30) {
    px.push(list[key]);
  }
}

//looping over the h4 and adding the object values//
for (var a = 0; a < textCon.length; a++) {
  textCon[a].textContent = tx[a];
}

//looping over the paragraph and adding needed object values//
for (var c = 0; c < textConP.length; c++) {
  textConP[c].textContent = px[c];
}
//==================================================================================================================//
//updating      section class="contact"

let contact = document.querySelector("section.contact > h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let paragraph = document.querySelectorAll("section.contact > p");
paragraph[0].textContent = siteContent.contact.address;
paragraph[1].textContent = siteContent.contact.phone;
paragraph[2].textContent = siteContent.contact.email;

//==================================================================================================================//
//updating      footer

let footer = document.querySelector("footer > p");
footer.textContent = siteContent.footer.copyright;
