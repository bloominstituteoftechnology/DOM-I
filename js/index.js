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

//navbar
const navbar = document.querySelectorAll('a')
navbar.forEach((value, i) => value.textContent = siteContent.nav[`nav-item-${i + 1}`])
navbar.forEach(element => {element.style.color = 'olive'})
const newNavItem = document.createElement('a');
newNavItem.textContent = 'Learn More';
newNavItem.style.color = 'olive';
const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Hello';
newNavItem2.style.color = 'olive';
const addNavItem = document.querySelector('nav');
addNavItem.append(newNavItem, newNavItem2);

//title

const header = document.querySelector('.cta-text h1')
header.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

const button = document.querySelector('.cta-text button')
button.textContent = siteContent.cta['button']

const headerimg = document.querySelector('#cta-img')
headerimg.setAttribute('src', siteContent['cta']['img-src'])


//main-content
const mainContent = document.querySelector('.main-content');
mainContent.style.background = 'rosybrown';
const featuresHeader = document.querySelector('.top-content h4');
featuresHeader.textContent = siteContent['main-content'] ['features-h4'];

const featuresCont = document.querySelector('.top-content p');
featuresCont.textContent = siteContent["main-content"]['features-content'];

const aboutHeader = document.querySelector('.top-content div:last-child h4');
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

const aboutCont = document.querySelector('.top-content div:last-child p');
aboutCont.textContent = siteContent['main-content']['about-content'];

const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


const servHeader = document.querySelector('.bottom-content h4');
servHeader.textContent = siteContent['main-content'] ['services-h4'];

const servCont = document.querySelector('.bottom-content p');
servCont.textContent = siteContent['main-content'] ['services-content'];

const proHeader = document.querySelector('.bottom-content div:nth-child(2) h4');
proHeader.textContent = siteContent['main-content'] ['product-h4'];

const proCont = document.querySelector('.bottom-content div:nth-child(2) p');
proCont.textContent = siteContent['main-content'] ['product-content'];

const visHeader = document.querySelector('.bottom-content div:last-child h4');
visHeader.textContent = siteContent['main-content'] ['vision-h4'];

const visCont = document.querySelector('.bottom-content div:last-child p');
visCont.textContent = siteContent['main-content'] ['vision-content'];

const contHeader = document.querySelector('.contact h4');
contHeader.textContent = siteContent.contact['contact-h4'];

const contAddress = document.querySelector('.contact p:nth-of-type(1)');
contAddress.textContent = siteContent.contact.address;
console.log(contAddress);
const contPhone = document.querySelector('.contact p:nth-child(3)');
contPhone.textContent = siteContent.contact.phone;

const contEmail = document.querySelector('.contact p:last-child');
contEmail.textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;