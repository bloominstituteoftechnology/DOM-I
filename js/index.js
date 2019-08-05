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
    "button": "Awesome, is Dom.",
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

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navTag = document.querySelector('nav');

let navAnchors = document.querySelectorAll('a');
navAnchors.forEach(function(item, index, array) {
  item.innerText = siteContent['nav'][`nav-item-${index+1}`];
  item.style.color = 'green';
});

const firstAnchor = document.createElement('a');
const lastAnchor = document.createElement('a');

firstAnchor.textContent = 'Greetings';
lastAnchor.textContent = 'Safe Travels';
firstAnchor.style.color = 'orange';
lastAnchor.style.color = 'purple';

navTag.prepend(firstAnchor);
navTag.appendChild(lastAnchor);


const ctaText = document.querySelector(".cta-text h1");

let ctaArray = siteContent["cta"]["h1"].split(" ");

ctaArray.splice(1, 0, "\r\n");
ctaArray.splice(3, 0, "\r\n");

ctaText.innerText = ctaArray.join(" ");

// const pText = document.querySelector('p');
const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.innerText = siteContent["cta"]["button"];
ctaBtn.addEventListener('mouseenter', (event) => {
    ctaBtn.style.backgroundColor = 'green';
});
ctaBtn.addEventListener('mouseleave', (event) => {
    ctaBtn.style.backgroundColor = 'initial';
});
let body = document.querySelector('body');
let step = true;
ctaBtn.addEventListener('click', (event) => {
    step = !step;
    if (step === false){body.style.filter = 'grayscale(100%)';}
    else {body.style.filter = 'initial'};
});



const topH4 = document.querySelectorAll('.top-content .text-content h4');
topH4[0].innerText = siteContent['main-content']['features-h4'];
topH4[1].innerText = siteContent['main-content']['about-h4'];

const topP = document.querySelectorAll(".top-content .text-content p");
topP[0].innerText = siteContent["main-content"]["features-content"];
topP[1].innerText = siteContent["main-content"]["features-content"];

const botH4 = document.querySelectorAll(".bottom-content .text-content h4");
botH4[0].innerText = siteContent["main-content"]["services-h4"];
botH4[1].innerText = siteContent["main-content"]["product-h4"];
botH4[2].innerText = siteContent["main-content"]["vision-h4"];

const botP = document.querySelectorAll(".bottom-content .text-content p");
botP[0].innerText = siteContent["main-content"]["services-content"];
botP[1].innerText = siteContent["main-content"]["product-content"];
botP[2].innerText = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll(".contact p");

let addressArray = siteContent["contact"]["address"].split(" ");

addressArray.splice(4, 0, "\r\n");

contactP[0].innerText = addressArray.join(" ");
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

const footerP = document.querySelector("footer p");

footerP.innerText = siteContent["footer"]["copyright"];