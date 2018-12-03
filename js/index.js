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

// navigation
const navigation = document.querySelectorAll('a');
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];

// image header
let himage = document.getElementById("cta-img");
himage.src = siteContent['cta']['img-src'];

// cta h1
let ctih1 = document.querySelector('.cta .cta-text h1');
ctih1.textContent = siteContent['cta']['h1'];

// cta button
let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

// main content
const mTitles = document.querySelectorAll('h4');
mTitles[0].textContent = siteContent["main-content"]["features-h4"];
mTitles[1].textContent = siteContent["main-content"]["about-h4"];
mTitles[2].textContent = siteContent["main-content"]["services-h4"];
mTitles[3].textContent = siteContent["main-content"]["product-h4"];
mTitles[4].textContent = siteContent["main-content"]["vision-h4"];

const mContent = document.querySelectorAll('p');
mContent[0].textContent = siteContent["main-content"]["features-content"];
mContent[1].textContent = siteContent["main-content"]["about-content"];
mContent[2].textContent = siteContent["main-content"]["services-content"];
mContent[3].textContent = siteContent["main-content"]["product-content"];
mContent[4].textContent = siteContent["main-content"]["vision-content"];

// image between contents
const mImage = document.getElementById("middle-img");
mImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact info
const cTitle = document.querySelector('.contact h4');
cTitle.textContent = siteContent.contact["contact-h4"];
const cPar = document.querySelectorAll('.contact p');
cPar[0].textContent = siteContent.contact["address"];
cPar[1].textContent = siteContent.contact["phone"];
cPar[2].textContent = siteContent.contact["email"];


// Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer["copyright"]; 