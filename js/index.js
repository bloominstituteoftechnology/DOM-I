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

// nav bar
const nav = document.querySelectorAll("nav a");
console.log(nav);
nav.forEach(function(item, index) {
  item.textContent = siteContent['nav'][`nav-item-${index +1}`]
});

const navAdd1 = document.createElement('a');
navAdd1.href = "#";
navAdd1.textContent = "Custom";
navAdd1.style.color = "green";
console.log(navAdd1);

const navAdd2 = document.createElement('a');
navAdd2.href= "#";
navAdd2.textContent = "Social";
navAdd2.style.color = "green";


const navBar = document.querySelector('nav');
console.log(navBar);
navBar.prepend(navAdd1);
navBar.appendChild(navAdd2);

nav.forEach(item => item.style.color = "green");


const h1 = document.querySelector('h1');
console.log(h1);
h1.textContent = siteContent["cta"]["h1"];

const button = document.getElementsByTagName('button')
console.log(button[0]);
button[0].textContent = siteContent["cta"]["button"];

const codeSnippet = document.getElementById('cta-img');
codeSnippet.setAttribute('src', siteContent['cta']['img-src']);

const contentHeaders = document.getElementsByTagName('h4');
console.log(contentHeaders);
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

const mainText = document.querySelectorAll('.text-content p');
const paragraphs = ['features', 'about', 'services', 'product', 'vision'];
console.log(mainText);
for (let i in mainText) {
  mainText[i].textContent = siteContent["main-content"][`${paragraphs[i]}-content`]
}

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactHeadline = document.querySelector('.contact h4')
console.log(contactHeadline);
contactHeadline.textContent = siteContent['contact']['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');
console.log(contactContent);

contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
