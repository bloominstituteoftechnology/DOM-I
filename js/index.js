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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItem1 = document.getElementsByTagName("a")[0];
navItem1.textContent = siteContent.nav["nav-item-1"];

const navItem2 = document.getElementsByTagName("a")[1];
navItem2.textContent = siteContent.nav["nav-item-2"];

const navItem3 = document.getElementsByTagName("a")[2];
navItem3.textContent = siteContent.nav["nav-item-3"];

const navItem4 = document.getElementsByTagName("a")[3];
navItem4.textContent = siteContent.nav["nav-item-4"];

const navItem5 = document.getElementsByTagName("a")[4];
navItem5.textContent = siteContent.nav["nav-item-5"];

const navItem6 = document.getElementsByTagName("a")[5];
navItem6.textContent = siteContent.nav["nav-item-6"];

const ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta['button'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

const mainFeaturesH4 = document.getElementsByTagName("h4")[0];
mainFeaturesH4.textContent = siteContent["main-content"]["features-h4"];

const mainFeaturesContent = document.getElementsByTagName("p")[0];
mainFeaturesContent.textContent = siteContent["main-content"]["features-content"];

const mainAboutH4 = document.getElementsByTagName("h4")[1];
mainAboutH4.textContent = siteContent["main-content"]["about-h4"];

const mainAboutContent = document.getElementsByTagName("p")[1];
mainAboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const mainServicesH4 = document.getElementsByTagName("h4")[2];
mainServicesH4.textContent = siteContent["main-content"]["services-h4"];

const mainServicesContent = document.getElementsByTagName("p")[2];
mainServicesContent.textContent = siteContent["main-content"]["services-content"];

const mainProductH4 = document.getElementsByTagName("h4")[3];
mainProductH4.textContent = siteContent["main-content"]["product-h4"];

const mainProductContent = document.getElementsByTagName("p")[3];
mainProductContent.textContent = siteContent["main-content"]["product-content"];

const mainVisionH4 = document.getElementsByTagName("h4")[4];
mainVisionH4.textContent = siteContent["main-content"]["vision-h4"];

const mainVisionContent = document.getElementsByTagName("p")[4];
mainVisionContent.textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.getElementsByTagName("h4")[5];
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent["contact"]["phone"];

const contactemail = document.querySelectorAll('.contact p')[2];
contactemail.textContent = siteContent["contact"]["email"];

const footerCopyright = document.querySelectorAll('footer p')[0];
footerCopyright.textContent = siteContent["footer"]["copyright"];