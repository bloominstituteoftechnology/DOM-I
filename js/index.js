const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo/////////
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Nav Bar ///////////////////////////
let nav = document.querySelectorAll("a");
nav.forEach((element) => {
  element.style.color = 'grey'
});
nav[0].textContent = siteContent.nav["nav-item-1"]
nav[1].textContent = siteContent.nav["nav-item-2"]
nav[2].textContent = siteContent.nav["nav-item-3"]
nav[3].textContent = siteContent.nav["nav-item-4"]
nav[4].textContent = siteContent.nav["nav-item-5"]
nav[5].textContent = siteContent.nav["nav-item-6"]

//Cta Img///////////////////////////
let ctaImg = document.querySelectorAll("img")[1];
ctaImg.src = siteContent['cta']['img-src'];

//Cta Button////////////////////////
let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button

//Cta Text////////////////////////////
let ctaText = document.querySelector("h1");
//let newElement = document.createElement("br");
//headingText = "DOM" +  newElement + "Is" +  newElement + "Awesome";
ctaText.textContent =  siteContent.cta.h1


//Main Content Headings ////////////////
let headings = document.querySelectorAll('.text-content h4');
headings[0].textContent = siteContent["main-content"]["features-h4"]
headings[1].textContent = siteContent["main-content"]["about-h4"]
headings[2].textContent = siteContent["main-content"]["services-h4"]
headings[3].textContent = siteContent["main-content"]["product-h4"]
headings[4].textContent = siteContent["main-content"]["vision-h4"]

//Top Content ////////////////
let features = document.querySelectorAll('.top-content .text-content p')[0];
features.textContent = siteContent['main-content']['features-content'];

let about = document.querySelectorAll('.top-content .text-content p')[1];
about.textContent = siteContent['main-content']['about-content'];

//Middle Content Img/////////////////////////
let midImg = document.querySelectorAll("img")[2];
midImg.src = siteContent['main-content']['middle-img-src'];


//Bottom Content//////////////////////////
let services = document.querySelectorAll('.bottom-content .text-content p')[0];
services.textContent = siteContent['main-content']['services-content'];

let product = document.querySelectorAll('.bottom-content .text-content p')[1];
product.textContent = siteContent['main-content']['product-content'];

let vision = document.querySelectorAll('.bottom-content .text-content p')[2];
vision.textContent = siteContent['main-content']['vision-content'];

//Contact///////////////////////
let contactHead = document.querySelector(".contact h4");
contactHead.textContent = siteContent['contact']["contact-h4"]

let contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.textContent = siteContent['contact']["address"]

let contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.textContent = siteContent['contact']["phone"]

let contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.textContent = siteContent['contact']["email"]