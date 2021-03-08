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

// MVP
// Create selectors by using any of the DOM element's methods

// let navItems = ['Services', 'Product', 'Vision', 'Features', ];
const navItems = document.querySelectorAll('nav > a');
// console.log(navItems);
let itemArray = Array.from(navItems);


// console.log(firstItem.textContent);
let firstItem = itemArray[0];
firstItem.textContent = "Services";
// console.log(firstItem)
let secondItem = itemArray[1];
secondItem.textContent = "Product";
let thirdItem = itemArray[2];
thirdItem.textContent = "Vision";
let fourthItem = itemArray[3];
fourthItem.textContent = "Features";
let fifthItem = itemArray[4];
fifthItem.textContent = "About";
let sixthItem = itemArray[5];
sixthItem.textContent = "Contact";


// console.log(itemArray);

// ??? I thought we couldn't use Array methods on HTML Collections and Nodelists???

// navItems.forEach(function(item){
//   console.log(item);
// })

// let item = document.getElementById("logo-img");
// console.log(item);

// let h1 = document.getElementsByClassName('cta-text');

// let div = document.querySelector('section.cta');

const h1 = document.querySelector('h1');
// let h1 = document.getElementById()

h1.innerHTML = siteContent["cta"]["h1"];


const button = document.querySelector('.cta-text button');
// console.log(button.innerHTML);
button.textContent = 'Get Started';

// console.log(siteContent["cta"]["h1"]);

// querySelectors and Bracket Notation

// ??? why am I getting undefined for the childNodes here???
// console.log(h1.childNodes);
// console.log(h1);

const cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);
// console.log(cta);

const topContent = document.querySelector('.top-content');
// topContent[0][0].textContent = siteContent["main-content"]["features-h4"];

const firstTop = topContent.childNodes[1];
const secondTop = topContent.childNodes[3];

firstTop.children[0].textContent = siteContent["main-content"]["features-h4"];
firstTop.children[1].textContent = siteContent["main-content"]["features-content"];

secondTop.children[0].textContent = siteContent["main-content"]["about-h4"];
secondTop.children[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelector('.bottom-content');
// console.log(bottomContent.childNodes);

const firstBottom = bottomContent.childNodes[1];
const secondBottom = bottomContent.childNodes[3];
const thirdBottom = bottomContent.childNodes[5]

firstBottom.children[0].textContent = siteContent["main-content"]["services-h4"];
firstBottom.children[1].textContent = siteContent["main-content"]["services-content"];

secondBottom.children[0].textContent = siteContent["main-content"]["product-h4"];
secondBottom.children[1].textContent = siteContent["main-content"]["product-content"];

thirdBottom.children[0].textContent = siteContent["main-content"]["vision-h4"];
thirdBottom.children[1].textContent = siteContent["main-content"]["vision-content"];