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


// update the src for the nav a tags
let aTags = document.getElementsByTagName("a");
aTags[0].innerHTML = siteContent["nav"]["nav-item-1"];
aTags[1].innerHTML = siteContent["nav"]["nav-item-2"];
aTags[2].innerHTML = siteContent["nav"]["nav-item-3"];
aTags[3].innerHTML = siteContent["nav"]["nav-item-4"];
aTags[4].innerHTML = siteContent["nav"]["nav-item-5"];
aTags[5].innerHTML = siteContent["nav"]["nav-item-6"];



// Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let ctaH1 = document.getElementsByTagName("h1");
ctaH1[0].innerHTML = siteContent["cta"]["h1"];

// update the src for the cta-button
let button = document.getElementsByTagName("button");
button[0].innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


let topTextContentH4 = document.querySelectorAll('.top-content .text-content h4');
topTextContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topTextContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];

let topTextContentP = document.querySelectorAll('.top-content .text-content p');
topTextContentP[0].innerHTML = siteContent["main-content"]["features-content"];
topTextContentP[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let bottomTextContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomTextContentH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomTextContentH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomTextContentH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomTextContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomTextContentP[0].innerHTML = siteContent["main-content"]["services-content"];
bottomTextContentP[1].innerHTML = siteContent["main-content"]["product-content"];
bottomTextContentP[2].innerHTML = siteContent["main-content"]["vision-content"];


let contactH4 = document.querySelectorAll('.contact h4');
contactH4[0].innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];


let copyright = document.getElementsByTagName("footer");
copyright[0].innerHTML = siteContent["footer"]["copyright"];
