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

let navBar = document.querySelectorAll('nav a');
for (let i = 0; i < navBar.length; i++) {
  navBar[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
}

let ctaHead = document.querySelector('.cta h1');
ctaH1.innerHTML = siteContent.cta.h1;

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

let mainContentHead = document.querySelectorAll('.main-content h4');
mainContentHead[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHead[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentHead[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentHead[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentHead[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll('.main-content p');
mainText[0].innerHTML = siteContent["main-content"]["features-content"];
mainText[1].innerHTML = siteContent["main-content"]["about-content"];
mainText[2].innerHTML = siteContent["main-content"]["services-content"];
mainText[3].innerHTML = siteContent["main-content"]["product-content"];
mainText[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHead = document.querySelector('.contact h4');
contactHead.innerHTML = siteContent.contact["contact-h4"];

let contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = siteContent.contact.address;
contactText[1].innerHTML = siteContent.contact.phone;
contactText[2].innerHTML = siteContent.contact.email;

let copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent.footer.copyright;

//document.querySelector('');

// adjusting nav color and content

let nav = document.querySelector('nav');
nav.appendChild(document.createElement('a'));
nav.prepend(document.createElement('a'));

navBar = document.querySelectorAll('nav a');
navBar[0].innerHTML = 'Home';
navBar[6].innerHTML = 'Login';
 navBar.forEach(item => item.style.color = 'green');
