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
    h1: "DOM IS AWESOME",
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

//NAV

let headerNav = document.querySelectorAll("nav a");
headerNav.forEach((item, num) => {
  item.textContent = siteContent.nav[`nav-item-${num + 1}`];
  item.setAttribute("style", "color: green");
});

let anchorContainer = document.querySelector("nav");

let firstAnchor = document.createElement("a");

firstAnchor.setAttribute("href", "#");
firstAnchor.setAttribute("style", "color: green");
firstAnchor.textContent = "Hyrule!";

anchorContainer.prepend(firstAnchor);

let lastAnchor = document.createElement("a");

lastAnchor.setAttribute("href", "#");
lastAnchor.setAttribute("style", "color: green");
lastAnchor.textContent = `I <3 Zelda!`;

anchorContainer.appendChild(lastAnchor);



//CTA

let ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.querySelector(`#cta-img`);
ctaImg.setAttribute(`src`, siteContent.cta["img-src"]);

// MAIN CONTENT - TOP CONTENT - H4

let topContentHeader = document.querySelectorAll(".top-content h4");
topContentHeader[0].textContent = siteContent["main-content"]["features-h4"];

topContentHeader[1].textContent = siteContent["main-content"]["about-h4"];

// MAIN CONTENT - TOP CONTENT - P

let topContentParagraph = document.querySelectorAll(".top-content p");
topContentParagraph[0].textContent =
  siteContent["main-content"]["features-content"];

topContentParagraph[1].textContent = siteContent["main-content"]["about-content"];

// MAIN CONTENT - MIDDLE IMAGE

let middleImage = document.querySelector(`#middle-img`);
middleImage.setAttribute(`src`, siteContent["main-content"]["middle-img-src"]);

// MAIN CONTENT - BOTTOM CONTENT - H4

let bottomContentHeader = document.querySelectorAll(".bottom-content h4");

bottomContentHeader[0].textContent = siteContent["main-content"]["services-h4"];

bottomContentHeader[1].textContent = siteContent["main-content"]["product-h4"];

bottomContentHeader[2].textContent = siteContent["main-content"]["vision-h4"];

// MAIN CONTENT - BOTTOM CONTENT - P

let bottomContentParagraph = document.querySelectorAll(".bottom-content p");

bottomContentParagraph[0].textContent =
  siteContent["main-content"]["services-content"];

bottomContentParagraph[1].textContent =
  siteContent["main-content"]["product-content"];

bottomContentParagraph[2].textContent =
  siteContent["main-content"]["vision-content"];

// CONTACT H4

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

// CONTACT P

let contactParagraphs = document.querySelectorAll(`.contact p`);

contactParagraphs[0].textContent = siteContent.contact.address;
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

// FOOTER

let footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent.footer.copyright;
