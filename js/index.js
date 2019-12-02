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

// * Navigation
let navA = document.querySelectorAll("a");
navA[0].textContent = siteContent["nav"]["nav-item-1"];
navA[1].textContent = siteContent["nav"]["nav-item-2"];
navA[2].textContent = siteContent["nav"]["nav-item-3"];
navA[3].textContent = siteContent["nav"]["nav-item-4"];
navA[4].textContent = siteContent["nav"]["nav-item-5"];
navA[5].textContent = siteContent["nav"]["nav-item-6"];

// * CTA
let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// * Main Content;

let contentImg = document.querySelector("#middle-img");
contentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let contentHeader = document.querySelectorAll(".text-content h4");

contentHeader[0].textContent = siteContent["main-content"]["features-h4"];
contentHeader[1].textContent = siteContent["main-content"]["about-h4"];
contentHeader[2].textContent = siteContent["main-content"]["services-h4"];
contentHeader[3].textContent = siteContent["main-content"]["product-h4"];
contentHeader[4].textContent = siteContent["main-content"]["vision-h4"];

let contentP = document.querySelectorAll(".text-content p");
contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

// * Contact
