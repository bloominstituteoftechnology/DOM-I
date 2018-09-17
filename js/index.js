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
  //done
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

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let n1 = document.querySelectorAll('a');
n1[0].innerText = 'Services'

let n2 = document.querySelectorAll('a');
n2[1].innerText = 'Product'

let n3 = document.querySelectorAll('a');
n3[2].innerText = 'Vision'

let n4 = document.querySelectorAll('a');
n4[3].innerText = 'Features'

let n5 = document.querySelectorAll('a');
n5[4].innerText = 'About'

let n6 = document.querySelectorAll('a');
n6[5].innerText = 'Contact'

let mainTitle = document.querySelector('.cta-text').querySelector('h1');
mainTitle.innerHTML = 'DOM <br>IS <br>AWESOME';

let mainButton = document.querySelector('.cta-text').querySelector('button');
mainButton.innerText = 'Get Started'

let topContentP1Header = document.querySelector('.top-content').querySelectorAll('h4');
topContentP1Header[0].innerText = 'Features'

let topContentP1 = document.querySelector('.top-content').querySelectorAll('p');
topContentP1[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let topContentP2Header = document.querySelector('.top-content').querySelectorAll('h4');
topContentP2Header[1].innerText = 'About'

let topContentP2 = document.querySelector('.top-content').querySelectorAll('p');
topContentP2[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomContentP1Header = document.querySelector('.bottom-content').querySelectorAll('h4');
bottomContentP1Header[0].innerText = 'Services'

let bottomContentP1 = document.querySelector('.bottom-content').querySelectorAll('p');
bottomContentP1[0].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let bottomContentP2Header = document.querySelector('.bottom-content').querySelectorAll('h4');
bottomContentP1Header[1].innerText = 'Product'

let bottomContentP2 = document.querySelector('.bottom-content').querySelectorAll('p');
bottomContentP2[1].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let bottomContentP3Header = document.querySelector('.bottom-content').querySelectorAll('h4');
bottomContentP1Header[2].innerText = 'Vision'

let bottomContentP3 = document.querySelector('.bottom-content').querySelectorAll('p');
bottomContentP3[2].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'




