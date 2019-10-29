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

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const navSection = document.querySelector('nav');
let newLinkA = document.createElement('a');
newLinkA.textContent = 'Travel';
let newLinkB = document.createElement('a');
newLinkB.textContent = 'Music';

navSection.prepend(newLinkA);
navSection.appendChild(newLinkB);


const anchorTags = document.querySelectorAll('a');
anchorTags[1].textContent = siteContent['nav']['nav-item-1'];
anchorTags[2].textContent = siteContent['nav']['nav-item-2'];
anchorTags[3].textContent = siteContent['nav']['nav-item-3'];
anchorTags[4].textContent = siteContent['nav']['nav-item-4'];
anchorTags[5].textContent = siteContent['nav']['nav-item-5'];
anchorTags[6].textContent = siteContent['nav']['nav-item-6'];

anchorTags.forEach(anchorTags => (anchorTags.style.color = 'Green'));
anchorTags.forEach(anchorTags => (anchorTags.style.textDecorationColor = 'red'));
anchorTags.forEach(anchorTags => (anchorTags.style.pointer));

const logoImage = document.querySelector('#logo-img');
logoImage.src = siteContent['nav']['img-src'];
logoImage.alt = 'Great Idea! Company logo.';

//CTA SECTION

//CTA-TEXT DIV
const heroText = document.querySelector('h1');
heroText.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];
ctaImg.alt = 'Image of code snippets';


//MAIN CONTENT SECTION
//TOP CONTENT DIV
const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
middleImg.alt = 'Image of code snippets across the screen';

const contentH4 = document.querySelectorAll('h4');

contentH4[0].textContent = siteContent['main-content']['features-h4'];
contentH4[1].textContent = siteContent['main-content']['about-h4'];
contentH4[2].textContent = siteContent['main-content']['services-h4'];
contentH4[3].textContent = siteContent['main-content']['product-h4'];
contentH4[4].textContent = siteContent['main-content']['vision-h4'];
contentH4[5].textContent = siteContent['contact']['contact-h4'];

const contentText = document.querySelectorAll('p');
contentText[0].textContent = siteContent['main-content']['features-content'];
contentText[1].textContent = siteContent['main-content']['about-content'];
contentText[2].textContent = siteContent['main-content']['services-content'];
contentText[3].textContent = siteContent['main-content']['product-content'];
contentText[4].textContent = siteContent['main-content']['vision-content'];



//Contact Class
contentText[5].textContent = siteContent['contact']['address'];
contentText[6].textContent = siteContent['contact']['phone'];
contentText[7].textContent = siteContent['contact']['email'];

//FOOTER DIV
const footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright'];


