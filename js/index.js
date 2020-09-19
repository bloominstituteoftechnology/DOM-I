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
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.src = siteContent['nav']['img-src'];


// looping through anchor tags using forEach
let navItems = document.querySelectorAll('a');
navItems.forEach((element, index) => element.textContent = siteContent['nav']['nav-item-' + (index + 1)]);
// cta h1
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];
// cta button
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button']
// cta image
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];
// middle image
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
// grabbing h4 and p tags
let h4Items = document.querySelectorAll('h4');
let pItems = document.querySelectorAll('p');
// h4 tags
h4Items[0].textContent = siteContent['main-content']['features-h4'];
h4Items[1].textContent = siteContent['main-content']['about-h4'];
h4Items[2].textContent = siteContent['main-content']['services-h4'];
h4Items[3].textContent = siteContent['main-content']['product-h4'];
h4Items[4].textContent = siteContent['main-content']['vision-h4'];
h4Items[5].textContent = siteContent['contact']['contact-h4'];
// p tags
pItems[0].textContent = siteContent['main-content']['features-content']
pItems[1].textContent = siteContent['main-content']['about-content'];
pItems[2].textContent = siteContent['main-content']['services-content']
pItems[3].textContent = siteContent['main-content']['product-content'];
pItems[4].textContent = siteContent['main-content']['vision-content'];
pItems[5].textContent = siteContent['contact']['address'];
pItems[6].textContent = siteContent['contact']['phone'];
pItems[7].textContent = siteContent['contact']['email'];
pItems[8].textContent = siteContent['footer']['copyright']