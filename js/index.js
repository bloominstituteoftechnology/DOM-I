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

const links = document.querySelectorAll("nav a");
links.forEach(
	(el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

// CTA Section
const title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

const mainImg = document.querySelector("#cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"]);

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// Top Content
const topTitles = document.querySelectorAll(".top-content h4");
topTitles[0].textContent = siteContent["main-content"]["features-h4"];
topTitles[1].textContent = siteContent["main-content"]["about-h4"];

const topTxt = document.querySelectorAll(".top-content p");
topTxt[0].textContent = siteContent["main-content"]["features-content"];
topTxt[1].textContent = siteContent["main-content"]["about-content"];

// Middle image
const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
const bottomTitles = document.querySelectorAll(".bottom-content h4");
bottomTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitles[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomTxt = document.querySelectorAll(".bottom-content p");
bottomTxt[0].textContent = siteContent["main-content"]["services-content"];
bottomTxt[1].textContent = siteContent["main-content"]["product-content"];
bottomTxt[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Section
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

const contactTxt = document.querySelectorAll(".contact p");
contactTxt[0].textContent = siteContent["contact"]["address"];
contactTxt[1].textContent = siteContent["contact"]["phone"];
contactTxt[2].textContent = siteContent["contact"]["email"];

// Footer
const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

// New Content
links.forEach(element => {
  element.style.color = 'green';
});

const newLink1 = document.createElement("a");
newLink1.textContent = "Walter";
newLink1.style.color = "green";
const linkFirst = document.querySelector("nav");
linkFirst.prepend(newLink1);

const newLink2 = document.createElement("a");
newLink2.textContent = "Futch";
newLink2.style.color = "green";
const linkLast = document.querySelector("nav");
linkLast.appendChild(newLink2);
