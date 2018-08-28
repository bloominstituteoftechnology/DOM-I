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

//create an id
const createID = (className, id) => {
  document.querySelector(className).setAttribute('id', id);
}
// create an id for nav
createID('nav', 'main-nav');
// create an id for contact
createID('.contact', 'contact');
//create an id for footer
createID('footer', 'footer');
// create an id for  cta-text
createID('.cta-text', 'cta-text');

// render elements that do not have nested children
const renderElements = (obj, id) => {
  let ListValues = Object.values(obj);
  let ListKeys = Object.keys(obj);
  let curID = document.getElementById(id);

  for (var i = 0; i < curID.children.length; i++) {

    curID.children[i].innerHTML = ListValues[i];
  }
}
renderElements(siteContent.nav,'main-nav');
renderElements(siteContent.cta, 'cta-text');
renderElements(siteContent.contact, 'contact');
renderElements(siteContent.footer, 'footer');


// change the src files for each image

// cta-img
const cta_img = document.getElementById('cta-img');
cta_img.setAttribute('src', siteContent['cta']['img-src']);

// middle-img
const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent['main-content']['middle-img-src']);
