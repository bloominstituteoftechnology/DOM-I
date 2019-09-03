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

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Header

let anchors = document.querySelectorAll("nav a");
anchors.forEach(
  (el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);


// CTA

const ctaButton = document.querySelector(".cta .cta-text button")
ctaButton.textContent = 'Get Started';

const ctaButtonText = document.querySelector(".cta-text h1")
ctaButtonText.innerHTML = 'Dom <br> Is <br> Awesome';


// Main Content Top



const textHeading = document.querySelectorAll('.main-content h4');
textHeading[0].textContent = siteContent["main-content"]["features-h4"];
textHeading[1].textContent = siteContent['main-content']['about-h4'];
textHeading[2].textContent = siteContent['main-content']['services-h4'];
textHeading[3].textContent = siteContent['main-content']['product-h4'];
textHeading[4].textContent = siteContent['main-content']['vision-h4'];

const textWords = document.querySelectorAll('.main-content p');
textWords[0].textContent = siteContent["main-content"]['features-content'];
textWords[1].textContent = siteContent['main-content']['about-content'];
textWords[2].textContent = siteContent['main-content']['services-content'];
textWords[3].textContent = siteContent['main-content']['product-content'];
textWords[4].textContent = siteContent['main-content']['vision-content'];


// Contact

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

const contactText = document.querySelectorAll('.contact p');
// contactText[0].textContent = siteContent['contact']['address'];
const addressText = document.querySelector(".contact p")
addressText.innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

// Footer

const footerText = document.querySelector("footer p");
footerText.textContent = siteContent['footer']['copyright'];