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
//NAV
const navItems = document.querySelectorAll('a');
navItems[0].textContent = 'Services';
navItems[1].textContent = 'Product';
navItems[2].textContent = 'Vision';
navItems[3].textContent = 'Features';
navItems[4].textContent = 'About';
navItems[5].textContent = 'Contact';

//Header IMG
const headerImg = document.querySelector('#logo-img');
headerImg.src = 'img/logo.png';

//CTA
const str1 = 'DOM ';
const str2 = 'Is ';
const str3 = 'Awesome';
const ctaH1 = document.querySelector('h1').innerHTML = str1 + '<br>' + str2 + '</br>' + str3;
const ctaButton = document.querySelector('button').textContent = 'Get Started';
const ctaImg = document.querySelector('#cta-img').src = 'img/header-img.png';

//Main Content Text
const allH4 = document.querySelectorAll('h4');
const allP = document.querySelectorAll('p');
allH4[0].textContent = 'Features';
allH4[1].textContent = 'About';
allH4[2].textContent = 'Services';
allH4[3].textContent = 'Product';
allH4[4].textContent = 'Vision';
allP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
allP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
allP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
allP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
allP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Main Content IMG
const midImg = document.querySelector('#middle-img').src = 'img/mid-page-accent.jpg';

//Contact
allH4[5].textContent = 'Contact';
const string1 = '123 Way 456 Street';
const string2 = 'Somewhere, USA';
allP[5].innerHTML = string1 + '<br>' + string2;
allP[6].textContent = '1 (888) 888-8888';
allP[7].textContent = 'sales@greatidea.io';

//Footer
allP[8].textContent = 'Copyright Great Idea! 2018';

//Nav Text Green
navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';

//NAV TWO NEW ITEMS:
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Goodbye';
document.querySelector('nav').appendChild(newParagraph1);

const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Hello';
document.querySelector('nav').prepend(newParagraph2);

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent["nav"]["img-src"])
