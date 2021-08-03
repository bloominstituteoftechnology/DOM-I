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
// Nav 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navElements = document.querySelectorAll('a')
navElements.forEach((item, idx) => item.textContent = Object.values(siteContent.nav)[idx]);
 
// const firstNav = document.querySelector('nav a')
// firstNav.text = 'Services';
// secondNav = firstNav.nextElementSibling
// secondNav.text = 'Products';
// thirdNav = secondNav.nextElementSibling
// thirdNav.text = 'Visions';
// fourthNav = thirdNav.nextElementSibling
// fourthNav.text = 'Features';
// fifthNav = fourthNav.nextElementSibling
// fifthNav.text = 'About';
// sixthNav = fifthNav.nextElementSibling
// sixthNav.text = 'Contact';

// firstNav.nextElementSibling.text = 'Products' 
// firstNav.nextElementSibling.nextElementSibling.text = 'Visions'
// firstNav.nextElementSibling.nextElementSibling.nextElementSibling.text = 'Features'
// firstNav.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.text = 'About'
// firstNav.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.text = 'Contact'

// document.querySelector('nav a').text = 'Services';
// document.querySelector('nav a:nth-of-type(2)').text = 'Products';
// document.querySelector('nav a:nth-of-type(3)').text = 'Visions';
// document.querySelector('nav a:nth-of-type(4)').text = 'Features';
// document.querySelector('nav a:nth-of-type(5)').text = 'About';
// document.querySelector('nav a:nth-of-type(6)').text = 'Contact';

//Heading
const heading = document.querySelector('.cta h1')
heading.innerHTML = 'DOM<br>Is<br>Awesome';

const buttonSmashing = document.querySelector('.cta button')
buttonSmashing.textContent = siteContent['cta']['button'];

let BigImg = document.querySelector('.cta img')
BigImg.src = siteContent['cta']['img-src'];

// Middle
document.querySelector('.top-content .text-content h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.top-content .text-content p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];


let skinnyImg = document.querySelector('.middle-img')
skinnyImg.src = siteContent['main-content']['middle-img-src'];

document.querySelector('.bottom-content .text-content h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content .text-content p').textContent = siteContent['main-content']['services-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];


// Contact
const conHeading = document.querySelector('.contact h4')
conHeading.textContent = siteContent['contact']['contact-h4']

const contactElements = document.querySelectorAll('.contact p')
contactElements.forEach((item, idx) => item.textContent = Object.values(siteContent.contact)[idx+1]);
 
// footer
const foot = document.querySelector('footer')
foot.textContent = siteContent['footer']['copyright']