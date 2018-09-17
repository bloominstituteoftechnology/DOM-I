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
    "address" : "123 Way 456 Street" + "\n" + "Somewhere,  USA",
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

// nav
const links = document.querySelectorAll('a');
links[0].innerText = siteContent["nav"]["nav-item-1"];
links[1].innerText = siteContent["nav"]["nav-item-2"];
links[2].innerText = siteContent["nav"]["nav-item-3"];
links[3].innerText = siteContent["nav"]["nav-item-4"];
links[4].innerText = siteContent["nav"]["nav-item-5"];
links[5].innerText = siteContent["nav"]["nav-item-6"];

links[0].style.color = 'green';
links[1].style.color = 'green';
links[2].style.color = 'green';
links[3].style.color = 'green';
links[4].style.color = 'green';
links[5].style.color = 'green';

const nav = document.querySelector('nav');
const aElement = document.createElement('a');
nav.prepend(aElement);

aElement.innerText = "Blog";
aElement.href = 'https://google.com';

const aElement2 = document.createElement('a');
nav.appendChild(aElement2);
aElement2.innerText = "Forum";
aElement2.href = 'https://google.com';
aElement.style.color = "green";
aElement2.style.color = "green";


// cta
const ctah1 = document.querySelector('.cta-text h1');
ctah1.innerText = siteContent['cta']['h1'];
const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerText = siteContent['cta']['button'];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// features
const textContent = document.querySelectorAll('.top-content .text-content h4');
textContent[0].innerText = siteContent['main-content']['features-h4'];
const textContentP = document.querySelectorAll('.text-content p');
textContentP[0].innerText = siteContent['main-content']['features-content'];

// about
textContent[1].innerText = siteContent['main-content']['about-h4'];
textContentP[1].innerText = siteContent['main-content']['about-content'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// services
const textContent2 = document.querySelectorAll('.bottom-content .text-content h4');
textContent2[0].innerText = siteContent['main-content']['services-h4'];
const textContentP2 = document.querySelectorAll('.bottom-content .text-content p');
textContentP2[0].innerText = siteContent['main-content']['services-content'];

// product
textContent2[1].innerText = siteContent['main-content']['product-h4'];
textContentP2[1].innerText = siteContent['main-content']['product-content'];

// vision
textContent2[2].innerText = siteContent['main-content']['vision-h4'];
textContentP2[2].innerText = siteContent['main-content']['vision-content'];

// contact
const contact = document.querySelectorAll('.contact h4');
contact[0].innerText = siteContent['contact']['contact-h4'];
const contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent['contact']['address'];
contactP[1].innerText = siteContent['contact']['phone'];
contactP[2].innerText = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];

const buttonElement = document.createElement('button');
footer.appendChild(buttonElement);
buttonElement.innerText = "Update";
buttonElement.style.marginLeft = "20px";
buttonElement.onclick = "refreshPage()";

buttonElement.addEventListener('click', refreshPage);

function refreshPage(){
  window.location.reload();
};