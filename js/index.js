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
    "h1": "DOM<br>Is<br>Awesome",
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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Discussed this with Max Kajiwara as this would be the smallest
// to be able to get this applicaiton to the nav items.

const navList = document.querySelectorAll('nav a');
for (let i = 0; i < navList.length; i++) {
  navList[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
}

const ctaH1 = document.querySelector(".cta h1");
ctaH1.innerHTML = siteContent.cta["h1"];

const ctaButton = document.querySelectorAll(".cta-text button")[0];
ctaButton.innerHTML = siteContent.cta['button'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

const mainFeaturesH4 = document.querySelectorAll(".top-content h4")[0];
mainFeaturesH4.innerHTML = siteContent["main-content"]["features-h4"];

const mainFeaturesContent = document.querySelectorAll(".top-content p")[0];
mainFeaturesContent.innerHTML = siteContent["main-content"]["features-content"];

const mainAboutH4 = document.querySelectorAll(".top-content h4")[1];
mainAboutH4.innerHTML = siteContent["main-content"]["about-h4"];

const mainAboutContent = document.querySelectorAll(".top-content p")[1];
mainAboutContent.innerHTML = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainServicesH4 = document.querySelectorAll(".bottom-content h4")[0];
mainServicesH4.innerHTML = siteContent["main-content"]["services-h4"];

const mainServicesContent = document.querySelectorAll(".bottom-content p")[0];
mainServicesContent.innerHTML = siteContent["main-content"]["services-content"];

const mainProductH4 = document.querySelectorAll(".bottom-content h4")[1];
mainProductH4.innerHTML = siteContent["main-content"]["product-h4"];

const mainProductContent = document.querySelectorAll(".bottom-content p")[1];
mainProductContent.innerHTML = siteContent["main-content"]["product-content"];

const mainVisionH4 = document.querySelectorAll(".bottom-content h4")[2];
mainVisionH4.innerHTML = siteContent["main-content"]["vision-h4"];

const mainVisionContent = document.querySelectorAll(".bottom-content p")[2];
mainVisionContent.innerHTML = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelectorAll(".contact h4")[0];
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.innerHTML = siteContent["contact"]["address"];

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.innerHTML = siteContent["contact"]["phone"];

const contactemail = document.querySelectorAll('.contact p')[2];
contactemail.innerHTML = siteContent["contact"]["email"];

const footerCopyright = document.querySelectorAll('footer p')[0];
footerCopyright.innerHTML = siteContent["footer"]["copyright"];


// Task 4
// const navListColor = document.querySelectorAll('nav a');
// for (i = 0; 0 < navListColor.length)
// console.log(navListColor);

const a = document.createElement("a");
a.innerHTML = 'Buttons';
a.setAttribute('href', '#')
const firstNav = document.getElementsByTagName('nav')[0];
firstNav.prepend(a);

const b = document.createElement("a");
b.innerHTML = 'Gravy';
b.setAttribute('href', '#')
const lastNav = document.getElementsByTagName('nav')[0];
lastNav.appendChild(b);
document.querySelectorAll('nav a').forEach(param => param.style.color = "green");

