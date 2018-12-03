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


// --------------- Nav
const logo = document.querySelector("#logo-img");
logo.src = siteContent["nav"]["img-src"];

const headerLinks = Array.from(document.querySelectorAll("header nav a"));
console.log(headerLinks);

const headerNav = document.querySelector("header nav");

const newLink1 = document.createElement("a");
const newLink2 = document.createElement("a");

newLink1.href = "#";
newLink2.href = "#";
newLink1.textContent = "History";
newLink2.textContent = "Shareholders";

headerNav.appendChild(newLink1);
headerNav.prepend(newLink2);

headerLinks.push(newLink1);
headerLinks.push(newLink2);
console.log(headerLinks);

headerLinks.forEach((link) => {
  link.style.color = "green";
})

headerLinks[0].textContent = siteContent["nav"]["nav-item-1"];
headerLinks[1].textContent = siteContent["nav"]["nav-item-2"];
headerLinks[2].textContent = siteContent["nav"]["nav-item-3"];
headerLinks[3].textContent = siteContent["nav"]["nav-item-4"];
headerLinks[4].textContent = siteContent["nav"]["nav-item-5"];
headerLinks[5].textContent = siteContent["nav"]["nav-item-6"];



// --------------- CTA
const mainHeader = document.querySelector(".cta .cta-text h1");
mainHeader.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector(".cta .cta-text button");
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];


// --------------- Main Content
const topContentH4 = document.querySelectorAll(".top-content .text-content h4");
const topContentP = document.querySelectorAll(".top-content .text-content p");

topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

const mainContentImg = document.getElementById("middle-img");
mainContentImg.src = siteContent["main-content"]["middle-img-src"];

const bottomContentH4 = document.querySelectorAll(".bottom-content .text-content h4");
const bottomContentP = document.querySelectorAll(".bottom-content .text-content p");

bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

// --------------- Contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent["contact"]["address"];
contactPs[1].textContent = siteContent["contact"]["phone"];
contactPs[2].textContent = siteContent["contact"]["email"];

// --------------- Contact
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
