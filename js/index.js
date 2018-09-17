const siteContent = {
    'nav': {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png'
    },
    'cta': {
        'h1': 'DOM Is Awesome',
        'button': 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    },
    'contact': {
        'contact-h4': 'Contact',
        'address': '123 Way 456 Street Somewhere, USA',
        'phone': '1 (888) 888-8888',
        'email': 'sales@greatidea.io',
    },
    'footer': {
        'copyright': 'Copyright Great Idea! 2018'
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

// nav

let navBar = document.querySelectorAll('header nav a');

for (let i = 0; i < navBar.length; i++) {
    navBar[i].innerText = siteContent.nav['nav-item-' + (i + 1)]
}

// cta

let ctaHeader = document.querySelector('.cta h1');
ctaHeader.innerText = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta button');
ctaButton.innerText = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// main-content

let topContentHeader = document.querySelectorAll('.main-content .top-content .text-content h4');
topContentHeader[0].innerText = siteContent['main-content']['features-h4'];
topContentHeader[1].innerText = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.main-content .top-content .text-content p');
topContentText[0].innerText = siteContent['main-content']['features-content'];
topContentText[1].innerText = siteContent['main-content']['about-content'];

let bottomContentHeader = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomContentHeader[0].innerText = siteContent['main-content']['services-h4'];
bottomContentHeader[1].innerText = siteContent['main-content']['product-h4'];
bottomContentHeader[2].innerText = siteContent['main-content']['vision-h4'];

let bottomContentText = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContentText[0].innerText = siteContent['main-content']['services-content'];
bottomContentText[1].innerText = siteContent['main-content']['product-content'];
bottomContentText[2].innerText = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// contact
let contactHeader = document.querySelector('.contact h4')
contactHeader.innerText = siteContent.contact["contact-h4"]

let contactText = document.querySelectorAll('.contact p')

contactText[0].innerText = siteContent.contact.address;
contactText[1].innerText = siteContent.contact.phone;
contactText[2].innerText = siteContent.contact.email;

// footer

let footerText = document.querySelector('footer p')

footerText.innerText = siteContent.footer.copyright;

// Task 4: Add new content

