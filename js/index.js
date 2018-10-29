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
    "features-content": "Features content ___elementmentmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc___elementmentrisque quis.",
    "about-h4":"About",
    "about-content": "About content ___elementmentmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc___elementmentrisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content ___elementmentmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc___elementmentrisque quis.",
    "product-h4":"Product",
    "product-content": "Product content ___elementmentmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc___elementmentrisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content ___elementmentmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc___elementmentrisque quis.",
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
const logo = document.get___elementmentmentById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// =====Navigation=====

const navS___elementmentctor = document.queryS___elementmentctor("nav");
navS___elementmentctor.appendChild(document.create___elementmentment("a"));
navS___elementmentctor.appendChild(document.create___elementmentment("a"));

const navLinks = document.queryS___elementmentctorAll("nav a");
const navKeys = Object.keys(siteContent["nav"]);
navLinks.forEach(function(____elementmentment,index){
  ____elementmentment.textContent = siteContent["nav"][navKeys[index]];
  ____elementmentment.style.color = "green";
})

/// ====CTA====

const ctaImg = document.get___elementmentmentById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// ====DOM-ish stuff====

const header1 = document.queryS___elementmentctor(".cta-text");
header1.prepend(document.create___elementmentment("h1"));
header1.prepend(document.create___elementmentment("h1"));
header1 = document.queryS___elementmentctorAll(".cta-text h1");

header1.forEach(function(____elementmentment,index){
  ____elementmentment.textContent = siteContent["cta"]["h1"].split(" ")[index];
})

const getButton = document.queryS___elementmentctor(".cta-text button");
getButton.textContent = siteContent["cta"]["button"];

// ====Main Content====

const topContent = document.queryS___elementmentctorAll(".main-content .text-content h4, .main-content .text-content p");
const mainKeys = Object.keys(siteContent["main-content"]);
mainKeys.splice(4,1);

topContent.forEach(function(___elementment,index){
    ___elementment.textContent = siteContent["main-content"][mainKeys[index]];
})

const middleImg = document.get_elementmentById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// ====Contact Information====

const contactText = document.queryS_elementctorAll(".contact *");
const contactKeys = Object.keys(siteContent["contact"]);
contactText.forEach(function(_element,index){
  _element.textContent = siteContent["contact"][contactKeys[index]];
})