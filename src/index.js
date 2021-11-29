const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

 // Header
 const header = document.querySelector("header");
 const nav = document.querySelector("nav");
 const nav1 = document.querySelector("a:nth-of-type(1)");
 const nav2 = document.querySelector("a:nth-of-type(2)");
 const nav3 = document.querySelector("a:nth-of-type(3)");
 const nav4 = document.querySelector("a:nth-of-type(4)");
 const nav5 = document.querySelector("a:nth-of-type(5)");
 const nav6 = document.querySelector("a:nth-of-type(6)");
 
 //logo
 const logo = document.querySelector("#logo-img");

 //cta 
 const startButton = document.querySelector("button");
 const startText = document.querySelector("h1");
 const ctaImg = document.querySelector("#cta-img");

 //main content
const featureTitle = document.querySelector(".text-content:nth-of-type(1) h4");
const featuresPara = document.querySelector(".text-content:nth-of-type(1) p");
const aboutTitle = document.querySelector(".text-content:nth-of-type(2) h4");
const aboutPara = document.querySelector(".text-content:nth-of-type(2) p");
const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const servicesPara = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productPara = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionPara = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
const accentImage = document.querySelector("#middle-img");

const contact = document.querySelector(".contact h4");
const address = document.querySelector(".contact p:nth-of-type(1)");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");

//contact
const footer = document.querySelector("footer a")

//add text
  //nav
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav6.textContent = siteContent["nav"]["nav-item-6"];

 //cta
startText.textContent = siteContent["cta"]["h1"]
startButton.textContent = siteContent["cta"]["button"]
 // Titles
featureTitle.textContent = siteContent["main-content"]["features-h4"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
productTitle.textContent = siteContent["main-content"]["product-h4"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
 // Paragraphs
featuresPara.textContent = siteContent["main-content"]["features-content"];
aboutPara.textContent = siteContent["main-content"]["about-content"];;
servicesPara.textContent = siteContent["main-content"]["services-content"];
productPara.textContent = siteContent["main-content"]["product-content"];
visionPara.textContent = siteContent["main-content"]["vision-content"];
 //contact
contact.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];
 //footer
footer.textContent = siteContent["footer"]["copyright"];

 //class 
nav1.classList.add("italic");
nav2.classList.add("italic");
nav3.classList.add("italic");
nav4.classList.add("italic");
nav5.classList.add("italic");
nav6.classList.add("italic");

footer.classList.add("bold");

//image source
 logo.src = siteContent["images"]["logo-img"]; 
 ctaImg.src = siteContent["images"]["cta-img"]