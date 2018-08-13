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
const d = document;
let logo = d.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let nav = d.querySelectorAll("a");

nav[0].innerText = siteContent["nav"]["nav-item-1"];
nav[1].innerText = siteContent["nav"]["nav-item-2"];
nav[2].innerText = siteContent["nav"]["nav-item-3"];
nav[3].innerText = siteContent["nav"]["nav-item-4"];
nav[4].innerText = siteContent["nav"]["nav-item-5"];
nav[5].innerText = siteContent["nav"]["nav-item-6"];

nav.forEach(element => (element.style.color = "green"));
// nav[0].style.color = "green";
// nav[1].style.color = "green";
// nav[2].style.color = "green";
// nav[3].style.color = "green";
// nav[4].style.color = "green";
// nav[5].style.color = "green";

const newAOne = document.createElement("a");
const newATwo = document.createElement("a");
const parent = document.querySelector("nav");
parent.appendChild(newAOne);
parent.prepend(newATwo);
newAOne.innerText = "ONE";
newAOne.style.color = "red";
newATwo.innerText = "TWO";
newATwo.style.color = "red";

let logo2 = d.getElementById("cta-img");
logo2.setAttribute("src", siteContent["cta"]["img-src"]);

let theCta = d.querySelector("h1");
theCta.innerText = siteContent["cta"]["h1"];

let theButton = d.querySelector("button");
theButton.innerHTML = siteContent["cta"]["button"];

let middleHeaders = d.querySelectorAll("H4");
middleHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
middleHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
middleHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
middleHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
middleHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];
middleHeaders[5].innerHTML = siteContent["contact"]["contact-h4"];

let middleParagraphs = d.querySelectorAll("p");
middleParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
middleParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];
middleParagraphs[2].innerHTML = siteContent["main-content"]["services-content"];
middleParagraphs[3].innerHTML = siteContent["main-content"]["product-content"];
middleParagraphs[4].innerHTML = siteContent["main-content"]["vision-content"];
middleParagraphs[5].innerHTML = siteContent["contact"]["address"];
middleParagraphs[6].innerHTML = siteContent["contact"]["phone"];
middleParagraphs[7].innerHTML = siteContent["contact"]["email"];
middleParagraphs[8].innerHTML = siteContent["footer"]["copyright"];

let logo3 = d.getElementById("middle-img");
logo3.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
