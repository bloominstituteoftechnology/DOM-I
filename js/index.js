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

// images

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//footer
let footerP = document.querySelector('footer p').textContent = 'Copyright Great Idea! 2018';

//contact
let Contact = document.querySelector('.contact h4').textContent = 'Contact';

// contact information

let ContactPTags = document.querySelectorAll(".contact p");

ContactPTags[0].setAttribute("contact", "address");
ContactPTags[0].innerText = "123 Way 456 Street Somewhere, USA";
ContactPTags[1].setAttribute("contact", "phone");
ContactPTags[1].innerText = "1 (888) 888-8888";
ContactPTags[2].setAttribute("contact", "email");
ContactPTags[2].innerText = "sales@greatidea.io";

let aTags = document.querySelectorAll("a");

aTags[0].setAttribute("class", ".nav-item-1");
aTags[0].innerText = "Service";
aTags[1].setAttribute("class", ".nav-item-2");
aTags[1].innerText = "Product";
aTags[2].setAttribute("class", ".nav-item-3");
aTags[2].innerText = "Vision";
aTags[3].setAttribute("class", ".nav-item-4");
aTags[3].innerText = "Features";
aTags[4].setAttribute("class", ".nav-item-5");
aTags[4].innerText = "About";
aTags[5].setAttribute("class", ".nav-item-6");
aTags[5].innerText = "Contact";

aTags[0].style.color = 'green';
aTags[1].style.color = 'green';
aTags[2].style.color = 'green';
aTags[3].style.color = 'green';
aTags[4].style.color = 'green';
aTags[5].style.color = 'green';


let h1Text = document.querySelector('h1').textContent = "DOM Is Awesome!";
let button = document.querySelector('Button').textContent = "Get Started";




 

// top h4
let topContentH4 = document.querySelectorAll(".top-content .text-content h4");

topContentH4[0].setAttribute("main-content","features-h4");
topContentH4[0].innerText = "Features";
topContentH4[1].setAttribute("main-content", "about-h4");
topContentH4[1].innerText = "About";

//bottom h4
let bottomContentH4 = document.querySelectorAll(".bottom-content .text-content h4");

bottomContentH4[0].setAttribute("main-content","service-h4");
bottomContentH4[0].innerText = "Service";
bottomContentH4[1].setAttribute("main-content", "product-h4");
bottomContentH4[1].innerText = "Product";
bottomContentH4[2].setAttribute("main-content", "vision-h4");
bottomContentH4[2].innerText = "Vision";


// top content
let topContentP = document.querySelectorAll(".top-content .text-content p");

topContentP[0].setAttribute("main-content","features-content");
topContentP[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis";
topContentP[1].setAttribute("main-content", "about-content");
topContentP[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//bottom content
let bottomContentP = document.querySelectorAll(".bottom-content .text-content p");

bottomContentP[0].setAttribute("main-content","service-content");
bottomContentP[0].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentP[1].setAttribute("main-content", "product-content");
bottomContentP[1].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentP[2].setAttribute("main-content", "vision-content");
bottomContentP[2].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// new elements for nav

const ideas = document.createElement('a');

ideas.textContent = "Ideas";

ideas.style.color = 'green';

const parentElement = document.querySelector('nav');

parentElement.append(ideas)




const testimony = document.createElement('a');

testimony.style.color = 'green';

testimony.textContent = "Testimony";

parentElement.prepend(testimony);





