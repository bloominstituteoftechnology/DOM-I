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
let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let links = document.querySelectorAll("nav a");
links.forEach((aTag, index) => {
  aTag.innerHTML = siteContent.nav[`nav-item-${index+1}`];
});

let ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent.cta.h1.split(' ').join('<br />');

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

let topContentH4 = document.querySelectorAll('.text-content h4');

topContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];
topContentH4[2].innerHTML = siteContent["main-content"]["services-h4"];
topContentH4[3].innerHTML = siteContent["main-content"]["product-h4"];
topContentH4[4].innerHTML = siteContent["main-content"]["vision-h4"];

let topContentP = document.querySelectorAll('.text-content p');

topContentP[0].innerHTML = siteContent["main-content"]["features-content"];
topContentP[1].innerHTML = siteContent["main-content"]["about-content"];
topContentP[2].innerHTML = siteContent["main-content"]["services-content"];
topContentP[3].innerHTML = siteContent["main-content"]["product-content"];
topContentP[4].innerHTML = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];

links.forEach((aTag) => {
  aTag.style.color = 'green';
});

let navHome = document.createElement('a');
navHome.href = "#";
navHome.textContent = "Home";
navHome.style.color = 'green';

let navExamples = document.createElement('a');
navExamples.href = "#";
navExamples.textContent = "Examples";
navExamples.style.color = 'green';

let navBar = document.querySelector('nav');

navBar.prepend(navHome);
navBar.appendChild(navExamples);