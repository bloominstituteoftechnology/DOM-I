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

//Navigation bar
let navItems = document.getElementsByTagName("a");

for (i=0; i<navItems.length; i++) {
  navItems[i].innerHTML=siteContent["nav"][`nav-item-${i+1}`];
}

//CTA
let callToAction = document.getElementsByClassName("cta");
let ctaH1 = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaImg = document.getElementById("cta-img");

ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"]
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// console.log(callToAction);
// console.log(ctaH1);
// console.log(ctaButton);
// console.log(ctaImg);

//Main Content
let mainContent = Object.values(siteContent["main-content"]);//main content values.
//Top half
let mainTop = document.querySelector(".main-content .top-content");
let mainTopFeatures = mainTop.children[0];
let mainTopAbout = mainTop.children[1];

let featuresH4 = mainTopFeatures.querySelector("h4");
let featuresP = mainTopFeatures.querySelector("p");
let aboutH4 = mainTopAbout.querySelector("h4");
let aboutP = mainTopAbout.querySelector("p");

featuresH4.innerHTML = mainContent[0];
featuresP.innerHTML = mainContent[1];
aboutH4.innerHTML = mainContent[2];
aboutP.innerHTML = mainContent[3];

console.log(mainTop);


//middle image
let middleImg = document.querySelector(".middle-img");

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Bottom half
let mainBottom = document.querySelector(".main-content .bottom-content");
let mainBottomServices = mainBottom.children[0];
let mainBottomProduct = mainBottom.children[1];
let mainBottomVision  = mainBottom.children[2];

let servicesH4 = mainBottomServices.querySelector("h4"); 
let servicesP  = mainBottomServices.querySelector("p");
let productH4  = mainBottomProduct.querySelector("h4");
let productP   = mainBottomProduct.querySelector("p");
let visionH4   = mainBottomVision.querySelector("h4");
let visionP    = mainBottomVision.querySelector("p");

servicesH4.innerHTML = mainContent[5];
servicesP.innerHTML = mainContent[6];
productH4.innerHTML = mainContent[7];
productP.innerHTML  = mainContent[8];
visionH4.innerHTML  = mainContent[9];
visionP.innerHTML   = mainContent[10];

console.log(mainBottom);

//contact
let siteContactItems = Object.values(siteContent["contact"]);
//contact values
let siteContact = document.querySelector(".contact");
let contactH4 = siteContact.children[0];
let contactParagraphs = siteContact.querySelectorAll("p");
let contactP1 = contactParagraphs[0];
let contactP2 = contactParagraphs[1];
let contactP3 = contactParagraphs[2];

contactH4.innerHTML = siteContactItems[0];
contactP1.innerHTML = siteContactItems[1];
contactP2.innerHTML = siteContactItems[2];
contactP3.innerHTML = siteContactItems[3];

console.log(siteContact);

//footer
let siteFooter = document.getElementsByTagName("footer");
let footerP = siteFooter[0];
footerP.innerHTML = siteContent['footer']['copyright'];
console.log(footerP);