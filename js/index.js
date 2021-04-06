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



// nav
let navItem = document.querySelectorAll("nav a");
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

// Adding elements to nav
let newElementOne = document.createElement("a");
newElementOne.textContent = "Bruh";
newElementOne.href = "#";
document.querySelector("nav").prepend(newElementOne);

let newElementTwo = document.createElement("a");
newElementTwo.textContent = "Dude";
newElementTwo.href = "#";
document.querySelector("nav").append(newElementTwo);

// Dom is Awesome
let titleText = document.querySelector(".cta h1");
titleText.textContent = siteContent["cta"]["h1"];
let buttonOne = document.querySelector(".cta button");
buttonOne.textContent = siteContent["cta"]["button"];

// img 
let img1 = document.querySelector("#cta-img");
img1.src = siteContent["cta"]["img-src"];

// MAIN CONTENT
let heading= document.querySelectorAll(".text-content h4");
heading[0].textContent = siteContent["main-content"]["features-h4"];
heading[1].textContent = siteContent["main-content"]["about-h4"];
heading[2].textContent = siteContent["main-content"]["services-h4"];
heading[3].textContent = siteContent["main-content"]["product-h4"];
heading[4].textContent = siteContent["main-content"]["vision-h4"];

let paragraph= document.querySelectorAll(".text-content p");
paragraph[0].textContent = siteContent["main-content"]["features-content"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

let imgTwo = document.querySelector(".middle-img");
imgTwo.src = siteContent["main-content"]["middle-img-src"]

// FOOTER SECTION
let footH4 = document.querySelector(".contact h4");
footH4.textContent = siteContent["contact"]["contact-h4"];

let footAddress = document.querySelectorAll(".contact p");
footAddress[0].textContent = siteContent["contact"]["address"];
footAddress[1].textContent = siteContent["contact"]["phone"];
footAddress[2].textContent = siteContent["contact"]["email"];

let footCopyright = document.querySelector("footer");
footCopyright.textContent = siteContent["footer"]["copyright"]

// let nav1 = document.querySelector("a:nth-of-type(1)")
// nav1.textContent = "Services";
// let nav2 = document.querySelector("a:nth-of-type(2)")
// nav2.textContent = "Product";
// let nav3 = document.querySelector("a:nth-of-type(3)")
// nav3.textContent = "Vision";
// let nav4 = document.querySelector("a:nth-of-type(4)")
// nav4.textContent = "Features";
// let nav5 = document.querySelector("a:nth-of-type(5)")
// nav5.textContent = "About";
// let nav6 = document.querySelector("a:nth-of-type(6)")
// nav6.textContent = "Contact";

// // Heading section
// let img1 = document.querySelector("#cta-img");
// img1.setAttribute("src", "img/header-img.png");
// let domTitle = document.querySelector(".cta-text h1");
// domTitle.textContent = "DOM IS AWESOME";
// let newButton = document.querySelector(".cta-text button");
// newButton.textContent = "Get Started";

// // paragraphs

// let secondPara = document.querySelector(".text-content:nth-of-type(2)");
// secondPara.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
