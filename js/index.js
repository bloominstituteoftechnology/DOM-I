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
logo.src = "img/logo.png";

let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];

nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";


let cta = document.querySelector(".cta .cta-text h1");
cta.innerHTML = "dom<br>is<br>awesome";

let button = document.querySelector(".cta button");
button.innerHTML = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img")
headerImg.src = "img/header-img.png"

let contentHeader = document.querySelectorAll(".text-content h4");

contentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
contentHeader[1].innerHTML = siteContent["main-content"]["about-h4"];
contentHeader[2].innerHTML = siteContent["main-content"]["services-h4"];
contentHeader[3].innerHTML = siteContent["main-content"]["product-h4"]
contentHeader[4].innerHTML = siteContent["main-content"]["vision-h4"]

let contentP = document.querySelectorAll(".text-content p");

contentP[0].innerHTML = siteContent["main-content"]["features-content"];
contentP[1].innerHTML = siteContent["main-content"]["about-content"];
contentP[2].innerHTML = siteContent["main-content"]["services-content"];
contentP[3].innerHTML = siteContent["main-content"]["product-content"];
contentP[4].innerHTML = siteContent["main-content"]["vision-content"]

let middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg";

let infoHeader = document.querySelector(".contact h4");
infoHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contact = document.querySelectorAll(".contact p");

contact[0].innerHTML = siteContent["contact"]["address"];
contact[1].innerHTML = siteContent["contact"]["phone"];
contact[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];









