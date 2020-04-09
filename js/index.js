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

//let nav = document.querySelector("a");
//nav.textContent = "Services"

let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[0].style.color = "green";
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[1].style.color = "green";
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[2].style.color = "green";
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[3].style.color = "green";
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[4].style.color = "green";
navItems[5].textContent = siteContent["nav"]["nav-item-6"];
navItems[5].style.color = "green";

let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"])

let codesnip = document.getElementById("middle-img");
codesnip.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let button = document.querySelector("button");
button.textContent = "Get Started";

let mainHeadLine = document.querySelector(".cta-text h1");
mainHeadLine.textContent = "DOM is Awesome!";

let topContent = document.querySelectorAll(".top-content .text-content p");
topContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let topSubHead = document.querySelectorAll(".top-content .text-content h4");
topSubHead[0].textContent = "Features";
topSubHead[1].textContent = "About";


let bottomSubHead = document.querySelectorAll(".bottom-content .text-content h4");
bottomSubHead[0].textContent = "Services";
bottomSubHead[1].textContent = "Product";
bottomSubHead[2].textContent = "Vision";

let bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomContent[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomContent[2].textContent = siteContent["main-content"]['vision-content'];


let contact = document.getElementsByClassName("contact p");
contact.textContent =  "123 Way 456 Street Somewhere, USA"; 

let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = "Contact";

let footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";









