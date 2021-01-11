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
logo.setAttribute('src', 'img/logo.png');

const  header1 = document.querySelectorAll('nav a');
header1[0].textContent = 'Services';
header1[1].textContent = 'Product';
header1[2].textContent = 'Vision';
header1[3].textContent = 'Features';
header1[4].textContent = 'About';
header1[5].textContent = 'Contact';

header1.forEach( link => link.style.color = "green");



const navLink = document.createElement('a');
navLink.textContent = 'Blog';
navLink.href = '#';
navLink.style.color = "green";
document.querySelector('nav').appendChild(navLink);

const navLink2 = document.createElement('a');
navLink2.textContent = 'Home';
navLink2.href = "#";
navLink2.style.color = "green";
document.querySelector('nav').prepend(navLink2);





const headerImg = document.querySelector('#cta-img');
headerImg.src = "img/header-img.png";

const logoImage = document.querySelector('#middle-img');
logoImage.src = "img/mid-page-accent.jpg";

const firstSection = document.querySelector('.cta-text');
const bigText = firstSection.querySelector('h1');
const button = firstSection.querySelector('button');
bigText.innerHTML = "DOM <br> Is <br> Awesome";
button.textContent = "Get Started";
button.style.backgroundColor = "green";

const secondSectionH4 = document.querySelectorAll('.text-content h4 ');
const secondSectionP = document.querySelectorAll('.text-content p');
secondSectionH4[0].textContent = "Features";
secondSectionP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

secondSectionH4[1].textContent = "About";
secondSectionP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis";

secondSectionH4[2].textContent = "Services";
secondSectionP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

secondSectionH4[3].textContent = "Product";
secondSectionP[3].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

secondSectionH4[4].textContent = "vison";
secondSectionP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

secondSectionH4.forEach( link => link.style.color = "green");

const bottomSection = document.querySelector('.contact h4');
const bottomSectionP = document.querySelectorAll('.contact p');
bottomSection.textContent = "CONTACT";
bottomSectionP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
bottomSectionP[1].textContent = "1 (888) 888-8888";
bottomSectionP[2].textContent = "sales@greatidea.io";

const footerEnd = document.querySelector('footer p');
footerEnd.textContent = "Copyright Great Idea! 2018";

