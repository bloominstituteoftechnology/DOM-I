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
// console.log(logo);

                            // Updating the nav bar 







// nav link 1 assigned and updated
let link1 = document.querySelector("nav a:nth-of-type(1)");
link1.style.color = "green";
link1.textContent = siteContent["nav"]["nav-item-1"];
// nav link 2 assigned and updated
let link2 = document.querySelector("nav a:nth-of-type(2)");
link2.style.color = "green";
link2.textContent = siteContent["nav"]["nav-item-2"];
// nav link 3 assigned and updated
let link3 = document.querySelector("nav a:nth-of-type(3)");
link3.style.color = "green";
link3.textContent = siteContent["nav"]["nav-item-3"];
// nav link 4 assigned and updated
let link4 = document.querySelector("nav a:nth-of-type(4)");
link4.style.color = "green";
link4.textContent = siteContent["nav"]["nav-item-4"];
// nav link 5 assigned and updated
let link5 = document.querySelector("nav a:nth-of-type(5)");
link5.style.color = "green";
link5.textContent = siteContent["nav"]["nav-item-5"];
// nav link 6 assigned and updated
let link6 = document.querySelector("nav a:nth-of-type(6)");
link6.style.color = "green";
link6.textContent = siteContent["nav"]["nav-item-6"];


                            // Updating cta section 
// page h1 assigned and updated
let pageTitle = document.querySelector(".cta-text h1");
pageTitle.textContent = siteContent["cta"]["h1"];
// button assigned and updated
let topButton = document.querySelector(".cta-text button");
topButton.textContent = siteContent["cta"]["button"];
// img assigned and updated
let topImg = document.querySelector(".cta img");
topImg.setAttribute("src", siteContent["cta"]["img-src"]);


                      // Updating Main-content section 
// Features div
const featuresDiv = document.querySelector(".text-content:nth-of-type(1)");
// Set features h4
  let featuresDivTitle = featuresDiv.querySelector("h4");
  featuresDivTitle.textContent = siteContent["main-content"]["features-h4"];
// Set features p
  let featuresDivP = featuresDiv.querySelector("p");
  featuresDivP.textContent = siteContent["main-content"]["features-content"];


// About div
const aboutDiv = document.querySelector(".text-content:nth-of-type(2)");
// Set about h4
  let aboutDivTitle = aboutDiv.querySelector("h4");
  aboutDivTitle.textContent = siteContent["main-content"]["about-h4"];
// Set about p
  let aboutDivP = aboutDiv.querySelector("p");
  aboutDivP.textContent = siteContent["main-content"]["about-content"];

                          //Updating Middle image 

// middle image 
let midImg = document.getElementById("middle-img");
// Set image attribute source 
midImg.setAttribute("src", siteContent['main-content']['middle-img-src']);
  
                       // Updating Bottom content 

// Services div
const servicesDiv = document.querySelector(".bottom-content .text-content:nth-of-type(1)");
// Set services h4
  let servicesDivTitle = servicesDiv.querySelector("h4");
  servicesDivTitle.textContent = siteContent["main-content"]["services-h4"];
// Set services p
  let servicesDivP = servicesDiv.querySelector("p");
  servicesDivP.textContent = siteContent["main-content"]["services-content"];


// Product div
const productDiv = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
// Set product div
  let productDivTitle = productDiv.querySelector("h4");
  productDivTitle.textContent = siteContent["main-content"]["product-h4"];
// Set product p
let productDivP = productDiv.querySelector("p");
productDivP.textContent = siteContent["main-content"]["product-content"];


// Vision div 
const visionDiv = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
// Set vision h4
  let visionDivTitle = visionDiv.querySelector("h4");
visionDivTitle.textContent = siteContent["main-content"]["vision-h4"];
// Set vision p
  let visionDivP = visionDiv.querySelector("p");
  visionDivP.textContent = siteContent["main-content"]["vision-content"];


                  //Updating Contact section 
const contactSection = document.querySelector(".contact");
// Set contact h4
  let contactTitle = contactSection.querySelector("h4");
  contactTitle.textContent = siteContent["contact"]["contact-h4"];
// Set contact p 1
  let contactP1 = contactSection.querySelector("p:nth-of-type(1)");
  contactP1.textContent = siteContent["contact"]["address"];
// Set contact p 2
  let contactP2 = contactSection.querySelector("p:nth-of-type(2)");
  contactP2.textContent = siteContent["contact"]["phone"];
// Set contact p 3
let contactP3 = contactSection.querySelector("p:nth-of-type(3)");
  contactP3.textContent = siteContent["contact"]["email"];


                  // Updating footer section
// Footer section
const footer = document.querySelector("footer");
// Set footer p
 let footerP = footer.querySelector("p");
    footerP.textContent = siteContent["footer"]["copyright"];


                    // Add Content !important 



                        // Adding new navbar links 

// Getting the navbar
const navbar = document.querySelector("nav");
// Creating new link
let newA1 = document.createElement("a");
// Adding text to the anchor element
newA1.textContent = "!ydwoH";
newA1.style.color = "green";
// Appending the new element to the navbar
navbar.appendChild(newA1);

// Creating second link 
let newA2 = document.createElement("a");
// Adding text to the anchor element
newA2.textContent = "Howdy!";
newA2.style.color = "green";
// Prepending the new element to the navbar
navbar.prepend(newA2);