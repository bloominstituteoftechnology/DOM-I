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
const nav = document.querySelector("nav");
const navContent = nav.querySelectorAll('a');


// ============== NAV ===============//

navContent [0].textContent = siteContent.nav["nav-item-1"];
navContent[0].style.color = "green";
navContent [1].textContent = siteContent.nav["nav-item-2"];
navContent [1].style.color = "red";
navContent [2].textContent = siteContent.nav["nav-item-3"];
navContent [2].style.color = "green";
navContent [3].textContent = siteContent.nav["nav-item-4"];
navContent [3].style.color = "red";
navContent [4].textContent = siteContent.nav["nav-item-5"];
navContent [4].style.color = "green";
navContent [5].textContent = siteContent.nav["nav-item-6"];
navContent [5].style.color = "red";

//============== LOGO =============//

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//============ H1 ============//
const cta = document.querySelector(".cta");
const ctaH1 = cta.querySelector("h1");
ctaH1.textContent = siteContent.cta.h1;

// =========BUTTON========//
const ctaButton = cta.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// =======IMG===========//
const ctaImage  = cta.querySelector("#cta-img");
ctaImage.src = siteContent.cta["img-src"];

// ========MAIN CONT.============//

const mainContentTitles = document.querySelectorAll(".main-content h4" );
const mainContentPars = document.querySelectorAll(".main-content p");

mainContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainContentTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainContentTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainContentTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainContentTitles[4].textContent = siteContent["main-content"]["vision-h4"];


mainContentPars[0].textContent = siteContent["main-content"]["features-content"];
mainContentPars[1].textContent = siteContent["main-content"]["about-content"];
mainContentPars[2].textContent = siteContent["main-content"]["services-content"];
mainContentPars[3].textContent = siteContent["main-content"]["product-content"];
mainContentPars[4].textContent = siteContent["main-content"]["vision-content"];


// ================= MIDDLE IMG ===========//

const mConMiddleImg = document.getElementById("middle-img");
mConMiddleImg.src = siteContent["main-content"]["middle-img-src"];



// ================== CONTACT =============== //

const contactInfo = document.querySelectorAll(".contact h4");
const addlcontactInfo = document.querySelectorAll(".contact p")

contactInfo[0].textContent = siteContent["contact"]["contact-h4"];


addlcontactInfo[0].textContent = siteContent["contact"]["address"];
addlcontactInfo[1].textContent = siteContent["contact"]["phone"];
addlcontactInfo[2].textContent = siteContent["contact"]["email"];



// ======= FOOTER ========== //

// const footerEnd = document.querySelector("footer");
// const footerContent = document.querySelector("footer p");

// footerEnd[0].textContent = siteContent["footer"];
// footerContent[1].textContent = siteContent["footer"]["copyright"];

const footerEnd = document.querySelector("footer p");
footerEnd.textContent = siteContent.footer.copyright;






