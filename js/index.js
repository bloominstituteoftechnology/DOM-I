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

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent['cta']["img-src"])

let midPageImg = document.getElementById('middle-img');
midPageImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Title Content

const titleText = document.querySelector('h1');
titleText.textContent = (siteContent['cta']['h1'])

const buttonText = document.querySelector('button');
buttonText.textContent = (siteContent['cta']['button'])


const navMenu = document.querySelectorAll('nav a');
navMenu[0].textContent = (siteContent['nav']['nav-item-1'])
navMenu[1].textContent = (siteContent['nav']['nav-item-2'])
navMenu[2].textContent = (siteContent['nav']['nav-item-3'])
navMenu[3].textContent = (siteContent['nav']['nav-item-4'])
navMenu[4].textContent = (siteContent['nav']['nav-item-5'])
navMenu[5].textContent = (siteContent['nav']['nav-item-6'])

const navMenuColor = document.querySelectorAll('nav a');
navMenuColor.forEach (link => {
  link.style.color = 'green'
})

const navElement = document.querySelector('nav');
const newNavElement = document.createElement('a');
newNavElement.textContent = "Welcome"
newNavElement.style.color = "green"
navElement.appendChild(newNavElement);

const newNavElement2 = document.createElement('a');
newNavElement2.textContent = "The Team"
newNavElement2.style.color = 'green'
navElement.prepend(newNavElement2);

//Middle Content

const h4Headers =  document.querySelectorAll('.main-content h4');
h4Headers[0].textContent = (siteContent['main-content']['features-h4'])
h4Headers[1].textContent = (siteContent['main-content']['about-h4'])
h4Headers[2].textContent = (siteContent['main-content']['services-h4'])
h4Headers[3].textContent = (siteContent['main-content']['product-h4'])
h4Headers[4].textContent = (siteContent['main-content']['vision-h4'])


const mainContentText = document.querySelectorAll('.main-content .text-content p');
mainContentText[0].textContent= (siteContent['main-content']['features-content'])
mainContentText[1].textContent= (siteContent['main-content']['about-content'])
mainContentText[2].textContent= (siteContent['main-content']['services-content'])
mainContentText[3].textContent= (siteContent['main-content']['product-content'])
mainContentText[4].textContent= (siteContent['main-content']['vision-content'])

//Contact 
const contactInfo = document.querySelector('.contact h4');
contactInfo.textContent = (siteContent['contact']['contact-h4'])

const contactInfoText = document.querySelectorAll('.contact p');
contactInfoText[0].textContent= (siteContent['contact']['address'])
contactInfoText[1].textContent= (siteContent['contact']['phone'])
contactInfoText[2].textContent= (siteContent['contact']['email'])

const copyrightFooter = document.querySelector('footer');
copyrightFooter.textContent = (siteContent['footer']['copyright'])
