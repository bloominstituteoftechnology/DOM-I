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

// IMG ///////////////////////////////

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// NAV ///////////////////////////////
const nav = document.querySelector("nav");

const navAnchors = document.querySelectorAll("a");

const navContent = Object.keys(siteContent.nav).filter(key =>
  key.includes("nav")
);

navContent.forEach(
  (index, i) =>
    (navAnchors[i].textContent = siteContent.nav[`${navContent[i]}`])
);

navAnchors.forEach(navAnchors => (navAnchors.style.color = "green"));

const newNav = document.createElement("a");

newNav.href = "#";
newNav.textContent = "Store";
newNav.style.color = "green";
nav.prepend(newNav);

// navAnchors[0].textContent = siteContent.nav["nav-item-1"];
// navAnchors[1].textContent = siteContent.nav["nav-item-2"];
// navAnchors[2].textContent = siteContent.nav["nav-item-3"];
// navAnchors[3].textContent = siteContent.nav["nav-item-4"];
// navAnchors[4].textContent = siteContent.nav["nav-item-5"];
// navAnchors[5].textContent = siteContent.nav["nav-item-6"];

// CTA ///////////////////////////////

const h1 = document.querySelector("h1");
console.log(h1);
h1.innerHTML = siteContent.cta.h1.replace(new RegExp(" ", "g"), "<br>");

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

// MAIN ///////////////////////////////

const h4 = document.querySelectorAll("h4");

const h4content = Object.keys(siteContent["main-content"]).filter(key =>
  key.includes("h4")
);

h4content.forEach(
  (index, i) =>
    (h4[i].textContent = siteContent["main-content"][`${h4content[i]}`])
);

// h4[0].textContent = siteContent["main-content"]["features-h4"];
// h4[1].textContent = siteContent["main-content"]["about-h4"];
// h4[2].textContent = siteContent["main-content"]["services-h4"];
// h4[3].textContent = siteContent["main-content"]["product-h4"]
// h4[4].textContent = siteContent["main-content"]["vision-h4"]

const p = document.querySelectorAll("p");

let mainPContent = Object.keys(siteContent["main-content"]).filter(key =>
  key.includes("content")
);
// console.log(mainPContent);
p.forEach(
  (index, i) =>
    (p[i].textContent = siteContent["main-content"][`${mainPContent[i]}`])
);

// CONTACT ///////////////////////////////

h4[5].textContent = siteContent.contact["contact-h4"];

p[5].textContent = siteContent.contact["address"];
p[6].textContent = siteContent.contact["phone"];
p[7].textContent = siteContent.contact["email"];

// FOOTER ///////////////////////////////

p[8].textContent = siteContent.footer["copyright"];
