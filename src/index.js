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

const headEL = document.querySelector('header');
const navLinks = document.querySelector('nav');
const bodySection = document.querySelector("#main-content");
const footer = document.querySelector('footer');
const logo = document.querySelector('#logo-img');
const ctaImg = document.querySelector('#cta-img');
const midIMG = document.querySelector('#middle-img')


logo.src = siteContent.images["logo-img"];
ctaImg.src = siteContent.images['cta-img'];
midIMG.src = siteContent.images['accent-img'];

//text

const cta = document.querySelector('.cta-text');
cta.querySelector('h1').textContent = siteContent.cta['h1'];
cta.querySelector('button').textContent = siteContent.cta['button']


//footer
const footerLink = document.querySelector('footer a')
footerLink.classList.add('bold');
footerLink.textContent = siteContent.footer.copyright


//contact 
const contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent.contact['contact-h4']
contact.children[1].textContent = siteContent.contact['address']
contact.children[2].textContent = siteContent.contact['phone']
contact.children[3].textContent = siteContent.contact['email']

//header
navLinks.children[0].textContent = siteContent.nav['nav-item-1']
navLinks.children[0].classList.add('italic')

navLinks.children[1].textContent = siteContent.nav['nav-item-2']
navLinks.children[1].classList.add('italic')

navLinks.children[2].textContent = siteContent.nav['nav-item-3']
navLinks.children[2].classList.add('italic')

navLinks.children[3].textContent = siteContent.nav['nav-item-4']
navLinks.children[3].classList.add('italic')

navLinks.children[4].textContent = siteContent.nav['nav-item-5']
navLinks.children[4].classList.add('italic')

navLinks.children[5].textContent = siteContent.nav['nav-item-6']
navLinks.children[5].classList.add('italic')

//top
const tContent = document.querySelectorAll('.top-content .text-content');
tContent[0].querySelector('h4').textContent = siteContent["main-content"]['features-h4']
tContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']

tContent[1].querySelector('h4').textContent = siteContent["main-content"]['about-h4']
tContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']

//bottom
const bContent = document.querySelectorAll('.bottom-content .text-content');
bContent[0].querySelector('h4').textContent = siteContent["main-content"]['services-h4']
bContent[0].querySelector('p').textContent = siteContent['main-content']['services-content']

bContent[1].querySelector('h4').textContent = siteContent["main-content"]['product-h4']
bContent[1].querySelector('p').textContent = siteContent['main-content']['product-content']

bContent[2].querySelector('h4').textContent = siteContent["main-content"]['vision-h4']
bContent[2].querySelector('p').textContent = siteContent['main-content']['vision-content']



console.log('project wired!')
