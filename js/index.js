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




const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';
headerImg.alt = 'image of a code snippet';

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt = 'Image of code snippets across the screen';


const navItems = document.querySelectorAll('a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

navItems.forEach( function (currentValue) {
  currentValue.style.color= 'green';
});

//create two new nav items
const navOne = document.createElement('a');
navOne.textContent = 'info';
navOne.href ='#';

navOne.style.color = 'green'
document.querySelector('nav').appendChild(navOne)

const navTwo = document.createElement('a');
navTwo.textContent = 'box';
navTwo.href ='#';

navTwo.style.color = 'green';
document.querySelector('nav').prepend(navTwo)


// const text = document.querySelector('h1');
// text.innerHTML = 'DOM <br>IS <br> AWESOME';


const newHeader = document.querySelectorAll('h4');
newHeader[0].textContent = 'FEATURES';
newHeader[1].textContent = 'ABOUT';
newHeader[2].textContent = 'SERVICES';
newHeader[3].textContent = 'PRODUCT';
newHeader[4].textContent = 'VISION';
newHeader[5].textContent = 'CONTACT'


const htitle = document.querySelectorAll('.text-content h4')
const hpar = document.querySelectorAll('.text-content p')

htitle[0].textContent = siteContent['main-content']['features-h4']
htitle[1].textContent = siteContent['main-content']['about-h4']
htitle[2].textContent = siteContent['main-content']['services-h4']
htitle[3].textContent = siteContent['main-content']['product-h4']
htitle[4].textContent = siteContent['main-content']['vision-h4']

hpar[0].textContent= siteContent['main-content']['features-content']
hpar[1].textContent= siteContent['main-content']['about-content']
hpar[2].textContent= siteContent['main-content']['services-content']
hpar[3].textContent= siteContent['main-content']['product-content']
hpar[4].textContent= siteContent['main-content']['vision-content']



const newBut = document.querySelector('button');
newBut.textContent = 'Get Started';

