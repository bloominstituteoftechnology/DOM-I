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
        "h1": "DOM<br>Is<br>Awesome",
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
        "address": "123 Way 456 Street<br>Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Finding the anchor tags one at a time inside the nav element
// Changing the text content of each nav anchor tag

const firstLink = document.querySelector("nav a:nth-of-type(1)");
firstLink.textContent = siteContent["nav"]["nav-item-1"];

const secondLink = document.querySelector("nav a:nth-of-type(2)");
secondLink.textContent = siteContent["nav"]["nav-item-2"];

const thirdLink = document.querySelector("nav a:nth-of-type(3)");
thirdLink.textContent = siteContent["nav"]["nav-item-3"];

const fourthLink = document.querySelector("nav a:nth-of-type(4)");
fourthLink.textContent = siteContent["nav"]["nav-item-4"];

const fifthLink = document.querySelector("nav a:nth-of-type(5)");
fifthLink.textContent = siteContent["nav"]["nav-item-5"];

const sixthLink = document.querySelector("nav a:nth-of-type(6)");
sixthLink.textContent = siteContent["nav"]["nav-item-6"];

// Finding logo-img
// Updating the src of logo-img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Finding cta-img
// Updating the src of cta-img

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// Finding and updating cta-text <h1>

const phrase = document.querySelector(".cta-text h1");
phrase.innerHTML = siteContent["cta"]["h1"];


// Finding and updating the cta-text <button>

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// Finding and updating the middle-img

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Finding and updating contact section

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
contactAddress.innerHTML = siteContent["contact"]["address"];

const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = siteContent["contact"]["email"];


// Finding and updating footer
const footer = document.querySelector(".container footer");
footer.textContent = siteContent["footer"]["copyright"];