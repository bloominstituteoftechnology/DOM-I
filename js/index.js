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





let nav = document.querySelectorAll('a');
nav[0].textContent = 'Services';
nav[0].style.color = 'green'
nav[1].textContent = 'Product';
nav[1].style.color = 'green'
nav[2].textContent = 'Vision';
nav[2].style.color = 'green'
nav[3].textContent = 'Features';
nav[3].style.color = 'green'
nav[4].textContent = 'About';
nav[4].style.color = 'green'
nav[5].textContent = 'Contact';
nav[5].style.color = 'green'

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = "DOM Is Awesome";

let headerPic = document.getElementById("cta-img");
headerPic.setAttribute('src', siteContent["cta"]["img-src"])

const ctaButton = document.querySelector(".cta-text button").textContent = "Get Started";

function fill(items, values) {
  items.forEach((item, index) => item.innerText = values[index]);
}

let mainContentH4 = document.querySelectorAll('.text-content h4');
let mainContentKeys = Object.keys(siteContent['main-content']);
let h4Values = [];
mainContentKeys.forEach((key) => {
  if (key.includes('h4')) {
    h4Values.push(siteContent['main-content'][key]);
  }
});

fill(mainContentH4, h4Values);

let mainContentP = document.querySelectorAll('.text-content p');
let pValues = [];
mainContentKeys.forEach((key) => {
  if (key.includes('content')) {
    pValues.push(siteContent['main-content'][key]);
  }
});

fill(mainContentP, pValues);



let midPagePic = document.getElementById("middle-img");
midPagePic.setAttribute('src', siteContent["main-content"]["middle-img-src"])