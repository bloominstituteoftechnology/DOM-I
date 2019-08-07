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
// nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll("nav a");
navItems.forEach((item, index) => {
  item.textContent = siteContent[`nav`][`nav-item-${index + 1}`];
  item.style.color = "green"
});

// cta
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaText = document.querySelector(".cta-text");
ctaText.childNodes.forEach(node => {
  node.tagName
    ? (node.textContent = siteContent["cta"][`${node.tagName.toLowerCase()}`])
    : null;
});

// Main Content
let mainContent = document.querySelector(".main-content");
let mainSections = ["features", "about", "services", "product", "vision"];
mainSections.forEach((section, index) => {
  mainContent.querySelectorAll("div h4")[index].textContent =
    siteContent["main-content"][`${section}-h4`];
  mainContent.querySelectorAll("div p")[index].textContent =
    siteContent["main-content"][`${section}-content`];
});

mainContent
  .querySelector("img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact
let contact = document.querySelector(".contact");

Object.keys(siteContent["contact"]).forEach(
  (item, index) =>
    (contact.childNodes[index].textContent = siteContent["contact"][item])
);

// Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
