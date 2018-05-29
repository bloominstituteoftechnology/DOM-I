const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "imgsrc": "img/logo.png"
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


//?
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

navLinks.push(document.querySelector('#logo-img'));

// push the values of `siteContent.nav` into `navContent` array
for (content in siteContent.nav) navContent.push(siteContent.nav[content]);

// insert content into nav and logo image
for (let i = 0; i < navContent.length; i++) {
  if (i === navContent.length - 1) {
    navLinks[navLinks.length - 1].src = navContent[i];
  }
  else {
    navLinks[i].insertAdjacentText('afterbegin', navContent[i]);
  }
}

// append new navigation links to navBar
for (let i = 0; i < newLinks.length; i++) {
  let newA = document.createElement('a');
  newA.insertAdjacentText('afterbegin', newLinks[i]);

  navBar.append(newA);
}


// Nav Bar color green
let nav = document.getElementsByTagName("a");
nav[0].innerHTML = siteContent.nav["nav-item-1"];
nav[1].innerHTML = siteContent.nav["nav-item-2"];
nav[2].innerHTML = siteContent.nav["nav-item-3"];
nav[3].innerHTML = siteContent.nav["nav-item-4"];
nav[4].innerHTML = siteContent.nav["nav-item-5"];
nav[5].innerHTML = siteContent.nav["nav-item-6"];
// Navigation Color
for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}


/************
** CTA DIV **
************/
const ctaContent = cta.children[0];

// cta h1
ctaContent.children[0].insertAdjacentText('afterbegin', siteContent.cta.h1);
// cta button
ctaContent.children[1].insertAdjacentText('afterbegin', siteContent.cta.button);
// cta image
cta.children[1].src = siteContent.cta['img-src'];

/*****************
** MAIN CONTENT **
*****************/
const mainContentFeatures = mainContent.children[0];
const mainContentAbout = mainContent.children[1];
const mainContentServices = mainContentBottom.children[0];
const mainContentProduct = mainContentBottom.children[1];
const mainContentVision = mainContentBottom.children[2];

// features h1
mainContentFeatures.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['features-h4']);
// features p
mainContentFeatures.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['features-content']);

// about h1
mainContentAbout.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['about-h4']);
// about p
mainContentAbout.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['about-content']);

// image
middleImg.src = siteContent['main-content']['middle-img-src'];

// services h4
mainContentServices.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['services-h4'])
// services p
mainContentServices.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['services-content'])

// product h4
mainContentProduct.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['product-h4'])
// product p
mainContentProduct.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['product-content'])

// vision h4
mainContentVision.children[0].insertAdjacentText('afterbegin', siteContent['main-content']['vision-h4'])
// vision p
mainContentVision.children[1].insertAdjacentText('afterbegin', siteContent['main-content']['vision-content'])

/************
** CONTACT **
************/
// contact h4
contact.children[0].insertAdjacentText('afterbegin', siteContent.contact['contact-h4']);
// address
contact.children[1].insertAdjacentText('afterbegin', siteContent.contact.address);
// phone
contact.children[2].insertAdjacentText('afterbegin', siteContent.contact.phone);
// email
contact.children[3].insertAdjacentText('afterbegin', siteContent.contact.email);

/***********
** FOOTER **
***********/
footer.children[0].insertAdjacentText('afterbegin', siteContent.footer.copyright);