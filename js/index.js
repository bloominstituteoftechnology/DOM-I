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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
let services = document.querySelector("a");
services.innerText = siteContent["nav"]["nav-item-1"];
let product = document.querySelector("a:nth-child(2)");
product.innerText = siteContent["nav"]["nav-item-2"];
let vision = document.querySelector("a:nth-child(3)");
vision.innerText = siteContent["nav"]["nav-item-3"];
let features = document.querySelector("a:nth-child(4)");
features.innerText = siteContent["nav"]["nav-item-4"];
let about = document.querySelector("a:nth-child(5)");
about.innerText = siteContent["nav"]["nav-item-5"];
let contact = document.querySelector("a:nth-child(6)");
contact.innerText = siteContent["nav"]["nav-item-6"];
let domIsWesom = document.querySelector(".cta-text h1");
domIsWesom.innerText = siteContent["cta"]["h1"];
let buttonGetStarted = document.querySelector(".cta-text button");
buttonGetStarted.innerText = siteContent["cta"]["button"];
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];
let featuresH4 = document.querySelector(".top-content .text-content h4");
featuresH4.innerText = siteContent["main-content"]["features-h4"];
let featuresContent = document.querySelector(".top-content .text-content p");
featuresContent.innerText = siteContent["main-content"]["features-content"];
let aboutH4 = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
aboutH4.innerText = siteContent["main-content"]["about-h4"];
let aboutContent = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);
aboutContent.innerText = siteContent["main-content"]["about-content"];
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];
let servicesH4 = document.querySelector(".bottom-content .text-content h4");
servicesH4.innerText = siteContent["main-content"]["services-h4"];
let servicesContent = document.querySelector(".bottom-content .text-content p");
servicesContent.innerText = siteContent["main-content"]["services-content"];
let productH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productH4.innerText = siteContent["main-content"]["product-h4"];
let productContent = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productContent.innerText = siteContent["main-content"]["product-content"];
let visionH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionH4.innerText = siteContent["main-content"]["vision-h4"];
let visionContent = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionContent.innerText = siteContent["main-content"]["vision-content"];
let contactH4 = document.querySelector(".contact h4");
contactH4.innerText = siteContent["contact"]["contact-h4"];
let address = document.querySelector(".contact p");
address.innerText = siteContent["contact"]["address"];
let phone = document.querySelector(".contact p:nth-child(3)");
phone.innerText = siteContent["contact"]["phone"];
let email = document.querySelector(".contact p:nth-child(4)");
email.innerText = siteContent["contact"]["email"];
let copyright = document.querySelector("footer p");
copyright.innerText = siteContent["footer"]["copyright"];
// Task 3
let navTag = document.querySelector("nav");
let lastNav = document.createElement("a");
lastNav.innerText = "End";
navTag.appendChild(lastNav);
let firstNav = document.createElement("a");
firstNav.innerText = "Start";
navTag.prepend(firstNav);
let allNav = document.querySelectorAll("a");
allNav.forEach((data) => (data.style.color = "green"));
domIsWesom.innerHTML = "DOM<br> Is<br> Awesome"; // to match the provided style.
address.innerHTML = "123 Way 456 Street <br> Somewhere, USA"; // to match the provided style.