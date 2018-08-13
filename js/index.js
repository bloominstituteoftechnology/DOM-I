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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let navBar = document.querySelectorAll('nav a');
for (let i = 1; i < navBar.length; i++) {
  navBar[i].innerHTML = siteContent["nav"][`nav-item-${i}`]
}

for (let i = 1; i < navBar.length; i++) {
  navBar[i].style.color = "green";
}

let parent = document.querySelector('nav');

let append = document.querySelector('a');
parent.appendChild(append);
append.innerText = "yeet";

let prepend1 = document.querySelector('a');
parent.prepend(prepend1);
prepend1.innerText = "noot";


//cta

let ctaHeader = document.querySelector('.cta h1');
ctaHeader.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main-conent

let mainContentHeader = document.querySelectorAll('.main-content h4');
mainContentHeader[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHeader[1].innerHTML = siteContent["main-content"]["services-h4"];
mainContentHeader[2].innerHTML = siteContent["main-content"]["about-h4"];
mainContentHeader[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentHeader[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainContentP = document.querySelectorAll('.main-content p');
mainContentP[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentP[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentP[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentP[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentP[4].innerHTML = siteContent["main-content"]["vision-content"];

let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// contact

let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

// footer 

let footer1 = document.querySelector('footer p');
footer1.innerHTML = siteContent["footer"]["copyright"];


