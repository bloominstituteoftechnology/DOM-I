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

let midImg = document.getElementById("middle-img")
midImg.setAttribute("src", "img/mid-page-accent.jpg")

//nav
let navCh = document.querySelectorAll("a");
navCh[0].textContent = siteContent["nav"]["nav-item-1"];
navCh[1].textContent = siteContent["nav"]["nav-item-2"];
navCh[2].textContent = siteContent["nav"]["nav-item-3"];
navCh[3].textContent = siteContent["nav"]["nav-item-4"];
navCh[4].textContent = siteContent["nav"]["nav-item-5"];
navCh[5].textContent = siteContent["nav"]["nav-item-6"];

navCh.forEach(function(currentValue){
  currentValue.style.color = "green"
});

let nav = document.querySelector("nav");
const news =  document.createElement("a");
news.textContent = "prepend"
nav.prepend(news);

const news2 = document.createElement("a");
news2.textContent = "append"
nav.append(news2);

//CTA
let hedImg = document.getElementById("cta-img");
hedImg.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");

let but = document.querySelector("button");
but.textContent = siteContent["cta"]["button"];

//Main h4s
let mainP = document.querySelectorAll(".main-content .text-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];


let mainH4 = document.querySelectorAll(".main-content .text-content h4");
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

//Contact
let contactsH4 = document.querySelector(".contact h4");
contactsH4.textContent = siteContent["contact"]["contact-h4"];

let contactsP = document.querySelectorAll(".contact p");
contactsP[0].textContent = siteContent["contact"]["address"];
contactsP[1].textContent = siteContent["contact"]["phone"];
contactsP[2].textContent = siteContent["contact"]["email"];

let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];