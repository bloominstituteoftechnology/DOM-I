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

let navBar = document.querySelectorAll('nav a');

for (i = 0; i < navBar.length; i++){
  navBar[i].textContent = siteContent.nav[`nav-item-${i}`]
  navBar[i].style.color = "green" 
}

let newNav1 = document.createElement("a");
newNav1.setAttribute("href", '#')
newNav1.style.color = "green"
newNav1.textContent = "NEWNAV1"

let newNav2 = document.createElement("a");
newNav2.setAttribute("href", '#')
newNav2.style.color = "green"
newNav2.textContent = "NEWNAV2"

let nav = document.querySelector('nav');
nav.appendChild(newNav1)
nav.prepend(newNav2)

lineBreak = document.createElement("br");
let h1 = document.querySelector('h1')
h1.innerHTML = "DOM <br> IS <br> AWESOME"

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"]
let ctaButton = h1.nextElementSibling
ctaButton.textContent = "Get Started"

let topContent = document.querySelector('.top-content');
let features = topContent.firstElementChild
let featuresh4 = features.firstElementChild
featuresh4.textContent = siteContent["main-content"]["features-h4"]
let featuresP = featuresh4.nextElementSibling;
featuresP.textContent = siteContent["main-content"]["features-content"]
let about = features.nextElementSibling;
let abouth4 = about.firstElementChild;
abouth4.textContent = siteContent["main-content"]["about-h4"];
let aboutP = abouth4.nextElementSibling;
aboutP.textContent = siteContent["main-content"]["about-content"]

let middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent["main-content"]["middle-img-src"]

let bottomContent = document.querySelector('.bottom-content');
let services = bottomContent.firstElementChild;
let servicesh4 = services.firstElementChild;
servicesh4.textContent = siteContent["main-content"]["services-h4"]
let servicesP = servicesh4.nextElementSibling;
servicesP.textContent = siteContent["main-content"]["services-content"]
let product = services.nextElementSibling;
let producth4 = product.firstElementChild;
producth4.textContent = siteContent["main-content"]["product-h4"]
let productP = producth4.nextElementSibling;
productP.textContent = siteContent["main-content"]["product-content"]
let vision = product.nextElementSibling;
let visionh4 = vision.firstElementChild;
visionh4.textContent = siteContent["main-content"]["vision-h4"]
let visionP = visionh4.nextElementSibling;
visionP.textContent = siteContent["main-content"]["vision-content"]

let contact = document.querySelector('.contact');
let contacth4 = contact.firstElementChild
contacth4.textContent = siteContent["contact"]["contact-h4"]
let contactAddress = contacth4.nextElementSibling;
contactAddress.textContent = siteContent["contact"]["address"]
let contactPhone = contactAddress.nextElementSibling;
contactPhone.textContent = siteContent["contact"]["phone"]
let contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent["contact"]["email"]

let footer = document.querySelector('footer p')
footer.textContent = siteContent["footer"]["copyright"]