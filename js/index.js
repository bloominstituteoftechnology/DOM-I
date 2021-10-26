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

//Creates links variable and ties it to the 
const links = document.querySelectorAll('a');
//Adds the text linked to each corresponding nav-item.
//Services
links[0].textContent = siteContent['nav']['nav-item-1']
//Product
links[1].textContent = siteContent['nav']['nav-item-2']
//Vision
links[2].textContent = siteContent['nav']['nav-item-3']
//Features
links[3].textContent = siteContent['nav']['nav-item-4']
//About
links[4].textContent = siteContent['nav']['nav-item-5']
//Contact
links[5].textContent = siteContent['nav']['nav-item-6']
//Turns the nav links text green.
links.forEach(i => i.style.color = 'green')

//Adds the link at the beginning.
const work = document.createElement('a');
work.textContent = 'Why?';
document.querySelector('nav').prepend(work)

//Adds the link at the end.
const tired = document.createElement('a');
tired.textContent = 'Finally';
document.querySelector('nav').appendChild(tired)


const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])
//Grabs the main header of the page. The "DOM IS AWESOME"
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1']
//Grabs the get started button.
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button']

//Gets the headers from the main-content class.
const main = document.querySelectorAll('.main-content h4')
main[0].textContent = siteContent['main-content']['features-h4']
main[1].textContent = siteContent['main-content']['about-h4']
main[2].textContent = siteContent['main-content']['services-h4']
main[3].textContent = siteContent['main-content']['product-h4']
main[4].textContent = siteContent['main-content']['vision-h4']

//Gets the paragraphs from the main-content class.
const mainText = document.querySelectorAll('.main-content p')
mainText[0].textContent = siteContent['main-content']['features-content']
mainText[1].textContent = siteContent['main-content']['about-content']
//Adds the image to the middle of the main section
const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
//Continues grabbing the paragraphs from the main-content class.
mainText[2].textContent = siteContent['main-content']['services-content']
mainText[3].textContent = siteContent['main-content']['product-content']
mainText[4].textContent = siteContent['main-content']['vision-content']

//Grabs the header from the contact class.
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4']

//Grabs the paragraph element from the contact class.
const contactText = document.querySelectorAll('.contact p')
contactText[0].textContent = siteContent['contact']['address']
contactText[1].textContent = siteContent['contact']['phone']
contactText[2].textContent = siteContent['contact']['email']

//Grabs the footer content. 
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']
