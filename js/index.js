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
// HTML ELEMENTS STORAGE
const header = document.querySelector('header');
//Navigation
const navigation = document.querySelector('nav');
const navigationLinks = Array.from(document.querySelectorAll('a'));
// Logo
const logo = document.querySelector("#logo-img");
//Call to Action
const cta = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
const ctaH1 = ctaText.children[0];
const ctaBTN = ctaText.children[1];
const ctaImg = document.querySelector('#cta-img');
// Main Content
const mainContent = document.querySelector('.main-content');
const topContent = document.querySelector('.top-content');
// Top Content
// Top Text Content One
const topTextContentOne = topContent.children[0];
const topContentOneH4= topTextContentOne.children[0];
const topContentOneP= topTextContentOne.children[1];
// Top Text Content Two
const topTextContentTwo = topContent.children[1];
const topContentTwoH4= topTextContentTwo.children[0];
const topContentTwoP= topTextContentTwo.children[1];
// Middle Image 
const midImg = document.querySelector('#middle-img');
// Bottom Content
const bottomContent = document.querySelector('.bottom-content');
// Bottom Text Content One
const botTextCotentOne = topContent.children[0];
const botTextCotentOneH4= botTextCotentOne.children[0];
const botTextCotentOneP= botTextCotentOne.children[1];
// Bottom Text Content Two
const botTextCotentTwo = topContent.children[1];
const botTextCotentTwoH4= botTextCotentTwo.children[0];
const botTextCotentTwoP= botTextCotentTwo.children[1];
// Bottom Text Content Three
const botTextCotentThree = topContent.children[2];
const botTextCotentThreeH4= botTextCotentThree.children[0];
const botTextCotentThreeP= botTextCotentThree.children[1];
// Contact
const contact = document.querySelector('.contact');
const contactH4 = contact.children[0];
const contactP1 = contact.children[1];
const contactP2 = contact.children[2];
const contactP3 = contact.children[3];
//Footer
const footer = document.querySelector('footer');
const footerP = footer.children[0]

// logo.setAttribute('src', siteContent["nav"]["img-src"])
