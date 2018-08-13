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


// Navigation
const logo = document.getElementById("logo-img");
const navItem = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
let firstTag = document.createElement("a");
let secondTag = document.createElement("a");

logo.setAttribute('src', siteContent["nav"]["img-src"]);
for(i = 0; i < navItem.length; i++) { 
  navItem[i].innerText = siteContent["nav"][Object.keys(siteContent["nav"])[i]];
  navItem[i].style.color = "green";
}

firstTag.href = "#";
secondTag.href = "#";
firstTag.innerText = "HELP"; 
secondTag.innerText = "TRAPPED"; 

nav.prepend(firstTag); //Color intentionally not green for effect.
nav.appendChild(secondTag); //Color intentionally not green for effect.

// cta Section
const cta = siteContent["cta"];

const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImage = document.querySelector("#cta-img"); 

ctaH1.innerHTML = cta["h1"].split(" ").join("<br>");
ctaButton.innerText = cta["button"]; 
ctaImage.src = cta["img-src"]; 

//Stretch
let navBool = true;
const helpMe = function() {
  let color = "";
  if(navBool){
  color = "red";
  }
  navBool = !navBool;
document.querySelector("nav a:first-of-type").style.color = color;
document.querySelector("nav a:last-of-type").style.color = color;
}

ctaButton.onclick = helpMe;

// Main Content
const mainContent = siteContent["main-content"];

const mainContentH4 = document.querySelectorAll(".main-content h4"); 
const mainContentP = document.querySelectorAll(".main-content p"); 
const mainContentImg = document.querySelector("#middle-img");

mainH4Keys = Object.keys(mainContent).filter(key => key.includes("-h4"));
mainPKeys = Object.keys(mainContent).filter(key => key.includes("-content"));

for(i = 0; i < mainContentH4.length; i++) {
  mainContentH4[i].innerText = mainContent[mainH4Keys[i]];
}
for(i = 0; i < mainContentP.length; i++) {
  mainContentP[i].innerText = mainContent[mainPKeys[i]];
}
mainContentImg.src = mainContent["middle-img-src"];

// Contact
const contact = siteContent["contact"];

const contactH4 = document.querySelector(".contact h4");
const address = document.querySelector(".contact p:nth-of-type(1)");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");
const addressIndex = contact["address"].slice(0, contact["address"].lastIndexOf(" ")).lastIndexOf(" ");

contactH4.innerText = contact["contact-h4"];
address.innerHTML = contact["address"].slice(0, addressIndex) + "<br>" + contact["address"].slice(addressIndex);
phone.innerText = contact["phone"];
email.innerText = contact["email"];
// Footer

const copyright = document.querySelector("footer p");
copyright.innerText = siteContent["footer"]["copyright"];
