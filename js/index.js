({
  "plugins": ["jsdom-quokka-plugin"],
  "jsdom": {
    "file": "index.html",
  }
})

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
let aInNav = document.querySelectorAll('a');
aInNav[0].textContent = siteContent.nav["nav-item-1"];
aInNav[1].textContent = siteContent.nav["nav-item-2"];
aInNav[2].textContent = siteContent.nav["nav-item-3"];
aInNav[3].textContent = siteContent.nav["nav-item-4"];
aInNav[4].textContent = siteContent.nav["nav-item-5"];
aInNav[5].textContent = siteContent.nav["nav-item-6"];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta = document.querySelector('.cta-text').childNodes;
cta[1].textContent = siteContent.cta["h1"];
cta[3].textContent = siteContent.cta["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let h4NodeList = document.querySelectorAll('h4');
h4NodeList[0].textContent = siteContent["main-content"]["features-h4"];
h4NodeList[1].textContent = siteContent["main-content"]["about-h4"];
h4NodeList[2].textContent = siteContent["main-content"]["services-h4"];
h4NodeList[3].textContent = siteContent["main-content"]["product-h4"];
h4NodeList[4].textContent = siteContent["main-content"]["vision-h4"];
h4NodeList[5].textContent = siteContent["contact"]["contact-h4"];

let midImg = document.getElementById('middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

let textContentPList = document.querySelectorAll('.text-content p');
textContentPList[0].textContent = siteContent["main-content"]["features-content"];
textContentPList[1].textContent = siteContent["main-content"]["about-content"];
textContentPList[2].textContent = siteContent["main-content"]["services-content"];
textContentPList[3].textContent = siteContent["main-content"]["product-content"];
textContentPList[4].textContent = siteContent["main-content"]["vision-content"];

let contactPList = document.querySelectorAll('.contact p');
contactPList[0].textContent = siteContent["contact"]["address"];
contactPList[1].textContent = siteContent["contact"]["phone"];
contactPList[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent["footer"]["copyright"];