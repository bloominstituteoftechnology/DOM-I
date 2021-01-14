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

const newNavLinks = document.querySelectorAll('nav a');
//newNavLinks[0].textContent = siteContent['nav']['nav-item-1'];
//newNavLinks[1].textContent = siteContent['nav']['nav-item-2'];
//newNavLinks[2].textContent = siteContent['nav']['nav-item-3'];
//newNavLinks[3].textContent = siteContent['nav']['nav-item-4'];
//newNavLinks[4].textContent = siteContent['nav']['nav-item-5'];
//newNavLinks[5].textContent = siteContent['nav']['nav-item-6'];

const newLink = document.createElement('a');
newLink.textContent = 'Jobs';
newLink.classList.add('green-text');
const newLink2 = document.createElement('a');
newLink2.textContent = 'Help';
newLink2.classList.add('green-text');
document.querySelector('nav').appendChild(newLink);
document.querySelector('nav').appendChild(newLink2);

newNavLinks.forEach((item,i)=>{
  item.textContent=siteContent['nav']['nav-item-'+(i+1)]
  item.classList.add('green-text');
});

const newH1 = document.querySelector('h1');
newH1.textContent = siteContent['cta']['h1'];

const newButton = document.querySelector('button');
newButton.textContent = siteContent['cta']['button'];

const newCtaImg = document.querySelector('#cta-img');
newCtaImg.src = siteContent['cta']['img-src'];

const newH4s = document.querySelectorAll('.text-content h4');
newH4s[0].textContent = siteContent['main-content']['features-h4'];
newH4s[1].textContent = siteContent['main-content']['about-h4'];
newH4s[2].textContent = siteContent['main-content']['services-h4'];
newH4s[3].textContent = siteContent['main-content']['product-h4'];
newH4s[4].textContent = siteContent['main-content']['vision-h4'];

const newPs = document.querySelectorAll('.text-content p') ;
newPs[0].textContent = siteContent['main-content']['features-content'];
newPs[1].textContent = siteContent['main-content']['about-content'];
newPs[2].textContent = siteContent['main-content']['services-content'];
newPs[3].textContent = siteContent['main-content']['product-content'];
newPs[4].textContent = siteContent['main-content']['vision-content'];

const newMidImg = document.querySelector('#middle-img');
newMidImg.src = siteContent['main-content']['middle-img-src'];

const newContactH4 = document.querySelector('.contact h4');
newContactH4.textContent = siteContent['contact']['contact-h4'];

const newContactPs = document.querySelectorAll('.contact p');
newContactPs[0].textContent = siteContent['contact']['address'];
newContactPs[1].textContent = siteContent['contact']['phone'];
newContactPs[2].textContent = siteContent['contact']['email'];

const newFooter = document.querySelector('footer p');
newFooter.textContent = siteContent['footer']['copyright'];