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

let navigation = document.querySelectorAll('nav a');
for(let i = 0; i < navigation.length; i++){
  navigation[i].innerHTML = siteContent['nav']['nav-item-' + (i + 1)];
};

for(let i = 0; i < navigation.length; i++){
  navigation[i].style.color = 'green';
};

let newNav1 = document.createElement('a');
newNav1.innerHTML = 'Our Secrets';
let newNav2 = document.createElement('a');
newNav2.innerHTML = 'Our Fondest Memories'

let updatedNavigation = document.querySelector('nav');
updatedNavigation.prepend(newNav1);
updatedNavigation.appendChild(newNav2);


let h1 = document.querySelector('h1');
h1.innerHTML = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.innerHTML = siteContent['cta']['button'];

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let topContentHeader = document.querySelectorAll('.main-content .top-content h4');
topContentHeader[0].innerHTML = siteContent['main-content']['features-h4']; 
topContentHeader[1].innerHTML = siteContent['main-content']['about-h4']; 


let topContentP = document.querySelectorAll('.main-content .top-content p');
topContentP[0].innerHTML = siteContent['main-content']['features-content'];
topContentP[1].innerHTML = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContentHeader = document.querySelectorAll('.main-content .bottom-content h4');
bottomContentHeader[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentHeader[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentHeader[2].innerHTML = siteContent['main-content']['vision-h4'];

let bottomContentP = document.querySelectorAll('.main-content .bottom-content p');
bottomContentP[0].innerHTML = siteContent['main-content']['services-content'];
bottomContentP[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentP[2].innerHTML = siteContent['main-content']['vision-content'];

let mainContentHeaders = document.querySelectorAll('.main-content h4');
for(let i = 0; i < mainContentHeaders.length; i++){
  mainContentHeaders[i].style.fontSize = '22px';
}

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'];
contactP[1].innerHTML = siteContent['contact']['phone'];
contactP[2].innerHTML = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright'];