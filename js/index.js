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

//Nav
const navBar = document.querySelector('nav')
navBar.style.backgroundColor = "#d3d3d3";
navBar.style.padding = "20px"
navBar.style.borderRadius = "10px"

//Nav link
const [
  navLnkServices,
  navLnkProduct,
  navLnkVision,
  navLnkFeatures,
  navLnkAbout,
  navLnkContact
] = document.querySelectorAll("a");

[
  navLnkServices.textContent,
  navLnkProduct.textContent,
  navLnkVision.textContent,
  navLnkFeatures.textContent,
  navLnkAbout.textContent,
  navLnkContact.textContent
] = Array.from(Object.values(siteContent.nav));

//Style Green navbar
navLnkServices.style.color = "green";
navLnkProduct.style.color = "green";
navLnkVision.style.color = "green";
navLnkFeatures.style.color = "green";
navLnkAbout.style.color = "green";
navLnkContact.style.color = "green";


// adding Prepend Element
const navLnkHome = document.createElement("a")
navLnkHome.textContent = "Home";
navBar.prepend(navLnkHome);
navLnkHome.style.color = "green";

//adding append Element
const navLnkMore = document.createElement("a");
navLnkMore.textContent = "More"
navBar.append(navLnkMore);
navLnkMore.style.color = "green";

//Head Text
const headText = document.querySelector(".cta-text h1");
headText.textContent = siteContent.cta.h1;

//Head Button
const headBtn = document.querySelector(".cta-text button")
headBtn.textContent =siteContent.cta.button;

// Head Button after click
headBtn.addEventListener('click', (msg) => {
navLnkServices.style.color = "blue";
navLnkProduct.style.color = "blue";
navLnkVision.style.color = "blue";
navLnkFeatures.style.color = "blue";
navLnkAbout.style.color = "blue";
navLnkContact.style.color = "blue";
navLnkMore.style.color = "blue";
navLnkHome.style.color = "blue";
headBtn.textContent = "Clicked Blue Nav"
})

//Head IMG
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

//Mid IMG
const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
midImg.style.borderRadius = "10px"

//Main content Heading
const[contentServices,
      contentProduct, 
      contentVision, 
      contentFeatures, 
      contentAbout,] = 
document.querySelectorAll('.main-content h4');
contentFeatures.textContent = siteContent["main-content"]["features-h4"];
contentAbout.textContent = siteContent["main-content"]["about-h4"];
contentServices.textContent = siteContent["main-content"]["services-h4"];
contentProduct.textContent = siteContent["main-content"]["product-h4"];
contentVision.textContent = siteContent["main-content"]["vision-h4"];


//Main content P
const[contentServicesText,
  contentProductText, 
  contentVisionText, 
  contentFeaturesText, 
  contentAboutText,] =
  document.querySelectorAll('.main-content p')
  contentProductText.textContent = siteContent["main-content"]["product-content"];
  contentServicesText.textContent = siteContent["main-content"]["services-content"];
  contentVisionText.textContent = siteContent["main-content"]["vision-content"];
  contentFeaturesText.textContent = siteContent["main-content"]["features-content"];
  contentAboutText.textContent = siteContent["main-content"]["about-content"];

//Contact
let contactHead = document.querySelector(".contact h4");
let [contactAdd, contactPhone, contactEmail] = document.querySelectorAll(".contact p");
contactHead.textContent = siteContent.contact["contact-h4"];
contactAdd.textContent =siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

//Footer
let copyRight = document.querySelector("footer p");
copyRight.textContent =siteContent.footer.copyright;


