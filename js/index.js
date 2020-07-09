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

//Nav Items
let navItems = document.querySelectorAll("a");
for (let i=0; i<navItems.length; i++){
  navItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

// Change the color of Nav
for(let i=0; i<navItems.length; i++){
  navItems[i].style.color = 'green';
}

// Added two new items to Nav
const nav = document.querySelector('nav');
const newItems = ['Gallery', 'Blog'];
for (let i=0; i<newItems.length; i++){
  const aTag = document.createElement('a');
  aTag.textContent = newItems[i];
  nav.appendChild(aTag);
}

// CTA Section
const ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];

// Main Section //
// Content H4
const keyTitlesH4 = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4'];

// Content P
const keyTitlesP = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content'];
const mainContentP = document.querySelectorAll('.main-content .text-content p');
for (let i=0; i<keyTitlesP.length; i++){
  mainContentP[i].textContent = siteContent['main-content'][keyTitlesP[i]];
}

// Content Image
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];




