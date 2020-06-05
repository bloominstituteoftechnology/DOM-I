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


//Update the navigation links
const navItems= document.querySelectorAll("nav a");
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

//Update color of navigation text to Green
navItems.forEach( function (currentValue) {
  currentValue.style.color = "green";
});

//Add two new elements to navigation system (styled BLUE to differentiate from other elements)
const nav = document.querySelector("nav");

const newNavElement1 = document.createElement("a")
newNavElement1.textContent = "Demos"
newNavElement1.href = "#";
newNavElement1.style.color = "blue"
nav.prepend(newNavElement1);

const newNavElement2 = document.createElement("a")
newNavElement2.textContent = "Pricing"
newNavElement2.href = "#";
newNavElement2.style.color = "blue"
nav.append(newNavElement2);

//Update the CTA section
const ctaText= document.querySelector(".cta h1");
ctaText.textContent = siteContent.cta["h1"];

const ctaButton= document.querySelector(".cta button");
ctaButton.textContent = siteContent.cta["button"];

const ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];
ctaImage.alt = "Image of a code snippet."


//Update the top-content "Features" section 
const topContentHeaderFeatures= document.querySelectorAll(".main-content .top-content h4");
topContentHeaderFeatures[0].textContent = siteContent["main-content"]["features-h4"];

const topContentTextFeatures= document.querySelectorAll(".main-content .top-content p");
topContentTextFeatures[0].textContent = siteContent["main-content"]["features-content"];

//Update the top-content "About" section 
const topContentAbout= document.querySelectorAll(".main-content .top-content h4");
topContentAbout[1].textContent = siteContent["main-content"]["about-h4"];

const topContentTextAbout= document.querySelectorAll(".main-content .top-content p");
topContentTextAbout[1].textContent = siteContent["main-content"]["about-content"];


//Update the middle-img section 
const middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];
middleImage.alt = "Image of code snippets across the screen."

//Update the bottom-content "Services" section 
const bottomContentHeaderServices= document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeaderServices[0].textContent = siteContent["main-content"]["services-h4"];

const bottomContentTextServices= document.querySelectorAll(".main-content .bottom-content p");
bottomContentTextServices[0].textContent = siteContent["main-content"]["services-content"];

//Update the bottom-content "Product" section 
const bottomContentHeaderProduct= document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeaderProduct[1].textContent = siteContent["main-content"]["product-h4"];

const bottomContentTextProduct= document.querySelectorAll(".main-content .bottom-content p");
bottomContentTextProduct[1].textContent = siteContent["main-content"]["product-content"];

//Update the bottom-content "Vision" section 
const bottomContentHeaderVision= document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeaderVision[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentTextVision= document.querySelectorAll(".main-content .bottom-content p");
bottomContentTextVision[2].textContent = siteContent["main-content"]["vision-content"];


//Update the contact section
const contactSectionHeader= document.querySelectorAll(".contact h4");
contactSectionHeader[0].textContent = siteContent["contact"]["contact-h4"];

const contactSectionDetails= document.querySelectorAll(".contact p");
contactSectionDetails[0].textContent = siteContent["contact"]["address"];
contactSectionDetails[1].textContent = siteContent["contact"]["phone"];
contactSectionDetails[2].textContent = siteContent["contact"]["email"];

//Update the footer
const footerSection= document.querySelectorAll("footer p");
footerSection[0].textContent = siteContent.footer.copyright;