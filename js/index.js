const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\r\nSomewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Element selectors
// -----------------

let navItems = document.querySelectorAll("nav > a, nav ~ img");
let logoImg = document.querySelector("#logo-img");

let ctaTextItems = document.querySelectorAll(".cta-text > *, .cta-text ~ img");
let ctaImg = document.querySelector("#cta-img");

let mainContentItems = document.querySelectorAll(".main-content h4, .main-content p, .main-content img");
let middleImg = document.querySelector("#middle-img");

let contactItems = document.querySelectorAll(".contact > *");

let copyrightItem = document.querySelector("footer > p:last-child");

// HTML updates using JSON data
// ----------------------------

navItems.forEach((item, i) => {
  if (item.tagName === "IMG") {
    item.src = Object.values(siteContent["nav"])[i];
  } else {
    item.textContent = Object.values(siteContent["nav"])[i];
  }
});

ctaTextItems.forEach((item, i) => {
  if (item.tagName === "IMG") {
    item.src = Object.values(siteContent["cta"])[i];
  } else if (item.tagName === "H1") {
    item.style.whiteSpace = "pre-line";
    item.textContent = Object.values(siteContent["cta"])[i].split(" ").join("\r\n");
  }
  else {
    item.textContent = Object.values(siteContent["cta"])[i];
  }
});
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

mainContentItems.forEach((item, i) => {
  if (item.tagName === "IMG") {
    item.src = Object.values(siteContent["main-content"])[i];
  } else {
    item.textContent = Object.values(siteContent["main-content"])[i];
  }
});

contactItems.forEach((item, i) => {
  item.style.whiteSpace = "pre-line";
  item.textContent = Object.values(siteContent["contact"])[i];
});

copyrightItem.textContent = siteContent["footer"]["copyright"];

// Adding new content
// ------------------

navItems.forEach((item, i) => {
  item.style.color = "green";
});

let navHome = document.createElement("a");
navHome.href = "#";
navHome.textContent = "Home";
navHome.style.color = "green";
document.querySelector("nav").prepend(navHome);

let navLegal = document.createElement("a");
navLegal.href = "#";
navLegal.textContent = "Legal";
navLegal.style.color = "green";
document.querySelector("nav").appendChild(navLegal);