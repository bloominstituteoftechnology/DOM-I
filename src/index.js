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



const header = document.querySelector('header');



const links = document.querySelectorAll('nav a');
const linkText = Object.values(siteContent.nav)
for(let i = 0; i < 6; i++) {
  links[i].textContent = linkText[i]
  
}


// links.forEach(link => console.log(link));

// const realLinks = Array.from(links)





/**
 * get image from dom into js
 * update img src attr = siteContent['images']['logo-img']
 */

const firstImage = document.querySelector('#logo-img');
firstImage.src = siteContent['images']['logo-img'];

const secondImage = document.querySelector('#cta-img');
secondImage.src = siteContent['images']['cta-img'];

const thirdImage = document.querySelector('#middle-img');
thirdImage.src = siteContent['images']['accent-img'];

const button = document.querySelector('button');
button.textContent = 'Get Started!';

const ctaText = document.querySelector('h1');
ctaText.textContent = 'DOM IS AWESOME!';

const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];

topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content');
bottomContent.children[0].children[0].textContent = siteContent['main-content']['services-h4'];

bottomContent.children[0].children[1].textContent = siteContent['main-content']['services-content'];

bottomContent.children[1].children[0].textContent = siteContent['main-content']['product-h4'];

bottomContent.children[1].children[1].textContent = siteContent['main-content']['product-content'];

bottomContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContent.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('section.contact');
contact.children[0].textContent = siteContent.contact['contact-h4'];

contact.children[1].textContent = siteContent.contact['address'];

contact.children[2].textContent = siteContent.contact['phone'];

contact.children[3].textContent = siteContent.contact['email'];

const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold');