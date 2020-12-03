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

// ---------------------- My Code -------------------

// ########## HEADER ##########

// ---- Navigation Bar ----
let anchors = document.querySelectorAll('nav a');
for(var i=0; i<anchors.length; i++) { // loop through list of anchors
  anchors[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`] // update each nav link
};

// add 2 nav links
const navLink1 = document.createElement('a');
const navLink2 = document.createElement('a');

// name the nav links
navLink1.textContent = 'Home';
navLink2.textContent = 'Blog';

// add nav links to navbar
document.querySelector('nav').prepend(navLink1);
document.querySelector('nav').appendChild(navLink2);

// make all nav links green
const navStyle = document.querySelectorAll('a');
const navStyleArray = Array.from(navStyle);
for(let i = 0; i < navStyleArray.length; i++){
  navStyleArray[i].style.color = 'green';
}


// ########## HERO ##########

let h1 = document.querySelector(".cta-text h1"); // Select h1
h1.innerHTML = siteContent["cta"]["h1"]; // Update it

let button = document.querySelector(".cta-text button"); // Select button
button.innerHTML = siteContent["cta"]["button"]; // Update it

let ctaImage = document.getElementById("cta-img"); // Select cta image
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]); // Update it

// ########## MAIN ##########

const mainHeader = document.querySelectorAll(".text-content h4"); // Select main headers
const mainContent = document.querySelectorAll(".text-content p"); // Select main content
const mainImg = document.getElementById("middle-img"); // Select main image

// ---- Features ----
mainHeader[0].textContent = siteContent["main-content"]["features-h4"]; // Update blurb header
mainContent[0].textContent = siteContent["main-content"]["features-content"]; // Update blurb content

// ---- About ----
mainHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];

// ---- Middle Image ----
mainImg.src = siteContent["main-content"]["middle-img-src"];

// ---- Services ----
mainHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];

// ---- Product ----
mainHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];

// ---- Vision ----
mainHeader[4].textContent = siteContent["main-content"]["vision-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

// ########## FOOTER ##########
const contactHeader = document.querySelector(".contact h4"); // Select contact headers
const contactContent = document.querySelectorAll(".contact p"); // Select contact content
const copyrightContent = document.querySelector("footer"); // Select copyright content

contactHeader.textContent = siteContent["contact"]["contact-h4"]; // update contact header

contactContent[0].textContent = siteContent["contact"]["address"]; // update contact content
contactContent[1].textContent = siteContent["contact"]["phone"]; 
contactContent[2].textContent = siteContent["contact"]["email"];

copyrightContent.textContent = siteContent["footer"]["copyright"]; // update copyright content
