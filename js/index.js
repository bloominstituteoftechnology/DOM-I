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

// Window Title
let windowTitle = document.querySelector('title');
windowTitle.textContent = 'Great Idea! DOM'

// Nav Bar
let navBar = document.querySelectorAll('header nav a')
navBar.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index+1}`]
})

//Showcase Title
let ctaH1 = document.querySelector('section div h1')
ctaH1.textContent = siteContent.cta.h1

//Showcase Image
let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

//Showcase Button
let ctaBtn = document.querySelector('section div button')
ctaBtn.textContent = siteContent.cta.button

// main content

// top content headers
let topContentHeaders = document.querySelectorAll(".top-content h4");
topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"]; //features
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"]; // about

//top content paragraphs
let topContentPars = document.querySelectorAll(".top-content p");
topContentPars[0].textContent = siteContent["main-content"]["features-content"]; //features content
topContentPars[1].textContent = siteContent["main-content"]["about-content"]; //about content

//main-content img
let mainContentImg = document.querySelector(".main-content img");
mainContentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom-content headers
let bottomContentHeaders = document.querySelectorAll(".bottom-content h4");
bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"]; // services
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"]; // product
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"]; // visions

//bottom-content paragraphs
let bottomContentPars = document.querySelectorAll(".bottom-content p");
bottomContentPars[0].textContent = siteContent["main-content"]["services-content"]; // services
bottomContentPars[1].textContent = siteContent["main-content"]["product-content"]; // product
bottomContentPars[2].textContent = siteContent["main-content"]["vision-content"]; // vision

//contact
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent.contact["contact-h4"];

let contactPars = document.querySelectorAll(".contact p")
contactPars[0].textContent = siteContent.contact.address;
contactPars[1].textContent = siteContent.contact.phone;
contactPars[2].textContent = siteContent.contact.email;

//footer
let footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;

//nav links color
navBar.forEach((item) => {
  item.style.color = "green";
})

//appending something
let faq = document.createElement("a");
faq.textContent = "FAQ";
document.querySelector("nav").appendChild(faq);

//prepending
let firstItem = document.createElement("a");
firstItem.textContent = "First Item Link";
document.querySelector("nav").prepend(firstItem);