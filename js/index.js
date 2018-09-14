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
    "h1": "DOM<br> Is<br> Awesome",
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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

let nav = document.querySelectorAll('nav a');
for (let i=0; i<6; i++) {
  nav[i].innerText = siteContent.nav['nav-item-' + (i+1).toString()]
}

// header
let headerH1 = document.querySelector('.cta-text h1');
let headerButton = document.querySelector('.cta-text button');
let headerImg = document.querySelector('#cta-img');
headerH1.innerHTML = siteContent.cta.h1
headerButton.innerText = siteContent.cta.button
headerImg.setAttribute('src', siteContent.cta['img-src'])

// main-content
let topContentH4 = document.querySelectorAll('.top-content h4');
let topContentP = document.querySelectorAll('.top-content p');
let midImg = document.querySelector('#middle-img');
let bottomContentH4 = document.querySelectorAll('.bottom-content h4');
let bottomContentP = document.querySelectorAll('.bottom-content p');
topContentH4[0].innerText = siteContent['main-content']['features-h4']
topContentP[0].innerText = siteContent['main-content']['features-content']
topContentH4[1].innerText = siteContent['main-content']['about-h4']
topContentP[1].innerText = siteContent['main-content']['about-content']
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
bottomContentH4[0].innerText = siteContent['main-content']['services-h4']
bottomContentP[0].innerText = siteContent['main-content']['services-content']
bottomContentH4[1].innerText = siteContent['main-content']['product-h4']
bottomContentP[1].innerText = siteContent['main-content']['product-content']
bottomContentH4[2].innerText = siteContent['main-content']['vision-h4']
bottomContentP[2].innerText = siteContent['main-content']['vision-content']

// contact
let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');
contactH4.innerText = siteContent.contact['contact-h4']
contactP[0].innerHTML = siteContent.contact.address
contactP[1].innerText = siteContent.contact.phone
contactP[2].innerText = siteContent.contact.email

// footer
let footerP = document.querySelector('footer p');
footerP.innerText = siteContent.footer.copyright