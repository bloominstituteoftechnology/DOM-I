const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

document.title = "Great Idea!";

let navArray = document.querySelectorAll("nav a");
navArray[0].textContent = siteContent["nav"]["nav-item-1"];
navArray[1].textContent = siteContent["nav"]["nav-item-2"];
navArray[2].textContent = siteContent["nav"]["nav-item-3"];
navArray[3].textContent = siteContent["nav"]["nav-item-4"];
navArray[4].textContent = siteContent["nav"]["nav-item-5"];
navArray[5].textContent = siteContent["nav"]["nav-item-6"];

const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector(".cta img");

const ctah1 = (document.querySelector(".cta-text h1").innerHTML =
  "DOM <br> Is <br> Awesome");

ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const toph4 = document.querySelectorAll(".top-content h4");
const topP = document.querySelectorAll(".top-content p");
const bottomh4 = document.querySelectorAll(".bottom-content h4");
const bottomP = document.querySelectorAll(".bottom-content p");

toph4[0].textContent = siteContent["main-content"]["features-h4"];
topP[0].textContent = siteContent["main-content"]["features-content"];
toph4[1].textContent = siteContent["main-content"]["about-h4"];
topP[1].textContent = siteContent["main-content"]["about-content"];

const middleimg = document.querySelector(".main-content img");

middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

bottomh4[0].textContent = siteContent["main-content"]["services-h4"];
bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomh4[1].textContent = siteContent["main-content"]["product-h4"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomh4[2].textContent = siteContent["main-content"]["vision-h4"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

const contactP = document.querySelectorAll(".contact p");
const contacth4 = document.querySelector(".contact h4");
const footer = document.querySelector("footer");

contacth4.textContent = siteContent["contact"]["contact-h4"];
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
footer.textContent = siteContent["footer"]["copyright"];

var node = document.createElement("a");
var parentNode = document.querySelector("nav");
node.textContent = "My Change";
parentNode.appendChild(node);
node.style.color = "#006400";

var node = document.createElement("a");
var parentNode = document.querySelector("nav");
node.textContent = "A Second Change";
parentNode.prepend(node);
node.style.color = "#006400";

//document.querySelectorAll("a").style.color = "#006400";
navArray.forEach((element) => {
  element.style.color = "#006400";
});
