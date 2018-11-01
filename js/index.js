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

let anchors = document.querySelectorAll("a");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].textContent = siteContent ["nav"][`nav-item-${i+1}`];
  anchors[i].style.color = 'green';
}

const headerNav = document.querySelector('nav');

const newAnchor1 = document.createElement('a')
newAnchor1.textContent = 'Privacy Policy';
newAnchor1.style.color = 'green';

const newAnchor2 = document.createElement('a')
newAnchor2.textContent = 'Blog';
newAnchor2.style.color = 'green';

headerNav.appendChild(newAnchor1);
headerNav.prepend(newAnchor2);

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let header1 = document.querySelector("h1");
siteContent.cta["h1"] = "DOM<br> Is<br> Awesome";
header1.innerHTML = siteContent.cta["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])

let mainHeader4 = document.querySelectorAll(".main-content h4");
mainHeader4[0].textContent = siteContent["main-content"]["features-h4"];
mainHeader4[1].textContent = siteContent["main-content"]["about-h4"];
mainHeader4[2].textContent = siteContent["main-content"]["services-h4"];
mainHeader4[3].textContent = siteContent["main-content"]["product-h4"];
mainHeader4[4].textContent = siteContent["main-content"]["vision-h4"];

let mainContent = document.querySelectorAll(".main-content p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];

let contactHeader4 = document.querySelector(".contact h4");
contactHeader4.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
siteContent.contact["address"] = "123 Way 456 Street <br> Somewhere, USA";
contactContent[0].innerHTML = siteContent.contact["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];



let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];


