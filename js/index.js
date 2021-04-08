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

// adding images
document.querySelector('#logo-img').src = siteContent.nav["img-src"];
document.querySelector('#cta-img').src = siteContent.cta["img-src"];
document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];
// updating nav
let nav_keys = Object.keys(siteContent.nav);
document.querySelectorAll('nav a').forEach((value,number)=>value.textContent = siteContent.nav[nav_keys[number]]);
// h1
document.querySelector('h1').textContent = siteContent.cta['h1'];
// cta button
document.querySelector('.cta-text button').textContent = siteContent.cta['button'];
// main content
// --h4
let h4_text = Object.keys(siteContent["main-content"]).filter((value)=>value.includes('h4'));
document.querySelectorAll('.text-content h4').forEach((value,i)=>value.textContent = siteContent["main-content"][h4_text[i]]);
// --p
let p_text = Object.keys(siteContent['main-content']).filter((value)=>value.includes('content'));
document.querySelectorAll('.text-content p').forEach((value,i)=>value.textContent = siteContent["main-content"][p_text[i]]);
// --img
// let imgs = Object.keys(siteContent["main-content"]).filter((value)=>value.includes('img'));
// document.querySelectorAll('.main-content img').forEach((value,i)=>value.src = siteContent['main-content'][imgs[i]]);

// contact
let contact_text = Object.keys(siteContent['contact']);
document.querySelectorAll('.contact *').forEach((value,i)=>value.textContent = siteContent['contact'][contact_text[i]]);

// footer
document.querySelector('footer p').textContent = siteContent['footer'].copyright;

// Adding new content
document.querySelectorAll('header nav a').forEach((value)=>value.style.color = 'green');
let new_element = document.createElement('a');
new_element.textContent = 'Last Link';
document.querySelector('header nav').appendChild(new_element);
new_element = document.createElement('a');
new_element.textContent = 'First Link';
document.querySelector('header nav').prepend(new_element);


