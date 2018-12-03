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
    "h1": "DOM \r\n Is \r\n Awesome",
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
    "address" : "123 Way 456 Street \r\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent['cta']['img-src'];

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent['main-content']['middle-img-src']

// Navigation
let nav = Array.from(document.querySelectorAll('nav a'))
for(let i = 0; i < nav.length; i++){
  nav[i].textContent = siteContent['nav'][`nav-item-${[i+1]}`];
  nav[i].style.color = 'green';
}
let navBar = document.querySelector('nav');

const newNavItem1 = document.createElement('a');
newNavItem1.href = '#';
newNavItem1.textContent = 'Portfolio';

const newNavItem2 = document.createElement('a');
newNavItem2.href = '#';
newNavItem2.textContent = 'Testing';

navBar.append(newNavItem1);
newNavItem1.style.color = 'green';
navBar.prepend(newNavItem2);
newNavItem2.style.color = 'green';

//CTA
let cta = document.querySelector('.cta-text h1')
cta.textContent = siteContent['cta']['h1']
cta.setAttribute('style', 'white-space: pre;')

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

//Main Content - Top Content
let topContentH4 = document.querySelectorAll('.top-content .text-content h4')
topContentH4[0].textContent = siteContent['main-content']['features-h4']
topContentH4[1].textContent = siteContent['main-content']['about-h4']

let topContentP = document.querySelectorAll('.top-content .text-content p')
topContentP[0].textContent = siteContent['main-content']['features-content']
topContentP[1].textContent = siteContent['main-content']['about-content']

//Main Content - Bottom Content
let bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4')
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentP = document.querySelectorAll('.bottom-content .text-content p')
bottomContentP[0].textContent = siteContent['main-content']['services-content']
bottomContentP[1].textContent = siteContent['main-content']['product-content']
bottomContentP[2].textContent = siteContent['main-content']['vision-content']

//Contact
let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']

let contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']
contactP[0].setAttribute('style', 'white-space: pre;')


//Footer
let foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright']


// Stretch
const myButton = document.querySelector('.btn');

myButton.addEventListener('click', cb);

function cb(){
  alert (`You've contacted us!`)
}