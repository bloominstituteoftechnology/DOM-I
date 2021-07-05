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
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navBar = document.querySelectorAll("header nav a");
navBar.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

const ctaH1 = document.querySelector("section div h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector("section div button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

const topContentH = document.querySelectorAll(".top-content h4");
topContentH[0].textContent = siteContent["main-content"]["features-h4"];
topContentH[1].textContent = siteContent["main-content"]["about-h4"];

const topContentP = document.querySelectorAll(".top-content p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const botContentH = document.querySelectorAll(".bottom-content h4");
botContentH[0].textContent = siteContent["main-content"]["services-h4"];
botContentH[1].textContent = siteContent["main-content"]["product-h4"];
botContentH[2].textContent = siteContent["main-content"]["vision-h4"];

const botContentP = document.querySelectorAll(".bottom-content p");
botContentP[0].textContent = siteContent["main-content"]["services-content"];
botContentP[1].textContent = siteContent["main-content"]["product-content"];
botContentP[2].textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

navBar.forEach((item) => {
  item.style.color = "green";
});

const faq = document.createElement("a");
faq.textContent = "FAQ";
document.querySelector("nav").appendChild(faq);

const info = document.createElement("a");
info.textContent = "Info";
document.querySelector("nav").prepend(info);
