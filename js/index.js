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
logo.src = siteContent.nav["img-src"];

let navigation = document.querySelectorAll("nav a");
for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = Object.values(siteContent.nav)[i];
}

let ctaText = document.querySelector(".cta-text");
for (let i = 0; i < Object.keys(siteContent.cta).length; i++) {
  if (!Object.values(siteContent.cta)[i].includes("img"))
    ctaText.children[i].textContent = Object.values(siteContent.cta)[i];
}

let circle = document.getElementById("cta-img");
circle.src = siteContent.cta["img-src"];

let mainHeadings = document.querySelectorAll(".text-content h4");
mainHeadings[0].textContent = siteContent["main-content"]["features-h4"];
mainHeadings[1].textContent = siteContent["main-content"]["about-h4"];
mainHeadings[2].textContent = siteContent["main-content"]["services-h4"];
mainHeadings[3].textContent = siteContent["main-content"]["product-h4"];
mainHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

let featuresContent = document.querySelector(".top-content .text-content p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutContent = document.querySelectorAll(".top-content .text-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleIMG = document.getElementById("middle-img");
middleIMG.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

let contactSection = document.querySelector(".contact").children;
for (let i = 0; i < contactSection.length; i++) {
  contactSection[i].textContent = Object.values(siteContent.contact)[i];
}

let footer = document.querySelector("footer");
footer.children[0].textContent = siteContent.footer.copyright;
