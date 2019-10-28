const siteContent = {
  "nav": {
    "nav-item-1": "Services",  //header nav a
    "nav-item-2": "Product",   //header nav a
    "nav-item-3": "Vision",    //header nav a
    "nav-item-4": "Features",  //header nav a
    "nav-item-5": "About",     //header nav a
    "nav-item-6": "Contact",   //header nav a
    "img-src": "img/logo.png"  //ID = logo-img
  },
  "cta": {
    "h1": "DOM Is Awesome",//section class cts; div class cta-text h1
    "button": "Get Started",//section class cts; div class cta-text buttton
    "img-src": "img/header-img.png"//section class cts;
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

const headerNav = document.querySelectorAll("a");

headerNav[0].textContent = siteContent.nav["nav-item-1"];
headerNav[1].textContent = siteContent.nav["nav-item-2"];
headerNav[2].textContent = siteContent.nav["nav-item-3"];
headerNav[3].textContent = siteContent.nav["nav-item-4"];
headerNav[4].textContent = siteContent.nav["nav-item-5"];
headerNav[5].textContent = siteContent.nav["nav-item-6"];

const domHeading = document.querySelector("h1");
domHeading.textContent = siteContent.cta.h1;

headerNav.forEach(nav => {
  nav.style.color = "green"
})

//cta
const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "</br>");

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

// create two new elements
const newNav =document.querySelector("nav");

const newElement1 = document.createElement('a');
newElement1.textContent = "Home";
newElement1.href = "#";
newElement1.style.color = "green";

const newElement2 = document.createElement('a');
newElement2.textContent = "Blog";
newElement2.href = "#";
newElement2.style.color = "green";


newNav.prepend(newElement1);
newNav.appendChild(newElement2);

//Top content
const customBtn = document.querySelector("button");
customBtn.textContent = siteContent.cta.button;

const codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute("src", siteContent.cta["img-src"]);

//middle content
const headingsList = document.querySelectorAll("h4");
headingsList[0].textContent = siteContent["main-content"]["features-h4"];
headingsList[1].textContent = siteContent["main-content"]["about-h4"];
headingsList[2].textContent = siteContent["main-content"]["services-h4"];
headingsList[3].textContent = siteContent["main-content"]["product-h4"];
headingsList[4].textContent = siteContent["main-content"]["vision-h4"];

const pTextList = document.querySelectorAll("p");
pTextList[0].textContent = siteContent["main-content"]["features-content"];
pTextList[1].textContent = siteContent["main-content"]["about-content"];
pTextList[2].textContent = siteContent["main-content"]["services-content"];
pTextList[3].textContent = siteContent["main-content"]["product-content"];
pTextList[4].textContent = siteContent["main-content"]["vision-content"];

const midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
const contactList = document.querySelectorAll("h4");
contactList[5].textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll("p");
contactP[5].textContent = siteContent.contact["address"];
contactP[6].textContent = siteContent.contact["phone"];
contactP[7].textContent = siteContent.contact["email"];
contactP[8].textContent = siteContent.footer["copyright"]