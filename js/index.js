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

//navigation
let navBar = document.querySelector('nav');
let nav = document.querySelectorAll('nav a');

for (var i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i}`];
  nav[i].style.color = 'green';
};

//adding 2 things to the navbar
const newNav = (text, color) => {
  let newItem = document.createElement('a');
  newItem.style.color = color;
  newItem.textContent = text;
  return navBar.appendChild(newItem);
}
const newNavP = (text, color) => {
  let newItem = document.createElement('a');
  newItem.style.color = color;
  newItem.textContent = text;
  return navBar.prepend(newItem);
}
newNav('Donate', 'red')
newNavP('Learn More', 'blue')

//cta img
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

//cta text
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta['h1'];

//cta button
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta['button'];

//middle img
let midImage = document.querySelector('.middle-img.middle-img');
midImage.src = siteContent['main-content']['middle-img-src'];

//features and About
let mainContentHeader = document.querySelectorAll('.text-content h4');
let mainContentPara = document.querySelectorAll('.text-content p');
let headerContent = siteContent['main-content']

//h4 content
mainContentHeader[0].textContent = headerContent['features-h4'];
mainContentHeader[1].textContent = headerContent['about-h4'];
mainContentHeader[2].textContent = headerContent['services-h4'];
mainContentHeader[3].textContent = headerContent['product-h4'];
mainContentHeader[4].textContent = headerContent['vision-h4'];

//paragraph content
mainContentPara[0].textContent = headerContent['features-content'];
mainContentPara[1].textContent = headerContent['about-content'];
mainContentPara[2].textContent = headerContent['services-content'];
mainContentPara[3].textContent = headerContent['product-content'];
mainContentPara[4].textContent = headerContent['vision-content'];

//contact info
let footerHeader = document.querySelector('.contact h4');
let footerPara = document.querySelectorAll('.contact p');
let contactInfo = siteContent.contact;

footerHeader.textContent = contactInfo['contact-h4'];
footerPara[0].textContent = contactInfo['address'];
footerPara[1].textContent = contactInfo['phone'];
footerPara[2].textContent = contactInfo['email'];

let footer = document.querySelector('footer');

footer.textContent = siteContent.footer.copyright;
