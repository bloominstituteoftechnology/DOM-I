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

const links = document.getElementsByTagName('a');
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

const mainImg = document.getElementById('cta-img');
mainImg.src = siteContent.cta["img-src"];

const headline = document.querySelector('div.cta-text');
const hOne = document.createElement('h1');
hOne.innerHTML = "DOM<br>is<br>Awesome"; // Unable to use siteContent as is AND include the breaks?
headline.prepend(hOne);

const mainButton = document.getElementsByTagName('button');
mainButton[0].textContent = "Change Navigation Link Color"; // mainButton[0] Stretch Goal Button
mainButton[0].style.padding = "8px";
mainButton[0].style.margin = "12px";
mainButton[1].textContent = siteContent.cta["button"]; // mainButton[1] Get Started Button

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const subHeadings = document.getElementsByTagName('h4');
subHeadings[0].textContent = siteContent["main-content"]["features-h4"];
subHeadings[1].textContent = siteContent["main-content"]["about-h4"];
subHeadings[2].textContent = siteContent["main-content"]["services-h4"];
subHeadings[3].textContent = siteContent["main-content"]["product-h4"];
subHeadings[4].textContent = siteContent["main-content"]["vision-h4"];

const para = document.getElementsByTagName('p');
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];

subHeadings[5].textContent = siteContent["contact"]["contact-h4"];

para[5].textContent = siteContent["contact"]["address"];
para[5].innerHTML = "123 Way 456 Street<br>Somewhere, USA"; // In order to add break
para[6].textContent = siteContent["contact"]["phone"];
para[7].textContent = siteContent["contact"]["email"];
para[8].textContent = siteContent["footer"]["copyright"];

const navigation = document.querySelectorAll("nav a");
navigation[0].style.color = "darkGreen";
navigation[1].style.color = "darkGreen";
navigation[2].style.color = "darkGreen";
navigation[3].style.color = "darkGreen";
navigation[4].style.color = "darkGreen";
navigation[5].style.color = "darkGreen";

const addNavLinks = document.querySelector("nav");
const newLinkOne = document.createElement('a');
const newLinkTwo = document.createElement('a');
newLinkOne.textContent = "First Item";
newLinkOne.href = "#";
newLinkOne.style.color = "darkGreen";
newLinkTwo.textContent = "Last Item";
newLinkTwo.href = "#";
newLinkTwo.style.color = "darkGreen";
addNavLinks.prepend(newLinkOne);
addNavLinks.appendChild(newLinkTwo);

// STRETCH GOAL

function changeColor() {
  navigation[0].style.color = "darkBlue";
  navigation[1].style.color = "darkBlue";
  navigation[2].style.color = "darkBlue";
  navigation[3].style.color = "darkBlue";
  navigation[4].style.color = "darkBlue";
  navigation[5].style.color = "darkBlue";
  newLinkOne.style.color = "darkBlue";
  newLinkTwo.style.color = "darkBlue";
}

// END STRETCH GOAL