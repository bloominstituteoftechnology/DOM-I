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

let links = document.querySelectorAll("a");
let link = Array.from(links);
link.map(
  (item, index) => (item.textContent = Object.values(siteContent.nav)[index])
);

let firstImg = document.querySelector("#cta-img");
firstImg.src = "img/header-img.png";

let h1 = document.querySelector("h1");
h1.style.whiteSpace = "pre-line";
h1.textContent = siteContent["cta"]["h1"].split(" ").join("\r\n");

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let h4 = document.querySelector("h4");
h4.textContent = siteContent["main-content"]["features-h4"];

let para = document.querySelector("p");
para.textContent = siteContent["main-content"]["features-content"];

let mainContentItems = document.querySelectorAll(
  ".main-content h4, .main-content p, .main-content img"
);

let footer = document.querySelectorAll(".contact h4, .contact p, footer");

Array.prototype.forEach.call(mainContentItems, (item, i) => {
  if (Object.keys(siteContent["main-content"])[i].includes("img")) {
    item.src = Object.values(siteContent["main-content"])[i];
  } else {
    item.textContent = Object.values(siteContent["main-content"])[i];
  }
});

Array.prototype.forEach.call(footer, (item, i) => {
  item.textContent = Object.values(siteContent["contact"])[i];
});
