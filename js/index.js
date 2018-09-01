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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Navigation bar
const navItems = document.getElementsByTagName("a");

for (i=0; i<navItems.length; i++) {
  navItems[i].innerHTML=siteContent["nav"][`nav-item-${i+1}`];
}

//CTA
const callToAction = document.getElementsByClassName("cta");
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.getElementById("cta-img");

ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"]
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// console.log(callToAction);
// console.log(ctaH1);
// console.log(ctaButton);
// console.log(ctaImg);

//Main Content
const mainContent = Object.values(siteContent["main-content"]);//main content values.
//Top half
const mainTop = document.querySelector(".main-content .top-content");
const mainTopFeatures = mainTop.children[0];
const mainTopAbout = mainTop.children[1];

const featuresH4 = mainTopFeatures.querySelector("h4");
const featuresP = mainTopFeatures.querySelector("p");
const aboutH4 = mainTopAbout.querySelector("h4");
const aboutP = mainTopAbout.querySelector("p");

featuresH4.innerHTML = mainContent[0];
featuresP.innerHTML = mainContent[1];
aboutH4.innerHTML = mainContent[2];
aboutP.innerHTML = mainContent[3];

console.log(mainTop);


//middle image
const middleImg = document.querySelector(".middle-img");

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Bottom half
const mainBottom = document.querySelector(".main-content .bottom-content");
const mainBottomServices = mainBottom.children[0];
const mainBottomProduct = mainBottom.children[1];
const mainBottomVision  = mainBottom.children[2];

const servicesH4 = mainBottomServices.querySelector("h4"); 
const servicesP  = mainBottomServices.querySelector("p");
const productH4  = mainBottomProduct.querySelector("h4");
const productP   = mainBottomProduct.querySelector("p");
const visionH4   = mainBottomVision.querySelector("h4");
const visionP    = mainBottomVision.querySelector("p");

servicesH4.innerHTML = mainContent[5];
servicesP.innerHTML = mainContent[6];
productH4.innerHTML = mainContent[7];
productP.innerHTML  = mainContent[8];
visionH4.innerHTML  = mainContent[9];
visionP.innerHTML   = mainContent[10];

console.log(mainBottom);

//contact
const siteContactItems = Object.values(siteContent["contact"]);
//contact values
const siteContact = document.querySelector(".contact");
const contactH4 = siteContact.children[0];
const contactParagraphs = siteContact.querySelectorAll("p");
const contactP1 = contactParagraphs[0];
const contactP2 = contactParagraphs[1];
const contactP3 = contactParagraphs[2];

contactH4.innerHTML = siteContactItems[0];
contactP1.innerHTML = siteContactItems[1];
contactP2.innerHTML = siteContactItems[2];
contactP3.innerHTML = siteContactItems[3];

console.log(siteContact);

//footer
const siteFooter = document.getElementsByTagName("footer");
const footerP = siteFooter[0];
footerP.innerHTML = siteContent['footer']['copyright'];
console.log(footerP);