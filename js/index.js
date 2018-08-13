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

console.log(Object.keys(1));
console.log(siteContent['cta']['h1']);
console.log(siteContent['main-content']["middle-img-src"]);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const ctaImg  = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const nav1 = document.querySelectorAll("nav a");
nav1.forEach((value, index) => {
value.innerHTML  = siteContent.nav[`nav-item-${index + 1}`]
});

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1']; 

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button']

const textContent = document.querySelectorAll('.text-content h4');
textContent[0].innerHTML = siteContent['main-content']["features-h4"]
textContent[1].innerHTML = siteContent['main-content']["about-h4"]
textContent[2].innerHTML = siteContent['main-content']["services-h4"]
textContent[3].innerHTML = siteContent['main-content']["product-h4"]
textContent[4].innerHTML = siteContent['main-content']["vision-h4"]

const textContentP = document.querySelectorAll('.text-content p');
textContentP[0].innerHTML = siteContent['main-content']["features-content"]
textContentP[1].innerHTML = siteContent['main-content']["about-content"]
textContentP[2].innerHTML = siteContent['main-content']["services-content"]
textContentP[3].innerHTML = siteContent['main-content']["product-content"]
textContentP[4].innerHTML = siteContent['main-content']["vision-content"]

const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main-content']["middle-img-src"])

const contact = document.querySelector('.contact h4');
contact.innerHTML = siteContent['contact']["contact-h4"];

const contactP = document.querySelectorAll('.contact p');

contactP[0].innerHTML = siteContent['contact']['address']
contactP[1].innerHTML = siteContent['contact']['phone']
contactP[2].innerHTML = siteContent['contact']['email']

const footer = document.querySelector('footer p');
footer.innerHTML= siteContent['footer']['copyright'];







