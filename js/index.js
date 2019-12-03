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

// Header
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];


// CTA section

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaHead = document.querySelector("h1");
ctaHead.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// Main content
let mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"]
mainContent[1].textContent = siteContent["main-content"]["about-h4"]
mainContent[2].textContent = siteContent["main-content"]["services-h4"]
mainContent[3].textContent = siteContent["main-content"]["product-h4"]
mainContent[4].textContent = siteContent["main-content"]["vision-h4"]

let mainContentP = document.querySelectorAll(".top-content p");
mainContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentP[1].textContent = siteContent["main-content"]["about-content"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainContentPS = document.querySelectorAll(".bottom-content p");
mainContentPS[0].textContent = siteContent["main-content"]["services-content"]
mainContentPS[1].textContent = siteContent["main-content"]["product-content"]
mainContentPS[2].textContent = siteContent["main-content"]["vision-content"]


// Contact
let contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].textContent = siteContent["contact"]["contact-h4"]

let contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent["contact"]["address"]
contactPara[1].textContent = siteContent["contact"]["phone"]
contactPara[2].textContent = siteContent["contact"]["email"]

// Footer
let footerContent = document.querySelectorAll("footer p");
footerContent[0].textContent = siteContent["footer"]["copyright"]



// Adding items to nav
// let newListItem = document.createElement('a');
// newListItem.textContent = 'Other page';
// navItems.prepend(newListItem);

// let para = document.createElement("A");
// let t = document.createTextNode("Other");
// para.appendChild(t);
// document.getElementsByTagName("nav").appendChild(para);

const newListItem = document.createElement('a');
newListItem.textContent = "Other"
const parentElement = document.querySelector('nav');
parentElement.append(newListItem) 

const newListItemTwo = document.createElement('a');
newListItemTwo.textContent = "Home"
parentElement.prepend(newListItemTwo) 

// Styling nav
navItems.forEach( element => {
  element.style.color = "green"
})

newListItem.setAttribute("style", "color: green;");

newListItemTwo.setAttribute("style", "color: green;");
