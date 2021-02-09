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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update title
document.querySelector('title').textContent  = 'Great Idea!';

// Change Nav Text to Green

// document.getElementsByTagName('a');

// Update Nav

const nav = document.querySelectorAll('nav a');

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

// Add new link to beginning of Nav

const newNav1 = document.createElement('a');
newNav1.textContent = "Home";
newNav1.style.color = 'green';
newNav1.href = '#';

document.querySelector('nav').prepend(newNav1);

// Add new link to end of Nav

const newNav2 = document.createElement('a');
newNav2.textContent = "Partners";
newNav2.style.color = 'green';
newNav2.href = '#';

document.querySelector('nav').appendChild(newNav2);

// Change Nav Links Text Color to Green
// couldn't select all for some reason, doing it individually by index:

nav[0].style.color = 'green';
nav[1].style.color = 'green';
nav[2].style.color = 'green';
nav[3].style.color = 'green';
nav[4].style.color = 'green';
nav[5].style.color = 'green';

// Update H1

const header = document.querySelector('.cta-text h1');
header.textContent = siteContent['cta']['h1'];

// Update button

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

// Update Banner

const banner = document.getElementById('cta-img');
banner.setAttribute('src', siteContent['cta']['img-src']);

// Update Main Content - features, about, services, product, vision

const mainContentTitles = document.querySelectorAll('.main-content h4');

mainContentTitles[0].textContent = siteContent['main-content']['features-h4'];
mainContentTitles[1].textContent = siteContent['main-content']['about-h4'];
mainContentTitles[2].textContent = siteContent['main-content']['services-h4'];
mainContentTitles[3].textContent = siteContent['main-content']['product-h4'];
mainContentTitles[4].textContent = siteContent['main-content']['vision-h4'];

// Update Content Paragraphs

const mainContent = document.querySelectorAll('.main-content p');

mainContent[0].textContent = siteContent['main-content']['features-content'];
mainContent[1].textContent = siteContent['main-content']['about-content'];
mainContent[2].textContent = siteContent['main-content']['services-content'];
mainContent[3].textContent = siteContent['main-content']['product-content'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

// Update Content Img

const contentBanner = document.getElementById('middle-img');
contentBanner.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Update Contact Info

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');

contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];


// Update footer (copyright)

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];
