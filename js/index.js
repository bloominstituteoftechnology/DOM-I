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

//Images

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src'])


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


//H1 Tag
const h1s = document.querySelector('h1');

h1s.textContent = siteContent.cta['h1'];

//Button

const newCtaB = document.querySelector('button');
newCtaB.textContent = siteContent.cta['button']

//h4 tags 

const h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent['main-content']['features-h4']
h4s[1].textContent = siteContent['main-content']['about-h4']
h4s[2].textContent = siteContent['main-content']["services-h4"]
h4s[3].textContent = siteContent['main-content']['product-h4']
h4s[4].textContent = siteContent['main-content']['vision-h4']
h4s[5].textContent = siteContent['contact']['contact-h4']

//p tags 

const paragraphs = document.querySelectorAll('p');

paragraphs[0].textContent = siteContent['main-content']['features-content']
paragraphs[1].textContent = siteContent['main-content']['about-content']
paragraphs[2].textContent = siteContent['main-content']['services-content']
paragraphs[3].textContent = siteContent['main-content']['product-content']
paragraphs[4].textContent = siteContent['main-content']['vision-content']
paragraphs[5].textContent = siteContent['contact']['address']
paragraphs[6].textContent = siteContent['contact']['phone']
paragraphs[7].textContent = siteContent['contact']['email']
paragraphs[8].textContent = siteContent['footer']['copyright']


//Nav

const anchors = document.querySelectorAll('a');



let as = 0;

anchors.forEach((el) => {
  
  as++
  el.textContent = siteContent.nav[`nav-item-${as}`]; 
}
);

//All  Nav Text  Colors Changed

anchors.forEach((el) =>{el.style.color = "green";})


// New Nav Items

const newNav1 = document.createElement('a');
newNav1.textContent = "Team"
newNav1.style.color = 'green'

const newNav2 = document.createElement('a');
newNav2.textContent = 'FAQ'
newNav2.style.color = 'green'


const nav = document.querySelector('nav');
nav.appendChild(newNav1);
nav.appendChild(newNav2);












