// const siteContent = {
//   "nav": {
//     "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//     "img-src": "img/logo.png"
//   },
//   "cta": {
//     "h1": "DOM Is Awesome",
//     "button": "Get Started",
//     "img-src": "img/header-img.png"
//   },
//   "main-content": {
//     "features-h4": "Features",
//     "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "about-h4": "About",
//     "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "middle-img-src": "img/mid-page-accent.jpg",
//     "services-h4": "Services",
//     "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "product-h4": "Product",
//     "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "vision-h4": "Vision",
//     "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   },
//   "contact": {
//     "contact-h4": "Contact",
//     "address": "123 Way 456 Street Somewhere, USA",
//     "phone": "1 (888) 888-8888",
//     "email": "sales@greatidea.io",
//   },
//   "footer": {
//     "copyright": "Copyright Great Idea! 2018"
//   },
// };

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// // REMEMBER, you can accomplish the assignment in many different ways. You could literally use getElementByTag name to accomplish everything if you wanted:

// // Update the nav links test
// let selectedNavLinks = document.querySelectorAll("nav a");
// selectedNavLinks.forEach((link, i) => {
//   link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
// })

// // Update CTA
// let ctaText = document.getElementsByClassName("cta-text")[0];

// ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
// ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

// let ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// // console.log(document.getElementsByClassName("cta")[0])

// // Update MainContent
// let textContentList = document.querySelectorAll(".text-content");

// textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
// textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
// textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
// textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
// textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
// textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
// textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
// textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
// textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
// textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

// let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// // Update Contact
// let contact = document.getElementsByClassName("contact")[0];
// contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
// contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
// contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
// contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

// // Update Footer
// let footer = document.querySelector("footer");
// footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// // Add New Content
// // Change navigation text color
// selectedNavLinks.forEach((link, i) => {
//   link.style.color = "green";
// })

// // Add two items to navigation
// selectedNavLinks = document.getElementsByTagName("nav")[0];
// let createNewNode = (name) => {
//   let newNode = document.createElement("a");
//   newNode.innerHTML = name;
//   return newNode;
// }
// selectedNavLinks.prepend(createNewNode("Extra Item 1"));
// selectedNavLinks.append(createNewNode("Extra Item 2"));

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
//images for website
const logo = document.getElementById("logo-img");
logo.src = (siteContent["nav"]["img-src"]);

const middleImage = document.getElementById('middle-img');
middleImage.src = (siteContent['main-content']['middle-img-src']);
// middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//nav nav nav nav nav nav nav nav
// ????? when do we use . in querySelector '.nav' vs no dot 'nav'??????
 let newNav = document.querySelectorAll('nav a');
 newNav.forEach((link,  i) => {
   link.textContent = siteContent.nav[`nav-item-${i + 1}`];//????why the dash, i know it breaks with out??? */
 });

// CTA CTA CTA CTA CTA CTA
const newH1 = document.querySelector('h1');
newH1.textContent = siteContent.cta.h1;

const newButton = document.querySelector('button');
newButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.src = (siteContent["cta"]["img-src"]);
//main content main content main content
let newMainContent = document.querySelectorAll('.text-content');
//????? I tried making looping over this with an array method but could not get it to work?????
newMainContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
newMainContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];
newMainContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
newMainContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];
newMainContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
newMainContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content']; 
newMainContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
newMainContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content']; 
newMainContent[4].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
newMainContent[4].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];

//contact contact contact contact
//  const newContactH4 = document.querySelector('.contact');
//  newContactH4.textContent = siteContent.contact['contact-h4'];

 let newContactInfo = document.querySelectorAll('.contact');
newContactInfo[0].getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
newContactInfo[0].getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
newContactInfo[0].getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
newContactInfo[0].getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

// let newContactInfo = [];
// let newContactItems = ['contact-h4', 'address', 'phone', 'email'];
// for (let i = 0; i < 4; i++) {
//   newContactInfo[i].textContent = siteContent['contact'][newContactItems[i]];
// };


//  console.log(NewContactItems);

//footer footer footer footer
const newFooter = document.querySelector('footer');
// console.log(siteContent.contact);
newFooter.textContent = siteContent.footer.copyright;

//Add new content nav text color to green
newNav.forEach(e => e.style.color = 'green'); 

//Add two items to navigation
newNav = document.getElementsByTagName('nav')[0];
let addNewNav = (name) => {
  let addNode = document.createElement('a');
  addNode.innerHTML = name; 
  return addNode; 
}

newNav.prepend(addNewNav('In Front'));
newNav.append(addNewNav('Behind'));
// newNav.forEach(e => e.style.color = 'green'); ???? why is this not a function here? Scope????????
