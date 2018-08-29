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
    "h1": "DOM \n Is \n Awesome",
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
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//sets inner text
function setText(siteContentText, createdElement){
  for (let i = 0; i < siteContentText.length; i ++){
    createdElement[i].innerText = siteContentText[i];
  }
}
// Example: Update the img src for the Great Idea logo
const greatIdeaLogo = document.getElementById("logo-img");
greatIdeaLogo.setAttribute('src', siteContent["nav"]["img-src"]);

//Update Logos
const circleLogo = document.getElementById("cta-img");
circleLogo.setAttribute("src", siteContent["cta"]["img-src"]);
const midPageBanner = document.getElementById("middle-img");
midPageBanner.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Navigation
// Long way: const navItems = [siteContent["nav"]["nav-item-1"], siteContent["nav"]["nav-item-2"], siteContent["nav"]["nav-item-2"], siteContent["nav"]["nav-item-3"], siteContent["nav"]["nav-item-4"], siteContent["nav"]["nav-item-5"]];
//short way
const navContent = Object.values(siteContent["nav"]).slice(0,6);
let navAnchorElement = document.querySelectorAll("a");
setText(navContent, navAnchorElement);

//green nav
for (let i = 0; i < navAnchorElement.length; i++){
  navAnchorElement[i].style.color = "green";
}

//add two new items
//both items will not stay at same time unless they have different names...that's weird
const navElement = document.querySelector("nav");
const navAddLi = document.createElement("a");
const secondNavAddLi = document.createElement("a");
navAddLi.innerHTML = "Home"
secondNavAddLi.innerHTML = "Blog"
navElement.prepend(navAddLi);
navElement.appendChild(secondNavAddLi);
navAddLi.style.color = "green";
secondNavAddLi.style.color = "green";

//Dom is Awesome heading
const ctaH1Element = document.querySelector("h1");
ctaH1Element.innerText = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.innerText = siteContent["cta"]["button"];

//content sections
//I feel like this is cheating, but I did it anyway
const h4Content = [siteContent["main-content"]["features-h4"], siteContent["main-content"]["about-h4"], siteContent["main-content"]["services-h4"], siteContent["main-content"]["product-h4"], siteContent["main-content"]["vision-h4"], siteContent["contact"]["contact-h4"]];

const paraContent = [siteContent["main-content"]["features-content"], siteContent["main-content"]["about-content"], siteContent["main-content"]["services-content"], siteContent["main-content"]["product-content"], siteContent["main-content"]["vision-content"], siteContent["contact"]["address"], siteContent["contact"]["phone"], siteContent["contact"]["email"], siteContent["footer"]["copyright"]];

const mainContentH4Element = document.querySelectorAll("h4");
const mainContentPTextElement = document.querySelectorAll("p");
setText(h4Content, mainContentH4Element);
setText(paraContent, mainContentPTextElement);