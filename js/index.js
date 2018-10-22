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

// Navbar
const nav = document.querySelectorAll('a');


for(let i = 0; i < nav.length; i++){
  nav[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  nav[i].style.color = "green";
}
// Set new navbar attributes
const newElement = document.createElement('a');
newElement.href = "#";
newElement.textContent = "Jasmine";

const topNav = document.querySelector('nav');
// Add new navbar element 
topNav.prepend(newElement);

const newElement2 = document.createElement('a');
newElement2.href = "#";
newElement2.textContent = "Anderson";

topNav.appendChild(newElement2);


const selectH1 = document.querySelector('h1');
selectH1.innerHTML = siteContent["cta"]["h1"];

const buttonText = document.querySelector('button');
buttonText.textContent = 'Get Started';

const ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);

// Website content 
const selectAllHeaderText = document.querySelectorAll('h4');
selectAllHeaderText[0].textContent = siteContent['main-content']['features-h4'];
selectAllHeaderText[1].textContent = siteContent['main-content']['about-h4'];
selectAllHeaderText[2].textContent = siteContent['main-content']['services-h4'];
selectAllHeaderText[3].textContent = siteContent['main-content']['product-h4'];
selectAllHeaderText[4].textContent = siteContent['main-content']['vision-h4'];
selectAllHeaderText[5].textContent = siteContent['contact']['contact-h4'];

const selectAllContent = document.querySelectorAll('p');
selectAllContent[0].textContent = siteContent['main-content']['features-content'];
selectAllContent[1].textContent = siteContent['main-content']['about-content'];
selectAllContent[2].textContent = siteContent['main-content']['services-content'];
selectAllContent[3].textContent = siteContent['main-content']['product-content'];
selectAllContent[4].textContent = siteContent['main-content']['vision-content'];
selectAllContent[5].innerHTML = siteContent['contact']['address'];
selectAllContent[6].textContent = siteContent['contact']['phone'];
selectAllContent[7].textContent = siteContent['contact']['email'];
selectAllContent[8].textContent = siteContent['footer']['copyright'];


// Middle IMG
const selectMiddleIMG = document.querySelector('.middle-img');
selectMiddleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Stretch Goal 
for(let i = 0; selectAllContent.length; i++){
 selectAllContent[i].style.color = "lightblue";
 }

 




 


