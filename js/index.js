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
//logo.setAttribute('src', siteContent["nav"]["img-src"]);


//header nav bar
const headerNavigation = document.querySelectorAll("a");

headerNavigation[0].textContent = siteContent["nav"]["nav-item-1"];
headerNavigation[1].textContent = siteContent["nav"]["nav-item-2"];
headerNavigation[2].textContent = siteContent["nav"]["nav-item-3"];
headerNavigation[3].textContent = siteContent["nav"]["nav-item-4"];
headerNavigation[4].textContent = siteContent["nav"]["nav-item-5"];
headerNavigation[5].textContent = siteContent["nav"]["nav-item-6"];

const logoImage = document.getElementById("logo-img");
logoImage.src = "img/logo.png";

//cta
const ctaText = document.querySelector("cta-text, h1");
const ctaBtn = document.querySelector("cta-text, button");
const headerImage = document.getElementById("cta-img");
ctaText.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
headerImage.src = "img/header-img.png";

//const bottomContent = document.querySelectorAll("bottom-content, p");

//h4
const contentHead = document.querySelectorAll("h4");
contentHead[0].textContent = siteContent["main-content"]["features-h4"];
contentHead[1].textContent = siteContent["main-content"]["about-h4"];
contentHead[2].textContent = siteContent["main-content"]["services-h4"];
contentHead[3].textContent = siteContent["main-content"]["product-h4"];
contentHead[4].textContent = siteContent["main-content"]["vision-h4"];
contentHead[5].textContent = siteContent["contact"]["contact-h4"];

//main content p
const text = document.querySelectorAll(".text-content p");
text[0].textContent = siteContent["main-content"]["features-content"];
text[1].textContent = siteContent["main-content"]["about-content"];
text[2].textContent = siteContent["main-content"]["services-content"];
text[3].textContent = siteContent["main-content"]["product-content"];
text[4].textContent = siteContent["main-content"]["vision-content"];

//middle image
const midImage = document.getElementById("middle-img");
midImage.src = "img/mid-page-accent.jpg";

//contact
const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

//footer
const footerPara = document.querySelector("footer");
footerPara.textContent = siteContent["footer"]["copyright"];

//changing nav text to green
const thingOne = document.createElement("a");
thingOne.textContent = "Thing One";

const thingTwo = document.createElement("a");
thingTwo.textContent = "Thing Two";

const greenNav = document.querySelector("nav");
greenNav.prepend(thingOne);
greenNav.appendChild(thingTwo);

document.querySelectorAll("nav a").forEach( link => {
  link.style.color = "green";
})
