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

// Nav Bar Code
const anchors = document.querySelectorAll("a");
const anchorsArray = Array.from(anchors);
anchorsArray[0].textContent = siteContent.nav["nav-item-1"];
anchorsArray[1].textContent = siteContent.nav["nav-item-2"];
anchorsArray[2].textContent = siteContent.nav["nav-item-3"];
anchorsArray[3].textContent = siteContent.nav["nav-item-4"];
anchorsArray[4].textContent = siteContent.nav["nav-item-5"];
anchorsArray[5].textContent = siteContent.nav["nav-item-6"];

const logoImg = document.querySelector(".logo");
logoImg.src = siteContent.nav["img-src"]; 

// CTA Code

const ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent.cta["h1"];
// ctah1.style.display = "flex";
// ctah1.style.flexDirection = "column";
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

// ========================== Main Content Code

// Top Content Code

const topContentFeaturesTitle = Array.from(Array.from(document.querySelector(".top-content").childNodes)[1].childNodes)[1];
console.log(topContentFeaturesTitle);

topContentFeaturesTitle.textContent = siteContent["main-content"]["features-h4"];

const topContentFeaturesContent = Array.from(Array.from(document.querySelector(".top-content").childNodes)[1].childNodes)[3];
console.log(topContentFeaturesContent);

topContentFeaturesContent.textContent = siteContent["main-content"]["features-content"];

const topContentAboutTitle = Array.from(Array.from(document.querySelector(".top-content").childNodes)[3].childNodes)[1];
console.log(topContentAboutTitle);

topContentAboutTitle.textContent = siteContent["main-content"]["about-h4"];

const topContentAboutContent = Array.from(Array.from(document.querySelector(".top-content").childNodes)[3].childNodes)[3];
console.log(topContentAboutContent);

topContentAboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector(".middle-img");

middleImg.src = siteContent["main-content"]["middle-img-src"];

// 