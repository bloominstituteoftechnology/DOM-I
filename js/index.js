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

// FROM TOP TO BOTTOM OF PAGE 

// NAV BAR
let navBarReveal = document.querySelectorAll('a'); 
navBarReveal.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i+1}`]
});

// CTA
let domAwesome = document.getElementsByTagName("h1");
domAwesome[0].textContent = `${siteContent["cta"]["h1"]}`

let button1 = document.getElementsByTagName("button");
button1[0].textContent = `${siteContent["cta"]["button"]}`

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

// MAIN CONTENT

// TOP CONTENT

let topContentParent = document.querySelector(".top-content")
let topContentChildren = Array.from(topContentParent.children)

let featuresSection = topContentChildren[0].children;
featuresSection[0].textContent = `${siteContent["main-content"]["features-h4"]}`
featuresSection[1].textContent = `${siteContent["main-content"]["features-content"]}`

let aboutSection = topContentChildren[1].children;
 aboutSection[0].textContent = `${siteContent["main-content"]["about-h4"]}`
 aboutSection[1].textContent = `${siteContent["main-content"]["about-content"]}`

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// BOTTOM CONTENT

let bottomContentParent = document.querySelector(".bottom-content")
let bottomContentChildren = Array.from(bottomContentParent.children)

let servicesSection = bottomContentChildren[0].children;
servicesSection[0].textContent = `${siteContent["main-content"]["services-h4"]}`
servicesSection[1].textContent = `${siteContent["main-content"]["services-content"]}`

let productSection = bottomContentChildren[1].children;
productSection[0].textContent = `${siteContent["main-content"]["product-h4"]}`
productSection[1].textContent = `${siteContent["main-content"]["product-content"]}`

let visionSection = bottomContentChildren[2].children;
visionSection[0].textContent = `${siteContent["main-content"]["vision-h4"]}`
visionSection[1].textContent = `${siteContent["main-content"]["vision-content"]}`

// CONTACT 

let contactParent = document.querySelector(".contact")
let contactChildren = Array.from(contactParent.children)

let contactHeader = contactChildren[0];
contactChildren[0].textContent = `${siteContent["contact"]["contact-h4"]}`

let contactAddress = contactChildren[1];
contactChildren[1].textContent = `${siteContent["contact"]["address"]}`

let contactPhone = contactChildren[2];
contactChildren[2].textContent = `${siteContent["contact"]["phone"]}`

let contactEmail = contactChildren[3];
contactChildren[3].textContent = `${siteContent["contact"]["email"]}`

// FOOTER

let copyrightParent = document.getElementsByTagName("footer")
let copyrightChildren = Array.from(copyrightParent)

let footerCopyright = copyrightChildren[0];
copyrightChildren[0].textContent = `${siteContent["footer"]["copyright"]}`

// NAVIGATION STYLES

let navBarColor = document.getElementsByTagName('a')
navBarColor[0].style.color = 'green';
navBarColor[1].style.color = 'green';
navBarColor[2].style.color = 'green';
navBarColor[3].style.color = 'green';
navBarColor[4].style.color = 'green';
navBarColor[5].style.color = 'green';

// NAVIGATION ADD

// PREPEND

let navBarSocial = document.querySelector('nav')
navBarChild = document.createElement('a');
navBarChild.textContent = "Social"

navBarSocial.prepend(navBarChild);

navBarChild.style.color = "green";

// APPEND CHILD

navBarChild2 = document.createElement('a');
navBarChild2.textContent = "Events"

navBarSocial.prepend(navBarChild);
navBarSocial.appendChild(navBarChild2);

navBarChild2.style.color = "green";

