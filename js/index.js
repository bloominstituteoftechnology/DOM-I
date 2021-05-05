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

//Header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navA = document.querySelectorAll('a')[0]

navA.textContent = siteContent["nav"]["nav-item-1"]
let navB =document.querySelectorAll('a')[1]
navB.textContent = siteContent["nav"]["nav-item-2"]
let navC =document.querySelectorAll('a')[2]
navC.textContent= siteContent["nav"]["nav-item-3"]
let navD = document.querySelectorAll('a')[3]
navD.textContent = siteContent["nav"]["nav-item-4"]
let navE = document.querySelectorAll('a')[4]
navE.textContent = siteContent["nav"]["nav-item-5"]
let navF = document.querySelectorAll('a') [5]
navF.textContent = siteContent["nav"]["nav-item-6"] 

let nav = document.querySelector('nav')
let newLink = document.createElement('a')
let newLinkB = document.createElement('a')
newLink.textContent = 'Blog'
newLink.href = '#'
newLinkB.textContent ='Help'
newLinkB.href = '#'
nav.prepend(newLinkB)
nav.appendChild(newLink)
let navGreen = document.querySelectorAll("a");
navGreen.forEach(function(element){
  element.style.color="green";
})
let mainTitle = document.querySelector(".cta .cta-text h1");
mainTitle.innerHTML ="DOM <br> IS<br>AWESOME"; 
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];
let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main-Content
//top-content
let features = document.querySelectorAll('h4')[0];
let featuresP = document.querySelectorAll('p')[0];
features.textContent  = siteContent["main-content"] ["features-h4"];
featuresP.textContent = siteContent["main-content"]["features-content"];
let about = document.querySelectorAll('h4')[1];
about.textContent = siteContent["main-content"] ["about-h4"];
let aboutP = document.querySelectorAll('p')[1];
aboutP.textContent =siteContent["main-content"] ["about-content"]
let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//Main-content
//Bottom-content
let services = document.querySelectorAll('h4')[2]
let servicesP = document.querySelectorAll('p')[2]
services.textContent = siteContent["main-content"]["services-h4"]
servicesP.textContent = siteContent["main-content"]["services-content"]
let product = document.querySelectorAll('h4')[3]
let productP = document.querySelectorAll('p')[3]
product.textContent =siteContent["main-content"]["product-h4"]
productP.textContent = siteContent["main-content"]["product-content"]
let vision = document.querySelectorAll('h4')[4]
let visionP = document.querySelectorAll('p')[4]
vision.textContent= siteContent["main-content"]["vision-h4"]
visionP.textContent = siteContent["main-content"]["vision-content"]

//Contact
let contact = document.querySelectorAll('h4')[5]
let contactContent =document.querySelectorAll('.contact p')

contact.textContent = siteContent["contact"]["contact-h4"]
contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]


// Footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];