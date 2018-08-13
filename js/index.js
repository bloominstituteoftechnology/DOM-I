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
    "h1": "DOM <br> Is <br> Awesome",
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
const nav1 = document.querySelectorAll("nav a");
nav1.forEach((value, index) => {
  value.innerHTML = siteContent.nav[`nav-item-${index + 1}`] 
});

nav1.forEach(param => param.style.color = 'green');

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

let ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent.cta["h1"]

let banner = document.getElementById("middle-img");
banner.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaButton = document.querySelector("button");
ctaButton.innerHTML = siteContent.cta["button"]

let header = document.querySelectorAll("h4");
header[0].innerText = siteContent["main-content"]["features-h4"]
header[1].innerText = siteContent["main-content"]["features-h4"]
header[2].innerText = siteContent["main-content"]["features-h4"]
header[3].innerText = siteContent["main-content"]["features-h4"]
header[4].innerText = siteContent["main-content"]["features-h4"]
header[5].innerText = siteContent["contact"]["contact-h4"]

let mainText = document.querySelectorAll("p");
mainText[0].innerText = siteContent["main-content"]["features-content"]
mainText[1].innerText = siteContent["main-content"]["features-content"]
mainText[2].innerText = siteContent["main-content"]["features-content"]
mainText[3].innerText = siteContent["main-content"]["features-content"]
mainText[4].innerText = siteContent["main-content"]["features-content"]
mainText[5].innerText = siteContent["contact"]["address"]
mainText[6].innerText = siteContent["contact"]["phone"]
mainText[7].innerText = siteContent["contact"]["email"]
mainText[8].innerText = siteContent["footer"]["copyright"]

const newElement1 = document.createElement('a');
const homeElement = document.querySelector("nav");
homeElement.prepend(newElement1);
newElement1.innerText = "Blog";

const newElement2 = document.createElement('a');
homeElement.appendChild(newElement2);
newElement2.innerText = "Shop";




