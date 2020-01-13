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

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const headerNav = document.querySelectorAll('a');
headerNav[0].textContent = siteContent.nav['nav-item-1']
headerNav[1].textContent = siteContent.nav['nav-item-2']
headerNav[2].textContent = siteContent.nav['nav-item-3']
headerNav[3].textContent = siteContent.nav['nav-item-4']
headerNav[4].textContent = siteContent.nav['nav-item-5']
headerNav[5].textContent = siteContent.nav['nav-item-6']

const h1 = document.querySelector('h1');
h1.textContent = "DOM Is Awesome";

const button = document.querySelector('button');
button.textContent = "Get Started";

const newH4 = document.querySelectorAll('h4');
newH4[0].textContent= siteContent['main-content']['features-h4']
newH4[1].textContent= siteContent['main-content']['about-h4']
newH4[2].textContent= siteContent['main-content']['services-h4']
newH4[3].textContent= siteContent['main-content']['product-h4']
newH4[4].textContent= siteContent['main-content']['vision-h4']
newH4[5].textContent= siteContent['contact']['contact-h4']

const newP = document.querySelectorAll('p');
newP[0].textContent = siteContent['main-content']['features-content']
newP[1].textContent = siteContent['main-content']['about-content']
newP[2].textContent = siteContent['main-content']['services-content']
newP[3].textContent = siteContent['main-content']['product-content']
newP[4].textContent = siteContent['main-content']['vision-content']
newP[5].textContent = siteContent['contact']['address']
newP[6].textContent = siteContent['contact']['phone']
newP[7].textContent = siteContent['contact']['email']
newP[8].textContent = siteContent['footer']['copyright']

headerNav.forEach(element =>{
  element.style.color = "green";
})

const navBox = document.querySelector('nav');
const newContent = document.createElement ('a');

newContent.textContent = "Hello";
navBox.appendChild(newContent)

const newLink2 = document.createElement('a')
newLink2.textContent = "Again"

navBox.prepend(newLink2)

const headerNav2 = document.querySelectorAll('a');

headerNav2.forEach(element =>{
  element.style.color = "green";
})

const myFoot = document.querySelector('footer');
myFoot.style.backgroundColor = "pink";


