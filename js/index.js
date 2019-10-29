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


const navLinks = document.querySelectorAll('a');
let count = 1;
navLinks.forEach( element => {
  if (count !== navLinks.length + 1) {
    element.textContent = siteContent['nav'][`nav-item-${count}`];
    count += 1;
  }
})

const ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

let ctaTextH1Class = document.querySelector(".cta h1");
ctaTextH1Class.innerHTML = "DOM Is Awesome";

let ctaTextButtonClass = document.querySelector(".cta button");
ctaTextButtonClass.innerHTML = "Get Started";

let ctaImageId = document.querySelector("#cta-img");
ctaImageId.setAttribute("src", "img/header-img.png");


let topContentH4Elements = document.querySelectorAll(".top-content .text-content h4");
topContentH4Elements[0].innerHTML = "Features";
topContentH4Elements[1].innerHTML = "About";


let topContentPElements = document.querySelectorAll(".top-content .text-content p");
topContentPElements[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentPElements[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImageId = document.querySelector("#middle-img");
middleImageId.setAttribute("src", "img/mid-page-accent.jpg");

let bottomContentH4Elements = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentH4Elements[0].innerHTML = "Services";
bottomContentH4Elements[1].innerHTML = "Product";
bottomContentH4Elements[2].innerHTML = "Vision";

let bottomContentPElements = document.querySelectorAll(".bottom-content .text-content p");
bottomContentPElements[0].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentPElements[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentPElements[2].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contactClassH4Element = document.querySelectorAll(".contact h4");
contactClassH4Element[0].innerHTML = "Contact";

let contactClassPElements = document.querySelectorAll(".contact p");
contactClassPElements[0].innerHTML = "123 Way 456 Street Somewhere, USA";
contactClassPElements[1].innerHTML = "1 (888) 888-8888";
contactClassPElements[2].innerHTML = "sales@greatidea.io";

let footerPElement = document.querySelectorAll("footer p");
footerPElement[0].innerHTML = "Copyright Great Idea! 2018-2019";




const navigation = document.querySelector("nav")
const navigationA = document.querySelectorAll("nav a")

navigationA[0].innerHTML = siteContent['nav']['nav-item-1'];
navigationA[1].innerHTML = siteContent['nav']['nav-item-2'];
navigationA[2].innerHTML = siteContent['nav']['nav-item-3'];
navigationA[3].innerHTML = siteContent['nav']['nav-item-4'];
navigationA[4].innerHTML = siteContent['nav']['nav-item-5'];
navigationA[5].innerHTML = siteContent['nav']['nav-item-6'];

navigationA.forEach (function(navItem) {   navItem.style.color = 'green';});

const newNavItem1 = document.createElement('a');
newNavItem1.innerHTML = 'Peace';
newNavItem1.style.color = 'green'
navigation.prepend(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.innerHTML = 'Maker';
newNavItem2.style.color = 'green'
navigation.appendChild(newNavItem2);