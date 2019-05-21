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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
// nav[0].textContent = siteContent.nav["nav-item-1"]
// nav[1].textContent = siteContent.nav["nav-item-2"]
// nav[2].textContent = siteContent.nav["nav-item-3"]
// nav[3].textContent = siteContent.nav["nav-item-4"]
// nav[4].textContent = siteContent.nav["nav-item-5"]
// nav[5].textContent = siteContent.nav["nav-item-6"]

// let navKeys = Object.keys(siteContent.nav).filter(key => {
  
// })
nav.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`]
  console.log(`This is link ${link}, This is index ${index}`);
})

let headline = document.querySelector('h1')
headline.innerHTML = 'DOM <br> IS <br> AWESOME'

let mainImg = document.querySelector('#cta-img');
mainImg.src = 'img/header-img.png'

let button = document.querySelector('button');
button.textContent = 'Get Started'

let subHeading = document.querySelectorAll('h4');
subHeading[0].textContent = 'Features'
subHeading[1].textContent = 'About'
subHeading[2].textContent = 'Services'
subHeading[3].textContent = 'Product'
subHeading[4].textContent = 'Vision'
subHeading[5].textContent = 'Contact'

let pText = document.querySelectorAll('p');
pText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
let middleImg = document.querySelector('#middle-img')
middleImg.src = 'img/mid-page-accent.jpg'

const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4'];
const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.phone;
contactInfo[2].textContent = siteContent.contact.email;

const footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright;
