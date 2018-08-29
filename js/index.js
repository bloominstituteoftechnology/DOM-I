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
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
    "img-src-2": "img/new-logo.png"
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

// Navigation
let navbar = document.querySelectorAll("nav a");

// Update navigation text
for (let i = 0; i < navbar.length; i++){
  navbar[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
};

// Create new navigation elements
let newNavElement1 = document.createElement("a");
newNavElement1.innerHTML = "Blog";

let newNavElement2 = document.createElement("a");
newNavElement2.innerHTML = "Careers";

// Update navigation color
for (let i = 0; i < navbar.length; i++){
  navbar[i].style.color = "green";
};

// Add new navigation elements to nav
let newNav = document.querySelector('nav');
newNav.prepend(newNavElement1);
newNav.appendChild(newNavElement2);

// Logo image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA text
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

// CTA button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaButton.style.background = "black";
ctaButton.style.color = "white"

document.querySelector(".cta button").addEventListener("click", function(event) {
  // display the current click count inside the clicked div
  logo.setAttribute('src', siteContent["cta"]["img-src-2"]);
}, false);

// CTA image
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

// Top content headers
let topContentHeader = document.querySelectorAll(".main-content .top-content h4");
topContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeader[1].innerHTML = siteContent["main-content"]["about-h4"];

// Top content text
let topContentText = document.querySelectorAll(".main-content .top-content p");
topContentText[0].innerHTML = siteContent["main-content"]["features-content"];
topContentText[1].innerHTML = siteContent["main-content"]["about-content"];

let mainContentHeaders = document.querySelectorAll(".main-content h4");
for (let i = 0; i < mainContentHeaders.length; i++) {
  mainContentHeaders[i].style.fontSize = "20px";
};

let mainContentText = document.querySelectorAll(".main-content p");
for (let i = 0; i < mainContentText.length; i++) {
  mainContentText[i].style.lineHeight = "20px";
};

// Middle image
let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom content headers
let bottomContentHeader = document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeader[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].innerHTML = siteContent["main-content"]["vision-h4"];

// Bottom content text
let bottomContentText = document.querySelectorAll(".main-content .bottom-content p");
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];

// Contact
// Header
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

// Details
let contactDetails = document.querySelectorAll(".contact p");
contactDetails[0].innerHTML = siteContent["contact"]["address"];
contactDetails[1].innerHTML = siteContent["contact"]["phone"];
contactDetails[2].innerHTML = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];