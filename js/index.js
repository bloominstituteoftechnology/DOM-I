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
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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

//update nav
const nav = document.getElementsByTagName("nav"); 
const nav1 = document.querySelectorAll("a");
const h1 = document.querySelectorAll("h1");
const button = document.querySelectorAll("button");
const features = document.querySelectorAll("h4");
const para = document.querySelectorAll("p");
//const contact = document.querySelectorAll("h");

//navFirst.setAttribute("href", siteContent["nav"]["nav-item-1"]);
nav1[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav1[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav1[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav1[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav1[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav1[5].innerHTML = siteContent["nav"]["nav-item-6"];

const newNav = document.createElement('a');
const homeElement = document.querySelector('nav');
homeElement.prepend(newNav);
newNav.innerHTML = "Awards";

const newNav2 = document.createElement('a');
const homeElement2 = document.querySelector('nav');
homeElement2.appendChild(newNav2);
newNav2.innerHTML = "Freebies";

newNav2.style.color = "green";
newNav.style.color = "green";
nav1[1].style.color = "green";
nav1[2].style.color = "green";
nav1[3].style.color = "green";
nav1[4].style.color = "green";
nav1[5].style.color = "green";
nav1[0].style.color = "green";


// nav.prepend(newElement2);
// newElement2.href = "Wassup";

h1[0].innerHTML = siteContent["cta"]["h1"];
button[0].innerHTML = siteContent["cta"]["button"];

features[0].innerHTML = siteContent["main-content"]["features-h4"];
features[1].innerHTML = siteContent["main-content"]["about-h4"];
features[2].innerHTML = siteContent["main-content"]["services-h4"];
features[3].innerHTML = siteContent["main-content"]["product-h4"];
features[4].innerHTML = siteContent["main-content"]["vision-h4"];

para[0].innerHTML = siteContent["main-content"]["features-content"];
para[1].innerHTML = siteContent["main-content"]["about-content"];
para[2].innerHTML = siteContent["main-content"]["services-content"];
para[3].innerHTML = siteContent["main-content"]["product-content"];
para[4].innerHTML = siteContent["main-content"]["vision-content"];

features[5].innerHTML = siteContent["contact"]["contact-h4"];
para[5].innerHTML = siteContent["contact"]["address"];
para[6].innerHTML = siteContent["contact"]["phone"];
para[7].innerHTML = siteContent["contact"]["email"];

para[8].innerHTML = siteContent["footer"]["copyright"];

const ctaImg = document.getElementById("cta-img");
ctaImg.src = 'img/header-img.png';

const middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg";
