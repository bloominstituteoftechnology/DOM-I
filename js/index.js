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

// NAV
const nav = document.querySelector("nav");
const navItem = document.querySelectorAll("nav a");

// CREATE NEW ITEMS
const appendedItem = document.createElement("a");
appendedItem.textContent = "Appended";
const prependedItem = document.createElement("a");
prependedItem.textContent = "Prepended";

// APPEND NEW ITEM
nav.appendChild(appendedItem);
nav.prepend(prependedItem);

// CHANGING COLOR TO GREEN
navItem.forEach(function(item) {
  item.style.color = "green";
});

navItem1 = navItem[0];
navItem1.textContent = siteContent["nav"]["nav-item-1"];
navItem2 = navItem[1];
navItem2.textContent = siteContent["nav"]["nav-item-2"];
navItem3 = navItem[2];
navItem3.textContent = siteContent["nav"]["nav-item-3"];
navItem4 = navItem[3];
navItem4.textContent = siteContent["nav"]["nav-item-4"];
navItem5 = navItem[4];
navItem5.textContent = siteContent["nav"]["nav-item-5"];
navItem6 = navItem[5];
navItem6.textContent = siteContent["nav"]["nav-item-6"];

// navItem1.textContent = siteContent["nav"]["nav-item-1"];

// CTA
const ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.textContent = siteContent["cta"]["h1"];
const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];
const ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// TOP MAIN HEADING
const textContentHeading = document.querySelectorAll(
  ".top-content .text-content h4"
);
textContentHeading[0].textContent = siteContent["main-content"]["features-h4"];
textContentHeading[1].textContent = siteContent["main-content"]["about-h4"];

// TOP MAIN CONTENT
const textContentParagraph = document.querySelectorAll(
  ".top-content .text-content p"
);
textContentParagraph[0].textContent =
  siteContent["main-content"]["features-content"];
textContentParagraph[1].textContent =
  siteContent["main-content"]["about-content"];

// MIDDLE
const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// BOTTOM MAIN HEADING
const bottomContentHeading = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContentHeading[0].textContent =
  siteContent["main-content"]["services-h4"];
bottomContentHeading[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentHeading[2].textContent = siteContent["main-content"]["vision-h4"];

// BOTTOM MAIN CONTENT
const bottomContentParagraph = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentParagraph[0].textContent =
  siteContent["main-content"]["services-content"];
bottomContentParagraph[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContentParagraph[2].textContent =
  siteContent["main-content"]["vision-content"];

// CONTACT SECTION
const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];
const contactParagraph = document.querySelectorAll(".contact p");
contactParagraph[0].textContent = siteContent["contact"]["address"];
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];

// FOOTER SECTION
const footerCopyRight = document.querySelector("footer p");
footerCopyRight.textContent = siteContent["footer"]["copyright"];
