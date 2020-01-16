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

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent["nav"]["img-src"]);

// //Josh Luscombe
// let navBarItems = document.querySelectorAll("a");
// console.log(navBarItems);

// navBarItems.forEach((item, index) => {
//   console.log(item);
//   item.textContent = siteContent["nav"]["nav-item $"];
//   console.log(item, "test");
// });

// //  Task 1: Create selectors to point your data into elements
// // ID
// const ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// // Class Name
// const topContent = document.getElementByClassName("cta");

// document.querySelector("cta");

// Tag Name
// const nav = document.getElementsByTagName("nav");

// document.querySelectorAll("nav");

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//anchor links
let navBarItems = document.querySelectorAll("a");

//loops over node list and populates anchor link text
navBarItems.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

//h1 text
let h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = siteContent.cta.h1;

//"Get Started Button"

let getStartedButton = document.querySelector("button");
getStartedButton.textContent = siteContent.cta.button;

let imgHeader = document.querySelector("#cta-img");
console.log(imgHeader);

imgHeader.setAttribute("src", siteContent.cta["img-src"]);

// Task 2: Update the HTML with the JSON data

// Task 3: Add new content
console.log(getStartedButton);
