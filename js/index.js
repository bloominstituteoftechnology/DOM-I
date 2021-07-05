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

document.querySelector('title').innerHTML = 'Great Idea!';

document.querySelector('nav').prepend('hello', document.createElement('a'));

for(let i = 0; i < 6; i++){
  document.querySelectorAll('a')[i].innerHTML = siteContent["nav"]['nav-item-' + (i + 1)];
  document.querySelectorAll('a')[i].style.color = 'green';
}
document.querySelector('nav').appendChild(document.createElement('a')).innerHTML = 'hello';

document.getElementById('cta-img').src = siteContent['cta']['img-src'];
document.querySelector('h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('button').innerHTML = siteContent['cta']['button'];
document.querySelectorAll('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
document.querySelectorAll('p')[0].innerHTML = siteContent['main-content']['features-content'];
document.querySelectorAll('h4')[1].innerHTML = siteContent['main-content']['about-h4'];
document.querySelectorAll('p')[1].innerHTML = siteContent['main-content']['about-content'];
document.querySelectorAll('h4')[2].innerHTML = siteContent['main-content']['services-h4'];
document.querySelectorAll('p')[2].innerHTML = siteContent['main-content']['services-content'];
document.querySelectorAll('h4')[3].innerHTML = siteContent['main-content']['product-h4'];
document.querySelectorAll('p')[3].innerHTML = siteContent['main-content']['product-content'];
document.querySelectorAll('h4')[4].innerHTML = siteContent['main-content']['vision-h4'];
document.querySelectorAll('p')[4].innerHTML = siteContent['main-content']['vision-content'];
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];
document.querySelectorAll('h4')[5].innerHTML = siteContent['contact']['contact-h4'];
document.querySelectorAll('p')[5].innerHTML = siteContent['contact']['address'];
document.querySelectorAll('p')[6].innerHTML = siteContent['contact']['phone'];
document.querySelectorAll('p')[7].innerHTML = siteContent['contact']['email'];
document.querySelectorAll('p')[8].innerHTML = siteContent['footer']['copyright'];



