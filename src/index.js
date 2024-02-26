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
//images
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']

const midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent.images['accent-img'])

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];



// Nav
const topNav = document.querySelectorAll('nav a ');
topNav[0].textContent = siteContent['nav']['nav-item-1'];
topNav[1].textContent = siteContent['nav']['nav-item-2'];
topNav[2].textContent = siteContent['nav']['nav-item-3'];
topNav[3].textContent = siteContent['nav']['nav-item-4'];
topNav[4].textContent = siteContent['nav']['nav-item-5'];
topNav[5].textContent = siteContent['nav']['nav-item-6'];
// to add style use a forEach function 
topNav.forEach ((e) => {
  e.style.color = 'red';
})

// Top Content
const h4 = document.querySelectorAll('h4');

h4[0].textContent = siteContent["main-content"]['features-h4'];
h4[1].textContent = siteContent["main-content"]['about-h4'];
h4[2].textContent = siteContent["main-content"]['services-h4'];
h4[3].textContent = siteContent["main-content"]['product-h4'];
h4[4].textContent = siteContent["main-content"]['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4']

const p = document.querySelectorAll('p');
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];
p[5].textContent = siteContent['contact']['address'];
p[6].textContent = siteContent['contact']['phone'];
p[7].textContent = siteContent['contact']['email'];

//  footer

const bottomContent = document.querySelector('footer');
bottomContent.textContent = siteContent['footer']['copyright']

console.log('project wired!')
