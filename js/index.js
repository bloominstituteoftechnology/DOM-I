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

//my code:
const aList = document.getElementsByTagName("a");
aList[0].innerHTML = "Services";
aList[1].innerHTML = "Product";
aList[2].innerHTML = "Vision";
aList[3].innerHTML = "Features";
aList[4].innerHTML = "About";
aList[5].innerHTML = "Contact";

document.querySelector("h1").innerHTML = "DOM Is Awesome";
document.querySelector("button").innerHTML = "Get Started";
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

const titles = document.getElementsByTagName("h4");
const info = document.getElementsByTagName("p");

titles[0].innerHTML = siteContent["main-content"]["features-h4"];
info[0].innerHTML = siteContent["main-content"]["features-content"];
titles[1].innerHTML = siteContent["main-content"]["about-h4"];
info[1].innerHTML = siteContent["main-content"]["about-content"];
titles[2].innerHTML = siteContent["main-content"]["services-h4"];
info[2].innerHTML = siteContent["main-content"]["services-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

titles[3].innerHTML = siteContent["main-content"]["product-h4"];
info[3].innerHTML = siteContent["main-content"]["product-content"];
titles[4].innerHTML = siteContent["main-content"]["vision-h4"];
info[4].innerHTML = siteContent["main-content"]["vision-content"];


titles[5].innerHTML = siteContent["contact"]["contact-h4"];
info[5].innerHTML = siteContent["contact"]["address"];
info[6].innerHTML = siteContent["contact"]["phone"];
info[7].innerHTML = siteContent["contact"]["email"];

info[8].innerHTML = siteContent["footer"]["copyright"];
