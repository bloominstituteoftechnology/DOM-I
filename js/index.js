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


// images
let logo = document.getElementById("logo-img");
logo.src = "img/logo.png";

let headerImg = document.getElementById("cta-img");
headerImg.src = "img/header-img.png";

let bannerImg = document.getElementById("middle-img");
bannerImg.src = "img/mid-page-accent.jpg";

let header = document.querySelector('header');
header.display = 'flex';
//navigation
let navItems = document.querySelectorAll('header nav a');

const menuItems = ["Services", "Product", "Vision", "Features", "About", "Contact"];

for (let i = 0; i < navItems.length; i++) {
    navItems[i].innerHTML = menuItems[i];
}

//header
let cta = document.querySelector(".cta h1");
cta.innerHTML = "DOM IS AWESOME"

let ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = "Get Started";

//section headers

const h4Content = ["Features", "About", "Services", "Product", "Vision", "Contact"]
let h4Headers = document.querySelectorAll("h4");
for (let i = 0; i < h4Headers.length; i++) {
    h4Headers[i].innerHTML = h4Content[i];
}

//main content

let descriptionParagraphs = [
    "Features Content Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "About Content Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "Services Content Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "Product Content Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "Vision Content Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
]

let mainParagraphs = document.querySelectorAll(".main-content p")
for (let i = 0; i < mainParagraphs.length; i++) {
    mainParagraphs[i].innerHTML = descriptionParagraphs[i];
}

//contact

let contactCont = ["123 Way 456 Street<br>Somewhere USA", "1-888-888-8888", "sales@greatidea.io"];
let contactInfo = document.querySelectorAll(".contact p");
for (let i = 0; i < contactInfo.length; i++) {
    contactInfo[i].innerHTML = contactCont[i];
}

//footer

let footerText = document.querySelector("footer p");
footerText.innerHTML = "Copyright Great Idea! 2018";