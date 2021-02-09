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
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;

//beggining of top section

let topTitleOne = document.querySelector(
  ".top-content .text-content:nth-of-type(1) h4"
);
topTitleOne.textContent = siteContent["main-content"]["features-h4"];

let topTextOne = document.querySelector(
  ".top-content .text-content:nth-of-type(1) p"
);
topTextOne.textContent = siteContent["main-content"]["features-content"];

let topTitleTwo = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
topTitleTwo.textContent = siteContent["main-content"]["about-h4"];

let topTextTwo = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);
topTextTwo.textContent = siteContent["main-content"]["about-content"];

// Beggining of bottom section

let bottomTitleOne = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
bottomTitleOne.textContent = siteContent["main-content"]["services-h4"];

let bottomTextOne = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
bottomTextOne.textContent = siteContent["main-content"]["services-content"];

let bottomTitleTwo = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
bottomTitleTwo.textContent = siteContent["main-content"]["product-h4"];

let bottomTextTwo = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
bottomTextTwo.textContent = siteContent["main-content"]["product-content"];

let bottomTitleThree = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
bottomTitleThree.textContent = siteContent["main-content"]["vision-h4"];

let bottomTextThree = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
bottomTextThree.textContent = siteContent["main-content"]["vision-content"];
