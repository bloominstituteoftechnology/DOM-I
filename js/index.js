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

//content

let featuresH4 = document.querySelectorAll(".top-content .text-content h4")[0];
featuresH4.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelectorAll(
  ".top-content .text-content p"
)[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll(".top-content .text-content h4")[1];
aboutH4.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll(".top-content .text-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[0];
servicesH4.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelectorAll(
  ".bottom-content .text-content p"
)[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
)[1];
productH4.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelectorAll(
  ".bottom-content .text-content p"
)[1];
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionH4.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelectorAll(
  ".bottom-content .text-content p"
)[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// contact
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelectorAll(".contact p")[0];
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelectorAll(".contact p")[1];
phone.textContent = siteContent["contact"]["phone"];

let email = document.querySelectorAll(".contact p")[2];
email.textContent = siteContent["contact"]["email"];
//END contact build

// footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
