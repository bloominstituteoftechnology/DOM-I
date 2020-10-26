const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav header selectors
const multipleNav = document.querySelectorAll("a");

multipleNav[0].textContent = siteContent["nav"]["nav-item-1"];
multipleNav[1].textContent = siteContent["nav"]["nav-item-2"];
multipleNav[2].textContent = siteContent["nav"]["nav-item-3"];
multipleNav[3].textContent = siteContent["nav"]["nav-item-4"];
multipleNav[4].textContent = siteContent["nav"]["nav-item-5"];
multipleNav[5].textContent = siteContent["nav"]["nav-item-6"];

// nav text color change
multipleNav[0].style.color = "green";
multipleNav[1].style.color = "green";
multipleNav[2].style.color = "green";
multipleNav[3].style.color = "green";
multipleNav[4].style.color = "green";
multipleNav[5].style.color = "green";

// add nav items
const navBar = document.querySelector(".container nav");
const newNav = document.createElement("a");
newNav.href = "#";
newNav.textContent = "New Item 1";
navBar.appendChild(newNav);

const newNav2 = document.createElement("a");
newNav2.href = "#";
newNav2.textContent = "New Item 2";
navBar.appendChild(newNav2);

// new nav color change
newNav.style.color = "green";
newNav2.style.color = "green";

// cta selectors

const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// main content selectors

//h4
const h4s = document.querySelectorAll("h4");

h4s[0].textContent = siteContent["main-content"]["features-h4"];
h4s[1].textContent = siteContent["main-content"]["about-h4"];
h4s[2].textContent = siteContent["main-content"]["services-h4"];
h4s[3].textContent = siteContent["main-content"]["product-h4"];
h4s[4].textContent = siteContent["main-content"]["vision-h4"];

//p
const allP = document.querySelectorAll("p");

allP[0].textContent = siteContent["main-content"]["features-content"];
allP[1].textContent = siteContent["main-content"]["about-content"];
allP[2].textContent = siteContent["main-content"]["services-content"];
allP[3].textContent = siteContent["main-content"]["product-content"];
allP[4].textContent = siteContent["main-content"]["vision-content"];

//img
const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact selectors

h4s[5].textContent = siteContent["contact"]["contact-h4"];

allP[5].textContent = siteContent["contact"]["address"];
allP[6].textContent = siteContent["contact"]["phone"];
allP[7].textContent = siteContent["contact"]["email"];

// footer selectors

allP[8].textContent = siteContent["footer"]["copyright"];
