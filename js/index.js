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

//accepts an array of elements and iterates through arr and object, setting obj text content and appending t oparent
function updateElementsTextContent (arr, obj) {
  let keyArr = Object.keys(obj);
  for (let i in arr) {
    arr[i].textContent = obj[keyArr[i]];
  }
}

//Populate nav;
const navAnchorNodeList = document.querySelectorAll('nav a');
const navAnchorArr = Array.from(navAnchorNodeList);
navAnchorArr.splice(navAnchorArr.length-1, 1); //remove img from array
updateElementsTextContent (navAnchorArr, siteContent.nav);

const ctaTextNodeList = document.querySelectorAll ('.cta-text *')
const ctaTextArr = Array.from(ctaTextNodeList);
updateElementsTextContent (ctaTextArr, siteContent.cta);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

const topContentTextNodeList = document.querySelectorAll('.top-content div *');
const topContentTextArr = Array.from(topContentTextNodeList);
const bottomContentTextNodeList = document.querySelectorAll('.bottom-content div *');
const bottomContentTextArr = Array.from(bottomContentTextNodeList);
const middleContentTextArr = topContentTextArr.concat(bottomContentTextArr);

const mainContentObjCopy = Object.assign({}, siteContent["main-content"]);
delete mainContentObjCopy["middle-img-src"];

updateElementsTextContent(middleContentTextArr, mainContentObjCopy);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactTextNodeList = document.querySelectorAll(".contact *");
const contactTextArray = Array.from(contactTextNodeList);
updateElementsTextContent(contactTextArray, siteContent.contact);

const footerTextNodeList = document.querySelectorAll("footer *");
const footerTextArray = Array.from(footerTextNodeList);
updateElementsTextContent(footerTextArray, siteContent.footer);


// updateElementsTextContent(bottomContentTextArr, siteContent["main-content"].)




