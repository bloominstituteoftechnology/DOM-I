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

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])




let navKeyArray = Object.keys(siteContent.nav);

let nav = document.getElementsByTagName('nav')[0];
let anchorList = nav.children;

for (i = 0; i < anchorList.length; i++) {
  anchorList[i].textContent = siteContent.nav[navKeyArray[i]];
}

var a = document.createElement("a");
a.textContent = "Newsletter";
nav.appendChild(a);

var b = document.createElement("a");
b.textContent = "HOME!";
nav.prepend(b);

nav.style.backgroundColor = "blue";

let ctaText = document.getElementsByTagName("h1")[0];
ctaText.textContent = siteContent["cta"]["h1"];

let buttonText = document.getElementsByTagName("button")[0];
buttonText.textContent = siteContent["cta"]['button'];

let contentHeaders = document.querySelectorAll('h4');

contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

let contentText = document.querySelectorAll('p');

contentText[0].textContent = siteContent["main-content"]["features-content"];
contentText[1].textContent = siteContent["main-content"]["about-content"];
contentText[2].textContent = siteContent["main-content"]["services-content"];
contentText[3].textContent = siteContent["main-content"]["product-content"];
contentText[4].textContent = siteContent["main-content"]["vision-content"];

let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];


let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];