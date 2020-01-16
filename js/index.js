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

const navSection = document.querySelectorAll("a");
// navSection[0].textContent = siteContact["nav"]["nav-item-1"]
navSection[0].textContent = siteContent["nav"]["nav-item-1"];
navSection[1].textContent = siteContent["nav"]["nav-item-2"];
navSection[2].textContent = siteContent["nav"]["nav-item-3"];
navSection[3].textContent = siteContent["nav"]["nav-item-4"];
navSection[4].textContent = siteContent["nav"]["nav-item-5"];
navSection[4].textContent = siteContent["nav"]["nav-item-6"];




const headline = document.querySelector('h1');
headline.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];

const image = document.querySelector('#cta-img');
image.src = siteContent["cta"]["img-src"];

const firstHeadline = document.querySelectorAll('.top-content .text-content h4');
firstHeadline[0].textContent = siteContent["main-content"]["features-h4"];
firstHeadline[1].textContent = siteContent["main-content"]["about-h4"];


const topParagraphs = document.querySelectorAll('.top-content .text-content p');
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];



const middleImage = document.querySelector('.middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];



const bttmContent = document.querySelectorAll('.bottom-content .text-content h4');
bttmContent[0].textContent = siteContent["main-content"]["services-h4"];
bttmContent[1].textContent = siteContent["main-content"]["product-h4"];
bttmContent[2].textContent = siteContent["main-content"]["vision-h4"];


const bttmParagraphs = document.querySelectorAll('.bottom-content .text-content p');
bttmParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bttmParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bttmParagraphs[2].textContent = siteContent["main-content"]["vision-content"];





const contactHeadline = document.querySelector('.contact h4');
contactHeadline.textContent = siteContent["contact"]["contact-h4"];
const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];
