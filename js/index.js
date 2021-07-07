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

// Change Nav Color
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

// CTA Section //
//H1
const ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];
//Button
const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];
//Image
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];

// Main Section //
// H4
const contentTitlesH4 = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4'];
const mainContentH4 = document.querySelectorAll('.main-content .text-content h4');
for(let i=0; i<contentTitlesH4.length; i++){
  mainContentH4[i].textContent = siteContent['main-content'][contentTitlesH4[i]];
}

// P
const contentP = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content'];
const mainContentP = document.querySelectorAll('.main-content .text-content p');
for(let i=0; i<contentP.length; i++){
  mainContentP[i].textContent = siteContent['main-content'][contentP[i]];
}

// Image
const mainImg = document.querySelector('.main-content img');
mainImg.src = siteContent['main-content']['middle-img-src'];

// Contact Section //
//H4
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

// P
const contactkeyNames = ['address', 'phone', 'email'];
const contactP = document.querySelectorAll('.contact p');
for(let i=0; i<contactP.length; i++){
  contactP[i].textContent = siteContent['contact'][contactkeyNames[i]];
}

// Footer Section
//P
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

