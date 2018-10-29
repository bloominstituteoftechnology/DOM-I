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
    "features-content": "Features content __elementmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc__elementrisque quis.",
    "about-h4":"About",
    "about-content": "About content __elementmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc__elementrisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content __elementmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc__elementrisque quis.",
    "product-h4":"Product",
    "product-content": "Product content __elementmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc__elementrisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content __elementmentum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus sc__elementrisque quis.",
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
const logo = document.get__elementmentById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// =====Navigation=====

const navS__elementctor = document.queryS__elementctor("nav");
navS__elementctor.appendChild(document.create__elementment("a"));
navS__elementctor.appendChild(document.create__elementment("a"));

const navLinks = document.queryS__elementctorAll("nav a");
const navKeys = Object.keys(siteContent["nav"]);
navLinks.forEach(function(___elementment,index){
  ___elementment.textContent = siteContent["nav"][navKeys[index]];
  ___elementment.style.color = "green";
})

/// ====CTA====

const ctaImg = document.get__elementmentById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// ====DOM-ish stuff====

const header1 = document.queryS__elementctor(".cta-text");
header1.prepend(document.create__elementment("h1"));
header1.prepend(document.create__elementment("h1"));
header1 = document.queryS__elementctorAll(".cta-text h1");

header1.forEach(function(___elementment,index){
  ___elementment.textContent = siteContent["cta"]["h1"].split(" ")[index];
})

const getButton = document.queryS__elementctor(".cta-text button");
getButton.textContent = siteContent["cta"]["button"];

// ====Main Content====

const topContent = document.queryS__elementctorAll(".main-content .text-content h4, .main-content .text-content p");
const mainKeys = Object.keys(siteContent["main-content"]);
mainKeys.splice(4,1);

topContent.forEach(function(__element,index){
    __element.textContent = siteContent["main-content"][mainKeys[index]];
})