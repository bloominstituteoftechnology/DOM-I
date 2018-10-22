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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`];
});

const cta = document.querySelector('.cta');
const ctaText = cta.querySelector('.cta-text');
ctaText.querySelector('h1').innerHTML = siteContent.cta.h1.split(' ').join('<br />');
ctaText.querySelector('button').textContent = siteContent.cta.button;
cta.querySelector('#cta-img').src = siteContent.cta['img-src'];

const mainContent = document.querySelector('.main-content');
const topTextContents = mainContent.querySelectorAll('.top-content .text-content');
const bottomTextContents = mainContent.querySelectorAll('.bottom-content .text-content');
topTextContents[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topTextContents[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
topTextContents[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topTextContents[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
mainContent.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];
bottomTextContents[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
bottomTextContents[0].querySelector('p').textContent = siteContent['main-content']['services-content'];
bottomTextContents[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
bottomTextContents[1].querySelector('p').textContent = siteContent['main-content']['product-content'];
bottomTextContents[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
bottomTextContents[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
const contactParagraphs = contact.querySelectorAll('p');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contactParagraphs[0].innerHTML = siteContent.contact.address.split('Street').join('Street <br />');
contactParagraphs[1].textContent = siteContent.contact.phone;
contactParagraphs[2].textContent = siteContent.contact.email;

document.querySelector('footer p').textContent = siteContent.footer.copyright;