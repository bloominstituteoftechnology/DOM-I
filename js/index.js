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
    "h1": "DOM<br/>Is<br/>Awesome",
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
let something = ['features', 'about', 'services', 'product', 'vision', 'contact', 'address', 'phone', 'email'];
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//let ctaTextEL = document.querySelector('.cta-text');
//console.log(ctaTextEl);
let ctaTextEl = document.querySelector('h1');
 //console.log(ctaTextEl);
// //ctaTextEl.textContent = "";
ctaTextEl.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
//console.log(ctaButton.textContent);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let thisVar = document.querySelectorAll(".text-content");
for (let i = 0; i < thisVar.length; i++){
  //console.log(thisVar[i].firstElementChild);
  let j = something[i];
  //something = siteContent["main-content"][i];
  //console.log(something);
  thisVar[i].firstElementChild.textContent = siteContent["main-content"][j+"-h4"];
  thisVar[i].lastElementChild.textContent = siteContent["main-content"][j+"-content"];
}

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navItems = document.getElementsByTagName("a");
const navA = document.querySelector("nav");
//console.log(navItems);
for (let i = 0; i<navItems.length; i++){
  //console.log(siteContent["nav"]["nav-item-"+i]);
  navItems[i].innerHTML = siteContent["nav"]["nav-item-"+(i+1)];
  navItems[i].style.color = "green";
};
let navApp = document.createElement("a");
navApp.href = "#";
navApp.textContent = "end";
// console.log(navApp);
// console.log(navA);
navA.appendChild(navApp);
let navPre = document.createElement('a');
navPre.href = "#";
navPre.textContent = "start";
navA.prepend(navPre);

const contacts = document.getElementsByClassName("contact");
console.log(contacts);
// for (let i=1; i<contacts.length; i++){
//   contactJ = something[i+5];
//   console.log(contactJ);
//   contacts[i].textContent = siteContent["contact"][contactJ];
// }
let j = something[5];
contacts[0].textContent = siteContent["contact"][j+"-h4"];
const newAd = document.createElement("p");
newAd.innerHTML = siteContent["contact"][something[6]];
contacts[0].appendChild(newAd);
const newP = document.createElement("p");
newP.innerHTML = siteContent["contact"][something[7]];
contacts[0].appendChild(newP);
const newEM = document.createElement("p");
newEM.innerHTML = siteContent["contact"][something[8]];
contacts[0].appendChild(newEM);
// for (let i = 0; i < 3; i++){
//   let j = something[i+6];
//   console.log(newP);
//   console.log("in newP where i="+i+" and j is "+j);
// }
console.log(contacts);

// let contactP = document.getElementsByTagName(".contact p");
// for (let i = 0; i < contactP.length; i++){
//   let j = something[i+6];
//   contactP[i].innerHTML = siteContent["contact"][j];
// }

let paragraphs = document.getElementsByTagName("p");
//console.log(paragraphs);

let closingText = document.querySelector("footer");
closingText.textContent = siteContent["footer"]["copyright"];
