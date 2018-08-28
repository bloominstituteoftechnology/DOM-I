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

// Nav
let nav = document.querySelectorAll('a');
for( let i = 0; i < nav.length; i++ ) {
  nav[i].setAttribute('href', siteContent["nav"][`nav-item-${i+1}`] + '.html');
  nav[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
}
// CTA
document.querySelector('.cta .cta-text h1').innerText = siteContent["cta"]["h1"];
document.querySelector('.cta .cta-text button').innerText = siteContent["cta"]["button"];
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute( 'src', siteContent["cta"]["img-src"] );

// main-content": "middle-img-src"

let textContentH4 = document.querySelectorAll('.text-content h4');
let textContentP = document.querySelectorAll('.text-content p');

textContentH4[0].innerText  = siteContent['main-content']['features-h4'];
textContentP[0].innerText   = siteContent['main-content']['features-content'];

textContentH4[1].innerText  = siteContent['main-content']['about-h4'];
textContentP[1].innerText   = siteContent['main-content']['about-content'];

textContentH4[2].innerText  = siteContent['main-content']['services-h4'];
textContentP[2].innerText   = siteContent['main-content']['services-content'];

textContentH4[3].innerText  = siteContent['main-content']['product-h4'];
textContentP[3].innerText   = siteContent['main-content']['product-content'];

textContentH4[4].innerText  = siteContent['main-content']['vision-h4'];
textContentP[4].innerText   = siteContent['main-content']['vision-content'];

let textContentImg = document.getElementById('middle-img');
textContentImg.setAttribute( 'src', siteContent["main-content"]["middle-img-src"] );
