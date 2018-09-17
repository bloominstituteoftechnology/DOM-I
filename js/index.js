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

// Update nav items with text
let navAs = document.querySelectorAll('nav a');
navAs[0].innerText = siteContent.nav["nav-item-1"];
navAs[1].innerText = siteContent.nav["nav-item-2"];
navAs[2].innerText = siteContent.nav["nav-item-3"];
navAs[3].innerText = siteContent.nav["nav-item-4"];
navAs[4].innerText = siteContent.nav["nav-item-5"];
navAs[5].innerText = siteContent.nav["nav-item-6"];

// adding elements to nav
const firstA = document.createElement('a');
firstA.innerText = 'Boogie';
document.querySelector('nav').prepend(firstA);

const lastA = document.createElement('a');
lastA.innerText = 'Turnpike';
document.querySelector('nav').appendChild(lastA);

// beast mode
const updatedNavAs = document.querySelectorAll('nav a');
for (let i = 0; i < updatedNavAs.length; i++) {
  updatedNavAs[i].style.color = 'green';
}


// Update CTA
document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1;
document.querySelector('.cta-text button').innerHTML = siteContent.cta.button;
document.querySelector('#cta-img').src = siteContent.cta["img-src"];

// Update main content
let mainContentH4s = document.querySelectorAll('.main-content h4');
mainContentH4s[0].innerText = siteContent["main-content"]["features-h4"];
mainContentH4s[1].innerText = siteContent["main-content"]["about-h4"];
mainContentH4s[2].innerText = siteContent["main-content"]["services-h4"];
mainContentH4s[3].innerText = siteContent["main-content"]["product-h4"];
mainContentH4s[4].innerText = siteContent["main-content"]["vision-h4"];

let mainContentPs = document.querySelectorAll('.main-content p');
mainContentPs[0].innerText = siteContent["main-content"]["features-content"];
mainContentPs[1].innerText = siteContent["main-content"]["about-content"];
mainContentPs[2].innerText = siteContent["main-content"]["services-content"];
mainContentPs[3].innerText = siteContent["main-content"]["product-content"];
mainContentPs[4].innerText = siteContent["main-content"]["vision-content"];

document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];

// Update contact
document.querySelector('.contact h4').innerText = siteContent.contact["contact-h4"];
let contactPs = document.querySelectorAll('.contact p');
contactPs[0].innerText = siteContent.contact.address;
contactPs[1].innerText = siteContent.contact.phone;
contactPs[2].innerText = siteContent.contact.email;

// Update footer
document.querySelector('footer p').innerText = siteContent.footer.copyright;