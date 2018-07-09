//////////////////////////////////////////////////////////////////////////////
// initial download and overview of readme followed by opening commit and PR//
//////////////////////////////////////////////////////////////////////////////
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


////////////////////////////
// navbar DOM manipulation//
////////////////////////////

let navLinks = document.querySelectorAll("nav a");
let navItems = "nav-item-";

for (i = 1; i < navLinks.length; i++) {
  navLinks[i].innerHTML = siteContent["nav"][navItems+i];

}

  ////////////////////////////
  // Image Dom manipulation //
  ////////////////////////////

  ////////////////////////////////////////////////////////////////
  // let codeImg = document.getElementById("cta-img");          //
  // codeImg.setAttribute('src', siteContent["cta"]["img-src"]) //
  ////////////////////////////////////////////////////////////////

  let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent.cta.button;


let ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta.h1;

//////////////////////////////////
// main content DOM Manipulation//
//////////////////////////////////


let featuresH4 = document.querySelectorAll(".top-content .text-content h4")[0]
featuresH4.innerHTML = siteContent["main-content"]["features-h4"]

let featuresP1 = document.querySelectorAll(".top-content .text-content p")[0]
featuresP1.innerHTML = siteContent["main-content"]["features-content"]

let aboutH4 = document.querySelectorAll(".top-content .text-content h4")[1]
aboutH4.innerHTML = siteContent["main-content"]["about-h4"]

let aboutP1 = document.querySelectorAll(".top-content .text-content p")[1]
aboutP1.innerHTML = siteContent["main-content"]["about-content"]

let banner = document.getElementById("middle-img");
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"])



let servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0]
servicesH4.innerHTML = siteContent["main-content"]["services-h4"]

let servicesP1 = document.querySelectorAll(".bottom-content .text-content p")[0]
servicesP1.innerHTML = siteContent["main-content"]["services-content"]

let productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1]
productH4.innerHTML = siteContent["main-content"]["product-h4"]

let productP1 = document.querySelectorAll(".bottom-content .text-content p")[1]
productP1.innerHTML = siteContent["main-content"]["product-content"]

let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2]
visionH4.innerHTML = siteContent["main-content"]["vision-h4"]

let visionP1 = document.querySelectorAll(".bottom-content .text-content p")[2]
visionP1.innerHTML = siteContent["main-content"]["product-content"]

//////////////////////////
// bottom/footer section//
//////////////////////////


let contact = document.querySelector(".contact h4")
contact.innerHTML = siteContent["main-content"]["contact h4"]