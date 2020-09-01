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

//Updates the images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src']);
let headimage = document.getElementById("cta-img");
headimage.setAttribute('src', siteContent['cta']['img-src']);
let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log(siteContent['nav']['img-src']);
//updates the main header and button
const mainheader = document.querySelector('h1');
mainheader.textContent = siteContent['cta']['h1'];
const bigbutton = document.querySelector('button');
bigbutton.textContent = siteContent['cta']['button']
//updates the h4s throughout the page
const h4s = document.getElementsByTagName('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent['contact']['contact-h4'];
//updates the paragraphs
const theipsums = document.getElementsByTagName('p');
theipsums[0].textContent = siteContent['main-content']['features-content'];
theipsums[1].textContent = siteContent['main-content']['about-content'];
theipsums[2].textContent = siteContent['main-content']['services-content'];
theipsums[3].textContent = siteContent['main-content']['product-content'];
theipsums[4].textContent = siteContent['main-content']['vision-content'];
theipsums[5].textContent = siteContent['contact']['address'];
theipsums[6].textContent = siteContent['contact']['phone'];
theipsums[7].textContent = siteContent['contact']['email'];
theipsums[8].textContent = siteContent['footer']['copyright'];
//fixes the a tags
const thelinks = document.getElementsByTagName('a');
thelinks[0].textContent = siteContent['nav']['nav-item-1'];
thelinks[1].textContent = siteContent['nav']['nav-item-2'];
thelinks[2].textContent = siteContent['nav']['nav-item-3'];
thelinks[3].textContent = siteContent['nav']['nav-item-4'];
thelinks[4].textContent = siteContent['nav']['nav-item-5'];
thelinks[5].textContent = siteContent['nav']['nav-item-6'];
//add new items to the nav
// const navbar = document.querySelector('.container nav');
// const addelement = document.createElement('a');
// addelement.href = '#'
// navbar.appendChild(addelement);
// addelement.textcontent = 'please work';
// console.log(navbar);
const navBar = document.querySelector(".container nav");
const addElement = document.createElement("a");
addElement.href = "#";
addElement.textContent = "It works!";
navBar.appendChild(addElement);
console.log(navBar);
const addElement2 = document.createElement("a");
addElement2.href = "#";
addElement2.textContent = "not a scam link";
navBar.prepend(addElement2);
console.log(navBar);


//changing the nav color to green
const navchange = document.getElementsByTagName('a');
for(let i = 0; i < navchange.length;i++){
  navchange[i].style.color = 'green';
}