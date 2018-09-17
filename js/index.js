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

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let midLogo = document.getElementById("middle-img");
midLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let nav = document.getElementsByTagName("a");
nav[0].innerHTML =siteContent["nav"]["nav-item-1"];
nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[3].innerHTML =siteContent["nav"]["nav-item-4"];
nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[5].innerHTML = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector("h1");
cta.innerHTML = siteContent["cta"]["h1"];
cta.innerHTML = "DOM <br> is <br> Awesome";

const mainButton = document.querySelector("Button");
mainButton.innerHTML = siteContent["cta"]["button"];

let mainContent = document.getElementsByTagName("h4");
mainContent[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContent[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[4].innerHTML = siteContent["main-content"]["vision-h4"];
mainContent[5].innerHTML = siteContent["contact"]["contact-h4"];

let paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = siteContent["main-content"]["features-content"];
paragraph[1].innerHTML = siteContent["main-content"]["about-content"];
paragraph[2].innerHTML = siteContent["main-content"]["services-content"];
paragraph[3].innerHTML = siteContent["main-content"]["product-content"];
paragraph[4].innerHTML = siteContent["main-content"]["vision-content"];
paragraph[5].innerHTML = siteContent["contact"]["address"];
paragraph[6].innerHTML = siteContent["contact"]["phone"];
paragraph[7].innerHTML = siteContent["contact"]["email"];
paragraph[8].innerHTML = siteContent["footer"]["copyright"];

cta.innerHTML = "DOM <br> is <br> Awesome";