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
    "h1": "DOM is Awesome",
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
// Constants to access page elements
const nav = document.getElementsByTagName(`nav`);
const main = document.getElementsByClassName(`main-content`).item(0);

// Function to fill out the nav
(function(content){
  let navItems = Array.from(nav.item(0).children);
  let navContent = Object.values(content);
  navItems.forEach(function(element, i){element.textContent = navContent[i]});
})(siteContent.nav);

// cta section
// Function to fill in cta
(function(content){
  let ctaText = document.getElementsByClassName(`cta-text`);
  ctaText = ctaText.item(0).children;
  spaceToLineBreak(ctaText.item(0), content.h1);
  ctaText.item(1).textContent = content.button;
  let ctaImage = document.getElementById(`cta-img`);
  ctaImage.setAttribute(`src`, content["img-src"]);
})(siteContent.cta);

// Function to split text elements into multiple lines
function spaceToLineBreak(element, insertText){
  element.innerHTML = ``;
  let lines = insertText.split(` `);
  for (let i in lines){
    element.appendChild(document.createTextNode(lines[i]));
    element.appendChild(document.createElement(`br`));
  }
}

// Function to fill in text of 2 selectors at once
function fillDoubleText(element, text1, text2, selector1, selector2){
  let temp = element.getElementsByTagName(selector1).item(0);
  temp.textContent = text1;
  temp = element.getElementsByTagName(selector2).item(0);
  temp.textContent = text2;
}

// Arrow function to fill in main-content
const fillMain = content => {
  let currentContent = main.getElementsByClassName(`top-content`);
  let textContent = currentContent.item(0).getElementsByClassName(`text-content`);
  fillDoubleText(textContent.item(0), content[`features-h4`], content[`features-content`], `h4`, `p`);
  fillDoubleText(textContent.item(1), content[`about-h4`], content[`about-content`], `h4`, `p`);
  main.getElementsByClassName(`middle-img`).item(0).setAttribute(`src`, content[`middle-img-src`]);
  currentContent = main.getElementsByClassName(`bottom-content`);
  textContent = currentContent.item(0).getElementsByClassName(`text-content`);
  fillDoubleText(textContent.item(0), content[`services-h4`], content[`services-content`], `h4`, `p`);
  fillDoubleText(textContent.item(1), content[`product-h4`], content[`product-content`], `h4`, `p`);
  fillDoubleText(textContent.item(2), content[`vision-h4`], content[`vision-content`], `h4`, `p`);
}

// Function to fill contact
(function(content){
  let valueArray = Object.values(content);
  let workArea = Array.from(document.getElementsByClassName(`contact`).item(0).children);
  for (let i in valueArray){workArea[i].textContent = valueArray[i];};
})(siteContent.contact);

// Function invocations
fillMain(siteContent["main-content"]);

// Function to change the color of the header text and append new items
(function(content){
  let workArea = document.getElementsByTagName(`nav`).item(0);
  workArea.appendChild(document.createElement(`a`)).setAttribute(`href`, `#`);
  workArea.lastChild.textContent = `Forum`;
  let preElem = document.createElement(`a`);
  preElem.textContent = `Corporate`;
  preElem.setAttribute(`href`, `#`);
  workArea.prepend(preElem);
  workArea = workArea.getElementsByTagName(`a`);
  for (let i = 0; i < workArea.length; i++){
    workArea.item(i).style.color = `green`;
  };
})(siteContent.nav);