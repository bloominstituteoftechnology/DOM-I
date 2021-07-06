/*  Tom Bielawski
 *  Lambda School WEB45
 *  Module 2 DOM I
 *  7/6/2021
 */
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



// ---------- Navigation Area ----------//
//--Nav area text color
//Use document query selector (all) to get 'a', assign to navA
const colorNavA = document.querySelectorAll("a");
//For each element in colorNavA...
colorNavA.forEach((element) => 
{ //...make the text green
  element.style.color = "green";
});

//---Services
//Get services by tag name and element, assign to services
const services = document.getElementsByTagName("a")[0];
//Use textContent and assign nav item 1
services.textContent = siteContent["nav"]["nav-item-1"];

//---Product
//Get product by tag name and element, assign to product
const product = document.getElementsByTagName("a")[1];
//Use textContent and assign nav item 2
product.textContent = siteContent["nav"]["nav-item-2"];

//---Vision
//Get vision by tag name and element, assign to vision
const vision = document.getElementsByTagName("a")[2];
//Use textContent and assign nav item 3
vision.textContent = siteContent["nav"]["nav-item-3"];

//---Features
//Get features by tag name and element, assign to features
const features = document.getElementsByTagName("a")[3];
//Use textContent and assign nav item 4
features.textContent = siteContent["nav"]["nav-item-4"];

//---About
//Get about by tag name and element, assign to about
const about = document.getElementsByTagName("a")[4];
//Use textContent and assign nav item 5
about.textContent = siteContent["nav"]["nav-item-5"];

//---Contact
//Get contact by tag name and element, assign to contact
const contact = document.getElementsByTagName("a")[5];
//Use textContent and assign nav item 6
contact.textContent = siteContent["nav"]["nav-item-6"];

//---------- CTA ----------//

//---Big Circle logo
//getElementById grabs cta-img. Assign to bigCircle
const bigCircle = document.getElementById("cta-img");

//Use setAttribute, place the circle in the siteContent area 
//img-src is established in the siteContent area
bigCircle.setAttribute("src", siteContent["cta"]["img-src"]);

//---Title area
//Use query selector to get <section> cta, <div> cta-text
const bigText = document.querySelector(".cta .cta-text");
//Use query selector to get h1 text and assign to pageTitle 
const pageTitle = bigText.querySelector("h1");
//Apply the text to pageTitle using textContent 
pageTitle.textContent = siteContent["cta"]["h1"];

//---Button
//Use query selector to get <button>
const getStartedButton = bigText.querySelector("button");

//Apply the button text using textContent
getStartedButton.textContent = siteContent["cta"]["button"];

//---------- Main Content ---------- //

//--Middle image
//Get middle-img using getElementById
const middleImage = document.getElementById("middle-img");
//Use setAttribute to assign the image to siteContent area
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//--- Main Content area
//--Features
//Use query selector to get content
const featuresContentArea = document.querySelector(".main-content .top-content .text-content");
//Use query selector to get the features h4 and assign to title
const featuresTitle = featuresContentArea.querySelector("h4");
//Use textContent to apply features h4 and main content
featuresTitle.textContent = siteContent ["main-content"]["features-h4"];
//Assign to featuresBody
const featuresBody = featuresTitle.nextElementSibling;
//Use text content to apply the features content
featuresBody.textContent = siteContent["main-content"]["features-content"];

//--About
//Use query selector to get content
const aboutContentArea = document.querySelector(".main-content .top-content .text-content:nth-of-type(2)");
//Use query selector to get the about h4
const aboutTitle = aboutContentArea.querySelector("h4");
//Use textContent to apply the About h4 to the aboutTitle
aboutTitle.textContent = siteContent ["main-content"]["about-h4"];
//Assign to aboutBody
const aboutBody = aboutTitle.nextElementSibling;
//Use textContent to apply about content
aboutBody.textContent = siteContent["main-content"]["about-content"];

//---------- Middle Bottom Content Area  ----------//
//--Services
//Use query selector to get content
const servicesContentArea = document.querySelector(".bottom-content .text-content");
//Use query selector to get the Services h4
const servicesTitle = servicesContentArea.querySelector("h4");
//Use textContent to apply the Services h4 to the servicesTitle
servicesTitle.textContent = siteContent ["main-content"]["services-h4"];
//Assign to servicesBody
const servicesBody = servicesTitle.nextElementSibling;
//Use textContent to apply the content
servicesBody.textContent = siteContent["main-content"]["services-content"];

//--Product
//Use query selector to get content
const productContentArea = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
//Use query selector to get the product h4
const productTitle = productContentArea.querySelector("h4");
//Use textContent to apply product h4 to the product Title
productTitle.textContent = siteContent ["main-content"]["product-h4"];
//Assign to productsBody
const productBody = productTitle.nextElementSibling;
//Use textContent to apply the content
productBody.textContent = siteContent["main-content"]["product-content"];

//--Vision
//Use query selector to get content
const visionContentArea = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
//Use query selector to get the vision h4
const visionTitle = visionContentArea.querySelector("h4");
//Use textContent to apply product h4 to the vision Title
visionTitle.textContent = siteContent ["main-content"]["vision-h4"];
//Assign to the visionBody
const visionBody = visionTitle.nextElementSibling;
//Use textContent to apply the content
visionBody.textContent = siteContent["main-content"]["vision-content"];


//---------- Content and Footer ----------//

//--- Contact Area
//--Contact Section
//Use query selector to get the .contact content, assign to contactSection
const contactSection = document.querySelector(".contact");
//Use query selector to get the contact h4
const contactTitle = contactSection.querySelector("h4");
//Use textContent to apply the h4 title
contactTitle.textContent = siteContent["contact"]["contact-h4"];
//Assign to the contact address using next sibling
const contactAddress = contactTitle.nextElementSibling;
//Use textContent to apply the content
contactAddress.textContent = siteContent["contact"]["address"];
//Use next element sibling to assign phone using next sibling
const contactPhone = contactAddress.nextElementSibling;
//Use textContent to apply the content
contactPhone.textContent = siteContent["contact"]["phone"];
//Use next element sibling to assign email using next sibling
const contactEmail = contactPhone.nextElementSibling;
//Use textContent to apply the content
contactEmail.textContent = siteContent["contact"]["email"];


//--Copyright Area
//Use query selector to get the footer and assign to footer
const footer = document.querySelector("footer");
//Use query selector to get p and assign to copyright
const copyright = footer.querySelector("p");
//Use textContent to apply the content
copyright.textContent = siteContent["footer"]["copyright"];