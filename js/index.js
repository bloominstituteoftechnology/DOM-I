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
    "h1": "DOM \nIs \nAwesome",
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
logo.src = 'img/logo.png'

// NAV
let nav1 = document.getElementsByTagName("a")[0];
nav1.innerHTML = siteContent["nav"]["nav-item-1"]
 let nav2 = document.getElementsByTagName("a")[1];
nav2.innerHTML = siteContent["nav"]["nav-item-2"]
 let nav3 = document.getElementsByTagName("a")[2];
nav3.innerHTML = siteContent["nav"]["nav-item-3"]
 let nav4 = document.getElementsByTagName("a")[3];
nav4.innerHTML = siteContent["nav"]["nav-item-4"]
 let nav5 = document.getElementsByTagName("a")[4];
nav5.innerHTML = siteContent["nav"]["nav-item-5"]
 let nav6 = document.getElementsByTagName("a")[5];
nav6.innerHTML = siteContent["nav"]["nav-item-6"]

// CTA
let ctaText = document.querySelector(".cta-text h1");
// ctaText.innerText = ""
ctaText.innerText = siteContent["cta"]["h1"];

// let ctaWords = document.querySelector(".cta-text h1");
// ctaWords.innerHTML = siteContent['cta']['h1'].split(' ');
// ctaText.innerHTML += `${item}<br>`;


// Img Round
let ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent["cta"]["img-src"];

// Img Snippet
let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Button
let ctaButton = document.querySelector('button')
ctaButton.innerHTML = siteContent.cta.button;

// Header
let topHead = document.querySelectorAll('.top-content .text-content h4');
topHead[0].innerHTML = siteContent["main-content"]["features-h4"];
topHead[1].innerHTML = siteContent["main-content"]["about-h4"];

let bottomHead = document.querySelectorAll('.bottom-content .text-content h4');
bottomHead[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomHead[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomHead[2].innerHTML = siteContent["main-content"]["vision-h4"];

// Content
let topText = document.querySelectorAll('.top-content .text-content p');
topText[0].innerHTML = siteContent["main-content"]["features-content"];
topText[1].innerHTML = siteContent["main-content"]["about-content"];

let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomText[2].innerHTML = siteContent["main-content"]["vision-content"];


// contact head
let contactHead = document.querySelector('.contact h4');
contactHead.innerHTML = siteContent["contact"]["contact-h4"];
// contact content
let contactText = document.querySelectorAll(".contact p");
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];


// footer
let footer = document.querySelector('footer p');
footer.innerHTML = siteContent["footer"]["copyright"]


// Add appendChild
const newNavItem = document.createElement("a");
const navNew = document.querySelector("nav");

newNavItem.innerText = "Blog";
newNavItem.href = "https://google.com"

navNew.appendChild(newNavItem);