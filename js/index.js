


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


/// NavBar

let navAnchorTags = document.querySelectorAll("a");
navAnchorTags[0].innerText = "Services";
navAnchorTags[1].innerText = "Product";
navAnchorTags[2].innerText = "Vision";
navAnchorTags[3].innerText = "Features";
navAnchorTags[4].innerText = "About";
navAnchorTags[5].innerText = "Contact";

/*let navBar = querySelector("nav");
navBar.style.color = green;*/

let mainHeader = document.querySelector("h1");
mainHeader.innerText = "DOM Is Awesome";
let getStartedButton = document.getElementsByTagName("button")
getStartedButton[0].innerText = "Get Started";

let ctaImg = document.getElementById ("cta-img");
ctaImg.setAttribute("src", "img/header-img.png");


//// section main-content

let paragraphHeadings = document.querySelectorAll("h4");
paragraphHeadings[0].innerText = "Features";
paragraphHeadings[1].innerText = "Product";
paragraphHeadings[2].innerText = "Vision";
paragraphHeadings[3].innerText = "Features";
paragraphHeadings[4].innerText = "About";
paragraphHeadings[5].innerText = "Contact";

let midImg = document.getElementById ("middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");

let textBlocks = document.querySelectorAll("p");
textBlocks[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[2].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
textBlocks[5].innerText = "123 Way 456 Street Somewhere, USA";
textBlocks[6].innerText = "1 (888) 888-8888";
textBlocks[7].innerText = "sales@greatidea.io";
textBlocks[8].innerText = "Copyright Great Idea! 2018";