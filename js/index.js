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

// Nav Items

const navElements = document.querySelectorAll('a');
navElements.forEach(item => item.style.color = 'green');
navElements[0].innerText = "Services";
navElements[1].innerText = "Product";
navElements[2].innerText = "Vision";
navElements[3].innerText = "Features";
navElements[4].innerText = "About";
navElements[5].innerText = "Contact";

const navigation = document.querySelector('nav');
console.log(navigation);

const newAnchor1 = document.createElement('a');
newAnchor1.innerText = 'Beginning';
newAnchor1.style.color = 'green';
const newAnchor2 = document.createElement('a');
newAnchor2.innerText = 'End';
newAnchor2.style.color = 'green';

navigation.prepend(newAnchor1);

navigation.append(newAnchor2);


const headerElements = document.querySelector('h1');
headerElements.innerText = 'DOM\n Is\n Awesome';
// console.log(headerElements);

const buttonElement = document.querySelector('button');
buttonElement.innerText = 'Get Started';

let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"])

const mainContent = document.querySelectorAll('h4');
mainContent[0].innerText = "Features";
mainContent[1].innerText = "About";
mainContent[2].innerText = "Services";
mainContent[3].innerText = "Product";
mainContent[4].innerText = "Vision";
mainContent[5].innerText = "Contact";

const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
paragraphs[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[2].innerText = "Services_ content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[3].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
paragraphs[4].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactMe = document.querySelectorAll('.contact p ');
// console.log(contactMe);
contactMe[0].innerText = '123 Way 456 Street Somewhere, USA';
contactMe[1].innerText = '1 (888) 888-8888';
contactMe[2].innerText = 'sales@greatidea.io';


const endOfPage = document.querySelectorAll('footer p');
// console.log(endOfPage);
endOfPage[0].innerText = "Copyright Great Idea! 2018"