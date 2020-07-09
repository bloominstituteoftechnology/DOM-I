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
const colorGreen = document.querySelectorAll('a');
colorGreen[0].style.color = 'green'
colorGreen[1].style.color = 'green'
colorGreen[2].style.color = 'green'
colorGreen[3].style.color = 'green'
colorGreen[4].style.color = 'green'
colorGreen[5].style.color = 'green'

  const allLinks = document.querySelectorAll('a');
  allLinks[0].textContent = siteContent['nav']['nav-item-1'];
  allLinks[1].textContent = siteContent['nav']['nav-item-2'];
  allLinks[2].textContent = siteContent['nav']['nav-item-3'];
  allLinks[3].textContent = siteContent['nav']['nav-item-4'];
  allLinks[4].textContent = siteContent['nav']['nav-item-5'];
  allLinks[5].textContent = siteContent['nav']['nav-item-6'];

const mainHeader = document.getElementById('cta-img');
mainHeader.src = 'img/header-img.png';
const centerImg = document.getElementById('middle-img');
centerImg.src = 'img/mid-page-accent.jpg';
const mainText = document.querySelector('h1');
mainText.innerHTML = 'DOM <br> Is <br> Awesome'
const centerButton = document.querySelector('button');
centerButton.textContent = siteContent['cta']['button'];

const subTitle = document.querySelectorAll('.text-content h4')
subTitle[0].textContent = siteContent['main-content']['features-h4'];
subTitle[1].textContent = siteContent['main-content']['about-h4'];
subTitle[2].textContent = siteContent['main-content']['services-h4'];
subTitle[3].textContent = siteContent['main-content']['product-h4'];
subTitle[4].textContent = siteContent['main-content']['vision-h4'];
const miniText = document.querySelectorAll('.text-content p')
// console.log(miniText)
miniText[0].textContent = siteContent['main-content']['features-content'];
miniText[1].textContent = siteContent['main-content']['about-content'];
miniText[2].textContent = siteContent['main-content']['services-content'];
miniText[3].textContent = siteContent['main-content']['product-content'];
miniText[4].textContent = siteContent['main-content']['vision-content'];

const miniTitle = document.querySelectorAll('.contact h4');
// console.log(companyInfo)
miniTitle[0].textContent = siteContent['contact']['contact-h4'];
// console.log(companyInfo)
const companyInfo = document.querySelectorAll('.contact p');
companyInfo[0].textContent = siteContent['contact']['address'];
companyInfo[1].textContent = siteContent['contact']['phone'];
companyInfo[2].textContent = siteContent['contact']['email'];

const onlyFooter = document.querySelectorAll('footer p');
onlyFooter[0].textContent = siteContent['footer']['copyright'];

const newLink = document.createElement('a');

newLink.textContent = 'Blog'
console.log(newLink)
const links = document.querySelector('nav')
console.log(links)
links.appendChild(newLink)
const newColor = document.querySelectorAll('a');
newColor[6].style.color = 'green'

const firstLink = document.createElement('a');
firstLink.textContent = 'Secret'
console.log(firstLink)
const originalLinks = document.querySelector('nav');
console.log(originalLinks)
originalLinks.prepend(firstLink)
const firstColor = document.querySelectorAll('a');
firstColor[0].style.color = 'green';