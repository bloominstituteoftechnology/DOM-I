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

let headerNavAppend = document.querySelector("nav"); 
let headerNavColor = document.querySelectorAll("nav a"); 
let headerNav = document.querySelectorAll("nav a");
let ctaContent = document.querySelector(".cta-text h1");
let ctaContentButton = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");
let mainContentTopContentH = document.querySelectorAll(".top-content .text-content h4");
let mainContentTopContentP = document.querySelectorAll(".top-content .text-content p");
let middleImg = document.querySelector("#middle-img");
let bottomContentH = document.querySelectorAll(".bottom-content .text-content h4");
let bottomContentP = document.querySelectorAll(".bottom-content .text-content p");
let contactH = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer p");

headerNav[0].innerText = siteContent["nav"]["nav-item-1"];
headerNav[1].innerText = siteContent["nav"]["nav-item-2"];
headerNav[2].innerText = siteContent["nav"]["nav-item-3"];
headerNav[3].innerText = siteContent["nav"]["nav-item-4"];
headerNav[4].innerText = siteContent["nav"]["nav-item-5"];
headerNav[5].innerText = siteContent["nav"]["nav-item-6"];

ctaContent.innerText = siteContent["cta"]["h1"];
ctaContentButton.innerText = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

mainContentTopContentH[0].innerText = siteContent["main-content"]["features-h4"];
mainContentTopContentP[0].innerText = siteContent["main-content"]["features-content"];

mainContentTopContentH[1].innerText = siteContent["main-content"]["about-h4"];
mainContentTopContentP[1].innerText = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

bottomContentH[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentP[0].innerText = siteContent["main-content"]["services-content"];

bottomContentH[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentP[1].innerText = siteContent["main-content"]["product-content"];

bottomContentH[2].innerText = siteContent["main-content"]["vision-h4"];
bottomContentP[2].innerText = siteContent["main-content"]["vision-content"];

contactH.innerText = siteContent["contact"]["contact-h4"];
contactP[0].innerText = siteContent["contact"]["address"];
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

footer.innerText = siteContent["footer"]["copyright"];

headerNavColor[0].style.color = "green";
headerNavColor[1].style.color = "green";
headerNavColor[2].style.color = "green";
headerNavColor[3].style.color = "green";
headerNavColor[4].style.color = "green";
headerNavColor[5].style.color = "green";



let appendedNav = document.createTextNode("nav1");
headerNavAppend.appendChild(appendedNav);

let prependedNav = document.createTextNode("nav2");
headerNavAppend.prepend(prependedNav);

