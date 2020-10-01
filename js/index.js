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

const title = document.querySelector("title");
title.innerHTML = "Great Idea!";

//We can use the same CSS Specificity in selecting and editing selectors. When targeting selectors this way the index starts at 1 and not 0.

const services = document.querySelector("a");
services.innerHTML = "Services";

const product = document.querySelector("a:nth-child(2)");
product.innerHTML = "Product";

const vision = document.querySelector("a:nth-child(3)");
vision.innerHTML = "Vision";

const features = document.querySelector("a:nth-child(4)");
features.innerHTML = "Features";

const about = document.querySelector("a:nth-child(5)");
about.innerHTML = "About";

const contact = document.querySelector("a:nth-child(6)");
contact.innerHTML = "Contact";

//CTA Area
const headingText = document.querySelector("h1");
headingText.innerHTML = "DOM<br> Is<br> Awesome";

const cta = document.getElementById("cta-img");
cta.src = "img/header-img.png";

const button = document.querySelector("button");
button.textContent = "Get Started";

//Main Content

const middleImage = document.querySelector(".middle-img");
middleImage.src = "img/mid-page-accent.jpg";

//Since I used the "nth-child" selectors above I wanted to replace all the h4 tags in a different way that was a bit more elegant. This function I have written below takes an input from titlesArr and edits the inner HTML of the h4 tags with the item at it's matching index in the array. It then incraments the index and loops through for the rest of the missing H4 tags.

const titlesArr = [
  "Features",
  "About",
  "Services",
  "Product",
  "Vision",
  "Contact",
];
const titles = document.querySelectorAll("h4");

titles.forEach(function (el, index) {
  el.innerHTML = titlesArr[index];
  index++;
});

// Since our previous function worked so well I will use the same thing again. This will get us the rest of our content that is needed to complete the rest of the page.

const paragraphArr = [
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis",
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis",
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "123 Way 456 Street<br> Somewhere, USA",
  "1 (888) 888-8888",
  "sales@greatidea.io",
  "Copyright Great Idea! 2018",
];

const paragraph = document.querySelectorAll("p");

paragraph.forEach(function (el, index) {
  el.innerHTML = paragraphArr[index];
  index++;
});
