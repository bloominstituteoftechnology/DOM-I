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

// Finding the anchor tags one at a time inside the nav element
// Changing the text content of each nav anchor tag

const firstLink = document.querySelector("nav a:nth-of-type(1)");
firstLink.textContent = "Services";

const secondLink = document.querySelector("nav a:nth-of-type(2)");
secondLink.textContent = "Product";

const thirdLink = document.querySelector("nav a:nth-of-type(3)");
thirdLink.textContent = "Vision";

const fourthLink = document.querySelector("nav a:nth-of-type(4)");
fourthLink.textContent = "Features";

const fifthLink = document.querySelector("nav a:nth-of-type(5)");
fifthLink.textContent = "About";

const sixthLink = document.querySelector("nav a:nth-of-type(6)");
sixthLink.textContent = "Contact";

// Finding logo-img
// Updating the src of logo-img

// const logoImg = document.querySelector("header img");
// logoImg.src = "./img/logo.png";


// Finding cta-img
// Updating the src of cta-img

const ctaImg = document.querySelector(".cta img");
ctaImg.src = "./img/header-img.png";

// Finding and updating cta-text <h1>

const phrase = document.querySelector(".cta-text h1");
phrase.innerHTML = "DOM<br> Is<br> Awesome";

// Finding and updating the cta-text <button>

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";