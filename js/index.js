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

// NAV BAR
let navItems = document.querySelectorAll('a');

navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

//CTA SECTION

let header1 = document.getElementsByTagName('h1');
header1[0].textContent = siteContent['cta']['h1'];

//Button

let button = document.getElementsByTagName('button');
button[0].textContent = siteContent['cta']['button'];

//Image

let image1 = document.getElementById('cta-img');
image1.setAttribute('src', siteContent['cta']['img-src']);

// // MAIN CONTENT

//     //TOP CONTENT
  let topContentParent = document.querySelector('.top-content');
  let topContentChildren = Array.from(topContentParent.children);

  let featuresSection = topContentChildren[0].children;
  featuresSection[0].textContent = siteContent['main-content']['features-h4'];
  featuresSection[1].textContent = siteContent['main-content']['features-content'];

  let aboutSection = topContentChildren[1].children;
  aboutSection[0].textContent = siteContent['main-content']['about-h4'];
  aboutSection[1].textContent = siteContent['main-content']['about-content'];

  let midImg = document.getElementById('middle-img');
  midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

  // BOTTOM CONTENT

  let bottomContentParent = document.querySelector('.bottom-content');
  let bottomContentChildren = Array.from(bottomContentParent.children);

  let servicesSection = bottomContentChildren[0].children;
  servicesSection[0].textContent = siteContent['main-content']['services-h4'];
  servicesSection[1].textContent = siteContent['main-content']['services-content'];

  let productSection = bottomContentChildren[1].children;
  productSection[0].textContent = siteContent['main-content']['product-h4'];
  productSection[1].textContent = siteContent['main-content']['product-content'];

  let visionSection = bottomContentChildren[2].children;
  visionSection[0].textContent = siteContent['main-content']['vision-h4'];
  visionSection[1].textContent = siteContent['main-content']['vision-content'];

  //CONTACT

  let contactParent = document.querySelector('.contact');
  let contactChildren = Array.from(contactParent.children);

  let contactHead = contactChildren[0];
  contactChildren[0].textContent = siteContent['contact']['contact-h4'];

  let contactAddress = contactChildren[1];
  contactChildren[1].textContent = siteContent['contact']['address'];

  let contactPhoneNumber = contactChildren[2];
  contactChildren[2].textContent = siteContent['contact']['phone'];

  let contactEmail = contactChildren[3];
  contactChildren[3].textContent = siteContent['contact']['email'];

  //FOOTER

  let copyrightParent = document.getElementsByTagName('footer');
  let copyrightChildren = Array.from(copyrightParent);

  let copyrightFooter = copyrightChildren[0];
  copyrightChildren[0].textContent = siteContent['footer']['copyright'];

  // NAV COLOR

  let navColor = document.getElementsByTagName('a')
  navColor[0].style.color = 'green';
  navColor[1].style.color = 'green';
  navColor[2].style.color = 'green';
  navColor[3].style.color = 'green';
  navColor[4].style.color = 'green';
  navColor[5].style.color = 'green';

  // PREPEND

  let navBarHi = document.querySelector('nav')
  navBarChild = document.createElement('a')
  navBarChild.textContent = 'Hi'

  navBarHi.prepend(navBarChild);

  navBarChild.style.color = 'green';
  //APPEND

  navBarChild2 =  document.createElement('a')
  navBarChild2.textContent = 'Bye';

  navBarHi.prepend(navBarChild);
  navBarHi.appendChild(navBarChild2);

  navBarChild2.style.color = 'green';