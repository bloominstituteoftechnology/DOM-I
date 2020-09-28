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

let nav = document.querySelector("nav");
nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector(".cta-text h1");
cta.textContent = siteContent["cta"]["h1"];
cta.style.fontFamily = "Bangers";
cta.innerHTML = "Dom<br> Is<br> Awesome";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let mainConFeat = document.querySelector(".text-content:nth-of-type(1) h4");
mainConFeat.textContent = siteContent["main-content"]["features-h4"];
let mainConFeatText = document.querySelector(".text-content:nth-of-type(1) p");
mainConFeatText.textContent = siteContent["main-content"]["features-content"];

let mainConAbout = document.querySelector(".text-content:nth-of-type(2) h4");
mainConAbout.textContent = siteContent["main-content"]["about-h4"];
let mainConAboutText = document.querySelector(".text-content:nth-of-type(2) p");
mainConAboutText.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let mainConServ = document.querySelector(".text-content:nth-of-type(3) h4");
mainConServ.textContent = siteContent["main-content"]["services-h4"];
let mainConServText = document.querySelector(".text-content:nth-of-type(3) p");
mainConServText.textContent = siteContent["main-content"]["services-content"];

let mainConProd = document.querySelector(".text-content:nth-of-type(4) h4");
mainConProd.textContent = siteContent["main-content"]["product-h4"];
let mainConProdText = document.querySelector(".text-content:nth-of-type(4) p");
mainConProdText.textContent = siteContent["main-content"]["product-content"];

let mainConVision = document.querySelector(".text-content:nth-of-type(5) h4");
mainConVision.textContent = siteContent["main-content"]["vision-h4"];
let mainConVisionText = document.querySelector(
  ".text-content:nth-of-type(5) p"
);
mainConVisionText.textContent = siteContent["main-content"]["vision-content"];
