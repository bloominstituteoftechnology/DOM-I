const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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


//Task 1: Point to all the selectors

//Header Selectors & Edits:
let navBar = document.querySelector("nav");
let navLinks = document.getElementsByTagName("a");
navLinks[0].innerHTML = "Services";
navLinks[1].innerHTML = "Product";
navLinks[2].innerHTML = "Vision";
navLinks[3].innerHTML = "Features";
navLinks[4].innerHTML = "About";
navLinks[5].innerHTML = "Contact";



//CTA Selectors & Edits:
let ctaWordsH1 = document.getElementsByTagName("h1")[0];
ctaWordsH1.innerHTML= "DOM Is Awesome";
let ctaWordsButton = document.getElementsByTagName("button")[0];
ctaWordsButton.innerHTML = "Get Started";
let ctaPic = document.getElementById("cta-img");
ctaPic.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content Selectors & Edits:
let features = document.getElementsByTagName('h4')[0];
features.innerHTML = "Features";
let featureWords = document.getElementsByTagName('p')[0];
featureWords.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let about = document.getElementsByTagName('h4')[1];
about.innerHTML = "About";
let aboutWords = document.getElementsByTagName('p')[1];
aboutWords.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let services = document.getElementsByTagName('h4')[2];
services.innerHTML = "Services";
let servicesWords = document.getElementsByTagName('p')[2];
servicesWords.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let product = document.getElementsByTagName('h4')[3];
product.innerHTML = "Product"
let productWords = document.getElementsByTagName('p')[3];
productWords.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let vision = document.getElementsByTagName('h4')[4];
vision.innerHTML = "Vision";
let visionWords = document.getElementsByTagName('p')[4];
visionWords.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let mainPic = document.getElementById("middle-img");
mainPic.setAttribute('src', "img/mid-page-accent.jpg");

//Contact Selectors & Edits:
let contact = document.getElementsByTagName('h4')[5];
contact.innerHTML = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";
let phoneNumber = document.getElementsByTagName('p')[6];
phoneNumber.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

//Footer Selectors & Edits:
let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"

//Stretch
let textColors = document.querySelectorAll("p");
let i;
for (i = 0; i < textColors.length; i++) {
  textColors[i].style.color = "grey";
}

//Event Selectors:
let redScreen = document.getElementsByClassName("red")[0];
let redSwitch = document.getElementsByClassName("page")[0];
redScreen.addEventListener ("mouseover", () => {
  redSwitch.style.backgroundColor = "red";
});

let orangeScreen = document.getElementsByClassName("orange")[0];
let orangeSwitch = document.getElementsByClassName("page")[0];
orangeScreen.addEventListener ("mouseover", () => {
  orangeSwitch.style.backgroundColor = "orange";
});

let yellowScreen = document.getElementsByClassName("yellow")[0];
let yellowSwitch = document.getElementsByClassName("page")[0];
yellowScreen.addEventListener ("mouseover", () => {
  yellowSwitch.style.backgroundColor = "yellow";
});

let greenScreen = document.getElementsByClassName("green")[0];
let greenSwitch = document.getElementsByClassName("page")[0];
greenScreen.addEventListener ("mouseover", () => {
  greenSwitch.style.backgroundColor = "green";
});

let blueScreen = document.getElementsByClassName("blue")[0];
let blueSwitch = document.getElementsByClassName("page")[0];
blueScreen.addEventListener ("mouseover", () => {
  blueSwitch.style.backgroundColor = "blue";
});

let indigoScreen = document.getElementsByClassName("indigo")[0];
let indigoSwitch = document.getElementsByClassName("page")[0];
indigoScreen.addEventListener ("mouseover", () => {
  indigoSwitch.style.backgroundColor = "indigo";
});

let violetScreen = document.getElementsByClassName("violet")[0];
let violetSwitch = document.getElementsByClassName("page")[0];
violetScreen.addEventListener ("mouseover", () => {
  violetSwitch.style.backgroundColor = "violet";
});

ctaWordsButton.addEventListener("click", () => {
  ctaPic.setAttribute('src', "http://laoblogger.com/images/thumbs-up-picture-8.jpg");
});

features.addEventListener("mouseover", () => {
  features.style.border = "black solid 1px";
});

about.addEventListener("mouseover", () => {
  about.style.border = "red solid 1px";
});

services.addEventListener("mouseover", () => {
  services.style.border = "pink solid 1px";
});

product.addEventListener("click", () => {
  product.style.display = "none";
});

vision.addEventListener("mouseover", () => {
 vision.style.border = "blue solid 1px";
});

