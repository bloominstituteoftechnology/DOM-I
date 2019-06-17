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
    "h1": "DOM\nIs\n Awesome",
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

const snippetImg = document.getElementById("cta-img");
snippetImg.setAttribute('src', siteContent['cta']['img-src']);

const nav = document.querySelector('nav');
const newTag1 = document.createElement('a');
const tag1Text = document.createTextNode('Resources');
const newTag2 = document.createElement('a');
const tag2Text = document.createTextNode('Extras');

nav.appendChild(newTag1);
nav.appendChild(newTag2);
newTag1.appendChild(tag1Text);
newTag2.appendChild(tag2Text);


let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1']; 
navLinks[1].textContent = siteContent['nav']['nav-item-2']; 
navLinks[2].textContent = siteContent['nav']['nav-item-3']; 
navLinks[3].textContent = siteContent['nav']['nav-item-4']; 
navLinks[4].textContent = siteContent['nav']['nav-item-5']; 
navLinks[5].textContent = siteContent['nav']['nav-item-6'];  

navLinks.forEach(function(colorValue){
  colorValue.style.color = 'green'
}
)


document.querySelector('.cta-text').style.whiteSpace = 'pre';
const splashText = document.querySelector('h1');
splashText.textContent = siteContent.cta.h1;

const startBtn = document.querySelector('button');
startBtn.textContent = siteContent.cta.button;

const contentTitles = document.querySelectorAll('.text-content h4');

contentTitles[0].textContent = siteContent['main-content']['features-h4'];
contentTitles[1].textContent = siteContent['main-content']['about-h4'];
contentTitles[2].textContent = siteContent['main-content']['services-h4'];
contentTitles[3].textContent = siteContent['main-content']['vision-h4'];



const contentP = document.querySelectorAll('p');
contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['vision-content'];



const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const cr = document.querySelector('footer')
cr.textContent = siteContent['footer']['copyright'];

