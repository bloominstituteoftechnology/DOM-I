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

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let newA2 = document.createElement("a");
newA2.textContent = "Donkey";
let navParent = document.querySelector("nav");
navParent.appendChild(newA2);


const navBar = document.querySelectorAll("nav a")

navBar[0].innerText = siteContent.nav["nav-item-1"];
navBar[1].innerText = siteContent.nav["nav-item-2"];
navBar[2].innerText = siteContent.nav["nav-item-3"];
navBar[3].innerText = siteContent.nav["nav-item-4"];
navBar[4].innerText = siteContent.nav["nav-item-5"];
navBar[5].innerText = siteContent.nav["nav-item-6"];


const title = document.querySelector(".cta-text h1");
title.textContent = siteContent['cta']['h1'];

const newButton = document.querySelector(".cta-text button");
newButton.textContent = siteContent['cta']['button']; 

const mainTitle = document.querySelectorAll(".text-content h4");
mainTitle[0].textContent = siteContent["main-content"]["features-h4"];

const mainText = document.querySelectorAll(".text-content p");
mainText[0].textContent = siteContent["main-content"]["features-content"];

const mainTitleSecond = document.querySelectorAll(".text-content h4");
mainTitleSecond[1].textContent = siteContent["main-content"]["about-h4"];

const mainTextSecond = document.querySelectorAll(".text-content p");
mainTextSecond[1].textContent = siteContent["main-content"]["about-content"];

const bottomTitleFirst = document.querySelectorAll(".bottom-content .text-content h4");
bottomTitleFirst[0].textContent = siteContent["main-content"]["services-h4"];

const bottomTextFirst = document.querySelectorAll(".bottom-content .text-content p");
bottomTextFirst[0].textContent = siteContent["main-content"]["services-content"];

const bottomTitleSecond = document.querySelectorAll(".bottom-content .text-content h4");
bottomTitleSecond[1].textContent = siteContent["main-content"]["product-h4"];

const bottomTextSecond = document.querySelectorAll(".bottom-content .text-content p");
bottomTextSecond[1].textContent = siteContent["main-content"]["about-content"];

const bottomTitleThird = document.querySelectorAll(".bottom-content .text-content h4");
bottomTitleThird[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomTextThird = document.querySelectorAll(".bottom-content .text-content p");
bottomTextThird[2].textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent.contact.address;
contactText[1].textContent = siteContent.contact.phone;
contactText[2].textContent = siteContent.contact.email;

const footerText = document.querySelector("footer p");
footerText.textContent = siteContent.footer.copyright;


// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// }

// Change the color of the navigation text to be green.
//  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
//  Check your work by looking at the original html in the browser


const coloringNav = document.querySelectorAll("a");
coloringNav.forEach(coloring => coloring.style.color = "green");

