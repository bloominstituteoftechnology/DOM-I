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

// -------------------------------------------------
//for nav a items
let tagElements = document.getElementsByTagName('a');
const navStuff = siteContent["nav"];
const navKeys = Object.values(navStuff);

for(let i = 0; i < 6; i++){
  tagElements[i].innerHTML = navKeys[i];
};

// -------------------------------------------------
//for cta stuff
const cta = siteContent["cta"];
const ctaVals = Object.values(cta);
const title = document.getElementsByTagName('h1')[0];

title.innerHTML = "DOM<br>is<br>Awesome";

let bigPic = document.getElementById("cta-img");
bigPic.setAttribute('src', siteContent["cta"]["img-src"])

const bigButton = document.querySelector('button');
bigButton.innerHTML = ctaVals[1];

// -------------------------------------------------
// for mid section main content
const allH4 = document.getElementsByTagName('h4');
const mainSec = siteContent["main-content"];
const mainContent = Object.values(mainSec);

allH4[0].innerHTML = mainContent[0];
allH4[1].innerHTML = mainContent[2];

const allP = document.getElementsByTagName('p');
allP[0].innerHTML = mainContent[1]; 
allP[1].innerHTML = mainContent[3];

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//services
allH4[2].innerHTML = mainContent[5];
allP[2].innerHTML = mainContent[6]

//product
allH4[3].innerHTML = mainContent[7];
allP[3].innerHTML = mainContent[8]

//vision
allH4[4].innerHTML = mainContent[9];
allP[4].innerHTML = mainContent[10]

// ----------------------------------------------------
//for lower content
const Contact = siteContent["contact"];
const contVals = Object.values(Contact);

allH4[5].innerHTML = contVals[0];
allP[5].innerHTML = "123 Way 456 Street<br> Somewhere, USA"

allP[6].innerHTML = contVals[2];

allP[7].innerHTML = contVals[3]

allP[8].innerHTML = siteContent["footer"]["copyright"];

// ----------------------------------------------------
// for adding changing content

// Utilize .appendChild() and .prepend() to add two 
// new items to the navigation system. 
// You can call them whatever you want.
mainNav = document.querySelector('nav');
const aLast = document.createElement('a');
aLast.innerText = "Hot Dogs!";
mainNav.appendChild(aLast);

const aFirst = document.createElement('a');
aFirst.innerText = "Brownies";
mainNav.prepend(aFirst);

// Change the color of the navigation text to be green.
for (let i = 0; i < tagElements.length; i++){
  tagElements[i].style.color = "green";
}






