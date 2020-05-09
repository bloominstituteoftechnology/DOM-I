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
    "h4-1": "Features",
    "p-1":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-2": "About",
    "p-2":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "h4-3": "Services",
    "p-3":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-4": "Product",
    "p-4":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-5": "Vision",
    "p-5":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "h4-6": "Contact",
    "p-6": "123 Way 456 Street Somewhere, USA",
    "p-7": "1 (888) 888-8888",
    "p-8": "sales@greatidea.io",

    "p-9": "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
// IMG
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
let nextLogo = document.getElementById("cta-img");
nextLogo.setAttribute("src", siteContent["cta"]["img-src"]);
let lastLogo = document.getElementById("middle-img");
lastLogo.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//END IMG
//
//START TEXT

const navItems = document.querySelectorAll("nav a");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i}`];
}

const titleH1 = document.querySelector("h1");
titleH1.textContent = siteContent["cta"]["h1"];

const button1 = document.querySelector("button");
button1.textContent = siteContent["cta"]["button"];

const allFour = document.querySelectorAll("h4");
for (let i = 0; i < allFour.length; i++) {
  allFour[i].textContent = siteContent["main-content"][`h4-${i + 1}`];
}
const allP = document.querySelectorAll("p");
for (let i = 0; i < allP.length; i++) {
  allP[i].textContent = siteContent["main-content"][`p-${i + 1}`];
}
//const footerP = document.querySelector("footer p");
//footerP.textContent = siteContent.footer["copyright"];
