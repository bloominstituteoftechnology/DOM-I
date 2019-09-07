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

// <<<<< Header logo >>>>> //
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// <<<<< NAV >>>>> //
const navBar = document.querySelectorAll("a");

navBar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navBar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navBar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navBar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navBar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navBar[5].innerHTML = siteContent["nav"]["nav-item-6"];

// <<<<< CTA >>>>> //
const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// <<<<< Main Content >>>>> //

const mainHeaders = document.querySelectorAll("h4");

// <<<<< h4 >>>>> //
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

const mainPara = document.querySelectorAll("p");
// <<<<< p >>>>> //
mainPara[0].innerHTML = siteContent["main-content"]["features-content"];
mainPara[1].innerHTML = siteContent["main-content"]["about-content"];
mainPara[2].innerHTML = siteContent["main-content"]["services-content"];
mainPara[3].innerHTML = siteContent["main-content"]["product-content"];
mainPara[4].innerHTML = siteContent["main-content"]["vision-content"];

// <<<<< Middle IMG >>>>> //

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// <<<<< Contact >>>>> //

const contactContent = document.querySelectorAll(".contact h4");

contactContent[0].innerHTML = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");

contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];
