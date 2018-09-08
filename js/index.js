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
    "h1": "DOM <br> Is <br>  Awesome",
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

// *** TASK 2: CREATE SELECTORS TO POINT YOUR DATA ("SiteContent") INTO ELEMENTS *** //

// <-- (RE)CREATING THE LOGO SELECTOR--> //
const logo = document.getElementById("logo-img");

// <-- CREATING THE HEADER NAVIGATION SELECTOR --> //
const headerNav = document.querySelectorAll("nav a");

// <-- CREATING THE HEADER CTA H1 SELECTOR --> //
const headerCTA = document.querySelector(".cta h1");

// <-- CREATING THE HEADER CTA BUTTON SELECTOR --> //
const ctaButton = document.querySelector(".cta button");

// <-- CREATING THE HEADER CTA IMAGE SELECTOR --> //
const ctaIMG = document.getElementById("cta-img");

// <-- CREATING THE TOP CONTENT HEADING SELECTOR --> //
const topHEADER = document.querySelectorAll(".main-content .text-content h4")

// <-- CREATING THE TOP CONTENT PARAGRAPH SELECTOR --> //
const topPARAGRAPH = document.querySelectorAll(".main-content .top-content .text-content p")

// <-- CREATING THE MIDDLE IMAGE SELECTOR --> //
const middleIMG = document.getElementById("middle-img");

// <-- CREATING THE BOTTOM CONTENT HEADING SELECTOR --> //
const bottomHEADER = document.querySelectorAll(".main-content .bottom-content .text-content h4");

// <-- CREATING THE BOTTOM PARAGRAPH SELECTOR --> //
const bottomPARAGRAPH = document.querySelectorAll(".main-content .bottom-content .text-content p")

// <-- CREATING THE CONTACT HEADING SELECTOR --> //
const contactHEADING = document.querySelector(".contact h4");

// <-- CREATING THE CONTACT PARAGRAPH SELECTOR --> //
const contactPARAGRAPH = document.querySelectorAll(".contact p");

// <-- CREATING THE COPYRIGHT SELECTOR --> //
const copyright = document.querySelector("footer p");


// *** TASK 3: UPDATE THE HTML WITH THE JSON DATA *** //

// <-- IMPORTING LOGO JSON --> //
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// <-- IMPORTING HEADER NAVIGATION JSON --> //
headerNav[0].innerHTML = siteContent["nav"]["nav-item-1"];
headerNav[1].innerHTML = siteContent["nav"]["nav-item-2"];
headerNav[2].innerHTML = siteContent["nav"]["nav-item-3"];
headerNav[3].innerHTML = siteContent["nav"]["nav-item-4"];
headerNav[4].innerHTML = siteContent["nav"]["nav-item-5"];
headerNav[5].innerHTML = siteContent["nav"]["nav-item-6"];

// <-- IMPORTING HEADER CTA H1 JSON --> //
headerCTA.innerHTML = siteContent["cta"]["h1"];

// <-- IMPORTING CTA BUTTON JSON --> //
ctaButton.innerHTML = siteContent["cta"]["button"];

// <-- IMPORTING HEADER CTA IMAGE JSON --> //
ctaIMG.setAttribute("src", siteContent["cta"]["img-src"]);

// <-- IMPORTING TOP CONTENT HEADING JSON --> //
topHEADER[0].innerHTML = siteContent["main-content"]["features-h4"];
topHEADER[1].innerHTML = siteContent["main-content"]["about-h4"];

// <-- IMPORTING TOP CONTENT PARAGRAPH JSON --> //
topPARAGRAPH[0].innerHTML = siteContent["main-content"]["features-content"];
topPARAGRAPH[1].innerHTML = siteContent["main-content"]["about-content"];

// <-- IMPORTING MIDDLE IMAGE JSON --> //
middleIMG.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// <-- IMPORTING BOTTOM CONTENT HEADING JSON --> //
bottomHEADER[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHEADER[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHEADER[2].innerHTML = siteContent["main-content"]["vision-h4"];

// <-- IMPORTING BOTTOM PARAGRAPH JSON --> //
bottomPARAGRAPH[0].innerHTML = siteContent["main-content"]["services-content"];
bottomPARAGRAPH[1].innerHTML = siteContent["main-content"]["product-content"];
bottomPARAGRAPH[2].innerHTML = siteContent["main-content"]["vision-content"];

// <-- IMPORTING CONTACT HEADING JSON --> //
contactHEADING.innerHTML = siteContent["contact"]["contact-h4"];

// <-- IMPORTING CONTACT PARAGRAPH JSON --> //
contactPARAGRAPH[0].innerHTML = siteContent["contact"]["address"];
contactPARAGRAPH[1].innerHTML = siteContent["contact"]["phone"];
contactPARAGRAPH[2].innerHTML = siteContent["contact"]["email"];

// <-- IMPORTING COPYRIGHT JSON --> //
copyright.innerHTML = siteContent["footer"]["copyright"];


// *** TASK 4: ADD NEW CONTENT *** //


// <-- CHANGE THE COLOR OF THE NAVIGATION TEXT TO BE GREEN --> //

// <-- UTILIZE `.appendChild()` AND `.prepend()` TO ADD TWO NEW ITEMS TO THE NAVIGATION BAR --> //

