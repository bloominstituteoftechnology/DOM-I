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

// Nav Bar.

let servicesNav = document.querySelectorAll(".container nav a")[0];
servicesNav.textContent = siteContent["nav"]["nav-item-1"];

let productNav = document.querySelectorAll(".container nav a")[1];
productNav.textContent = siteContent["nav"]["nav-item-2"];

let visionNav = document.querySelectorAll(".container nav a")[2];
visionNav.textContent = siteContent["nav"]["nav-item-3"];

let featuresNav = document.querySelectorAll(".container nav a")[3];
featuresNav.textContent = siteContent["nav"]["nav-item-4"];

let aboutNav = document.querySelectorAll(".container nav a")[4];
aboutNav.textContent = siteContent["nav"]["nav-item-5"];

let contactNav = document.querySelectorAll(".container nav a")[5];
contactNav.textContent = siteContent["nav"]["nav-item-6"];

let rangersNav = document.createElement("a");
rangersNav.setAttribute("href", "#");
rangersNav.textContent = "Rangers";

let powerNav = document.createElement("a");
powerNav.setAttribute("href", "#");
powerNav.textContent = "Power";

let extraNavBar = document.querySelector("header nav");
extraNavBar.appendChild(rangersNav);
extraNavBar.prepend(powerNav);

let navBarStyle = document.querySelectorAll(".container header nav a");
navBarStyle.forEach(function (element) {
  element.style.color = "grey";
});

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// cta
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "DOM <br> IS <br> Awesome";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
