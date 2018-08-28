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

let nav1 = document.querySelectorAll('div header nav a')[0];
nav1.innerHTML = 'Services';
nav1.style.color = 'green';

let nav2 = document.querySelectorAll('div header nav a')[1];
nav2.innerHTML = 'Product';
nav2.style.color = 'green';

let nav3 = document.querySelectorAll('div header nav a')[2];
nav3.innerHTML = 'Vision';
nav3.style.color = 'green';

let nav4 = document.querySelectorAll('div header nav a')[3];
nav4.innerHTML = 'Features';
nav4.style.color = 'green';

let nav5 = document.querySelectorAll('div header nav a')[4];
nav5.innerHTML = 'About';
nav5.style.color = 'green';

let nav6 = document.querySelectorAll('div header nav a')[5];
nav6.innerHTML = 'Contact';
nav6.style.color = 'green';

let cta = document.querySelector('.cta');

let ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.innerHTML = 'DOM<br>Is<br>Awesome';

let button = document.querySelector('.cta .cta-text button');
button.innerHTML = 'Get Started';

let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', 'img/header-img.png');

let features = document.querySelectorAll('.main-content .top-content h4')[0];
features.innerHTML = 'Features';

let featuresText = document.querySelectorAll('.main-content .top-content p')[0];
featuresText.innerHTML = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let about = document.querySelectorAll('.main-content .top-content h4')[1];
about.innerHTML = 'About';

let aboutText = document.querySelectorAll('.main-content .top-content p')[1];
aboutText.innerHTML = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

let services = document.querySelectorAll('.main-content .bottom-content h4')[0];
services.innerHTML = 'Services';

let servicesText = document.querySelectorAll('.main-content .bottom-content p')[0];
servicesText.innerHTML = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let product = document.querySelectorAll('.main-content .bottom-content h4')[1];
product.innerHTML = 'Product';

let productText = document.querySelectorAll('.main-content .bottom-content p')[1];
productText.innerHTML = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let vision = document.querySelectorAll('.main-content .bottom-content h4')[2];
vision.innerHTML = 'Vision';

let visionText = document.querySelectorAll('.main-content .bottom-content p')[2];
visionText.innerHTML = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let contact = document.querySelector('.contact h4');
contact.innerHTML = 'Contact';

let address = document.querySelectorAll('.contact p')[0];
address.innerHTML = '123 Way 456 Street<br>Somewhere, USA'

let phone = document.querySelectorAll('.contact p')[1];
phone.innerHTML = '1 (888) 888-8888';

let email = document.querySelectorAll('.contact p')[2];
email.innerHTML = 'sales@greatidea.io';

let footer = document.querySelector('footer p');
footer.innerHTML = 'Copyright Great Idea! 2018';