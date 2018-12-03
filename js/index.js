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

// General 

const container = document.getElementsByClassName("container");

// Header
const navLinks = document.querySelectorAll("nav>a");

// for(let i = 0; i < navLinks.length; i++) {
//   navLinks[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
// };

navLinks.forEach((link, index) => {
  link.innerHTML = siteContent.nav[`nav-item-${index + 1}`];
  link.style.color = "green";
});

// TODO - Refactor

const nav = document.querySelector("nav");
nav.style.alignItems = "baseline";

newLink1 = document.createElement('a');
newLink1.innerHTML = "Blog";
newLink1.style.color = "green";

newLink2 = document.createElement('a');
newLink2.innerHTML = "Home";
newLink2.style.color = "green";

nav.appendChild(newLink1);
nav.prepend(newLink2);

const logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent.nav["img-src"]);
logo.src = siteContent.nav["img-src"];

// Swap Button

swapBtn = document.createElement('button')
swapBtn.innerHTML = "Swap";
swapBtn.className = "swapBtn";
nav.appendChild(swapBtn);

swapBtn.addEventListener('click', toggleSwap);

function toggleSwap() {
  nav.style.order = 1;
  logo.style.order = 0;
  logo.style.alignSelf = "flexStart";
  logo.style.margin = "28px 91px 0 0";
  setTimeout(function(){
    document.body.style.transform = "scaleX(-1)";
  }, 1500);
};

// CTA Section

const ctaH1 = document.querySelector(".cta h1");
ctaH1.innerHTML = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

// Main-Content Section

// Top Content

const featuresH4 = document.querySelectorAll(".text-content h4")[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelectorAll(".text-content p")[0];
featuresContent.innerHTML = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelectorAll(".text-content h4")[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll(".text-content p")[1];
aboutContent.innerHTML = siteContent["main-content"]["about-content"];

//Middle Image

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content

const servicesH4 = document.querySelectorAll(".text-content h4")[2];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll(".text-content p")[2];
servicesContent.innerHTML = siteContent["main-content"]["services-content"];

const productH4 = document.querySelectorAll(".text-content h4")[3];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

const productContent = document.querySelectorAll(".text-content p")[3];
productContent.innerHTML = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelectorAll(".text-content h4")[4];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelectorAll(".text-content p")[4];
visionContent.innerHTML = siteContent["main-content"]["vision-content"];

// Contact Section
const contactH4 = document.querySelector(".contact > h4");
contactH4.innerHTML = siteContent.contact["contact-h4"];

const contactAddress = document.querySelectorAll(".contact > p")[0];
contactAddress.innerHTML = siteContent.contact["contact-h4"];

const contactPhone = document.querySelectorAll(".contact > p ")[1];
contactPhone.innerHTML = siteContent.contact.phone;

const contactEmail = document.querySelectorAll(".contact > p")[2];
contactEmail.innerHTML = siteContent.contact.email;

// Footer 
const footerP = document.querySelector("footer > p");
footerP.innerHTML = siteContent.footer.copyright;

