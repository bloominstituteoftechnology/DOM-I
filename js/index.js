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
    "address" : "123 Way 456 Street \nSomewhere, USA",
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
const navigation = document.querySelector("nav");


const appendLink = document.createElement("a");
const prependLink = document.createElement("a");

appendLink.href = "#";
prependLink.href = "#";
prependLink.textContent = "FirstLink";
appendLink.textContent = "LastLink";
prependLink.style.color = 'green';
appendLink.style.color = 'green';

const navElements = document.querySelectorAll("a");
navElements.forEach( element => element.style.color = 'green');
console.log(navElements);
navigation.prepend(prependLink);
navigation.append(appendLink);

navElements.forEach( (element, index) => element.textContent = 
Object.values(siteContent.nav)[index]);

// Iterate through siteContent.nav and add text content
// for(let i = 0; i < navElements.length; i++) {
//   navElements[i].textContent = Object.values(siteContent.nav)[i];
// }
// navElements[0].textContent = siteContent.nav["nav-item-1"];

const h1Tag = document.getElementsByTagName("h1");
h1Tag[0].textContent = siteContent.cta.h1;

const topImage = document.querySelector('#cta-img');
topImage.setAttribute('src', siteContent["cta"]["img-src"]);

const getStartedButton = document.getElementsByTagName("button");
getStartedButton[0].textContent = siteContent.cta.button;

const h4Tag = document.getElementsByTagName("h4");
h4Tag[0].textContent = siteContent["main-content"]["features-h4"];
h4Tag[1].textContent = siteContent["main-content"]["about-h4"];
h4Tag[2].textContent = siteContent["main-content"]["services-h4"];
h4Tag[3].textContent = siteContent["main-content"]["product-h4"];
h4Tag[4].textContent = siteContent["main-content"]["vision-h4"];
h4Tag[5].textContent = siteContent["contact"]["contact-h4"];

const paragraphContent = document.getElementsByTagName("p");
paragraphContent[0].textContent = siteContent["main-content"]["features-content"];
paragraphContent[1].textContent = siteContent["main-content"]["about-content"];
paragraphContent[2].textContent = siteContent["main-content"]["services-content"];
paragraphContent[3].textContent = siteContent["main-content"]["product-content"];
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"];
paragraphContent[5].textContent = siteContent["contact"]["address"];
paragraphContent[6].textContent = siteContent["contact"]["phone"];
paragraphContent[7].textContent = siteContent["contact"]["email"];
paragraphContent[8].textContent = siteContent["footer"]["copyright"];

const centerImage = document.querySelector('#middle-img');
centerImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




// const appendLink = document.createElement("a");
// const prependLink = document.createElement("a");

// const navigation = document.querySelector("nav");
// appendLink.href = "#";
// prependLink.href = "#";
// prependLink.textContent = "Linkadoodledoo";
// appendLink.textContent = "LinkasaurusRex";
// navigation.prepend(prependLink);
// navigation.append(appendLink);

// navigation.children.forEach( element => element.style.color = 'green');