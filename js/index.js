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

//Nav links...
const navLinks = document.querySelectorAll("a");
// navLinks.forEach(el => {
//  return el.setAttribute("id", `nav-item-${navLinks.length}`);
// });

navLinks[0].setAttribute("id", "nav-item-1");
navLinks[1].setAttribute("id", "nav-item-2");
navLinks[2].setAttribute("id", "nav-item-3");
navLinks[3].setAttribute("id", "nav-item-4");
navLinks[4].setAttribute("id", "nav-item-5");
navLinks[5].setAttribute("id", "nav-item-6");

document.getElementById("nav-item-1").textContent =
  siteContent["nav"]["nav-item-1"];
document.getElementById("nav-item-2").textContent =
  siteContent["nav"]["nav-item-2"];
document.getElementById("nav-item-3").textContent =
  siteContent["nav"]["nav-item-3"];
document.getElementById("nav-item-4").textContent =
  siteContent["nav"]["nav-item-4"];
document.getElementById("nav-item-5").textContent =
  siteContent["nav"]["nav-item-5"];
document.getElementById("nav-item-6").textContent =
  siteContent["nav"]["nav-item-6"];

//Cta...
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

const ctaBtn = document.querySelector(".cta button");
ctaBtn.textContent = siteContent["cta"]["button"];

//h4 tags...
const h4 = document.querySelectorAll("h4");
console.log(h4);
h4[0].setAttribute("class", "features-h4");
h4[1].setAttribute("class", "about-h4");
h4[2].setAttribute("class", "services-h4");
h4[3].setAttribute("class", "product-h4");
h4[4].setAttribute("class", "vision-h4");
h4[5].setAttribute("class", "contact-h4");

const featH4 = document.querySelector(".features-h4");
featH4.textContent = siteContent["main-content"]["features-h4"];

const abtH4 = document.querySelector(".about-h4");
abtH4.textContent = siteContent["main-content"]["about-h4"];

const svcH4 = document.querySelector(".services-h4");
svcH4.textContent = siteContent["main-content"]["services-h4"];

const prodH4 = document.querySelector(".product-h4");
prodH4.textContent = siteContent["main-content"]["product-h4"];

const visH4 = document.querySelector(".vision-h4");
visH4.textContent = siteContent["main-content"]["vision-h4"];

const conH4 = document.querySelector(".contact-h4");
conH4.textContent = siteContent["contact"]["contact-h4"];

//P tags...
const pTags = document.querySelectorAll("p");
console.log(pTags);

pTags[0].setAttribute('class', "features-content");
pTags[1].setAttribute("class", 'about-content');
pTags[2].setAttribute("class", "services-content");
pTags[3].setAttribute("class", "product-content");
pTags[4].setAttribute("class", "vision-content");
pTags[5].setAttribute("class", "address");
pTags[6].setAttribute("class", "phone");
pTags[7].setAttribute("class", "email");
pTags[8].setAttribute("class", "copyright");

pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]['product-content'];
pTags[4].textContent = siteContent["main-content"]["vision-content"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent['contact']['phone'];
pTags[7].textContent
= siteContent['contact']['email']
pTags[8].textContent = siteContent['footer']['copyright'];



//Middle image...
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Nav text style...
navLinks.forEach(el => {
  el.style.color = "green";
})

//Appended child to nav...

const nav = document.querySelector("nav");
const newLink = document.createElement("a");
newLink.setAttribute("href", '#');
newLink.setAttribute('id', 'nav-item-7');
newLink.textContent = "Help";
newLink.style.color = "green";
nav.appendChild(newLink);

const preLink = document.createElement("a");
preLink.setAttribute("href", "#");
preLink.textContent = "More Help";
preLink.style.color = "green";
nav.prepend(preLink);

const br = document.createElement("br");
const br2 = document.createElement("br");
console.log(br);
const h1 = document.querySelector("h1");
h1.prepend(br2);
h1.appendChild(br);

