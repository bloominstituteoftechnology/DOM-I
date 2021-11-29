const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navLinkSrc = siteContent["nav"]
const navLinks = document.querySelectorAll('nav a');



// Ask the question; How can I input new text using forEach with it saying object object
// navLinks.forEach(link => {
//    link.textContent = siteContent["nav"]["nav-item-1"];
// });

// image of logo
const logoSrc = siteContent["images"]["logo-img"];
const headerImage = document.querySelector('header img');
headerImage.setAttribute('src', logoSrc);

//image of cta
const ctaSrc = siteContent["images"]["cta-img"];
const ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', ctaSrc);

//cta text
const ctaSection = document.querySelector(".cta-text h1");
ctaSection.textContent = siteContent["cta"]["h1"];

//cta button
const ctaButton = document.querySelector("button")
ctaButton.textContent = siteContent["cta"]["button"];

//accent img
const accentSrc = siteContent["images"]["accent-img"];
const accentImage = document.querySelector('.main-content img');
accentImage.setAttribute('src', accentSrc);

//footer
const footerSrc = siteContent["footer"]["copyright"];
const footer = document.querySelector('footer a')
footer.textContent = footerSrc;

//top-content
const topContent = document.querySelector('.top-content');
const firstText = topContent.querySelector('.text-content:nth-of-type(1) h4');
const firstPara = topContent.querySelector('.text-content:nth-of-type(1) p');
firstText.textContent = siteContent["main-content"]["features-h4"];
firstPara.textContent = siteContent["main-content"]["features-content"];

//secont top content
const secondText = topContent.querySelector('.text-content:nth-of-type(2) h4');
const secondPara = topContent.querySelector('.text-content:nth-of-type(2) p');
secondText.textContent = siteContent["main-content"]["about-h4"];
secondPara.textContent = siteContent["main-content"]["about-content"];

