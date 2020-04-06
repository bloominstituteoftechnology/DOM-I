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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav -------------------------


const navLinks = document.querySelectorAll('a');

navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];



navLinks[0].style.color = "green";
navLinks[1].style.color = "green";
navLinks[2].style.color = "green";
navLinks[3].style.color = "green";
navLinks[4].style.color = "green";
navLinks[5].style.color = "green";


const navBar = document.querySelector('nav');
const nav1 = document.createElement('a');
const nav2 = document.createElement('a');

nav1.href = '#';
nav1.textContent = 'Awesome';
nav1.style.color = 'green';


nav2. href = '#';
nav2.textContent = 'Ness';
nav2.style.color = 'green';

navBar.prepend(nav1);
navBar.append(nav2);


// CTA ------------------------------

const ctaContent = document.querySelector('h1')

ctaContent.textContent = "DOM Is Awesome"


const ctaButton = document.querySelector('button')
ctaButton.textContent = "Get Started"

document.getElementById("cta-img").src="img/header-img.png";



// Main Content ----------------------------

// Features
const featureH4 = document.getElementsByTagName('h4')[0]
featureH4.textContent = "Features";

const featuresP = document.getElementsByTagName('p')[0]
featuresP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// Features Ends


// About
const aboutH4 = document.getElementsByTagName('h4')[1]
aboutH4.textContent = "Features";

const aboutP = document.getElementsByTagName('p')[1]
aboutP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// About Ends


// Mid Image
document.getElementById("middle-img").src = "img/mid-page-accent.jpg"
// Mid Image Ends


// Services
const servicesH4 = document.getElementsByTagName('h4')[2]
servicesH4.textContent = "Features";

const servicesP = document.getElementsByTagName('p')[2]
servicesP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// Services Ends


// Product
const productH4 = document.getElementsByTagName('h4')[3]
productH4.textContent = "Features";

const productP = document.getElementsByTagName('p')[3]
productP.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// Product Ends


// Vision
const visionH4 = document.getElementsByTagName('h4')[4]
visionH4.textContent = "Vision";

const visionP = document.getElementsByTagName('p')[4]
visionP.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// Vision Ends


// Bottom Content --------------------------

// Contact
const contact = document.getElementsByTagName('h4')[5]

contact.textContent = "Contact"
const street = document.getElementsByTagName('p')[5]
street.textContent = "123 Way Up North Street"
street.fontSize = '1px'

const somewhere = document.getElementsByTagName ('p')[6]
somewhere.textContent = "Somwhere, USA"

const numberPhone = document.getElementsByTagName ('p')[7]
numberPhone.textContent = "1 (888) 888-8888"

const email = document.getElementsByTagName ('p')[7]
email.textContent = "sales@greatidea.io"

// Contact Ends


// Footer ---------------------------

const footer = document.getElementsByTagName('p')[8]
footer.textContent = "Copyright Great Idea 2018"



