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




let navItem1 = document.querySelectorAll("nav a"); 
navItem1[0].innerHTML = siteContent["nav"]["nav-item-1"]

let navItem2 = document.querySelectorAll("nav a"); 
navItem2[1].innerHTML = siteContent["nav"]["nav-item-2"]

let navItem3 = document.querySelectorAll("nav a"); 
navItem3[2].innerHTML = siteContent["nav"]["nav-item-3"]

let navItem4 = document.querySelectorAll("nav a"); 
navItem4[3].innerHTML = siteContent["nav"]["nav-item-4"]

let navItem5 = document.querySelectorAll("nav a"); 
navItem5[4].innerHTML = siteContent["nav"]["nav-item-5"]

let navItem6 = document.querySelectorAll("nav a"); 
navItem6[5].innerHTML = siteContent["nav"]["nav-item-6"];



let navColor = document.querySelectorAll("nav a");
for (let i = 0; i < 6; i++) {
  navColor[i].style.color = "green";
}

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = (siteContent["cta"]["h1"]);

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = (siteContent["cta"]["button"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let topFeature = document.querySelector(".text-content h4");
topFeature.innerHTML = siteContent["main-content"]["features-h4"];

let featureContent = document.querySelector(".text-content p");
featureContent.innerHTML = siteContent["main-content"]["features-content"];

let topAbout = document.querySelectorAll(".text-content h4");
topAbout[1].innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelectorAll(".text-content p");
aboutContent[1].innerHTML = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomService = document.querySelectorAll(".text-content h4");
bottomService[2].innerHTML = siteContent["main-content"]["services-h4"]

let serviceContent = document.querySelectorAll(".text-content p");
serviceContent[2].innerHTML = siteContent["main-content"]["services-content"]

let productHead = document.querySelectorAll(".text-content h4");
productHead[3].innerHTML = siteContent["main-content"]["product-h4"]

let productContent = document.querySelectorAll(".text-content p");
productContent[3].innerHTML = siteContent["main-content"]["product-content"]

let visionHead = document.querySelectorAll(".text-content h4");
visionHead[4].innerHTML = siteContent["main-content"]["vision-h4"]

let visionContent= document.querySelectorAll(".text-content p");
visionContent[4].innerHTML = siteContent["main-content"]["vision-content"]

let contactHead = document.querySelectorAll(".contact h4");
contactHead[0].innerHTML = siteContent["contact"]["contact-h4"]

let contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].innerHTML = siteContent["contact"]["address"]

let contactPhone = document.querySelectorAll(".contact p");
contactPhone[1].innerHTML = siteContent["contact"]["phone"]

let contactEmail = document.querySelectorAll(".contact p");
contactEmail[2].innerHTML = siteContent["contact"]["email"]

let footerCr= document.querySelectorAll("footer p");
footerCr.innerHTML = siteContent["footer"]["copyright"]

let navvy = document.querySelector("nav");
let newChild = document.createElement("a");
newChild.innerHTML = "blog";
navvy.appendChild(newChild);
