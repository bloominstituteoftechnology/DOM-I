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

let navItems = document.querySelectorAll("header nav a");
navItems[0].innerText = siteContent.nav["nav-item-1"];
navItems[1].innerText = siteContent.nav["nav-item-2"];
navItems[2].innerText = siteContent.nav["nav-item-3"];
navItems[3].innerText = siteContent.nav["nav-item-4"];
navItems[4].innerText = siteContent.nav["nav-item-5"];
navItems[5].innerText = siteContent.nav["nav-item-6"];

let resume = document.createElement("a");
let portfolio = document.createElement("a");

let mainNav = document.querySelector("header nav");

mainNav.prepend(resume);
mainNav.appendChild(portfolio);

resume.innerText = "Resume";
portfolio.innerText = "Portfolio";
resume.href = "#";
portfolio.href = "#";

navItems[0].style.color = "green";
navItems[1].style.color = "green";
navItems[2].style.color = "green";
navItems[3].style.color = "green";
navItems[4].style.color = "green";
navItems[5].style.color = "green";
navItems[6].style.color = "green";
navItems[7].style.color = "green";

let ctaText = document.querySelector(".cta .cta-text h1");
ctaText.innerText = siteContent.cta["h1"];

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerText = siteContent.cta.button;

let ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent.cta["img-src"];

let topContentHeaders = document.querySelectorAll(
  ".top-content .text-content h4"
);
topContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll(".top-content .text-content p");
topContentText[0].innerText = siteContent["main-content"]["features-content"];
topContentText[1].innerText = siteContent["main-content"]["features-content"];

let middleImage = document.querySelector(".middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

let bottomContentHeaders = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentText[0].innerText =
  siteContent["main-content"]["services-content"];
bottomContentText[1].innerText = siteContent["main-content"]["product-content"];
bottomContentText[2].innerText = siteContent["main-content"]["vision-content"];

// let contactHeader = document.querySelectorAll('.content h4')
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerText = siteContent.contact["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].innerText = siteContent.contact.address;
contactText[1].innerText = siteContent.contact.phone;
contactText[2].innerText = siteContent.contact.email;

let footerText = document.querySelector("footer p");
footerText.innerText = siteContent["footer"]["copyright"];
