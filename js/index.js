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





const services = document.getElementsByTagName('a')[0];
services.textContent= "Services"

const product= document.getElementsByTagName('a')[1]
product.textContent="Product"

const vision=document.getElementsByTagName('a')[2]
vision.textContent="Vision"

const features = document.getElementsByTagName('a')[3]
features.textContent="Features"

const about= document.getElementsByTagName('a')[4]
about.textContent="About"

const contact= document.getElementsByTagName('a')[5]
contact.textContent="Contact"

// Add two elements
const newBeginingItem = document.querySelector('nav')
const firstItem = document.createElement('a');
firstItem.textContent= "Home"

newBeginingItem.prepend(firstItem);

const newNavItem = document.querySelector("nav")

const item = document.createElement('a');
item.textContent= "Blog";

newNavItem.appendChild(item);

// Change Color

const newColor = document.querySelectorAll('a')
newColor[0].style.color = 'green'

newColor[1].style.color = 'green'

newColor[2].style.color = 'green'

newColor[3].style.color = 'green'

newColor[4].style.color = 'green'

newColor[5].style.color = 'green'

newColor[6].style.color = 'green'

newColor[7].style.color = 'green'


// CTA section

const brTag = document.createElement("br")

const domAwsome = document.querySelector('.cta-text h1');
domAwsome.innerHTML= `Dom <br> Is  <br> Awesome!`
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent= "Get Started"

const ctaImg= document.getElementById("cta-img");

ctaImg.src=('img/header-img.png')


// main-content section

// Features [0]
const ourFeatures = document.getElementsByTagName('h4')[0];
ourFeatures.textContent= "Features"

const aboutFeatures =document.getElementsByTagName('p')[0];
aboutFeatures.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


//About [1]

const aboutUs = document.getElementsByTagName('h4')[1];
aboutUs.textContent= "About"

const learnAbout = document.getElementsByTagName('p')[1];
learnAbout.textContent= "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Middle Img

const middleImg= document.getElementById('middle-img')
middleImg.src=('img/mid-page-accent.jpg')

// Bottom Content

//Services [2]

const servicesProvided = document.getElementsByTagName ('h4')[2]
servicesProvided.textContent="Services"

const learnServices = document.getElementsByTagName('p')[2];
learnServices.textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

//Product [3]

const ourProducts = document.getElementsByTagName ('h4')[3]
ourProducts.textContent="Products"

const learnProducts = document.getElementsByTagName('p')[3];
learnProducts.textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//Vision [4]

const ourVision = document.getElementsByTagName ('h4')[4]
ourVision.textContent="Vision"

const learnVision = document.getElementsByTagName('p')[4];
learnVision.textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

// Contact Us

const contactInfo = document.querySelector('.contact h4')
contactInfo.textContent="Contact"

const contactAdress =document.querySelectorAll('.contact p')[0]
contactAdress.innerHTML=`123 Way 456 Street <br>
Somewhere, USA`

const phoneNumber = document.querySelectorAll('.contact p')[1]
phoneNumber.textContent="1 (888) 888-8888"

const emailAdress = document.querySelectorAll('.contact p')[2]
emailAdress.textContent = "sales@greatidea.io"


//Footer

const copyRight= document.querySelector('footer p')
copyRight.textContent= "Copyright Great Idea! 2018"