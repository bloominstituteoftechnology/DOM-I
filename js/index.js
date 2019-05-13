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

///Match Index w/ Original File

const navbar = document.querySelectorAll('nav a')

navbar[0].textContent = siteContent['nav']['nav-item-1'];
navbar[1].textContent = siteContent['nav']['nav-item-2'];
navbar[2].textContent = siteContent['nav']['nav-item-3'];
navbar[3].textContent = siteContent['nav']['nav-item-4'];
navbar[4].textContent = siteContent['nav']['nav-item-5'];
navbar[5].textContent = siteContent['nav']['nav-item-6'];


const main_title = document.querySelector('h1');

main_title.textContent = siteContent['cta']['h1'];

const codePic = document.querySelector('#cta-img');

codePic.setAttribute('src', siteContent['cta']['img-src']);

const top_button = document.querySelector('button');

top_button.textContent = siteContent['cta']['button'];

const subTitles = document.querySelectorAll('h4');

subTitles[0].textContent = siteContent['main-content']['features-h4'];
subTitles[1].textContent = siteContent['main-content']['about-h4'];
subTitles[2].textContent = siteContent['main-content']['services-h4'];
subTitles[3].textContent = siteContent['main-content']['product-h4']
subTitles[4].textContent = siteContent['main-content']['vision-h4'];


const paragraphs = document.querySelectorAll('.main-content p');

paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vis']

const midImage = document.querySelector('#middle-img');

console.log(midImage)

midImage.setAttribute('src', 'img/mid-page-accent.jpg');

const contactTitle = document.querySelector('.contact h4');

contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

const footerP = document.querySelector('footer p');

footerP.textContent = siteContent['footer']['copyright'];

//Change Color + Add New Elements

const navBar = document.querySelector('nav');

const newElement = document.createElement('a');

newElement.textContent = 'Community';

navBar.appendChild(newElement)

const newElement2 = document.createElement('a');

newElement2.textContent = 'Social Media';

navBar.prepend(newElement2);

const greenNav = document.querySelectorAll('nav a');

// for(i = 0; i < greenNav.length; i++) {
//   greenNav[i].style.color='green';
// }

greenNav.forEach((element) => element.style.color = 'green')

