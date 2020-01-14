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
const countKey = Object.keys(siteContent.nav).length;
console.log(countKey)


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const headerNav = document.querySelectorAll('a');
headerNav[0].textContent = siteContent.nav['nav-item-1']
headerNav[1].textContent = siteContent.nav['nav-item-2']
headerNav[2].textContent = siteContent.nav['nav-item-3']
headerNav[3].textContent = siteContent.nav['nav-item-4']
headerNav[4].textContent = siteContent.nav['nav-item-5']
headerNav[5].textContent = siteContent.nav['nav-item-6']
headerNav.forEach(element => {
  element.style.color = "green";
})

const navBox = document.querySelector('nav')

const newLink1 = document.createElement('a')

newLink1.textContent = 'Ummm'

navBox.appendChild(newLink1)

const newLink2 = document.createElement('a')

newLink2.textContent = 'Huh'

navBox.prepend(newLink2)


newLink1.style.color = "green"
newLink2.style.color = "green"




const newH1 = document.querySelector('h1')
newH1.textContent = siteContent.cta['h1'] 

const newButton = document.querySelector('button')
newButton.textContent = siteContent.cta['button']

const newCtaImg = document.querySelector('#cta-img')
newCtaImg.src = siteContent.cta['img-src']

const newH4 = document.querySelectorAll('h4')
newH4[0].textContent = siteContent['main-content']['features-h4']
newH4[1].textContent = siteContent['main-content']['about-h4']
newH4[2].textContent = siteContent['main-content']['services-h4']
newH4[3].textContent = siteContent['main-content']['product-h4']
newH4[4].textContent = siteContent['main-content']['vision-h4']
newH4[5].textContent = siteContent['contact']['contact-h4']

const newMiddleimg = document.querySelector('.middle-img')
newMiddleimg.src = siteContent['main-content']['middle-img-src']

const mainP = document.querySelectorAll('p')
mainP[0].textContent = siteContent['main-content']['features-content']
mainP[1].textContent = siteContent['main-content']["about-content"]
mainP[2].textContent = siteContent['main-content']["services-content"]
mainP[3].textContent = siteContent['main-content'][ "product-content"]
mainP[4].textContent = siteContent['main-content']["vision-content"]
mainP[5].textContent = siteContent['contact']['address']
mainP[6].textContent = siteContent['contact']['phone']
mainP[7].textContent = siteContent['contact']['email']
mainP[8].textContent = siteContent['footer']['copyright']

const button = document.querySelector('button').addEventListener('click', buttonClick);

function buttonClick(){
  newH1.textContent = 'Holy crap, my button works!'
}