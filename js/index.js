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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspend isse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const options = siteContent["nav"]
const optionsArr = Object.values(options);
const links = document.querySelectorAll('a')

for (let x = 0; x < 5; x++) {
  links[x].textContent = optionsArr[x];
}

const awesome = document.querySelector('.cta-text')
awesome.children[0].textContent = siteContent['cta']['h1']
awesome.children[1].textContent = siteContent['cta']['button']

const codeImage = document.querySelector('#cta-img')
codeImage.setAttribute('src', siteContent["cta"]["img-src"])
const codeImage2 = document.querySelector('#middle-img')
codeImage2.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const topContent = document.querySelector('.top-content')
const features = topContent.children[0];
features.children[0].textContent = siteContent['main-content']['features-h4']
features.children[1].textContent = siteContent['main-content']['features-content']

const about = topContent.children[1];
about.children[0].textContent = siteContent['main-content']['about-h4']
about.children[1].textContent = siteContent['main-content']['about-content']

const bottomContent = document.querySelector('.bottom-content');

const services = bottomContent.children[0];
services.children[0].textContent = siteContent['main-content']['services-h4']
services.children[1].textContent = siteContent['main-content']['services-content']


const product = bottomContent.children[1];
product.children[0].textContent = siteContent['main-content']['product-h4']
product.children[1].textContent = siteContent['main-content']['product-content']


const vision = bottomContent.children[2];
vision.children[0].textContent = siteContent['main-content']['vision-h4']
vision.children[1].textContent = siteContent['main-content']['vision-content']

const contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent['contact']['contact-h4']
contact.children[1].textContent = siteContent['contact']['address']
contact.children[2].textContent = siteContent['contact']['phone']
contact.children[3].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer').children[0]
footer.textContent = siteContent['footer']['copyright']







// const link2 = document.querySelectorAll('a')[1]
// link2.textContent = 'Product'
// const link3 = document.querySelectorAll('a')[2]
// link3.textContent = 'Vision'
// const link4 = document.querySelectorAll('a')[3]
// link4.textContent = 'Features'
// const link5 = document.querySelectorAll('a')[4]
// link5.textContent = 'About'
// const link6 = document.querySelectorAll('a')[5]
// link6.textContent = 'Contact'
