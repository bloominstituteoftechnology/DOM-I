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

// Navigation
let navbar = document.querySelectorAll("nav a");
navbar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navbar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navbar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navbar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navbar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navbar[5].innerHTML = siteContent["nav"]["nav-item-6"];

// Logo image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// CTA text
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

// CTA button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// CTA image
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);

// Top content headers
let topContentHeader = document.querySelectorAll(".main-content .top-content h4");
topContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeader[1].innerHTML = siteContent["main-content"]["about-h4"];

// Top content text
let topContentText = document.querySelectorAll(".main-content .top-content p");
topContentText[0].innerHTML = siteContent["main-content"]["features-content"];
topContentText[1].innerHTML = siteContent["main-content"]["about-content"];

// Middle image
let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom content headers
let bottomContentHeader = document.querySelectorAll(".main-content .bottom-content h4");
bottomContentHeader[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].innerHTML = siteContent["main-content"]["vision-h4"];

// Bottom content text
let bottomContentText = document.querySelectorAll(".main-content .bottom-content p");
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];