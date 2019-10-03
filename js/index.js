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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav links
const nav = document.querySelectorAll('nav a'); //console.log(ctaH1);
const navArr = Array.from(nav);

for (let i = 0; i < navArr.length; i++) {
  const navLinks = `nav-item-${i+1}`;
  navArr[i].innerHTML = siteContent["nav"][navLinks];
};

//cta content
const ctaH1 = document.querySelector(".cta-text h1"); //console.log(ctaH1);
const ctaBtn = document.querySelector(".cta-text button"); //console.log(ctaBtn);
const ctaImg = document.querySelector("#cta-img"); //console.log(ctaImg);

ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaBtn.innerHTML = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//main content
const topTextH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
const topTextP = document.querySelectorAll(".main-content .top-content .text-content p");

const mainImg = document.querySelector(".main-content .middle-img");

const bottomTextH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");
const bottomTextP = document.querySelectorAll(".main-content .bottom-content .text-content p");

topTextH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topTextP[0].innerHTML = siteContent["main-content"]["features-content"];
topTextH4[1].innerHTML = siteContent["main-content"]["about-h4"];
topTextP[1].innerHTML = siteContent["main-content"]["about-content"];

mainImg.src = siteContent["main-content"]["middle-img-src"];

bottomTextH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomTextP[0].innerHTML = siteContent["main-content"]["services-content"];
bottomTextH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomTextP[1].innerHTML = siteContent["main-content"]["product-content"];
bottomTextH4[2].innerHTML = siteContent["main-content"]["vision-h4"];
bottomTextP[2].innerHTML = siteContent["main-content"]["vision-content"];

//contact content
const contactH4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");

contactH4.innerHTML = siteContent["contact"]["contact-h4"];
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

const footerP = document.querySelector("footer");
footerP.innerHTML = siteContent["footer"]["copyright"];