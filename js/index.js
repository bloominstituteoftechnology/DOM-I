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
// Nav Links
let navStart = document.querySelector("nav a");
navStart.textContent = siteContent["nav"]["nav-item-1"];
let aOne = navStart.nextElementSibling;
aOne.textContent = siteContent["nav"]["nav-item-2"];
let aTwo = aOne.nextElementSibling;
aTwo.textContent = siteContent["nav"]["nav-item-3"];
let aThree = aTwo.nextElementSibling;
aThree.textContent = siteContent["nav"]["nav-item-4"];
let aFour = aThree.nextElementSibling;
aFour.textContent = siteContent["nav"]["nav-item-5"];
let aFive = aFour.nextElementSibling;
aFive.textContent = siteContent["nav"]["nav-item-6"];
let aLast = aFive.nextElementSibling;

//CTA
let ctaSection = document.querySelector(".cta");
let ctaText = ctaSection.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];

let ctaButton = ctaSection.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

//Top content
let upperContent = document.querySelector(".top-content");

//Top content 1
let topContent = upperContent.querySelector(".text-content");
let topContentHeader = topContent.querySelector("h4");
topContentHeader.textContent = siteContent["main-content"]["features-h4"];
let topContentText = topContent.querySelector("p");
topContentText.textContent = siteContent["main-content"]["features-content"];
//Top content 2
let topContentTwo = topContent.nextElementSibling;
let topContentTwoHeader = topContentTwo.querySelector("h4");
topContentTwoHeader.textContent = siteContent["main-content"]["about-h4"];
let topContentTwoText = topContentTwo.querySelector("p");
topContentTwoText.textContent = siteContent["main-content"]["about-content"];

//img
let mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//Bottom content 
let lowerContent = document.querySelector(".bottom-content");

//Bottom content 1
let bottomContent = lowerContent.querySelector(".text-content");
let bottomContentHeader = bottomContent.querySelector("h4");
bottomContentHeader.textContent = siteContent["main-content"]["services-h4"];
let bottomContentText = bottomContent.querySelector("p");
bottomContentText.textContent = siteContent["main-content"]["services-content"];

//Bottom content 2
let bottomContentTwo = bottomContent.nextElementSibling;
let bottomContentHeaderTwo = bottomContentTwo.querySelector("h4");
bottomContentHeaderTwo.textContent = siteContent["main-content"]["product-h4"];
let bottomContentTextTwo = bottomContentTwo.querySelector("p");
bottomContentTextTwo.textContent = siteContent["main-content"]["product-content"];

//Bottom content 3
let bottomContentThree = bottomContentTwo.nextElementSibling;
let bottomContentHeaderThree = bottomContentThree.querySelector("h4");
bottomContentHeaderThree.textContent = siteContent["main-content"]["vision-h4"];
let bottomContentTextThree = bottomContentThree.querySelector("p");
bottomContentTextThree.textContent = siteContent["main-content"]["vision-content"];