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
    "h1": "DOM<br>Is<br>Awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Some helper functions to perform node selection and updating

function setInnerHtml(base, selector, value) {
  const node = base.querySelector(selector);
  node.innerHTML = value;
}

function setAttr(base, selector, attr, value) {
  const node = base.querySelector(selector);
  node.setAttribute(attr, value);
}

function setAttrAll(base, selector, attr, value) {
  const nodes = base.querySelectorAll(selector);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute(attr, value);
  }
}


// Now just call these functions for every element that needs filling in

// navigation bar
setInnerHtml(document, 'header nav a:nth-child(1)', siteContent['nav']['nav-item-1']);
setInnerHtml(document, 'header nav a:nth-child(2)', siteContent['nav']['nav-item-2']);
setInnerHtml(document, 'header nav a:nth-child(3)', siteContent['nav']['nav-item-3']);
setInnerHtml(document, 'header nav a:nth-child(4)', siteContent['nav']['nav-item-4']);
setInnerHtml(document, 'header nav a:nth-child(5)', siteContent['nav']['nav-item-5']);
setInnerHtml(document, 'header nav a:nth-child(6)', siteContent['nav']['nav-item-6']);

// This part I will still do manually :)
// Add two additional navigation elements
const nav = document.querySelector('header nav');

const homeAnchor = document.createElement('a');
homeAnchor.innerText = 'Home';
homeAnchor.setAttribute('href', '#');
nav.prepend(homeAnchor);

const blogAnchor = document.createElement('a');
blogAnchor.innerText = 'Blog';
blogAnchor.setAttribute('href', '#');
nav.appendChild(blogAnchor);

// make them all green!
setAttrAll(document, 'header nav a', 'style', 'color: green');

// don't forget the logo image!
setAttr(document, '#logo-img', 'src', siteContent['nav']['img-src']);


// cta
setInnerHtml(document, '.cta-text h1', siteContent['cta']['h1']);
setInnerHtml(document, '.cta-text button', siteContent['cta']['button']);
setAttr(document, '#cta-img', 'src', siteContent['cta']['img-src']);


// top-content
setInnerHtml(document, '.top-content .text-content:nth-child(1) h4',
              siteContent['main-content']['features-h4']);
setInnerHtml(document, '.top-content .text-content:nth-child(1) p',
              siteContent['main-content']['features-content']);
setInnerHtml(document, '.top-content .text-content:nth-child(2) h4',
              siteContent['main-content']['about-h4']);
setInnerHtml(document, '.top-content .text-content:nth-child(2) p',
              siteContent['main-content']['about-content']);


// middle-img
setAttr(document, '#middle-img', 'src', siteContent['main-content']['middle-img-src']);


// bottom-content
setInnerHtml(document, '.bottom-content .text-content:nth-child(1) h4',
              siteContent['main-content']['services-h4']);
setInnerHtml(document, '.bottom-content .text-content:nth-child(1) p',
              siteContent['main-content']['services-content']);
setInnerHtml(document, '.bottom-content .text-content:nth-child(2) h4',
              siteContent['main-content']['product-h4']);
setInnerHtml(document, '.bottom-content .text-content:nth-child(2) p',
              siteContent['main-content']['product-content']);
setInnerHtml(document, '.bottom-content .text-content:nth-child(3) h4',
              siteContent['main-content']['vision-h4']);
setInnerHtml(document, '.bottom-content .text-content:nth-child(3) p',
              siteContent['main-content']['vision-content']);


// contact
setInnerHtml(document, '.contact h4', siteContent['contact']['contact-h4']);
// note that h4 is the first child of .contact, so <p>s are children 2, 3, 4
setInnerHtml(document, '.contact p:nth-child(2)', siteContent['contact']['address']);
setInnerHtml(document, '.contact p:nth-child(3)', siteContent['contact']['phone']);
setInnerHtml(document, '.contact p:nth-child(4)', siteContent['contact']['email']);


// footer
setInnerHtml(document, 'footer p', siteContent['footer']['copyright']);
