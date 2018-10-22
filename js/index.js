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

//Me Here and lower:

const ctaPic = document.getElementById('cta-img');
ctaPic.setAttribute('src', siteContent['cta']['img-src']);

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];


const ctaBttn = document.querySelector('.cta-text button');
ctaBttn.innerHTML = siteContent['cta']['button'];


// Nav items Next:

const navAs = document.querySelectorAll('nav a');
let navAsItems = 'nav-item-';
for (i = 1; i < navAs.length; i++) {
    navAs[i].innerHTML = siteContent["nav"][navAsItems + i];
}

//Middle section next:
// const midConHeader = document.querySelector('.top-content .text-content h4')[0];
// midConHeader.innerHTML = siteContent['main-content']['features-h4'];

// const midConPara = document.querySelector('.top-content p')[0];



// const midConheader1 = document.document.querySelector('.top-content h4')[1];
// midConheader1.textContent = siteContent['main-content']['features-h4'];


// const midConPara1 = document.querySelector('.top-content p')[1];

//contact section:
const contactHe = document.querySelector('.contact h4');
contactHe.innerHTML = siteContent['contact']['contact-h4'];

let contactP0 = document.querySelector('.contact p')[0];
contactP0.innerHTML = siteContent['contact']['address'];

const contactP1 = document.querySelector('.contact p')[1];
contactP1.innerHTML = siteContent['contact'].phone;

const contactP2 = document.querySelector('.contact p')[2];
contactP2.innerHTML = siteContent['contact'].email;



//footer section:
let footCR = document.querySelector('footer p');
footCR.innerHTML = siteContent.footer.copyright;