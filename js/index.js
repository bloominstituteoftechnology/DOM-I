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
logo.setAttribute('src', 'img/logo.png')

let navMenu = document.querySelectorAll('a');
let navM = Array.from(navMenu);
navM[0].textContent = 'Services'
navM[1].textContent = 'Product'
navM[2].textContent = 'Vision'
navM[3].textContent = 'Features'
navM[4].textContent = 'About'
navM[5].textContent = 'Contact'

let navigator = document.querySelector('nav');
let add1 = document.createElement('a');
add1.textContent = 'Home'
add1.style.color = 'green'
let add2 = document.createElement('a');
add2.textContent = 'Help'
add2.style.color = 'green'
navigator.prepend(add1)
navigator.appendChild(add2)

navM.forEach(i => {
  i.style.color = 'green';
});

let ctaContent = document.querySelector('.cta h1');
ctaContent.innerHTML = 'DOM<br>Is<br>Awesome';

let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = "Get Started";

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', 'img/header-img.png')

let mainTitle = document.querySelectorAll('.text-content h4');
let mainT = Array.from(mainTitle);
mainT[0].textContent = 'Features'
mainT[1].textContent = 'About'
mainT[2].textContent = 'Services'
mainT[3].textContent = 'Product'
mainT[4].textContent = 'Vision'

let mainContent = document.querySelectorAll('.text-content p');
let mainCont = Array.from(mainContent);
mainCont[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainCont[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainCont[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainCont[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
mainCont[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg')

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = 'Contact'

let contactContent = document.querySelectorAll('.contact p');
let contactCont = Array.from(contactContent);
contactCont[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactCont[1].textContent = "1 (888) 888-8888";
contactCont[2].textContent = "sales@greatidea.io";

let footerCont = document.querySelector('footer p');
footerCont.textContent = 'Copyright Great Idea! 2018';