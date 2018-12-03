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
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent["nav"]["img-src"]);

// ================================ navigation
const anchor = document.querySelectorAll("nav a");
anchor[0].textContent = siteContent["nav"]["nav-item-1"];
anchor[0].style.color = "green";
anchor[1].textContent = siteContent["nav"]["nav-item-2"];
anchor[1].style.color = "green";
anchor[2].textContent = siteContent["nav"]["nav-item-3"];
anchor[2].style.color = "green";
anchor[3].textContent = siteContent["nav"]["nav-item-4"];
anchor[3].style.color = "green";
anchor[4].textContent = siteContent["nav"]["nav-item-5"];
anchor[4].style.color = "green";
anchor[5].textContent = siteContent["nav"]["nav-item-6"];
anchor[5].style.color = "green";

const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//============================== created two new nav
const newAnchor1 = document.createElement("a");
newAnchor1.href = "#";
newAnchor1.textContent = "About US";
newAnchor1.style.color = "green";

const newAnchor2 = document.createElement("a");
newAnchor2.href = "#";
newAnchor2.textContent = "Blog";
newAnchor2.style.color = "green";

const newNav = document.querySelector("nav");
newNav.prepend(newAnchor1);
newNav.appendChild(newAnchor2);

// ================================ cta
const ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent.cta.h1;
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//================================= main content
const topSection = document.querySelectorAll(".top-content .text-content");

const feature = topSection[0];
const featuresHeading = feature.querySelector("h4");
featuresHeading.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = feature.querySelector("p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

const about = topSection[1];
const aboutHeading = about.querySelector("h4");
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = about.querySelector("p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomSection = document.querySelectorAll(
  ".bottom-content .text-content"
);

const service = bottomSection[0];
const serviceHeading = service.querySelector("h4");
serviceHeading.textContent = siteContent["main-content"]["services-h4"];
const serviceContent = service.querySelector("p");
serviceContent.textContent = siteContent["main-content"]["services-content"];

const product = bottomSection[1];
const productHeading = product.querySelector("h4");
productHeading.textContent = siteContent["main-content"]["product-h4"];
const productContent = product.querySelector("p");
productContent.textContent = siteContent["main-content"]["product-content"];

const vision = bottomSection[2];
const visionHeading = vision.querySelector("h4");
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = vision.querySelector("p");
visionContent.textContent = siteContent["main-content"]["vision-content"];

// =========================== contact info
const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.textContent = siteContent["contact"]["email"];

// =========================== footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;
