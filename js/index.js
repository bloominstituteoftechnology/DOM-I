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
    "h1": "DOM<br> Is<br> Awesome",
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
    "address" : "123 Way 456 Street <br>Somewhere, USA",
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

const selectEntireNav = document.querySelectorAll('a');
for(let i = 0; i<selectEntireNav.length; i++){
  selectEntireNav[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  selectEntireNav[i].style.color = "green";
}


const selectH1 = document.querySelector('h1');
selectH1.innerHTML = siteContent["cta"]["h1"];

const selectButton = document.querySelector('button');
selectButton.textContent = 'Get Started';

const ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute('src', siteContent["cta"]["img-src"]);

const selectEntireTextContent = document.querySelectorAll('h4');
selectEntireTextContent[0].textContent = siteContent['main-content']['features-h4'];
selectEntireTextContent[1].textContent = siteContent['main-content']['about-h4'];
selectEntireTextContent[2].textContent = siteContent['main-content']['services-h4'];
selectEntireTextContent[3].textContent = siteContent['main-content']['product-h4'];
selectEntireTextContent[4].textContent = siteContent['main-content']['vision-h4'];
selectEntireTextContent[5].textContent = siteContent['contact']['contact-h4'];

const selectEntireContent = document.querySelectorAll('p');
selectEntireContent[0].textContent = siteContent['main-content']['features-content'];
selectEntireContent[1].textContent = siteContent['main-content']['about-content'];
selectEntireContent[2].textContent = siteContent['main-content']['services-content'];
selectEntireContent[3].textContent = siteContent['main-content']['product-content'];
selectEntireContent[4].textContent = siteContent['main-content']['vision-content'];
selectEntireContent[5].innerHTML = siteContent['contact']['address'];
selectEntireContent[6].textContent = siteContent['contact']['phone'];
selectEntireContent[7].textContent = siteContent['contact']['email'];
selectEntireContent[8].textContent = siteContent['footer']['copyright'];

const selectMiddleIMG = document.querySelector('.middle-img');
selectMiddleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);



