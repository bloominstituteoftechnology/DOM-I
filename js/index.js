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

// Nav Items
let navBar = document.querySelector("nav");
let newNavItem1 = document.createElement("a");
let newNavItem2 = document.createElement("a");
newNavItem1.innerText = "Element 1";
newNavItem2.innerText = "Element 2";
newNavItem1.style.color = "green";
newNavItem2.style.color = "green";

let navBarItems = document.querySelectorAll('a');
navBar.prepend(newNavItem1);
navBarItems[0].innerText = siteContent["nav"]["nav-item-1"];
navBarItems[1].innerText = siteContent["nav"]["nav-item-2"];
navBarItems[2].innerText = siteContent["nav"]["nav-item-3"];
navBarItems[3].innerText = siteContent["nav"]["nav-item-4"];
navBarItems[4].innerText = siteContent["nav"]["nav-item-5"];
navBarItems[5].innerText = siteContent["nav"]["nav-item-6"];
navBar.appendChild(newNavItem2);

navBarItems.forEach(function (elem) {
  elem.style = "color:green; text-decoration: none;";
});

// Logo
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA
// let ctaText = document.getElementsByClassName("cta-text");
// ctaText.style = "";

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector("h1");
ctaH1.innerText = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector("button");
ctaBtn.innerText = siteContent["cta"]["button"];

// Main Content
// H4's
let h4Items = document.querySelectorAll('h4');
h4Items[0].innerText = siteContent["main-content"]["features-h4"];
h4Items[1].innerText = siteContent["main-content"]["about-h4"];
h4Items[2].innerText = siteContent["main-content"]["services-h4"];
h4Items[3].innerText = siteContent["main-content"]["product-h4"];
h4Items[4].innerText = siteContent["main-content"]["vision-h4"];

// Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Paragraph items
let pItems = document.querySelectorAll('p');
pItems[0].innerText = siteContent["main-content"]["features-content"];
pItems[1].innerText = siteContent["main-content"]["about-content"];
pItems[2].innerText = siteContent["main-content"]["services-content"];
pItems[3].innerText = siteContent["main-content"]["product-content"];
pItems[4].innerText = siteContent["main-content"]["vision-content"];

// Contact
h4Items[5].innerText = siteContent["contact"]["contact-h4"];
pItems[5].innerText = siteContent["contact"]["address"];
pItems[6].innerText = siteContent["contact"]["phone"];
pItems[7].innerText = siteContent["contact"]["email"];

// Footer
pItems[8].innerText = siteContent["footer"]["copyright"];
