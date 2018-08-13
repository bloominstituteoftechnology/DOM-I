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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navItems = document.getElementsByTagName("a");
Array.from(navItems).forEach((a, i) => a.innerHTML = siteContent.nav[`nav-item-${i + 1}`]);

const ctaH1Tag = document.querySelector("h1");
ctaH1Tag.innerHTML = siteContent.cta.h1.replace(/ /g, "<br> ");

const ctaButton = document.querySelector("button");
ctaButton.innerText = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

const featuresDiv = document.getElementsByClassName("text-content")[0];
featuresDiv.children[0].innerText = siteContent["main-content"]["features-h4"];
featuresDiv.children[1].innerText = siteContent["main-content"]["features-content"];

const aboutDiv = document.getElementsByClassName("text-content")[1];
aboutDiv.children[0].innerText = siteContent["main-content"]["about-h4"];
aboutDiv.children[1].innerText = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const servicesDiv = document.getElementsByClassName("text-content")[2];
servicesDiv.children[0].innerText = siteContent["main-content"]["services-h4"];
servicesDiv.children[1].innerText = siteContent["main-content"]["services-content"];

const productDiv = document.getElementsByClassName("text-content")[3];
productDiv.children[0].innerText = siteContent["main-content"]["product-h4"];
productDiv.children[1].innerText = siteContent["main-content"]["product-content"];

const visionDiv = document.getElementsByClassName("text-content")[4];
visionDiv.children[0].innerText = siteContent["main-content"]["vision-h4"];
visionDiv.children[1].innerText = siteContent["main-content"]["vision-content"];

const contactSection = document.querySelector(".contact");
contactSection.children[0].innerText = siteContent.contact["contact-h4"];
contactSection.children[1].innerHTML = siteContent.contact.address.replace(/Street /g, "Street<br>");
contactSection.children[2].innerText = siteContent.contact.phone;
contactSection.children[3].innerText = siteContent.contact.email;

const footerSection = document.querySelector("footer");
footerSection.children[0].innerText = siteContent.footer.copyright;
