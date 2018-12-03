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

///images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

let midLogo = document.getElementById("middle-img");
midLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let text = document.getElementsByClassName('cta-text')


const navItems = siteContent.nav;
const navItemsKeys = Object.keys(navItems); //array with seven items
const navItemsValues = Object.values(navItems); //array with seven items including value items

for(let i = 0; i < navItemsKeys.length; i++) {
  if(navItemsKeys[i] !== "img-src") {
    document.getElementsByTagName('nav')[0].children[i].textContent = navItemsValues[i];
    // console.log(document.getElementsByTagName('nav')[0].children[i]);
  }
}

//cta
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.textContent = 'Dom Is Awesome!'

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started'

//headers
const Header = document.querySelectorAll('.text-content h4');
Header[0].textContent = siteContent['main-content']['features-h4'];
Header[1].textContent = siteContent['main-content']['about-h4'];
Header[2].textContent = siteContent['main-content']['services-h4'];
Header[3].textContent = siteContent['main-content']['product-h4'];
Header[4].textContent = siteContent['main-content']['vision-h4'];

//headerText
const headerText = document.querySelectorAll('.text-content p');
headerText[0].textContent = siteContent['main-content']['features-content'];
headerText[1].textContent = siteContent['main-content']['about-content'];
headerText[2].textContent = siteContent['main-content']['services-content'];
headerText[3].textContent = siteContent['main-content']['product-content'];
headerText[4].textContent = siteContent['main-content']['vision-content'];

//contact
const contactInfo = document.querySelectorAll('.contact h4');
contactInfo[0].textContent = siteContent['contact']['contact-h4'];

const contactInfoText = document.querySelectorAll('.contact p');
contactInfoText[0].textContent = siteContent['contact']['address'];
contactInfoText[1].textContent = siteContent['contact']['phone'];
contactInfoText[2].textContent = siteContent['contact']['email'];

//footer
const myFooter = document.querySelectorAll('footer');
myFooter[0].textContent = siteContent['footer']['copyright']












