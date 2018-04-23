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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let a = document.querySelector("a");
a.innerHTML = siteContent["nav"]["nav-item-1"];
a.innerHTML = siteContent["nav"]["nav-item-2"];
a.innerHTML = siteContent["nav"]["nav-item-3"];
a.innerHTML = siteContent["nav"]["nav-item-4"];
a.innerHTML = siteContent["nav"]["nav-item-5"];
a.innerHTML = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector(".cta-text h1");
cta.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let features = document.querySelector(".main-content .top-content h4");
features.innerHTML = siteContent["main-content"]["h4"];

let featurescontent = document.querySelector(".main-content .top-content .text-content");
featurescontent.innerHTML = siteContent["main-content"]["p"];

let about = document.getElementsByClassName("about");
featurescontent.innerHTML = siteContent["features-content"];

let aboutcontent = document.querySelectorAll(".text-content");
aboutcontent.innerHTML = siteContent[".text-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["img-src"]);

let servicesh4 = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let servicesContent = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let producth4 = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let productContent = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let visionH4 = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let visionContent = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

let contact = document.getElementsByClassName("contact");
contact.innerHTML = siteContent["contact"];

let footer = document.querySelectorAll("footer");
footer.innerHTML = siteContent["footer"];
