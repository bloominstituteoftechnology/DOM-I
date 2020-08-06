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

//header and nav 
const aSelect = document.querySelectorAll('a');
console.log(aSelect);

aSelect[0].textContent = siteContent["nav"]["nav-item-1"];
aSelect[1].textContent = siteContent["nav"]["nav-item-2"];
aSelect[2].textContent = siteContent["nav"]["nav-item-3"];
aSelect[3].textContent = siteContent["nav"]["nav-item-4"];
aSelect[4].textContent = siteContent["nav"]["nav-item-5"];
aSelect[5].textContent = siteContent["nav"]["nav-item-6"];

aSelect.forEach((colorA) => {
  colorA.style.color = 'green'
});

// banner middle with button
const myOne = document.querySelector(".cta-text h1");
myOne.innerHTML = ("DOM <br> IS <br> AWESOME")

const myButton = document.querySelector(".cta-text button");

console.log(myButton);

myButton.textContent = siteContent["cta"]["button"]

//middle section top content h4

const middleImg1 = document.getElementById("cta-img");
console.log(middleImg1)
middleImg1.setAttribute('src', siteContent["cta"]["img-src"]);

const topFour = document.querySelectorAll(".top-content h4");


topFour[0].textContent = siteContent["main-content"]["features-h4"]


topFour[1].textContent = siteContent["main-content"]["about-h4"]

//middle content top part p

const paraTop = document.querySelectorAll(".top-content p");
console.log(paraTop);

paraTop[0].textContent = siteContent["main-content"]["features-content"];

paraTop[1].textContent = siteContent["main-content"]["about-content"];

//img middle part

const middleImg = document.getElementById("middle-img");

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// middle content bottom part h4 

const bottomH4 = document.querySelectorAll(".bottom-content h4");

bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

//middle content bottom part p

const bottomP = document.querySelectorAll(".bottom-content p");
console.log(bottomP);

bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

//contact 
const contactLast1 = document.querySelectorAll(".contact h4");

contactLast1[0].textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll(".contact p");

contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//footer 

const foot = document.querySelectorAll("footer");

foot[0].textContent = siteContent["footer"]["copyright"];


// new items

const newItem = document.createElement('a');
newItem.textContent = "More";

const addItem = document.querySelector("nav");
addItem.appendChild(newItem);

newItem.style.color = 'green';

const newItem2 = document.createElement('a');
newItem2.textContent = "Log in";

const addItem2 = document.querySelector("nav");
addItem2.prepend(newItem2);

addItem2.style.color = 'green';

newItem2.style.color = 'green';

