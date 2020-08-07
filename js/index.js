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

let circleLogo = document.getElementById('cta-img');
circleLogo.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let mainText = document.querySelector('.cta-text h1');
mainText.innerHTML = siteContent['cta']['h1'];

let copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent['footer']['copyright'];

let mainButton = document.querySelector('.cta-text button');
mainButton.innerHTML = siteContent['cta']['button'];

let navBar = document.querySelectorAll('a');
navBar[0].innerHTML = siteContent['nav']['nav-item-1'];
navBar[1].innerHTML = siteContent['nav']['nav-item-2'];
navBar[2].innerHTML = siteContent['nav']['nav-item-3'];
navBar[3].innerHTML = siteContent['nav']['nav-item-4'];
navBar[4].innerHTML = siteContent['nav']['nav-item-5'];
navBar[5].innerHTML = siteContent['nav']['nav-item-6'];
navBar.forEach((element) => {
  element.style.color = 'green';
});

let extra = document.createElement('a');
extra.innerHTML = 'Extra';
extra.style.color = 'green';
document.querySelector('.container header nav').appendChild(extra);

let news = document.createElement('a');
news.innerHTML = 'News';
news.style.color = 'green';
document.querySelector('.container header nav').appendChild(news);

let contactInfoTitle = document.querySelector('.contact h4');
contactInfoTitle.innerHTML = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerHTML = siteContent['contact']['address'];
contactInfo[1].innerHTML = siteContent['contact']['phone'];
contactInfo[2].innerHTML = siteContent['contact']['email'];

let mainContentTitle = document.querySelectorAll('.text-content h4')
mainContentTitle[0].innerHTML = siteContent['main-content']['features-h4'];
mainContentTitle[1].innerHTML = siteContent['main-content']['about-h4'];
mainContentTitle[2].innerHTML = siteContent['main-content']['services-h4'];
mainContentTitle[3].innerHTML = siteContent['main-content']['product-h4'];
mainContentTitle[4].innerHTML = siteContent['main-content']['vision-h4'];

let mainContent = document.querySelectorAll('.text-content p');
mainContent[0].innerHTML = siteContent['main-content']['features-content'];
mainContent[1].innerHTML = siteContent['main-content']['about-content'];
mainContent[2].innerHTML = siteContent['main-content']['services-content'];
mainContent[3].innerHTML = siteContent['main-content']['product-content'];
mainContent[4].innerHTML = siteContent['main-content']['vision-content'];