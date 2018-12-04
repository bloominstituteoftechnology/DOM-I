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
// const logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const newElement = (tag, attr, attrVal, textContent) => {
  let newEl = document.createElement(tag);
  newEl[`${attr}`] = `${attrVal}`;
  newEl.textContent = `${textContent}`;
  return newEl
}

// ========== Nav

// Hook into nav
const nav = document.querySelector('nav');


// JSON nav Keys into Array then filter for only nav keys
const keys = Object.keys(siteContent.nav);
const navKeys = keys.filter((item) => {
    return item.includes('nav');
})

// New nav item created and appended to Nav
const portfolio = newElement('a', 'href', '#', 'Portfolio');
nav.appendChild(portfolio);

// Hood into a tags
const navAnchors = document.querySelectorAll('a');
console.log(navAnchors);

// Iterate of navKeys array and apply text content to nav items
// turn nav items green
navAnchors.forEach((item, index) => {
  if (item.textContent === undefined || item.textContent === "") {
    item.textContent = siteContent.nav[navKeys[index]];
  }
  item.style.color = 'green';
});


const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.nav["img-src"];





// ========== Header Content

const headerTitle = document.querySelector('.cta-text h1')
headerTitle.textContent = siteContent.cta.h1

const headerButton = document.querySelector('.cta-text').querySelector('button');
headerButton.textContent = siteContent.cta.button;

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent.cta["img-src"];



// ========== Main Content ======== //

// Top Content
const topContent = document.querySelector('.top-content').querySelectorAll('.text-content');
// console.log(topContent);

const featuresHeader = topContent[0].querySelector('h4');
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = topContent[0].querySelector('p');
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeader = topContent[1].querySelector('h4');
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = topContent[1].querySelector('p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];


// Bottom Content

const bottomContent = document.querySelector('.bottom-content').querySelectorAll('.text-content');
console.log(topContent);

const servicesHeader = bottomContent[0].querySelector('h4');
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = bottomContent[0].querySelector('p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productHeader = bottomContent[1].querySelector('h4');
productHeader.textContent = siteContent["main-content"]["product-h4"];

const productContent = bottomContent[1].querySelector('p');
productContent.textContent = siteContent["main-content"]["product-content"];

const visionHeader = bottomContent[2].querySelector('h4');
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = bottomContent[2].querySelector('p');
visionContent.textContent = siteContent["main-content"]["vision-content"];



// Contact 

const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
const contactP = contact.querySelectorAll('p');

contactHeader.textContent = siteContent.contact["contact-h4"];

contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;



// Footer

const footerContent = document.querySelector('footer').querySelector('p');
footerContent.textContent = siteContent.footer.copyright;





