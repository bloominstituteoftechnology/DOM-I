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

let nav1 = document.querySelector("a:nth-child(1)");
nav1.textContent = siteContent["nav"]["nav-item-1"]

let nav2 = document.querySelector("a:nth-child(2)");
nav2.textContent = siteContent["nav"]["nav-item-2"]

let nav3 = document.querySelector("a:nth-child(3)");
nav3.textContent = siteContent["nav"]["nav-item-3"]

let nav4 = document.querySelector("a:nth-child(4)");
nav4.textContent = siteContent["nav"]["nav-item-4"]

let nav5 = document.querySelector("a:nth-child(5)");
nav5.textContent = siteContent["nav"]["nav-item-5"]

let nav6 = document.querySelector("a:nth-child(6)");
nav6.textContent = siteContent["nav"]["nav-item-6"]

let mainText = document.querySelector(".cta-text h1");
mainText.textContent = siteContent["cta"]["h1"]

let mainButton = document.querySelector(".cta-text button");
mainButton.textContent = siteContent["cta"]["button"]

let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

let topTitle1 = document.querySelector(".top-content .text-content:nth-child(1) h4");
topTitle1.textContent = siteContent["main-content"]["features-h4"]

let topText1 = document.querySelector(".top-content .text-content:nth-child(1) p");
topText1.textContent = siteContent["main-content"]["features-content"]

let topTitle2 = document.querySelector(".top-content .text-content:nth-child(2) h4");
topTitle2.textContent = siteContent["main-content"]["about-h4"]

let topText2 = document.querySelector(".top-content .text-content:nth-child(2) p");
topText2.textContent = siteContent["main-content"]["about-content"]

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomTitle1 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
bottomTitle1.textContent = siteContent["main-content"]["services-h4"]

let bottomText1 = document.querySelector(".bottom-content .text-content:nth-child(1) p");
bottomText1.textContent = siteContent["main-content"]["services-content"]

let bottomTitle2 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
bottomTitle2.textContent = siteContent["main-content"]["product-h4"]

let bottomText2 = document.querySelector(".bottom-content .text-content:nth-child(2) p");
bottomText2.textContent = siteContent["main-content"]["product-content"]

let bottomTitle3 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
bottomTitle3.textContent = siteContent["main-content"]["vision-h4"]

let bottomText3 = document.querySelector(".bottom-content .text-content:nth-child(3) p");
bottomText3.textContent = siteContent["main-content"]["vision-content"]

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"]

let contactText1 = document.querySelector(".contact p:nth-child(2)");
contactText1.textContent = siteContent["contact"]["address"]

let contactText2 = document.querySelector(".contact p:nth-child(3)");
contactText2.textContent = siteContent["contact"]["phone"]

let contactText3 = document.querySelector(".contact p:nth-child(4)");
contactText3.textContent = siteContent["contact"]["email"]

let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"]

let navBarAdd = document.querySelector("nav");
let addAnchor = document.createElement('a');
let addAnchor2 = document.createElement('a');
addAnchor.textContent = 'Products';
addAnchor2.textContent = 'Home'
navBarAdd.append(addAnchor);
navBarAdd.prepend(addAnchor2);


let navBar = document.querySelectorAll("a");
navBar.forEach(function(items){
  items.style.color = "green"
})

