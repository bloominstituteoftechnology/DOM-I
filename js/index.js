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

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute("src", "img/header-img.png")

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", "img/mid-page-accent.jpg")

// Header

let anchors = document.querySelectorAll("nav a");
anchors.forEach(
  (el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

// const headerEL1 = document.querySelector('header nav a:nth-child(0)')
// headerEL1.textContent = 'Get Started';


// const aTag1 = document.querySelector('a'):

// CTA

const ctaButton = document.querySelector(".cta .cta-text button")
ctaButton.textContent = 'Get Started';

const ctaButtonText = document.querySelector(".cta-text h1")
ctaButtonText.innerHTML = 'Dom <br> Is <br> Awesome';


// Main Content Top

// let mainContent = document.querySelectorAll(".main-content");
// mainContent.forEach(
//   (elmP) => (elmP.textContent = siteContent["main-content"])
// );

const topContentTextH4 = document.querySelector(".top-content .text-content h4")
topContentTextH4.textContent = 'Features';

const topContentText1P = document.querySelector(".top-content .text-content p")
topContentText1P.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Main Content Bottom
const bottomContentText1H4 = document.querySelector(".bottom-content .text-content h4")
bottomContentText1H4.textContent = 'Services';

const bottomContentText1P = document.querySelector(".bottom-content .text-content p")
bottomContentText1P.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Contact
// const contactH4Text = document.querySelector(".contact H4")
// contactH4Text.textContent = 'Contact';

let contactText = document.querySelectorAll(".contact");
contactText.forEach(
  (elContact) => (elContact.textContent = siteContent["contact"])
);

// Footer

const footerText = document.querySelector("footer p")
footerText.textContent = 'Copyright Great Idea! 2018';