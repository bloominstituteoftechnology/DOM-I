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

// IMAGES
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// NAV LINKS
let headerLinks = document.querySelectorAll('nav a');

headerLinks.forEach((el, i) => {
  el.textContent = siteContent.nav[`nav-item-${i+1}`];
  el.style.color = 'lightGreen';
})

// HEADER

headerLinks = document.getElementsByTagName('nav')[0];
let newContent = (e) => {
  let newLink = document.createElement('a');
  newLink.textContent = e;
  newLink.style.color = 'lightGreen';
  return newLink;
}

headerLinks.prepend(newContent ('First'));
headerLinks.append(newContent ('Last'));

// CONTENT

let content = document.querySelectorAll(".text-content");

content[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
content[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

content[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
content[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

content[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
content[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];

content[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['product-h4'];
content[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['product-content'];

content[4].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
content[4].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];

// CONTACT

let contact = document.getElementsByClassName('contact')[0];

contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

contact.getElementsByTagName('p')[0].style.width = '20%';