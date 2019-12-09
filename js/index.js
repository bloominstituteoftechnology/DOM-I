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

//navigation
let navigation = document.querySelectorAll('nav a')
navigation.forEach((item, index) => {
    item.text = siteContent["nav"][`nav-item-${index + 1}`];
    item.style.color = 'green';
});

let ctaText = document.querySelector('.cta-text h1')
ctaText.innerText = siteContent.cta.h1

let ctaButton = document.querySelector('.cta-text button')
ctaButton.innerText = siteContent.cta.button



//images
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


let middleImg = document.getElementById("middle-img")
middleImg.src = siteContent["img-src"]

let mainHeadersH4 = document.querySelectorAll('.text-content h4') 
mainHeadersH4[0].innerText = siteContent['main-content']['features-h4']
mainHeadersH4[1].innerText = siteContent['main-content']['about-h4']
mainHeadersH4[2].innerText = siteContent['main-content']['services-h4']
mainHeadersH4[3].innerText = siteContent['main-content']['product-h4']
mainHeadersH4[4].innerText = siteContent['main-content']['vision-h4']

let mainContentP = document.querySelectorAll('.main-content p')
mainContentP[0].innerHTML = siteContent['main-content']['features-content']
mainContentP[1].innerHTML = siteContent['main-content']['features-content']
mainContentP[2].innerHTML = siteContent['main-content']['features-content']
mainContentP[3].innerHTML = siteContent['main-content']['features-content']
mainContentP[4].innerHTML = siteContent['main-content']['features-content']

let mainContentImg = document.getElementById('middle-img');
mainContentImg.src = siteContent['main-content']['middle-img-src']



//contact info
let contactInfo = document.querySelector(".contact h4")
contactInfo.innerHTML = siteContent.contact["contact-h4"]

let contactP = document.querySelectorAll('.contact p')
contactP[0].innerHTML = siteContent.contact['address']
contactP[1].innerHTML = siteContent.contact['phone']
contactP[2].innerHTML = siteContent.contact['email']

let footerP = document.querySelector('footer p')
footerP[0].innerText = siteContent.footer['footer-p']


//append and prepend
//nav[0].appendChild;
//nav[0].prepend;