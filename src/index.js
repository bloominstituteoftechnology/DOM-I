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

//nav bar

const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav);
console.log(linkTexts);
navLinks.forEach(function(link, idx){
  link.textContent = linkTexts[idx];
});

//logo
const logoImg = document.querySelector('#logo-img');
console.log(logoImg);
logoImg.src = siteContent.images['logo-img'];

//main title
const mainTitle = document.querySelector('h1');
mainTitle.textContent = siteContent.cta.h1;

const mainTitleButton = document.querySelector('button');
mainTitleButton.textContent = siteContent.cta.button;

const mainTitleImg = document.querySelector('#cta-img');
console.log(mainTitleImg);
mainTitleImg.src = siteContent.images['cta-img'];

//top content
const topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

const accentImg = document.querySelector('.middle-img');
accentImg.src = siteContent.images['accent-img'];

//bottom content
const bottomContent = document.querySelector('.bottom-content');
const h4sBottom = bottomContent.querySelectorAll('h4');
h4sBottom[0].textContent = siteContent['main-content']['services-h4'];
h4sBottom[1].textContent = siteContent['main-content']['product-h4'];
h4sBottom[2].textContent = siteContent['main-content']['vision-h4'];

// bottomContent.children[2].children[0].textContent = siteContent['main-content']['services-h4'];
// bottomContent.children[2].children[1].textContent = siteContent['main-content']['services-content'];
// bottomContent.children[3].children[0].textContent = siteContent['main-content']['product-h4'];
// bottomContent.children[3].children[1].textContent = siteContent['main-content']['product-content'];

//contact
const contact = document.querySelector('section.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
// contact.children[1].textContent = siteContent['address'];
contact.querySelector('p:nth-of-type(1').textContent = siteContent.contact.address;
contact.querySelector('p:nth-of-type(2').textContent = siteContent.contact.phone;
contact.querySelector('p:nth-of-type(3').textContent = siteContent.contact.email;

//footer
const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');





