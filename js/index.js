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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Images
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Navbar
let navLinks = document.querySelectorAll("nav a");
navLinks[0].innerHTML = siteContent.nav["nav-item-1"];
navLinks[1].innerHTML = siteContent.nav["nav-item-2"];
navLinks[2].innerHTML = siteContent.nav["nav-item-3"];
navLinks[3].innerHTML = siteContent.nav["nav-item-4"];
navLinks[4].innerHTML = siteContent.nav["nav-item-5"];
navLinks[5].innerHTML = siteContent.nav["nav-item-6"];

// Middle Section
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1;

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML = siteContent.cta.button;

// Main Content
let contentH4s = document.querySelectorAll(".text-content h4");
contentH4s[0].innerHTML = siteContent["main-content"]["features-h4"];
contentH4s[1].innerHTML = siteContent["main-content"]["about-h4"];
contentH4s[2].innerHTML = siteContent["main-content"]["services-h4"];
contentH4s[3].innerHTML = siteContent["main-content"]["product-h4"];
contentH4s[4].innerHTML = siteContent["main-content"]["vision-h4"];

let contentPs = document.querySelectorAll(".text-content p");
contentPs[0].innerHTML = siteContent["main-content"]["features-content"];
contentPs[1].innerHTML = siteContent["main-content"]["about-content"];
contentPs[2].innerHTML = siteContent["main-content"]["services-content"];
contentPs[3].innerHTML = siteContent["main-content"]["product-content"];
contentPs[4].innerHTML = siteContent["main-content"]["vision-content"];

// Contact Info
let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent.contact["contact-h4"];

let contactPs = document.querySelectorAll(".contact p");
contactPs[0].innerHTML = siteContent.contact.address;
contactPs[1].innerHTML = siteContent.contact.phone;
contactPs[2].innerHTML = siteContent.contact.email;

// Footer
let footer = document.querySelector("footer p");
footer.innerHTML = siteContent.footer.copyright;

// Change Nav text to green
navLinks.forEach(function(element) {
  element.style.color = "green";
});

// Add new links to Nav
let navbar = document.querySelector("nav");

let storeNav = document.createElement("a");
let signinNav = document.createElement("a");

storeNav.setAttribute("href", "#");
storeNav.innerHTML = "Store";
storeNav.style.color = "green";

signinNav.setAttribute("href", "#");
signinNav.innerHTML = "Sign In";
signinNav.style.color = "green";

navbar.appendChild(storeNav);
navbar.prepend(signinNav);