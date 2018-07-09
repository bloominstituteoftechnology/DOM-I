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
let ctaImg=document.querySelector('#cta-img');
ctaImg.setAttribute('src',siteContent['cta']['img-src']);
let mainImg=document.querySelector('.middle-img');
mainImg.setAttribute('src',siteContent['main-content']['middle-img-src']);

const navKeys=Object.keys(siteContent["nav"]);
let nav=document.querySelectorAll('nav a');
for (let i=0; i<nav.length; i++) {
  nav[i].innerHTML=siteContent['nav'][navKeys[i]];
  nav[i].style.color='green';
}
document.querySelector('.cta h1').innerHTML=siteContent['cta']['h1'];
document.querySelector('.cta button').innerHTML=siteContent['cta']['button'];
document.querySelector('footer p').innerHTML=siteContent['footer']['copyright'];

document.querySelector('.contact h4').innerHTML=siteContent['contact']['contact-h4'];
let contactP=document.querySelectorAll('.contact p');
let contactKeys=Object.keys(siteContent['contact']);
contactKeys.splice(0,1);
for (let i=0; i<contactP.length; i++) {
    contactP[i].innerHTML=siteContent['contact'][contactKeys[i]];
}
let mainContenth4=document.querySelectorAll('.main-content h4');
let mainContentp=document.querySelectorAll('.main-content p');
const mainContentKeys=Object.keys(siteContent['main-content']);
const mainContentHeadings=[];
const mainContentInfo=[];
for (let i=0; i<mainContentKeys.length; i++) {
  if (mainContentKeys[i].includes('h4')){
    mainContentHeadings.push(mainContentKeys[i]);
  } else if (mainContentKeys[i]!== "middle-img-src") {
    mainContentInfo.push(mainContentKeys[i]);
  }
}
for (let i=0; i<mainContenth4.length; i++) {
  mainContenth4[i].innerHTML=siteContent['main-content'][mainContentHeadings[i]];
}
for (let i=0; i<mainContentp.length; i++) {
  mainContentp[i].innerHTML=siteContent['main-content'][mainContentInfo[i]];
}
let appendNode=document.createElement('A');
let prependNode=document.createElement('A');
let appendText=document.createTextNode('Boo');
let prependText=document.createTextNode('Who');
appendNode.appendChild(appendText);
prependNode.appendChild(prependText);
document.querySelector('nav').appendChild(appendNode);
document.querySelector('nav').prepend(prependNode);
nav=document.querySelectorAll('nav a');
for (let i=0; i<nav.length; i++) {
  nav[i].style.color='green';
}

let btn=document.createElement('BUTTON');
let btnText=document.createTextNode('Press Me?');
btn.appendChild(btnText);
document.querySelector('.main-content').appendChild(btn);
btn.addEventListener("click", function(){
  document.querySelector('body').innerHTML = "<h1>Who told you to press that button?!!</h1>";
});