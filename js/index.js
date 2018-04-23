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
const navLinks = [].slice.call(document.querySelectorAll('nav a'));
const cta = document.querySelector('.cta');
const mainContentTop = document.querySelector('.main-content .top-content');
const middleImg = document.querySelector('#middle-img');
const mainContentBottom = document.querySelector('.main-content .bottom-content')
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

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

// add content into `cta` div
cta.children[0].children[0].insertAdjacentText('afterbegin', siteContent.cta.h1);
cta.children[0].children[1].insertAdjacentText('afterbegin', siteContent.cta.button);
cta.children[1].src = siteContent.cta['img-src'];

// add content into `main-content` div
mainContentTop.children[0].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['features-h4']);
mainContentTop.children[0].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['features-content']);

mainContentTop.children[1].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['about-h4']);
mainContentTop.children[1].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['about-content']);

middleImg.src = siteContent['main-content']['middle-img-src'];

mainContentBottom.children[0].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['services-h4'])
mainContentBottom.children[0].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['services-content'])

mainContentBottom.children[1].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['product-h4'])
mainContentBottom.children[1].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['product-content'])

mainContentBottom.children[2].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['vision-h4'])
mainContentBottom.children[2].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['vision-content'])

contact.children[0].insertAdjacentText('afterbegin', siteContent.contact['contact-h4']);
contact.children[1].insertAdjacentText('afterbegin', siteContent.contact.address);
contact.children[2].insertAdjacentText('afterbegin', siteContent.contact.phone);
contact.children[3].insertAdjacentText('afterbegin', siteContent.contact.email);

footer.children[0].insertAdjacentText('afterbegin', siteContent.footer.copyright);