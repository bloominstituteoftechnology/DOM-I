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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update the img src for cta image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Update the img src for middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Create an array for the nav a tags
// Update the text content of the nav a tags
const aTagNavArray = Array.from(document.querySelectorAll("nav a"));
const nav = siteContent.nav;

let index = 0;
for (const key in nav)
{
    if (key.includes("nav-item-"))
        aTagNavArray[index++].textContent = nav[key];
};

// Find and update the cta-text <h1>
const ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];

// Find and update the cta-text <button>
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// Find and update the main-content <h4> tags

const features = document.querySelector(".text-content h4:nth-of-type(1)");
console.log("features:", features);
features.textContent = siteContent["main-content"]["features-h4"];

const about = document.querySelectorAll(".text-content h4:nth-of-type(2)");
console.log("about:", about);
about.textContent = siteContent["main-content"]["about-h4"];

// const mainContentTitlesArray = Array.from(document.querySelectorAll(".main-content h4"));
// const mainContent = siteContent["main-content"];

// console.log(mainContent);

// let i = 0;
// for (const key in mainContent)
// {
//     if (key.includes("-h4"))
//     mainContentTitlesArray[index++].textContent = mainContent[key];
// };

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