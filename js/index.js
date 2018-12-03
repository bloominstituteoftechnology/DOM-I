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
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = siteContent["nav"]["img-src"];

//====== header

// nav anchor tags

let navItems = document.querySelectorAll('a');

// old method

// let servicesNav = navItems[0];
// let productNav = navItems[1];
// let visionNav = navItems[2];
// let featuresNav = navItems[3];
// let aboutNav = navItems[4];
// let contactNav = navItems[5];

// servicesNav.textContent = siteContent["nav"]["nav-item-1"];
// productNav.textContent = siteContent["nav"]["nav-item-2"];
// visionNav.textContent = siteContent["nav"]["nav-item-3"];
// featuresNav.textContent = siteContent["nav"]["nav-item-4"];
// aboutNav.textContent = siteContent["nav"]["nav-item-5"];
// contactNav.textContent = siteContent["nav"]["nav-item-6"];

// DRY attempt

// for loop

// let navItemsArr = Array.from(navItems);
// for (let i = 0; i <= navItemsArr.length ; i++) {
//   navItemsArr[i].textContent = siteContent["nav"][`nav-item-${1 + i}`];
// }

// map method

let navItemsArr = Array.from(navItems);

navItemsArr.map((item, index)=>{
  item.textContent = Object.values(siteContent.nav)[index] 
  item.style.color = "green"
})

//====== cta section

// json content h1 will always add newline when space is used
// i'll come back to this when i finish mvp

let h1 = document.querySelector('h1');
// let ctaH1 = Object.values(siteContent["cta"]["h1"].split(" ").join("\r\n"));
h1.style.whiteSpace = "pre-line";
h1.textContent = siteContent["cta"]["h1"].split(" ").join("\r\n");

let button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"];

let headerImg = document.getElementById("cta-img");
// headerImg.setAttribute('src', siteContent["cta"]["img-src"])
headerImg.src = siteContent["cta"]["img-src"];


//====== main content

// top content

// legacy code. I tried to make this work

// let topH4 = topTextContent.querySelectorAll("h4");
// topH4[0].textContent = siteContent["main-content"]["features-h4"];
// let topP = topTextContent.querySelectorAll("p");
// topP[0].textContent = siteContent["main-content"]["features-content"];

let topContentH4 = document.querySelectorAll(".top-content > .text-content > h4");
let topContentP = document.querySelectorAll(".top-content > .text-content > p");

// features
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];

topContentP[0].textContent = siteContent["main-content"]["features-content"];

// about
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

topContentP[1].textContent = siteContent["main-content"]["about-content"];

// middle image 
let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImg.src = siteContent["main-content"]["middle-img-src"];

// botton content

let botContentH4 = document.querySelectorAll(".bottom-content > .text-content > h4");
let botContentP = document.querySelectorAll(".bottom-content > .text-content > p");

// services

botContentH4[0].textContent = siteContent["main-content"]["services-h4"];

botContentP[0].textContent = siteContent["main-content"]["services-content"];

// product 

botContentH4[1].textContent = siteContent["main-content"]["product-h4"];

botContentP[1].textContent = siteContent["main-content"]["product-content"];

// vision

botContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

botContentP[2].textContent = siteContent["main-content"]["vision-content"];

//====== contact section

let contactH4 = document.querySelector(".contact > h4");
let contactP = document.querySelectorAll(".contact > p");

contactH4.textContent = siteContent["contact"]["contact-h4"];

contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//====== footer

let footerP = document.querySelector("footer > p");

footerP.textContent = siteContent["footer"]["copyright"];
