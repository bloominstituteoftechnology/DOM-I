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
logo.setAttribute('src', siteContent.nav["img-src"]);

// Set text content in each href

//+++++++++++++++++++++++++++++++++++++
//Long way with Node List as an Array - HELPME

// const navA = document.querySelectorAll('nav a');
// console.log(navA);
// navA[0].setAttribute(`a.textContent`, siteContent.nav['nav-item-1']);
// navA[1].setAttribute(`a.textContent`, siteContent.nav[`nav-item-2`]);
// navA[2].setAttribute(`a.textContent`, siteContent.nav[`nav-item-3`]);
// navA[3].setAttribute('a.textContent', siteContent.nav["nav-item-4"]);
// navA[4].setAttribute('a', siteContent.nav["nav-item-5"]);
// navA[5].setAttribute('a', siteContent.nav["nav-item-6"]);
// console.log(navA[2]);

// navA.forEach((element) => {
//   element.style.color = 'green';
// });

// const a = document.querySelectorAll('a');
// a.forEach((element) => {
//   element.style.color = 'green';
// });

// const hrefs = document.querySelectorAll('href');
// hrefs.forEach((element) => {
//   element.style.color = 'green';
// });

//+++++++++++++++++++++++++++++++++++++++++++++
//Long way with Real Array - GET HELP HELPME

// const navA = document.querySelectorAll('nav a');
// console.log(navA);
// const realArrayOfNavA = Array.from(navA);
// console.log(realArrayOfNavA);
// realArrayOfNavA[0].setAttribute('href', siteContent.nav["nav-item-1"]);
// realArrayOfNavA[1].setAttribute('href', siteContent.nav["nav-item-2"]);
// realArrayOfNavA[2].setAttribute('href', siteContent.nav["nav-item-3"]);
// realArrayOfNavA[3].setAttribute('href', siteContent.nav["nav-item-4"]);
// realArrayOfNavA[4].setAttribute('href', siteContent.nav["nav-item-5"]);
// realArrayOfNavA[5].setAttribute('href', siteContent.nav["nav-item-6"]);
// console.log(realArrayOfNavA[2]);
// realArrayOfNavA.forEach((element) => {
//   element.style.color = 'green';
// });
// const hrefs = document.querySelectorAll('href');
// hrefs.forEach((element) => {
//   element.style.color = 'green';
// });
// const a = document.querySelectorAll('a');
// a.forEach((element) => {
//   element.style.color = 'green';
// });
// navA.forEach((element) => {
//   element.style.color = 'green';
// });

//++++++++++++++++++++++++++++++++++++++
//Short Way 

//1 create array of elements
const navA = document.querySelectorAll('nav a');
console.log(navA);
// //2 loop through each and assign text from data supplied from JSON (above)
for (let i = 0; i<navA.length; i++){
  navA[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}
console.log(navA[3]);

//Change color of supplied text
//with standard loop
// for(let i=0; i<navA.length; i++){
//   navA[i].style.color = 'green';
// }
// with forEach
navA.forEach((element) => {
  element.style.color = 'green';
});

//======================================
//Add to Nav 

//+++++++++++++++++
//prepend with "Home"

//Step 1 isolate the nav section
const nav = document.querySelector('nav');
console.log(nav);
//Step 2 creat a new anchor tag
const newNav = document.createElement('a');
console.log(newNav);
//Step 3 build out the anchor tag to match others
newNav.textContent = "Home";
newNav.href = "#";
newNav.style.color = "green";
//Step 4 add it to the front of the nav section
nav.prepend(newNav);

//+++++++++++++++++
//Append with "Other"
const newNav2 = document.createElement('a');
newNav2.textContent = "Other";
newNav2.href = "#";
newNav2.style.color = "green";
nav.append(newNav2);



//====================================
//CTA section

//cta image
const cta = document.getElementById('cta-img');
console.log(cta);
cta.setAttribute('src', siteContent.cta['img-src']);

//cta "h1": "DOM Is Awesome"
const h1 = document.querySelector('h1');
// console.log(h1);
h1.textContent = siteContent.cta.h1;
console.log(h1);

//cta "button": "Get Started",
const ctaButton = document.querySelector('button');
console.log(ctaButton);
ctaButton.textContent = siteContent.cta.button;

//==================================
//Top Content

// const topContent = querySelectorAll();