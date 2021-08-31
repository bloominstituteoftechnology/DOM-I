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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

function navBuilder(array){
  const navItems = document.querySelectorAll("nav a");
  for(let i = 0; i < navItems.length; i++){
    navItems[i].textContent = Object.values(array.nav)[i];
  }
  return navItems;
}

navBuilder(siteContent);


let h1Text = document.querySelector(".cta-text h1");
h1Text.setAttribute('style', 'white-space: pre;');
h1Text.textContent = "DOM \r\nIs\r\n Awesome";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let featuresH4 = document.querySelector(".top-content div:nth-child(1) h4");
let featuresContent = document.querySelector(".top-content div:nth-child(1) p")
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content div:nth-child(2) h4");
let aboutContent = document.querySelector(".top-content div:nth-child(2) p")
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelector(".bottom-content div:nth-of-type(1) h4");
let servicesContent = document.querySelector(".bottom-content div:nth-of-type(1) p");
servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content div:nth-of-type(2) h4");
let productContent = document.querySelector(".bottom-content div:nth-of-type(2) p");
productH4.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content div:nth-of-type(3) h4");
let visionContent = document.querySelector(".bottom-content div:nth-of-type(3) p");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
let contactP1 = document.querySelector(".contact p:nth-of-type(1)");
contactP1.textContent = siteContent["contact"]["address"];
let contactP2 = document.querySelector(".contact p:nth-of-type(2)");
contactP2.textContent = siteContent["contact"]["phone"];
let contactP3 = document.querySelector(".contact p:nth-of-type(3)");
contactP3.textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];