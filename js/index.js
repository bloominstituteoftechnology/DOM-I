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
    "h1-click": "You Are Awesome",
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
nav1.innerHTML = siteContent['nav']['nav-item-1'];
// nav1.style.color = 'green';

let nav2 = document.querySelectorAll('div header nav a')[1];
nav2.innerHTML = siteContent['nav']['nav-item-2'];
// nav2.style.color = 'green';

let nav3 = document.querySelectorAll('div header nav a')[2];
nav3.innerHTML = siteContent['nav']['nav-item-3'];
// nav3.style.color = 'green';

let nav4 = document.querySelectorAll('div header nav a')[3];
nav4.innerHTML = siteContent['nav']['nav-item-4'];
// nav4.style.color = 'green';

let nav5 = document.querySelectorAll('div header nav a')[4];
nav5.innerHTML = siteContent['nav']['nav-item-5'];
// nav5.style.color = 'green';

let nav6 = document.querySelectorAll('div header nav a')[5];
nav6.innerHTML = siteContent['nav']['nav-item-6'];
// nav6.style.color = 'green';

let ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

let button = document.querySelector('.cta .cta-text button');
button.innerHTML = siteContent['cta']['button'];

let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

let features = document.querySelectorAll('.main-content .top-content h4')[0];
features.innerHTML = siteContent['main-content']['features-h4'];

let featuresText = document.querySelectorAll('.main-content .top-content p')[0];
featuresText.innerHTML = siteContent['main-content']['features-content'];

let about = document.querySelectorAll('.main-content .top-content h4')[1];
about.innerHTML = siteContent['main-content']['about-h4'];

let aboutText = document.querySelectorAll('.main-content .top-content p')[1];
aboutText.innerHTML = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let services = document.querySelectorAll('.main-content .bottom-content h4')[0];
services.innerHTML = siteContent['main-content']['services-h4'];

let servicesText = document.querySelectorAll('.main-content .bottom-content p')[0];
servicesText.innerHTML = siteContent['main-content']['services-content'];

let product = document.querySelectorAll('.main-content .bottom-content h4')[1];
product.innerHTML = siteContent['main-content']['product-h4'];

let productText = document.querySelectorAll('.main-content .bottom-content p')[1];
productText.innerHTML = siteContent['main-content']['product-content'];

let vision = document.querySelectorAll('.main-content .bottom-content h4')[2];
vision.innerHTML = siteContent['main-content']['vision-h4'];

let visionText = document.querySelectorAll('.main-content .bottom-content p')[2];
visionText.innerHTML = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact h4');
contact.innerHTML = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('.contact p')[0];
address.innerHTML = siteContent['contact']['address'].replace('Street ','Street<br>');

let phone = document.querySelectorAll('.contact p')[1];
phone.innerHTML = siteContent['contact']['phone'];

let email = document.querySelectorAll('.contact p')[2];
email.innerHTML = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];

//turning nav links green

let navLinks = document.querySelectorAll('div header nav a');
let turnGreen = function(item) {
  item.style.color = 'green';
}
navLinks.forEach(turnGreen);

//appending and prepending children

let research = document.createElement('a');
research.setAttribute('href', '#');
research.style.color = 'green';
research.innerHTML = 'Research';
document.querySelector('nav').appendChild(research);

let visit = document.createElement('a');
visit.setAttribute('href', '#');
visit.style.color = 'green';
visit.innerHTML = 'Visit';
document.querySelector('nav').prepend(visit);

button.addEventListener("click", function(){
    ctaH1.innerHTML = siteContent['cta']['h1-click'].replace(/ /g, '<br>');
})