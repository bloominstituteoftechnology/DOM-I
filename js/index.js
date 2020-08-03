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
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

/*************** NAV BAR  *****************/

const navBar = document.querySelector('nav');

const firstNavLink = navBar.querySelector('a:nth-of-type(1)');
const secondNavLink = navBar.querySelector('a:nth-of-type(2)');
const thirdNavLink = navBar.querySelector('a:nth-of-type(3)');
const fourthNavLink = navBar.querySelector('a:nth-of-type(4)');
const fifthNavLink = navBar.querySelector('a:nth-of-type(5)');
const sixthNavLink = navBar.querySelector('a:nth-of-type(6)');

firstNavLink.textContent = siteContent['nav']['nav-item-1'];
secondNavLink.textContent = siteContent['nav']['nav-item-2'];
thirdNavLink.textContent = siteContent['nav']['nav-item-3'];
fourthNavLink.textContent = siteContent['nav']['nav-item-4'];
fifthNavLink.textContent = siteContent['nav']['nav-item-5'];
sixthNavLink.textContent = siteContent['nav']['nav-item-6'];

/*************** CTA SECTION  *****************/

const firstSection = document.querySelector('.cta');

const firstSectText = firstSection.querySelector('.cta-text h1');
const firstSectionImg = firstSection.querySelector('#cta-img');
const firstSectBtn = firstSection.querySelector('button');

firstSectText.textContent = siteContent['cta']['h1'];
firstSectBtn.textContent = siteContent['cta']['button'];
firstSectionImg.setAttribute('src', siteContent['cta']['img-src']);

// const combineH1 = document.querySelector('h1').innerHTML.split(' ').join(' <br> ');
// firstSectText.textContent = combineH1;

/************* MAIN CONTENT ********************/

