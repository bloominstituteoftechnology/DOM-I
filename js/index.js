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

// =============== Header ===============
let link = document.querySelectorAll("a");
link[0].textContent = "Services";
link[1].textContent = "Product";
link[2].textContent = "Vision";
link[3].textContent = "Features";
link[4].textContent = "About";
link[5].textContent = "Contact";

let h1 = document.querySelector("h1");
h1.innerHTML = "DOM<br> Is<br> Awesome";
// h1.innerHTML = siteContent["cta"]["h1"];

let headerImg = document.getElementById("cta-img");
headerImg.src = siteContent["cta"]["img-src"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// =============== Content ===============
let h4 = document.querySelectorAll("h4");
let middleImg = document.getElementById("middle-img");
let middleText = document.querySelectorAll(".text-content p");

h4[0].textContent = siteContent["main-content"]["features-h4"];
middleText[0].textContent = siteContent["main-content"]["features-content"];

h4[1].textContent = siteContent["main-content"]["about-h4"];
middleText[1].textContent = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

h4[2].textContent = siteContent["main-content"]["services-h4"];
middleText[2].textContent = siteContent["main-content"]["services-content"];

h4[3].textContent = siteContent["main-content"]["product-h4"];
middleText[3].textContent = siteContent["main-content"]["product-content"];

h4[4].textContent = siteContent["main-content"]["vision-h4"];
middleText[4].textContent = siteContent["main-content"]["vision-content"];
