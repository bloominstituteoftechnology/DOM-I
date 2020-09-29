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


//  Top Nav Bar
let navbar = document.querySelectorAll('nav a');
navbar[0].textContent = siteContent['nav']['nav-item-1'];
navbar[1].textContent = siteContent['nav']['nav-item-2'];
navbar[2].textContent = siteContent['nav']['nav-item-3'];
navbar[3].textContent = siteContent['nav']['nav-item-4'];
navbar[4].textContent = siteContent['nav']['nav-item-5'];
navbar[5].textContent = siteContent['nav']['nav-item-6'];


//DOM IS GREAT H1
let dig = document.querySelector('h1')
dig.textContent= ('DOM Is Awesome')


// Get Started Text In Button
let btn = document.querySelector('button')
btn.textContent= ('Get Started')


// HeadImg
let headimg = document.getElementById('cta-img')
headimg.setAttribute('src', siteContent["cta"]["img-src"])


// Feature  H4
let featureh4 = document.querySelectorAll('.top-content .text-content h4')
featureh4[0].textContent = (siteContent['main-content']['features-h4'])


//  Feature p
const featurep = document.querySelectorAll('.top-content .text-content p')
featurep[0].textContent = (siteContent['main-content']['features-content'])


// About H4
const about = document.querySelectorAll('.top-content .text-content h4')
about[1].textContent = (siteContent['main-content']['about-h4'])


// About p
let aboutp = document.querySelectorAll('.top-content .text-content p')
aboutp[1].textContent = (siteContent['main-content']['about-content'])


// Middle Image
let midimg = document.getElementById('middle-img')
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Services H4
let services = document.querySelectorAll('.bottom-content .text-content h4')
services[0].textContent = (siteContent['main-content']['services-h4'])


// Services p
let servicesp = document.querySelectorAll('.bottom-content .text-content p')
servicesp[0].textContent = (siteContent['main-content']['services-content'])


// Product H4
let product = document.querySelectorAll('.bottom-content .text-content h4')
product[1].textContent = (siteContent['main-content']['product-h4'])


// Product p
let productp = document.querySelectorAll('.bottom-content .text-content p')
productp[1].textContent = (siteContent['main-content']['product-content'])


// Vision H4
let vision = document.querySelectorAll('.bottom-content .text-content h4')
vision[2].textContent = (siteContent['main-content']['vision-h4'])


// Vision p
let visionp = document.querySelectorAll('.bottom-content .text-content p')
visionp[2].textContent = (siteContent['main-content']['vision-content'])


// Contact H4
let contact = document.querySelector('.contact h4')
contact.textContent = (siteContent['contact']['contact-h4'])


// Contact p's
let contactp = document.querySelectorAll('.contact p')

// address p
contactp[0].textContent = (siteContent['contact']['address'])

// phone p
contactp[1].textContent = (siteContent['contact']['phone'])

// email p
contactp[2].textContent = (siteContent['contact']['email'])


// Footer p
let footer = document.querySelector('footer')
footer.textContent= ('Copyright Great Idea! 2018')
