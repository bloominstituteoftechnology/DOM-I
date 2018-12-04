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
// SETTING THE TEXT OF THE A TAGS
const links = document.querySelectorAll('a');
console.log(links);
console.log(links[0]);
console.log(siteContent.nav[`nav-item-${1}`]);

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i}`];
}
// SET LOGO IMAGE SOURCE
const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent['cta']['img-src'];



// SET H4 TAGS

let h4 = document.querySelectorAll(".main-content h4");
let mainContentArray = ["features", "about", "services", "product", "vision"];
for (let i = 0; i < mainContentArray.length; i++) {
  h4[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-h4`];
}

// SET MAIN CONTENT TAGS
let mainParagraphs = document.querySelectorAll('.main-content p');
for (let i = 0; i < mainContentArray.length; i++) {
  mainParagraphs[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-content`];
}