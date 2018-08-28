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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let navItems = document.querySelectorAll('a');
navItems[0].innerHTML = siteContent['nav']['nav-item-1'];
navItems[1].innerHTML = siteContent['nav']['nav-item-2'];
navItems[2].innerHTML = siteContent['nav']['nav-item-3'];
navItems[3].innerHTML = siteContent['nav']['nav-item-4'];
navItems[4].innerHTML = siteContent['nav']['nav-item-5'];
navItems[5].innerHTML = siteContent['nav']['nav-item-6'];


let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];

let contentHeadings = document.querySelectorAll('h4');
contentHeadings[0].innerHTML = siteContent['main-content']['features-h4'];
contentHeadings[1].innerHTML = siteContent['main-content']['about-h4'];
contentHeadings[2].innerHTML = siteContent['main-content']['services-h4'];
contentHeadings[3].innerHTML = siteContent['main-content']['product-h4'];
contentHeadings[4].innerHTML = siteContent['main-content']['vision-h4'];
contentHeadings[5].innerHTML = siteContent['contact']['contact-h4'];

let mainParagraphs = document.querySelectorAll('.main-content p');
mainParagraphs[0].innerHTML = siteContent['main-content']['features-content'];
mainParagraphs[1].innerHTML = siteContent['main-content']['about-content'];
mainParagraphs[2].innerHTML = siteContent['main-content']['services-content'];
mainParagraphs[3].innerHTML = siteContent['main-content']['product-content'];
mainParagraphs[4].innerHTML = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];

let copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent['footer']['copyright'];

for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.color = 'green';
};
let newNavItem1 = document.createElement('A');
let newNavItem2 = document.createElement('A');
newNavItem1.innerHTML = 'Blog';
newNavItem2.innerHTML = 'Home';
document.querySelector('nav').appendChild(newNavItem1);
document.querySelector('nav').prepend(newNavItem2);
newNavItem1.style.color = 'green';
newNavItem2.style.color = 'green';

//STRETCH GOALS

copyright.style.color = 'aqua';
copyright.style.fontSize = '30px';
ctaHeader.style.color = 'DarkViolet';

for (let i = 0; i < contentHeadings.length; i++) {
    contentHeadings[i].style.color = 'DarkViolet';
}