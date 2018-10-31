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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//NAVBAR ------------------------------------------------------------------
let navBar = document.querySelectorAll('nav a');
navBar.forEach((navLinkNumber, index) => {
   navLinkNumber.textContent = siteContent.nav[`nav-item-${index+1}`];
});


//CTA SECTION-----------------------------------------------------------------
//cta H1
let titleText = document.querySelector('h1');
titleText.textContent = siteContent.cta.h1;

//cta image
let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//cta button
let buttonText = document.querySelector('button');
buttonText.textContent = siteContent.cta.button;

//All p and h4 tags ----------------------------------------------------------
let headers = document.querySelectorAll('h4');
let contentText = document.querySelectorAll('p');

//MAIN CONTENT ------------------------------------------------------------------
headers[0].textContent = siteContent["main-content"]['features-h4'];
headers[1].textContent = siteContent["main-content"]['about-h4'];
headers[2].textContent = siteContent["main-content"]['services-h4'];
headers[3].textContent = siteContent["main-content"]['product-h4'];
headers[4].textContent = siteContent["main-content"]['vision-h4'];

contentText[0].textContent = siteContent['main-content']['features-content'];
contentText[1].textContent = siteContent['main-content']['about-content'];
contentText[2].textContent = siteContent['main-content']['services-content'];
contentText[3].textContent = siteContent['main-content']['product-content'];
contentText[4].textContent = siteContent['main-content']['vision-content'];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//CONTACT --------------------------------------------------------------
headers[5].textContent = siteContent.contact["contact-h4"];
contentText[5].textContent =  siteContent.contact.address;
contentText[6].textContent = siteContent.contact.phone;
contentText[7].textContent = siteContent.contact.email

//FOOTER ----------------------------------------------------------------
contentText[8].textContent = siteContent.footer.copyright;






