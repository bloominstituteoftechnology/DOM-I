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
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])



let logo = document.querySelector("#logo-img");

logo.src = "img/logo.png";
logo.alt = 'Great Idea! Company logo.';

//nav

let menuItems = document.querySelectorAll("a");

menuItems.forEach( (nav) => {
  menuItems[0].textContent = "Services";
  menuItems[1].textContent = "Product";
  menuItems[2].textContent = "Vision";
  menuItems[3].textContent = "Features";
  menuItems[4].textContent = "About";
  menuItems[5].textContent = "Contact";
})


const nav = Array.from(document.querySelectorAll("nav a"));
for (i = 0; i < nav.length; i++) {
  const navItem = `nav-item-${i+1}`
  nav[i].style.color = "green";
}


let headerImg = document.querySelector("#cta-img");
headerImg.src = "img/header-img.png";

let middleImg = document.querySelector("#middle-img");
middleImg.src = "img/mid-page-accent.jpg";


const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;


const h4Tags = document.querySelectorAll("h4");

h4Tags[0].textContent = siteContent["main-content"]["features-h4"];
h4Tags[1].textContent = siteContent["main-content"]["about-h4"];
h4Tags[2].textContent = siteContent["main-content"]["services-h4"];
h4Tags[3].textContent = siteContent["main-content"]["product-h4"];
h4Tags[4].textContent = siteContent["main-content"]["vision-h4"];

const pTags = document.querySelectorAll("p");

pTags[0].textContent = siteContent["main-content"]["features-content"];
pTags[1].textContent = siteContent["main-content"]["about-content"];
pTags[2].textContent = siteContent["main-content"]["services-content"];
pTags[3].textContent = siteContent["main-content"]["product-content"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];


let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];
let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;


let pre = document.createElement("a");
let post = document.createElement("a");

pre.textContent = "Pre";
post.textContent = "Post";

pre.style.color = "green";
post.style.color = "green";

let navItems = document.querySelector('nav');

navItems.prepend(pre);
navItems.appendChild(post);
