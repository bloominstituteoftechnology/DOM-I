const siteContent = {
  "nav": {
    "nav-item-1": "Services",  //header nav a
    "nav-item-2": "Product",   //header nav a
    "nav-item-3": "Vision",    //header nav a
    "nav-item-4": "Features",  //header nav a
    "nav-item-5": "About",     //header nav a
    "nav-item-6": "Contact",   //header nav a
    "img-src": "img/logo.png"  //ID = logo-img
  },
  "cta": {
    "h1": "DOM Is Awesome",//section class cts; div class cta-text h1
    "button": "Get Started",//section class cts; div class cta-text buttton
    "img-src": "img/header-img.png"//section class cts;
  },
  //---------------------main-content
  "main-content": {
    "features-h4":"Features",  //section class main-content; div class top-content
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
  
  //-----------------features-h4
  const featText = document.querySelector('div.text-content > h4');
  
  featTile.textcontent = sitecontent["main-content"]["features"]

  const featContent = document.queryselector('div.text-content > p');

  featContent.textcontent = sitecontent["main-content"["feature-content"]
  
  //---------------about -h4

  const aboutTitle = document.queryselector('div.text-content:nth-child(2) > h4');

  aboutTitle.text-content = sitecontent["main-content"]["about-content"];
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

//Navigation links
const navlinks = document.queryselectorAll('nav a');
navlinks. foreach((link, idx) => {
  link.textcontent = sitecontent.nav['nav-item-${idx + 1}'];
  link.style.color = 'green';
})

const home = document.createElement('a')
home.textcontent = 'home'
home.href = '#';
home.style.color = 'green';

const gallery = document.createElement('a')
gallery.textcontent = 'gallery'
gallery.href = '#'
gallery.style.color = 'green'

const nav = document.createElement('a')
nav.prepend(home);
nav.appendChild(gallery)


  //---------------------CTA section
  const ctaHeading = document.queryselector('cta-text h1');
  ctaHeading.innerhtml = sitecontent.cta.h1.split('').join('<br>');

  const ctabutton = document.queryselector('div.cta-text button');
  ctaButton.textcontent = sitecontent.cta.button;

  const ctaImage = document.getElementById('cta-img');
  ctaimg.src = siteContent.cta["img-src"];

  