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

// nav a tags
const nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

// create new a tags and append them to nav
const mainNav = document.querySelector("header nav");
const blogElement = document.createElement("a");
blogElement.textContent = "Blog";
mainNav.appendChild(blogElement);
blogElement.style.color = "green";
blogElement.style.cursor = "pointer";

const welcome = document.createElement("a");
welcome.innerHTML = "Welcome";
mainNav.prepend(welcome);
welcome.style.color = "green";
welcome.style.cursor = "pointer";

// loop through a tags and change color
nav.forEach(function(navTag) {
  navTag.style.color = "green";
});

// header
const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent.cta["img-src"];

const headerH1 = document.querySelector(".cta h1");
headerH1.textContent = siteContent.cta.h1;

const headerBtn = document.querySelector(".cta button");
headerBtn.textContent = siteContent.cta.button;

//  top main content

const contentH4 = document.querySelectorAll(".text-content h4");
contentH4[0].textContent = siteContent["main-content"]["features-h4"];

const contentP = document.querySelectorAll(".text-content p");

contentP[0].textContent = siteContent["main-content"]["features-content"];

contentP[1].textContent = siteContent["main-content"]["about-content"];

contentH4[1].textContent = siteContent["main-content"]["about-h4"];

const mainContentLogo = document.getElementById("middle-img");
mainContentLogo.src = siteContent["main-content"]["middle-img-src"];

// services content
contentH4[2].textContent = siteContent["main-content"]["services-h4"];
contentP[2].textContent = siteContent["main-content"]["services-content"];

// product content
contentH4[3].textContent = siteContent["main-content"]["product-h4"];
contentP[3].textContent = siteContent["main-content"]["product-content"];

// vision
contentH4[4].textContent = siteContent["main-content"]["vision-h4"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

// contact
const contactH4 = document.querySelector(".container .contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll(".container .contact p");
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// footer

const footerP = document.querySelector(".container footer p");
footerP.textContent = siteContent.footer.copyright;
