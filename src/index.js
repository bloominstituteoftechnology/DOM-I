const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
//*renaming class name to italic
//*give a class name to nav a tags
////const navItem = document.querySelectorAll("nav-item-1");

////navItem.textContent = navItem["nav-item-1"]["italic"];


//! ----------------------------- CREATE IMAGES -------------------------------------- !

const logoImg = document.querySelector("#logo-img");
////console.log(logoImg);

//*first attempt: logoImg.setAttribute("src", "http://localhost:9000/img/logo.png")
//*2nd attempt: 
logoImg.src = siteContent.images["logo-img"];

// console.log('project wired');

const ctaImg = document.querySelector("#cta-img");

////console.log(ctaImg);

ctaImg.src = siteContent.images["cta-img"];

const middleImg = document.querySelector("#middle-img");
////console.log(accentImg);
middleImg.src = siteContent.images["accent-img"];
//? How would that be written with setAttribute( ) ? 
//* middleImg.setAttribute("src", siteContent.images["accent-img"])

//! ----------------------------- ADD CLASS NAMES /SELECTORS----------------------------------- !

//* ---- HEADER NAV ---- *
const navLinks = document.querySelectorAll("header nav a");
const navLinkTexts = Object.values(siteContent.nav)

//? siteContent.nav is an object but we want to access it like an array. How do we treat it like an array?
//* we can use Object.values( ) <-- w/e is in parens gets treated like array now :) 

//we can loop thru navLinks to loop thru siteContent.nav and assign each link according to the index that's input
//NodeLists have forEach, forEach allow us to pass CB fn

navLinks.forEach((link, index) => {
  link.textContent = navLinkTexts[index]
  link.classList.add("italic")
})


//* ---- FOOTER NAV ---- *






//! ---------------------------- ADD TEXT CONTENT ------------------------------------- !

//* ---- CTA ---- *
//---H1 ..
const ctaText = document.querySelector(".cta-text");
ctaText.children[0].textContent = siteContent.cta.h1;
//---BUTTON ..
ctaText.children[1].textContent = siteContent.cta.button;


//* ---- TOP-CONTENT ---- *
const topContent = document.querySelector(".top-content");
const topText = topContent.querySelectorAll(".text-content");
//---FEATURES 
//h4
topText[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
//p
topText[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];

//---ABOUT 
//h4
topText[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
//p
topText[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];


//* ---- MIDDLE-CONTENT ---- *
const bottomCont = document.querySelector(".bottom-content");
const bottomText = bottomCont.querySelectorAll(".text-content")

//---SERVICES 
// h4
bottomText[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];

// p
bottomText[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];

//---PRODUCT 
// h4
bottomText[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];

// p
bottomText[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];

//---VISION 
// h4
bottomText[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];

// p
bottomText[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];


//* ---- CONTACT ---- *

const contact = document.querySelector("section.contact");
// //console.log(contact);

//h4
//*because contact is an array-like object, we can access the children inside with index #'s
contact.children[0].textContent = siteContent.contact["contact-h4"];
//*in english...
//*variable "contact" will use .children to access item (0 index)
//* .textContent adds/alters text
//*instead of .textContent = "string", we use object dot notation to access a value
//*siteContent (an obj) --> has item called "contact" (another obj) --> 
//*"contact-h4" holds the value we want to access

// ? What's another way to write out contact fn ^ ?
//*contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

//address
contact.children[1].textContent = siteContent.contact.address;

//phone
contact.children[2].textContent = siteContent.contact.phone;

//email
contact.children[3].textContent = siteContent.contact.email;

//* ---- FOOTER ---- *
const footerLink = document.querySelector("footer a");
////console.log(footerLink);
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");

//  ¯\_(ツ)_/¯