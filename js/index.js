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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])



// let hmtlTag = document.getElementsByClassName(".lang");
// htmlTag.className = "en";
// let containerClass = document.getElementsByClassName(".container");

let navItems = document.querySelectorAll("a");

navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";

let logoID = document.querySelector("#logo-img");
logoID.setAttribute("src", "img/logo.png");
logoID.setAttribute("alt", "Great Idea! Company logo.");

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

// let footerPElement = document.querySelector("footer p");
// footerPElement.innerHTML = "Copyright Great Idea! 2018";

let footerPElement = document.querySelectorAll("footer p");
footerPElement[0].innerHTML = "Copyright Great Idea! 2018";



// navItems.style.color = "green"
// document.getElementsByTagName("a").style.color = "green";

navItems[0].style.cssText = "color:green;";
navItems[1].style.cssText = "color:green;"
navItems[2].style.cssText = "color:green;"
navItems[3].style.cssText = "color:green;"
navItems[4].style.cssText = "color:green;"
navItems[5].style.cssText = "color:green;"

let navTag = document.querySelector("nav"); //Parent node

let newAElement1  = document.createElement("a"); //Create a node
newAElement1.innerHTML = "newAElement1"; //Setting the content inbetween <a> tags
navTag.prepend(newAElement1); //insert node before first child

let newAElement2  = document.createElement("a"); //Create a node
newAElement2.innerHTML = "newAElement2"; //Setting the content inbetween <a> tags

navTag.appendChild(newAElement2);


