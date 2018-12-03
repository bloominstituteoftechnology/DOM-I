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

//=============================================== Header 
const mainNav = document.querySelectorAll('a');
mainNav[0].textContent = siteContent.nav["nav-item-1"];
mainNav[1].textContent = siteContent.nav["nav-item-2"];
mainNav[2].textContent = siteContent.nav["nav-item-3"];
mainNav[3].textContent = siteContent.nav["nav-item-4"];
mainNav[4].textContent = siteContent.nav["nav-item-5"];
mainNav[5].textContent = siteContent.nav["nav-item-6"];
// Array.from(mainNav);
// siteContent.nav.forEach((currentvalue) => {
//   mainNav.push(currentvalue["nav-item"]);
// });

//=============================================== CTA

const ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta["button"];

const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent.cta["img-src"]);

//=============================================== Main Content

const subTitles = document.querySelectorAll('h4');
subTitles[0].textContent = siteContent["main-content"]["features-h4"];
subTitles[1].textContent = siteContent["main-content"]["about-h4"];
subTitles[2].textContent = siteContent["main-content"]["services-h4"];
subTitles[3].textContent = siteContent["main-content"]["product-h4"];
subTitles[4].textContent = siteContent["main-content"]["vision-h4"];

const para = document.querySelectorAll('p');
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"];

const middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//=============================================== Contact

subTitles[5].textContent = siteContent.contact["contact-h4"];
para[5].textContent = siteContent.contact["address"];
para[6].textContent = siteContent.contact["phone"];
para[7].textContent = siteContent.contact["email"];


//=============================================== footer

para[8].textContent = siteContent.footer["copyright"];