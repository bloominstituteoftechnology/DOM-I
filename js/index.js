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

// Example: Update the img src for the logo

// HEADER
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navigation = document.querySelectorAll('a');
for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navigation[i].style.color = 'green';
}

let newLink1 = document.createElement('a');
newLink1.href = '#';
newLink1.textContent = 'New One';
newLink1.style.color = 'green';

let newLink2 = document.createElement('a');
newLink2.href = '#';
newLink2.textContent = 'New Two';
newLink2.style.color = 'green';

let nav = document.querySelector('nav');
nav.appendChild(newLink2);
nav.prepend(newLink1);

// BANNER
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// TOP CONTENT
let tc1H1 = document.querySelector('.text-content h4');
tc1H1.textContent = siteContent['main-content']['features-h4'];

let tc1p = document.querySelector('.text-content p');
tc1p.textContent = siteContent['main-content']['features-content'];

let tc2H1 = document.querySelector('.text-content:nth-child(2) h4');
tc2H1.textContent = siteContent['main-content']['about-h4'];

let tc2p = document.querySelector('.text-content:nth-child(2) p');
tc2p.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// BOTTOM CONTENT
let bc1H1 = document.querySelector('.bottom-content .text-content h4');
bc1H1.textContent = siteContent['main-content']['services-h4'];

let bc1p = document.querySelector('.bottom-content .text-content p');
bc1p.textContent = siteContent['main-content']['services-content'];

let bc2H1 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bc2H1.textContent = siteContent['main-content']['product-h4'];

let bc2p = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bc2p.textContent = siteContent['main-content']['product-content'];

let bc3H1 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
bc3H1.textContent = siteContent['main-content']['vision-h4'];

let bc3p = document.querySelector('.bottom-content .text-content:nth-child(3) p');
bc3p.textContent = siteContent['main-content']['vision-content'];

// CONTACT
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
for (let i = 0; i < contactP.length; i++) {
  contactP[0].textContent = siteContent['contact']['address'];
  contactP[1].textContent = siteContent['contact']['phone'];
  contactP[2].textContent = siteContent['contact']['email'];
}

// FOOTER
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];