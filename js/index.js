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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

let navItem = querySelectorAll('nav a');
navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];

//cta
let ctaTitle = document.querySelector('h1');
ctaTitle = siteContent['cta']['h1']

const ctaImg = document.getElementById('cta-img');
ctaImg = siteContent['cta']['img-src']

const ctaButton = document.querySelector('button')
ctaButton = siteContent['cta']['button']

//main section

const allH4 = document.querySelectorAll('.text-content h4')
allH4[0].textContent = siteContent['main-content']['features-h4']
allH4[1].textContent = siteContent['main-content']['about-h4']
allH4[2].textContent = siteContent['main-content']['services-h4']
allH4[3].textContent = siteContent['main-content']['product-h4']
allH4[4].textContent = siteContent['main-content']['vision-h4']

const contentH4 = document.querySelectorAll('.text-content p');
contentH4[0].textContent = siteContent['main-content']['feature-content']
contentH4[1].textContent = siteContent['main-content']['about-content']
contentH4[2].textContent = siteContent['main-content']['services-content']
contentH4[3].textContent = siteContent['main-content']['product-content']
contentH4[4].textContent = siteContent['main-content']['vision-content']

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute['src', siteContent['main-content']['middle-img-src']]

const contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']

const contactP = document.querySelector('.contact p')
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']


const bottom = document.querySelector('footer p');
bottom.textContent = siteContent['footer']['copyright']