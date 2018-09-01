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
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// <-- CREATING THE HEADER NAVIGATION SELECTOR --> //
const headerNav = document.querySelectorAll("nav a");
headerNav[0].innerHTML = siteContent["nav"]["nav-item-1"];
headerNav[1].innerHTML = siteContent["nav"]["nav-item-2"];
headerNav[2].innerHTML = siteContent["nav"]["nav-item-3"];
headerNav[3].innerHTML = siteContent["nav"]["nav-item-4"];
headerNav[4].innerHTML = siteContent["nav"]["nav-item-5"];
headerNav[5].innerHTML = siteContent["nav"]["nav-item-6"];

// <-- CREATING THE HEADER CTA H1 SELECTOR --> //
const headerCTA = document.querySelector(".cta h1");
headerCTA.innerHTML = siteContent["cta"]["h1"];

// <-- CREATING THE HEADER CTA BUTTON SELECTOR --> //
const ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// <-- CREATING THE HEADER CTA IMAGE SELECTOR --> //
const ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute("src", siteContent["cta"]["img-src"]);

// <-- CREATING THE TOP CONTENT HEADING SELECTOR --> //
const topHEADER = document.querySelectorAll(".main-content .text-content h4")
topHEADER[0].innerHTML = siteContent["main-content"]["features-h4"];
topHEADER[1].innerHTML = siteContent["main-content"]["about-h4"];

// <-- CREATING THE TOP CONTENT PARAGRAPH SELECTOR --> //
const topPARAGRAPH = document.querySelectorAll(".main-content .top-content .text-content p")
topPARAGRAPH[0].innerHTML = siteContent["main-content"]["features-content"];
topPARAGRAPH[1].innerHTML = siteContent["main-content"]["about-content"];

// <-- CREATING THE MIDDLE IMAGE SELECTOR --> //
const middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// <-- CREATING THE BOTTOM CONTENT HEADING SELECTOR --> //
const bottomHEADER = document.querySelectorAll(".main-content .bottom-content .text-content h4");
bottomHEADER[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHEADER[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHEADER[2].innerHTML = siteContent["main-content"]["vision-h4"];

// <-- CREATING THE BOTTOM CONTENT HEADING SELECTOR --> //
const bottomPARAGRAPH = document.querySelectorAll(".main-content .bottom-content .text-content p")
bottomPARAGRAPH[0].innerHTML = siteContent["main-content"]["services-content"];
bottomPARAGRAPH[1].innerHTML = siteContent["main-content"]["product-content"];
bottomPARAGRAPH[2].innerHTML = siteContent["main-content"]["vision-content"];

// <-- CREATING THE CONTACT HEADING SELECTOR --> //
const contactHEADING = document.querySelector(".contact h4");
contactHEADING.innerHTML = siteContent["contact"]["contact-h4"];

// <-- CREATING THE CONTACT PARAGRAPH SELECTOR --> //
const contactPARAGRAPH = document.querySelectorAll(".contact p");
contactPARAGRAPH[0].innerHTML = siteContent["contact"]["address"];
contactPARAGRAPH[1].innerHTML = siteContent["contact"]["phone"];
contactPARAGRAPH[2].innerHTML = siteContent["contact"]["email"];

// <-- CREATING THE COPYRIGHT SELECTOR --> //
const copyright = document.querySelector("footer p");
copyright.innerHTML = siteContent["footer"]["copyright"];
