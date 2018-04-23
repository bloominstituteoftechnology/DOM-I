const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

const navContent = [];
const navBar = document.querySelector('nav');
const navLinks = [].slice.call(document.querySelectorAll('nav a'));
const cta = document.querySelector('.cta');
const mainContent = document.querySelector('.main-content .top-content');
const middleImg = document.querySelector('#middle-img');
const mainContentBottom = document.querySelector('.main-content .bottom-content')
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');
const newLinks = ['newLink1', 'newLink2'];

let mainContent = document.querySelector(".main-content");
navLinks.push(document.querySelector('#logo-img'));

for (content in siteContent.nav) navContent.push(siteContent.nav[content]);

for (let i = 0; i < navContent.length; i) {
  if (i === navContent.length - 1) {
    navLinks[navLinks.length - 1].src = navContent[i];
  } else {
    navLinks[i].insertAdjacentText('afterbegin', navContent[i]);
  }
}

for (let i = 0; i < newLinks.length; i) {
  let newA = document.createElement('a');
  newA.insertAdjacentText('afterbegin', newLinks[i]);

  navBar.append(newA);
}

//CTA

const ctaContent = cta.children[0];

// Cta h1
ctaContent.children[0].insertAdjacentText('afterbegin', siteContent.cta.h1);
// Cta button
ctaContent.children[1].insertAdjacentText('afterbegin', siteContent.cta.button);
// Cta image
cta.children[1].src = siteContent.cta['img-src'];


//MAIN CONTENT 

const mainContentFeatures = mainContent.children[0];
const mainContentAbout = mainContent.children[1];
const mainContentServices = mainContentBottom.children[0];
const mainContentProduct = mainContentBottom.children[1];
const mainContentVision = mainContentBottom.children[2];

// Features h1
mainContentFeatures.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['features-h4']);
// Features p
mainContentFeatures.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['features-content']);

// About h1
mainContentAbout.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['about-h4']);
// About p
mainContentAbout.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['about-content']);

middleImg.src = siteContent['main-content']['middle-img-src'];

// Services h4
mainContentServices.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['services-h4'])
// Services p
mainContentServices.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['services-content'])

// Product h4
mainContentProduct.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['product-h4'])
// Product p
mainContentProduct.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['product-content'])

// Vision h4
mainContentVision.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['vision-h4'])
// Vision p
mainContentVision.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['vision-content'])

//Contact 

// Contact h4
contact.children[0].insertAdjacentText('afterbegin', siteContent.contact['contact-h4']);
// Address
contact.children[1].insertAdjacentText('afterbegin', siteContent.contact.address);
// Phone
contact.children[2].insertAdjacentText('afterbegin', siteContent.contact.phone);
// Email
contact.children[3].insertAdjacentText('afterbegin', siteContent.contact.email);

//Footer
footer.children[0].insertAdjacentText('afterbegin', siteContent.footer.copyright);