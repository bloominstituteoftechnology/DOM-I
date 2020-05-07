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

//Photos
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const bigImage = document.querySelector("#cta-img");
bigImage.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// //Nav
const nav = document.querySelectorAll("a");
nav.forEach( (element, index) => {
element.textContent = siteContent['nav'][`nav-item-${index + 1}`]
element.style.color = "green"
})

navHeader = document.createElement("a")
navHeader.textContent = "Contact"
etcHeader = document.createElement("a")
etcHeader.textContent = "Etc"
const newItems = document.querySelector("nav")
newItems.appendChild(navHeader)
newItems.prepend(etcHeader)


// //Header
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"]

const featureHeader = document.querySelectorAll("h4");
featureHeader[0].textContent = siteContent["main-content"]["features-h4"]

const aboutHeader = document.querySelectorAll("h4");
aboutHeader[1].textContent = siteContent["main-content"]["about-h4"]

const servicesHeader = document.querySelectorAll("h4");
servicesHeader[2].textContent = siteContent["main-content"]["services-h4"]

const productHeader = document.querySelectorAll("h4");
productHeader[3].textContent = siteContent["main-content"]["product-h4"]

const visionHeader = document.querySelectorAll("h4");
visionHeader[4].textContent = siteContent["main-content"]["vision-h4"]

const contactHeader = document.querySelectorAll("h4");
contactHeader[5].textContent = siteContent["contact"]["contact-h4"]

// //Text Content
const featureText = document.querySelectorAll("p");
featureText[0].textContent = siteContent["main-content"]["features-content"]

const aboutText = document.querySelectorAll("p");
aboutText[1].textContent = siteContent["main-content"]["about-content"]

const servicesText = document.querySelectorAll("p");
servicesText[2].textContent = siteContent["main-content"]["services-content"]

const productText = document.querySelectorAll("p");
productText[3].textContent = siteContent["main-content"]["product-content"]

const visionText = document.querySelectorAll("p");
visionText[4].textContent = siteContent["main-content"]["vision-content"]

const address = document.querySelectorAll("p")
address[5].textContent = siteContent["contact"]["address"]

const phone = document.querySelectorAll("p")
phone[6].textContent = siteContent["contact"]["phone"]

const email = document.querySelectorAll("p")
email[7].textContent = siteContent["contact"]["email"]

const footer = document.querySelectorAll("p")
footer[8].textContent = siteContent["footer"]["copyright"]

// //Button
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"]


