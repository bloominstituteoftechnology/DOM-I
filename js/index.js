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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector('#logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

//Task 1: Create selectors to point your data into elements 

//nav 
let aTag = document.querySelectorAll('a')

aTag[0].setAttribute('nav', 'nav-item-1')
aTag[0].innerHTML = "Services"

aTag[1].setAttribute('nav', 'nav-item-2')
aTag[1].innerHTML = "Products"

aTag[2].setAttribute('nav', 'nav-item-3')
aTag[2].innerHTML = "Vision"

aTag[3].setAttribute('nav', 'nav-item-4')
aTag[3].innerHTML = "Features"

aTag[4].setAttribute('nav', 'nav-item-5')
aTag[4].innerHTML = "About"

aTag[5].setAttribute('nav', 'nav-item-6')
aTag[5].innerHTML = "Contact"

aTag.forEach(link => link.style.color = "green")



//new appended nav item
const newTag1 = document.createElement('a')
const mainTag = document.querySelector('nav')

newTag1.href="#"
newTag1.textContent="Login"
newTag1.style.color = "green"

mainTag.append(newTag1)

//new prepended nav item 
const newTag2 = document.createElement('a') // child element
// const mainTag = document.querySelector('nav') //parent element
newTag2.href="#"
newTag2.textContent = "Logout"
newTag2.style.color = "green"

mainTag.prepend(newTag2)

//main header 





//main content 
let mainContent = document.querySelectorAll('.text-content')

mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['vision-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['contact-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['contact-content']

//middle image 
let logo3 = document.getElementById('middle-img')
logo3.setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact 

let contactInfo = document.querySelector('.contact')

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4']
contactInfo.getElementsByTagName('p')[0].textContent = siteContent['contact']['address']
contactInfo.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone']
contactInfo.getElementsByTagName('p')[2].textContent = siteContent['contact']['email']

let dafooter = document.querySelector('footer')

dafooter.getElementsByTagName('p')[0].textContent = siteContent['footer']['copyright']