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


const links = document.querySelectorAll('nav a'); //select all navs a tags and create node list
for(let i=0; i<links.length; i++){ //loop all navs in node list 
  let index = "nav-item-" + 1; 
  links [i].textContent = siteContent['nav'][index] //connect nav links to siteContent 
}

let ctaText = document.querySelector('.cta-text h1')
ctaText.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button'];

let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let topContentH4 = document.querySelectorAll('.text-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];
topContentH4[2].textContent = siteContent['main-content']['services-h4'];
topContentH4[3].textContent = siteContent['main-content']['product-h4'];
topContentH4[4].textContent = siteContent['main-content']['vision-h4'];

let topContentP = document.querySelectorAll('.text-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];
topContentP[2].textContent = siteContent['main-content']['services-content'];
topContentP[3].textContent = siteContent['main-content']['product-content'];
topContentP[4].textContent = siteContent['main-content']['vision-content'];


let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p')
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

let footerP = document.querySelector('footer p')
footerP.textContent = siteContent['footer']['copyright']