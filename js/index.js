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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update Navigation Tab content
let navTabs = document.querySelectorAll("a");

// add
for (let i=0;i<navTabs.length;i++){
  let navTabSelectorName = "nav-item-"+(i+1);
  navTabs[i].innerText = siteContent["nav"][navTabSelectorName];
  //Change navigation bar text to green
  navTabs.forEach(style.color = "green");
}

//Add 2 new items to navigation
let navigationSystem = document.querySelector(".container header nav");
navigationSystem.appendChild(document.createElement("a"), document.createTextNode("Hello"));
navigationSystem.prepend(document.createElement("a"), document.createTextNode("world"));

//Update h1 contents of CTA
let ctaText = document.querySelector("h1");
ctaText.innerText = siteContent["cta"]["h1"];

//Update the img src for CTA image
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
// logo.setAttribute('style', "width:50%");

//Update button contents of CTA
let buttonSelector = document.querySelector("button");
buttonSelector.innerText = siteContent["cta"]["button"];

//Update main contents
//Update top contents - header
let topHeaderSelectors = document.querySelectorAll(".top-content .text-content h4");
topHeaderSelectors[0].innerText = siteContent["main-content"]["features-h4"];
topHeaderSelectors[1].innerText = siteContent["main-content"]["about-h4"];

//Update top contents - text
let topTextSelectors = document.querySelectorAll(".top-content .text-content p");
topTextSelectors[0].innerText = siteContent["main-content"]["features-content"];
topTextSelectors[1].innerText = siteContent["main-content"]["about-content"];

//Update middle image
let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Update bottom contents - headers
//Update bottom contents - header
let bottomHeaderSelectors = document.querySelectorAll(".bottom-content .text-content h4");
bottomHeaderSelectors[0].innerText = siteContent["main-content"]["services-h4"];
bottomHeaderSelectors[1].innerText = siteContent["main-content"]["product-h4"];
bottomHeaderSelectors[2].innerText = siteContent["main-content"]["vision-h4"];

//Update bottom contents - text
let bottomTextSelectors = document.querySelectorAll(".bottom-content .text-content p");
bottomTextSelectors[0].innerText = siteContent["main-content"]["services-content"];
bottomTextSelectors[1].innerText = siteContent["main-content"]["product-content"];
bottomTextSelectors[2].innerText = siteContent["main-content"]["vision-content"];

//Update contact
//header
let contactHeaderSelector = document.querySelector(".contact h4");
contactHeaderSelector.innerText = siteContent["contact"]["contact-h4"];

//detail
let contactDetailSelectors = document.querySelectorAll(".contact p");
contactDetailSelectors[0].innerText = siteContent["contact"]["address"];
contactDetailSelectors[1].innerText = siteContent["contact"]["phone"];
contactDetailSelectors[2].innerText = siteContent["contact"]["email"];

//Update footer
let footerSelector = document.querySelector(".container footer p");
footerSelector.innerText = siteContent["footer"]["copyright"];


