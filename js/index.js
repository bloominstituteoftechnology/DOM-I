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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation Content
const navItems = document.querySelectorAll('nav a');
let count = 1;
navItems.forEach(navItem => {
  navItem.textContent = siteContent["nav"]["nav-item-" + count];
  navItem.style.color = "green";
  count++;
});

// CTA Content
document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content - Top Content
const topContenth4 = document.querySelectorAll('.top-content h4');
topContenth4[0].textContent = siteContent["main-content"]["features-h4"];
topContenth4[1].textContent = siteContent["main-content"]["about-h4"];

const topContentp = document.querySelectorAll('.top-content p');
topContentp[0].textContent = siteContent["main-content"]["features-content"];
topContentp[1].textContent = siteContent["main-content"]["about-content"];

// Middle Image
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Main Content - Bottom Content
const bottomContenth4 = document.querySelectorAll('.bottom-content h4');
bottomContenth4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContenth4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContenth4[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentp = document.querySelectorAll('.bottom-content p');
bottomContentp[0].textContent = siteContent["main-content"]["services-content"];
bottomContentp[1].textContent = siteContent["main-content"]["product-content"];
bottomContentp[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Content
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

// Footer Content
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

// New Elements
document.querySelector("nav").style.cssText = "position: relative";
const navItemspecials = document.createElement("a");
navItemspecials.setAttribute('class', 'specials');
navItemspecials.setAttribute('href', '#');

navItemspecials.textContent = "Specials";
navItemspecials.style.cssText = "display: inline-block; margin-top: -5px; color: white; padding: 5px 10px; background-color: red;";

const navItemjobs = document.createElement("a");
navItemjobs.setAttribute('class', 'jobs');
navItemjobs.setAttribute('href', '#');

navItemjobs.textContent = "Jobs";
navItemjobs.style.cssText = "display: inline-block; margin-top: 28px; color: white; padding: 5px 23px; background-color: green; position: absolute; right: 0;";

const parentElement = document.querySelector('nav');
parentElement.append(navItemspecials);
parentElement.append(navItemjobs);

// Extra Styling
document.querySelector("h1").style.color = "green";

const allH4 = document.querySelectorAll('h4');
allH4.forEach(h4 => {
  h4.style.cssText = "font-size: 24px; color: green;";
});

document.querySelector("footer").style.cssText = "background-color: green; color: white; padding: 20px 0;";